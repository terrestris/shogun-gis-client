import React, {
  useEffect,
  useMemo,
  useState,
  useCallback
} from 'react';

import {
  faMagnifyingGlass,
  faCircleInfo,
  faPen,
  faFilter,
  faCircleNotch,
  faClock
} from '@fortawesome/free-solid-svg-icons';
import {
  FontAwesomeIcon
} from '@fortawesome/react-fontawesome';

import {
  Tooltip
} from 'antd';

import OlBaseLayer from 'ol/layer/Base';
import OlLayerGroup from 'ol/layer/Group';
import OlLayer from 'ol/layer/Layer';

import {
  useTranslation
} from 'react-i18next';

import {
  isWmsLayer
} from '@terrestris/ol-util/dist/typeUtils/typeUtils';

import {
  Legend
} from '@terrestris/react-geo/dist/Legend/Legend';
import LayerTransparencySlider from '@terrestris/react-geo/dist/Slider/LayerTransparencySlider/LayerTransparencySlider';
import {
  useMap
} from '@terrestris/react-util/dist/Hooks/useMap/useMap';
import {
  getBearerTokenHeader
} from '@terrestris/shogun-util/dist/security/getBearerTokenHeader';

import useLocalize from '../../../../hooks/useLocalize';
import useSHOGunAPIClient from '../../../../hooks/useSHOGunAPIClient';

import LayerTreeContextMenu from '../LayerTreeContextMenu';

export type TreeNodeRendererProps = {
  layer: OlBaseLayer | OlLayerGroup;
  layerTileLoadCounter: LayerTileLoadCounter;
  mapScale?: number;
  layerIconsVisible?: boolean;
  legendVisible?: boolean;
  visibleLegendsIds: string[];
  setVisibleLegendsIds: React.Dispatch<React.SetStateAction<string[]>>;
  onTimeModalOpen?: (layer: OlLayer) => void;
};

export type GetLegendGraphicParameters = {
  SCALE?: number;
  LEGEND_OPTIONS?: string;
  TRANSPARENT?: boolean;
  SLD_BODY?: string;
};

export type LayerTileLoadCounter = {
  loading: number;
  loaded: number;
  percent: number;
};

export const TreeNodeRenderer: React.FC<TreeNodeRendererProps> = ({
  layer,
  layerIconsVisible,
  mapScale,
  layerTileLoadCounter,
  legendVisible,
  visibleLegendsIds,
  setVisibleLegendsIds,
  onTimeModalOpen
}): JSX.Element => {
  const map = useMap();
  const client = useSHOGunAPIClient();
  const {
    t
  } = useTranslation();
  const localize = useLocalize();

  const [sldBody, setSldBody] = useState<string | undefined>();

  const handleTimeModalOpen = useCallback(() => {
    if (onTimeModalOpen && layer instanceof OlLayer) {
      onTimeModalOpen(layer);
    }
  }, [onTimeModalOpen, layer]);

  const isTimeLayer = useMemo(() => {
    const layerType = layer?.get('type');
    return layerType && layerType.toUpperCase() === 'WMSTIME';
  }, [layer]);

  let rawSld: string | undefined;
  if (isWmsLayer(layer) && layer.getSource()?.getParams().SLD_BODY) {
    rawSld = layer.getSource()?.getParams()?.SLD_BODY;
  }

  const legendRequestExtraParams = useMemo(() => {
    const extraParams: GetLegendGraphicParameters = {
      SCALE: mapScale,
      LEGEND_OPTIONS: 'fontAntiAliasing:true;forceLabels:on',
      TRANSPARENT: true
    };

    if (sldBody) {
      extraParams.SLD_BODY = sldBody;
    }

    return extraParams;
  }, [mapScale, sldBody]);

  const legendRequestHeaders = useMemo(() => ({
    ...getBearerTokenHeader(client?.getKeycloak())
  }), [client]);

  useEffect(() => {
    setSldBody(rawSld);
  }, [rawSld]);

  if (!map) {
    return <></>;
  }

  const percent = layerTileLoadCounter?.percent || 100;

  if (layer instanceof OlLayerGroup) {
    return (
      <div
        aria-label="layer-group"
      >
        {localize(layer.get('name'))}
      </div>
    );
  } else {
    return (
      <>
        <div
          className="tree-node-header"
          aria-label="tree-node-header"
        >
          <span
            aria-label="layer-name"
            className="layer-name"
          >
            {localize(layer.get('name'))}
          </span>
          <div
            className="layer-icons-group"
          >
            <>
              {
                (layerIconsVisible && layer.get('searchable')) && (
                  <>
                    <Tooltip title={t('ToolMenu.searchable')}>
                      <FontAwesomeIcon
                        icon={faMagnifyingGlass}
                        className="layer-icon"
                      />
                    </Tooltip>
                  </>
                )
              }
              {
                (layerIconsVisible && layer.get('hoverable') && layer.get('visible')) && (
                  <>
                    <Tooltip title={t('ToolMenu.queryable')}>
                      <FontAwesomeIcon
                        icon={faCircleInfo}
                        className="layer-icon"
                      />
                    </Tooltip>
                  </>
                )
              }
              {
                (layerIconsVisible && layer.get('editable')) && (
                  <>
                    <Tooltip title={t('ToolMenu.editable')}>
                      <FontAwesomeIcon
                        icon={faPen}
                        className="layer-icon"
                      />
                    </Tooltip>
                  </>
                )
              }
              {
                (layerIconsVisible && layer.get('filtered')) && (
                  <>
                    <Tooltip title={t('ToolMenu.filtered')}>
                      <FontAwesomeIcon
                        icon={faFilter}
                        className="filtered-icon"
                      />
                    </Tooltip>
                  </>
                )
              }
              {
                isTimeLayer && (
                  <>
                    <Tooltip title={t('ToolMenu.timeLayer')}>
                      <FontAwesomeIcon
                        icon={faClock}
                        className="layer-icon time-layer-icon"
                        onClick={handleTimeModalOpen}
                        style={{ cursor: 'pointer' }}
                      />
                    </Tooltip>
                  </>
                )}
            </>
          </div>
          <div
            className="loading-indicator"
          >
            {
              percent < 100 && (
                <FontAwesomeIcon
                  icon={faCircleNotch}
                  spin={true}
                />
              )
            }
          </div>
          {
            (layer instanceof OlLayer) && (
              <div
                aria-label="layer-context-menu"
              >
                <LayerTreeContextMenu
                  layer={layer}
                  visibleLegendsIds={visibleLegendsIds}
                  setVisibleLegendsIds={setVisibleLegendsIds}
                />
              </div>
            )
          }
        </div>
        {
          layer.get('visible') &&
          <div
            className="layer-transparency"
            role="button"
            aria-label="transparency-slider"
            tabIndex={0}
            onClick={e => e.stopPropagation()}
            onKeyDown={e => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                e.stopPropagation();
              }
            }}
            onDragStart={e => {e.stopPropagation(); e.preventDefault();}}
            draggable={true}
          >
            <LayerTransparencySlider
              tooltip={{
                formatter: val => `${t('LayerTree.transparency')}: ${val}%`
              }}
              layer={layer}
            />
          </div>
        }
        {
          (layer.get('visible') && isWmsLayer(layer) && legendVisible) && (
            <Legend
              layer={layer}
              errorMsg={t('LayerTree.noLegendAvailable')}
              extraParams={legendRequestExtraParams}
              headers={layer.get('useBearerToken') ? legendRequestHeaders : undefined}
            />
          )
        }
      </>
    );
  }
};

export default TreeNodeRenderer;
