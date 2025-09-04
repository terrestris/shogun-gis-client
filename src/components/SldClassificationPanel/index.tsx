import React, {
  useCallback,
  useEffect,
  useMemo,
  useState
} from 'react';

import {
  faFilter,
  faFilterCircleXmark
} from '@fortawesome/free-solid-svg-icons';
import {
  FontAwesomeIcon
} from '@fortawesome/react-fontawesome';

import {
  Button,
  Checkbox,
  notification,
  Tooltip
} from 'antd';
import {
  CheckboxChangeEvent
} from 'antd/lib/checkbox';

import {
  SLDRenderer
} from 'geostyler';
import SLDParser from 'geostyler-sld-parser';
import {
  Rule,
  ScaleDenominator,
  WriteStyleResult
} from 'geostyler-style';

import _isEqual from 'lodash/isEqual';
import _isFunction from 'lodash/isFunction';
import _isNil from 'lodash/isNil';

import OlSourceImageWMS from 'ol/source/ImageWMS';
import OlSourceTileWMS from 'ol/source/TileWMS';

import {
  useTranslation
} from 'react-i18next';

import Logger from '@terrestris/base-util/dist/Logger';

import {
  WmsLayer
} from '@terrestris/ol-util/dist/typeUtils/typeUtils';

import {
  useMap
} from '@terrestris/react-util/dist/Hooks/useMap/useMap';

import {
  getBearerTokenHeader
} from '@terrestris/shogun-util/dist/security/getBearerTokenHeader';

import useSHOGunAPIClient from '../../hooks/useSHOGunAPIClient';

import './index.less';

interface SldClassificationPanelProps {
  layer: WmsLayer;
}

export const SldClassificationPanel: React.FC<SldClassificationPanelProps> = ({
  layer
}): JSX.Element => {

  const [rules, setRules] = useState<Rule[]>([]);
  const [activeRules, setActiveRules] = useState<Rule[]>([]);
  const [layerUrl, setLayerUrl] = useState<string>();

  const {
    t
  } = useTranslation();

  const map = useMap();

  const client = useSHOGunAPIClient();

  const sldParser = useMemo(() => new SLDParser(), []);

  const additionalHeaders = useMemo(() => ({
    ...getBearerTokenHeader(client?.getKeycloak())
  }), [client]);

  const wmsParams = useMemo(() => ({
    SCALE: map?.getView().getResolution()
  }), [map]);

  const updateStyleSource = useCallback(async (filtered: boolean, sldBody?: string) => {
    const source = layer.getSource();
    layer.set('filtered', filtered);
    layer.dispatchEvent('change:visible');

    source?.updateParams({
      SLD_BODY: filtered ? sldBody : undefined
    });
  }, [layer]);

  const getSld = useCallback(async () => {
    // Make url configurable by layer property
    // 1. this allows to use a static sld file for external layers
    // 2. for internal layers we make use of the WMS GetStyles request
    const styleUrl = layer.get('styleUrl');
    const cacheKey = `sld_${styleUrl}`;

    if (!styleUrl) {
      throw new Error(`No styleUrl set for layer ${layer.getSource()?.getParams().LAYERS}`);
    }

    const cachedSld = localStorage.getItem(cacheKey);
    if (cachedSld) {
      return cachedSld;
    }

    const response = await fetch(styleUrl);

    if (!response.ok) {
      throw new Error(`Could not fetch SLD for layer ${layer.getSource()?.getParams().LAYERS}`);
    }

    const responseText = await response.text();

    if (_isNil(responseText) || responseText === '') {
      throw new Error('Could not read SLD from XML.');
    }

    localStorage.setItem(cacheKey, responseText);

    return responseText;
  }, [layer]);

  const parseSld = useCallback(async (sld: string) => {
    const style = await sldParser.readStyle(sld);

    if (style.unsupportedProperties) {
      Logger.warn('Detected unsupported properties in the SLD: ', style.unsupportedProperties);
    }

    if (style.warnings) {
      Logger.warn('Warnings while reading the SLD: ', style.warnings);
    }

    if (style.errors?.length) {
      Logger.error('Could not read SLD. Parsing error(s): ', style?.errors);

      throw new Error('Could not read SLD');
    }

    if (!style.output?.rules) {
      throw new Error('No rules found in SLD output');
    }

    return style.output.rules;
  }, [sldParser]);

  const updateRules = useCallback(async () => {
    const isFiltered: boolean = layer.get('filtered');
    const filterSld = layer.getSource()?.getParams().SLD_BODY;

    try {
      const sldXml = await getSld();
      const sldRules = await parseSld(sldXml);

      setRules(sldRules);

      if (!isFiltered) {
        setActiveRules(sldRules);
      }

      if (isFiltered && filterSld) {
        const filterSldRules = await parseSld(filterSld);
        setActiveRules(filterSldRules);
      }
    } catch (error: any) {
      notification.error({
        message: t('SldClassificationPanel.errorMessage'),
        description: `${t('SldClassificationPanel.updateRulesError')}`
      });

      Logger.debug(error);
    }
  }, [t, getSld, layer, parseSld]);

  useEffect(() => {
    const layerSource = layer.getSource();

    if (!layerSource) {
      setLayerUrl(undefined);
      return;
    }

    if (layerSource instanceof OlSourceImageWMS) {
      setLayerUrl(layerSource.getUrl() || undefined);
    } else if (layerSource instanceof OlSourceTileWMS) {
      setLayerUrl(layerSource.getUrls()?.[0] || undefined);
    } else {
      Logger.warn('Unsupported layer source type');
      setLayerUrl(undefined);
    }
  }, [layer]);

  useEffect(() => {
    updateRules();
  }, [updateRules]);

  const onCbChange = (evt: CheckboxChangeEvent, rule: Rule) => {
    const checked = evt.target.checked;

    let updatedRules: Rule[];
    if (checked) {
      updatedRules = [...activeRules, ...[rule]];
    } else {
      updatedRules = activeRules.filter(ar => !_isEqual(ar, rule));
    }

    setActiveRules(updatedRules);

    layer.set('filtered', activeRules.length !== rules.length);
  };

  const onApplyStyle = async () => {
    const layerStyleObject = {
      name: layer.getSource()?.getParams().LAYERS,
      rules: activeRules
    };
    const layerName = layer.get('name');

    try {
      const sld: WriteStyleResult<string> = await sldParser.writeStyle(layerStyleObject);

      if (sld.warnings) {
        Logger.warn('SLD warnings: ', sld.warnings);
      }

      if (sld.unsupportedProperties) {
        Logger.warn('Detected unsupported properties in the SLD: ', sld.warnings);
      }

      if (sld.errors?.length) {
        Logger.error('Error writing SLD style: ', sld.errors);

        throw new Error(`Could not apply filter style on layer ${layerName}`);
      }

      if (!sld.output) {
        throw new Error(`No SLD written for layer ${layerName}`);
      }

      await updateStyleSource(true, sld.output);
    } catch (error) {
      notification.error({
        message: t('SldClassificationPanel.error'),
        description: `${t('SldClassificationPanel.filterApplyError')} - ${error}`
      });
    }
  };

  const onRestoreStyle = async () => {
    setActiveRules(rules);

    await updateStyleSource(false);
  };

  const getScaleDenominatorText = (scaleDenominator: ScaleDenominator): string => {
    const {
      min,
      max
    } = scaleDenominator;
    const threshold = 1e7; // 10.000.000
    const maxValue: number = _isFunction(max) ? max() : (max as number);
    const minValue: number = _isFunction(min) ? min() : (min as number);
    if (minValue && !_isNil(maxValue)) {
      if (maxValue < threshold) {
        return t('SldClassificationPanel.scaleDenominatorText1', {
          min: minValue,
          max: maxValue
        });
      } else {
        return t('SldClassificationPanel.scaleDenominatorText2', {
          min: minValue
        });
      }
    } else if (minValue && !maxValue) {
      return t('SldClassificationPanel.scaleDenominatorText2', {
        min: minValue
      });
    } else if (!minValue && maxValue) {
      return t('SldClassificationPanel.scaleDenominatorText3', {
        max: maxValue
      });
    } else {
      return '';
    }
  };

  if (!map || !layerUrl || !layer.get('styleUrl')) {
    return <></>;
  }

  return (
    <div
      className="sld-classification-panel"
    >
      {
        rules.map((rule, idx) => (
          <div
            key={idx}
            className="sld-rule"
          >
            <Checkbox
              key={rule.name}
              checked={activeRules.filter((ar: Rule) => _isEqual(ar, rule)).length !== 0}
              onChange={(evt: CheckboxChangeEvent) => onCbChange(evt, rule)}
            />
            <SLDRenderer
              layer={layer.getSource()?.getParams().LAYERS}
              wmsBaseUrl={layerUrl.split('?')[0]}
              symbolizers={rule.symbolizers}
              width={30}
              height={20}
              wmsParams={wmsParams}
              additionalHeaders={layer.get('useBearerToken') ? additionalHeaders : undefined}
            />
            <span
              className="rulename"
            >
              {rule.name}
            </span>
            {
              rule.scaleDenominator && (
                <span>
                  {getScaleDenominatorText(rule.scaleDenominator)}
                </span>
              )
            }
          </div>
        ))
      }
      <div className="filter-buttons">
        <Tooltip
          title={t('SldClassificationPanel.applyButtonTooltip')}
          mouseEnterDelay={0.3}
        >
          <Button
            aria-label={t('SldClassificationPanel.applyButtonTooltip')}
            icon={<FontAwesomeIcon icon={faFilter} />}
            onClick={onApplyStyle}
            disabled={rules.length === activeRules.length || activeRules.length < 1}
          >
            {t('SldClassificationPanel.applyButtonText')}
          </Button>
        </Tooltip>
        <Tooltip
          title={t('SldClassificationPanel.restoreButtonTooltip')}
          mouseEnterDelay={0.3}
        >
          <Button
            aria-label={t('SldClassificationPanel.restoreButtonTooltip')}
            icon={<FontAwesomeIcon icon={faFilterCircleXmark} />}
            onClick={onRestoreStyle}
            disabled={rules.length === activeRules.length && !layer.get('filtered')}
          >
            {t('SldClassificationPanel.restoreButtonText')}
          </Button>
        </Tooltip>
      </div>
    </div>
  );
};

export default SldClassificationPanel;
