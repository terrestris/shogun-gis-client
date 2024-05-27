import React, {
  useCallback, useEffect, useState
} from 'react';

import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  Alert, Button, Form
} from 'antd';
import { FormProps } from 'antd/lib/form/Form';
import ClientConfiguration from 'clientConfig';
import _isNil from 'lodash/isNil';

import OlFeature from 'ol/Feature';
import OlLayerGroup from 'ol/layer/Group';
import OlLayer from 'ol/layer/Layer';

import OlLayerVector from 'ol/layer/Vector';
import OlLayerRenderer from 'ol/renderer/Layer';
import OlSource from 'ol/source/Source';

import { useTranslation } from 'react-i18next';

import Logger from '@terrestris/base-util/dist/Logger';

import { MapFishPrintV3Manager } from '@terrestris/mapfish-print-manager';
import { MapFishPrintV3ManagerOpts } from '@terrestris/mapfish-print-manager/dist/manager/MapFishPrintV3Manager';
import { MapFishPrintV3GeoJsonSerializer }
  from '@terrestris/mapfish-print-manager/dist/serializer/MapFishPrintV3GeoJsonSerializer';
import { MapFishPrintV3OSMSerializer } from '@terrestris/mapfish-print-manager/dist/serializer/MapFishPrintV3OSMSerializer';
import { MapFishPrintV3WMTSSerializer }
  from '@terrestris/mapfish-print-manager/dist/serializer/MapFishPrintV3WMTSSerializer';

import LayerUtil from '@terrestris/ol-util/dist/LayerUtil/LayerUtil';
import { MapUtil } from '@terrestris/ol-util/dist/MapUtil/MapUtil';
import { useMap } from '@terrestris/react-util/dist/Hooks/useMap/useMap';
import { getBearerTokenHeader } from '@terrestris/shogun-util/dist/security/getBearerTokenHeader';

import useAppDispatch from '../../hooks/useAppDispatch';
import useAppSelector from '../../hooks/useAppSelector';
import useSHOGunAPIClient from '../../hooks/useSHOGunAPIClient';
import { addCustomParam } from '../../store/print';
import SHOGunMapFishPrintV3TiledWMSSerializer from '../PrintForm/Serializer/SHOGunMapFishPrintV3TiledWMSSerializer';
import SHOGunMapFishPrintV3WMSSerializer from '../PrintForm/Serializer/SHOGunMapFishPrintV3WMSSerializer';

import CustomFieldInput from './CustomFieldInput';
import LayoutSelect from './LayoutSelect';
import OutputFormatSelect from './OutputFormatSelect';
import ResolutionSelect from './ResolutionSelect';
import ScaleSelect from './ScaleSelect';

import '../PrintForm/Shared/Shared';

export interface Layout {
  name: string;
  attributes: any[];
}

export interface PrintFormProps extends Omit<FormProps, 'form'> {
  active: boolean;
  customPrintScales?: number[];
  layerBlackList?: string[];
  layouts?: Layout[];
  outputFormats?: string[];
}

export type LayerType = OlLayer<OlSource, OlLayerRenderer<OlLayerVector<OlFeature>>>;

export const PrintForm: React.FC<PrintFormProps> = ({
  active,
  customPrintScales = [],

  layerBlackList = [],
  outputFormats = ['pdf', 'png'],
  ...restProps
}): JSX.Element => {

  const [form] = Form.useForm();
  const {
    t,
    i18n
  } = useTranslation();

  const map = useMap();

  const dispatch = useAppDispatch();

  const currentLanguageCode = i18n.language;

  const client = useSHOGunAPIClient();

  const customMapParams = useAppSelector(state => state.print.customMapParams);
  const customParams = useAppSelector(state => state.print.customParams);
  const printApp = useAppSelector(state => state.print.printApp);

  const [printManager, setPrintManager] = useState<MapFishPrintV3Manager | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const layerFilter = useCallback((l: OlLayer<OlSource>) => {
    if (!map) {
      return;
    }

    const layerName = l.get('name');

    return layerName && !layerBlackList.includes(layerName) &&
      l.getVisible() && !(l instanceof OlLayerGroup) &&
      MapUtil.layerInResolutionRange(l, map);
  }, [map, layerBlackList]);

  const legendFilter = useCallback((l: OlLayer<OlSource>) => {
    if (_isNil(map)) {
      return false;
    }
    const layerName = l.get('name');
    const notBlacklisted = !layerBlackList.includes(layerName);
    const notHidden = !l.get('hideLegendInPrint');
    const visible = l.getVisible() && MapUtil.layerInResolutionRange(l, map);
    const printableLayer = !(l instanceof OlLayerGroup);

    if (notBlacklisted && notHidden && visible && printableLayer) {
      const res = map?.getView().getResolution();
      if (res) {
        l.set('customPrintLegendParams', {
          SCALE: MapUtil.getScaleForResolution(res, 'm')
        });
      }
      return true;
    }
    return false;
  }, [map, layerBlackList]);

  const getPrintableLayers = useCallback((printLayer: LayerType) => {
    if (!map) {
      return [];
    }

    return MapUtil.getAllLayers(map).filter((layer) => {
      const layerName = layer.get('name');
      return layerName &&
        !(layerName.includes('react-geo')) &&
        layer.getVisible() &&
        !(layer instanceof OlLayerGroup) &&
        layer !== printLayer;
    }) as LayerType[];
  }, [map]);

  const getAttributions = useCallback((manager: MapFishPrintV3Manager) => {
    const extentLayer = manager.getExtentLayer();
    if (!extentLayer) {
      return '';
    }

    const layers = getPrintableLayers(extentLayer);
    let allAttributions: string[] = [];

    layers.filter((layer: LayerType) => {
      return layer.getSource && layer.getSource()?.getAttributions && layer.getSource()?.getAttributions();
    }).forEach((layer: LayerType) => {
      const currentLayerAttribution = LayerUtil.getLayerAttributionsText(layer, ',', true);

      if (!allAttributions.includes(currentLayerAttribution)) {
        allAttributions.push(currentLayerAttribution);
      }
    });
    return allAttributions.join(', ').trim();
  }, [getPrintableLayers]);

  const initializeMapProvider = useCallback(async () => {
    if (_isNil(map)) {
      return;
    }
    let pManagerOpts: MapFishPrintV3ManagerOpts = {
      url: ClientConfiguration.print?.url || '/print',
      map,
      customPrintScales: map
        ?.getView()
        ?.getResolutions()
        ?.map((d: number | undefined) => {
          const units = map?.getView()?.getProjection()?.getUnits();
          if (typeof d !== 'undefined') {
            const scale = MapUtil.getScaleForResolution(d, units);
            if (typeof scale !== 'undefined') {
              return MapUtil.roundScale(scale);
            }
          }
          return undefined;
        })
        .filter((scale: number | undefined) => typeof scale !== 'undefined')
        ?.reverse() as number[] | undefined,
      timeout: 60000,
      layerFilter,
      headers: {
        ...getBearerTokenHeader(client?.getKeycloak())
      },
      transformOpts: {
        rotate: false
      },
      serializers: [
        new MapFishPrintV3GeoJsonSerializer(),
        new MapFishPrintV3OSMSerializer(),
        new MapFishPrintV3WMTSSerializer(),
        new SHOGunMapFishPrintV3WMSSerializer(),
        new SHOGunMapFishPrintV3TiledWMSSerializer()
      ],
      legendFilter
    };

    if (customPrintScales.length > 0) {
      pManagerOpts = {
        ...pManagerOpts,
        ...{
          customPrintScales: customPrintScales.toReversed()
        }
      };
    }

    const pManager: MapFishPrintV3Manager = new MapFishPrintV3Manager(pManagerOpts);

    try {
      await pManager.init();

      // Use locale print app if available.
      // Implies that a print app with the language code exists.
      const apps = pManager.getPrintApps();
      if (!printApp) {
        if (apps && currentLanguageCode && apps.includes(currentLanguageCode)) {
          await pManager.setPrintApp(currentLanguageCode);
        }
      } else {
        await pManager.setPrintApp(printApp);
      }

      pManager.setOutputFormat(pManager.getOutputFormats()[0]);
      pManager.setDpi(pManager.getDpis()[0]);
      pManager.setLayout(pManager.getLayouts()[0]?.name);
      setPrintManager(pManager);
    } catch (error) {
      setErrorMsg(() => t('PrintForm.managerErrorMessage'));
      Logger.error('Could not initialize print manager: ', error);
    }
  }, [map, layerFilter, client, legendFilter, customPrintScales, printApp, currentLanguageCode, t]);

  useEffect(() => {
    if (printManager) {
      dispatch(addCustomParam({
        attributions: getAttributions(printManager)
      }));
    }
  }, [dispatch, getAttributions, printManager]);

  useEffect(() => {
    if (active) {
      if (!printManager) {
        form.resetFields();
        initializeMapProvider();
      }
    } else {
      printManager?.shutdownManager();
      setPrintManager(null);
    }
  }, [printManager, active, initializeMapProvider, form]);

  useEffect(() => {
    if (printManager) {
      if (customParams) {
        printManager.setCustomParams(customParams);
      }
      if (customMapParams) {
        printManager.setCustomMapParams(customMapParams);
      }
    }
  }, [printManager, customParams, customMapParams]);

  const onDownloadClick = async () => {
    try {
      setErrorMsg(null);
      setLoading(true);

      if (!printManager) {
        return;
      }

      const downloadUrl = await printManager.print(false);

      if (!downloadUrl) {
        throw new Error('No download URL available, the job has failed.');
      }

      window.open(downloadUrl);
    } catch (error: any) {
      setErrorMsg(t('PrintForm.printJobErrorMsg') || null);
      Logger.error(error);
    } finally {
      setLoading(false);
    }
  };

  const onAlertClose = () => {
    setErrorMsg(null);
  };

  const handleLayoutChange = () => {
    form.setFieldValue('dpi', printManager?.getDpis()[0]);
  };

  return (
    <div
      className="print"
      aria-label='print-form'
    >
      {
        errorMsg && (
          <Alert
            className="print-alert"
            message={errorMsg}
            type="error"
            closable
            showIcon
            onClose={onAlertClose}
          />
        )
      }
      {
        printManager?.isInitiated() && (
          <>
            <Form
              form={form}
              className="print-form"
              labelAlign="left"
              labelCol={{
                flex: '90px'
              }}
              {...restProps}
            >
              <Form.Item
                aria-label='print-title'
                name="title"
                label={t('PrintForm.title')}
                initialValue={t('PrintForm.initialTitle')}
              >
                <CustomFieldInput
                  aria-label='print-title-input'
                  maxLength={50}
                  placeholder={t('PrintForm.titlePlaceholder')}
                />
              </Form.Item>
              <Form.Item
                aria-label='print-comment'
                name="comment"
                label={t('PrintForm.comment')}
              >
                <CustomFieldInput
                  aria-label='print-comment-input'
                  maxLength={200}
                  placeholder={t('PrintForm.commentPlaceholder')}
                />
              </Form.Item>
              <Form.Item
                aria-label='print-layout'
                name="layout"
                label={t('PrintForm.layout')}
                initialValue={printManager?.getLayouts()[0]?.name}
              >
                <LayoutSelect
                  aria-label='print-layout-input'
                  printManager={printManager}
                  onValueChange={handleLayoutChange}
                />
              </Form.Item>
              <Form.Item
                aria-label='print-scale'
                name='scale'
                label={t('PrintForm.scale')}
                initialValue={printManager?.getClosestScaleToFitMap()}
              >
                <ScaleSelect
                  aria-label='print-scale-input'
                  printManager={printManager}
                />
              </Form.Item>
              <Form.Item
                aria-label='print-dpi'
                name="dpi"
                label={t('PrintForm.dpi')}
                initialValue={printManager.getDpis()[0]}
              >
                <ResolutionSelect
                  aria-label='print-dpi-input'
                  printManager={printManager}
                  placeholder={t('PrintForm.resolutionPlaceholder')}
                />
              </Form.Item>
              <Form.Item
                aria-label='print-format'
                name="format"
                label={t('PrintForm.format')}
                initialValue="pdf"
              >
                <OutputFormatSelect
                  aria-label='print-format-input'
                  printManager={printManager}
                  outputFormats={outputFormats}
                  placeholder={t('PrintForm.outputFormatPlaceholder')}
                />
              </Form.Item>
            </Form>
            <Button
              aria-label='create-print'
              className='print-button tool-menu-button'
              disabled={!printManager?.isInitiated()}
              icon={<FontAwesomeIcon icon={faDownload} />}
              loading={loading}
              onClick={onDownloadClick}
            >
              {t('PrintForm.downloadBtnText')}
            </Button>
          </>
        )
      }
    </div>
  );
};

export default PrintForm;
