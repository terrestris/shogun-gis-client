import React, {
  useCallback,
  useEffect,
  useState
} from 'react';

import {
  faDownload
} from '@fortawesome/free-solid-svg-icons';
import {
  FontAwesomeIcon
} from '@fortawesome/react-fontawesome';

import {
  Alert,
  Button,
  Form
} from 'antd';

import {
  FormProps
} from 'antd/lib/form/Form';

import ClientConfiguration from 'clientConfig';
import OlLayerGroup from 'ol/layer/Group';
import OlLayer from 'ol/layer/Layer';
import OlMap from 'ol/Map';
import OlSource from 'ol/source/Source';

import {
  useTranslation
} from 'react-i18next';

import Logger from '@terrestris/base-util/dist/Logger';

import {
  MapFishPrintV3Manager
} from '@terrestris/mapfish-print-manager';
import {
  MapFishPrintV3ManagerOpts
} from '@terrestris/mapfish-print-manager/dist/manager/MapFishPrintV3Manager';
import MapFishPrintV3GeoJsonSerializer from
  '@terrestris/mapfish-print-manager/dist/serializer/MapFishPrintV3GeoJsonSerializer';
import MapFishPrintV3OSMSerializer from
  '@terrestris/mapfish-print-manager/dist/serializer/MapFishPrintV3OSMSerializer';
import MapFishPrintV3WMTSSerializer from
  '@terrestris/mapfish-print-manager/dist/serializer/MapFishPrintV3WMTSSerializer';

import MapUtil from '@terrestris/ol-util/dist/MapUtil/MapUtil';
import {
  getBearerTokenHeader
} from '@terrestris/shogun-util/dist/security/getBearerTokenHeader';

import useSHOGunAPIClient from '../../hooks/useSHOGunAPIClient';
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
  map: OlMap;
  customPrintScales?: number[];
  layouts?: Layout[];
  layerBlackList?: string[];
  outputFormats?: string[];
}

export const PrintForm: React.FC<PrintFormProps> = ({
  layerBlackList = [],
  map,
  active,
  customPrintScales = [],
  outputFormats=['pdf', 'png'],
  ...restProps
}): JSX.Element => {

  const [form] = Form.useForm();
  const {
    t
  } = useTranslation();

  const client = useSHOGunAPIClient();

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
    const layerName = l.get('name');
    const notBlacklisted = !layerBlackList.includes(layerName);
    const notHidden = !l.get('hideLegendInPrint');
    const visible = l.getVisible() && MapUtil.layerInResolutionRange(l, map);
    const printableLayer = !(l instanceof OlLayerGroup);

    if (notBlacklisted && notHidden && visible && printableLayer) {
      const res = map.getView().getResolution();
      if (res) {
        l.set('customPrintLegendParams', {
          SCALE: MapUtil.getScaleForResolution(res, 'm')
        });
      }
      return true;
    }
    return false;
  }, [map, layerBlackList]);

  const initializeMapProvider = useCallback(async () => {
    let pManagerOpts: MapFishPrintV3ManagerOpts = {
      url: ClientConfiguration.print?.url || '/print',
      map,
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
      legendFilter,
      customParams: {
        printLegend: false
      }
    };

    if (customPrintScales.length > 0) {
      pManagerOpts = {
        ...pManagerOpts,
        ...{
          customPrintScales: customPrintScales.reverse()
        }
      };
    }

    const pManager: MapFishPrintV3Manager = new MapFishPrintV3Manager(pManagerOpts);

    try {
      await pManager.init();

      pManager.setOutputFormat(pManager.getOutputFormats()[0]);
      pManager.setDpi(pManager.getDpis()[0]);
      pManager.setLayout(pManager.getLayouts()[0]?.name);

      setPrintManager(pManager);
    } catch (error) {
      setErrorMsg(() => t('PrintForm.managerErrorMessage'));
      Logger.error('Could not initialize print manager: ', error);
    }
  }, [client, layerFilter, legendFilter, map, t, customPrintScales]);

  useEffect(() => {
    if (active) {
      if (!printManager) {
        initializeMapProvider();
      }
    } else {
      printManager?.shutdownManager();
      setPrintManager(null);
    };

  }, [printManager, active, initializeMapProvider]);

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

  return (
    <div className="print">
      {
        errorMsg &&
        <Alert
          className="print-alert"
          message={errorMsg}
          type="error"
          closable
          showIcon
          onClose={onAlertClose}
        />
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
                name="title"
                label={t('PrintForm.title')}
                initialValue={t('PrintForm.initialTitle')}
              >
                <CustomFieldInput
                  maxLength={50}
                  printManager={printManager}
                  placeholder={t('PrintForm.titlePlaceholder')}
                />
              </Form.Item>
              <Form.Item
                name="comment"
                label={t('PrintForm.comment')}
              >
                <CustomFieldInput
                  maxLength={200}
                  printManager={printManager}
                  placeholder={t('PrintForm.commentPlaceholder')}
                />
              </Form.Item>
              <Form.Item
                name="layout"
                label={t('PrintForm.layout')}
                initialValue={printManager?.getLayouts()[0]?.name}
              >
                <LayoutSelect
                  printManager={printManager}
                />
              </Form.Item>
              <Form.Item
                name='scale'
                label={t('PrintForm.scale')}
                initialValue={printManager?.getClosestScaleToFitMap()}
              >
                <ScaleSelect
                  printManager={printManager}
                />
              </Form.Item>
              <Form.Item
                name="dpi"
                label={t('PrintForm.dpi')}
                initialValue={printManager.getDpis()[0]}
              >
                <ResolutionSelect
                  printManager={printManager}
                  placeholder={t('PrintForm.resolutionPlaceholder')}
                />
              </Form.Item>
              <Form.Item
                name="format"
                label={t('PrintForm.format')}
                initialValue="pdf"
              >
                <OutputFormatSelect
                  printManager={printManager}
                  outputFormats={outputFormats}
                  placeholder={t('PrintForm.outputFormatPlaceholder')}
                />
              </Form.Item>
            </Form>
            <Button
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
