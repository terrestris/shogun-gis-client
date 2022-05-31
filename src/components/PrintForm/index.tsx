import React, {
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

import MapUtil from '@terrestris/ol-util/dist/MapUtil/MapUtil';

import CustomFieldInput from './CustomFieldInput';
import LayoutSelect from './LayoutSelect';
import OutputFormatSelect from './OutputFormatSelect';
import ResolutionSelect from './ResolutionSelect';

import './index.less';

export interface Layout {
  name: string;
  attributes: any[];
}

export interface PrintFormProps extends Omit<FormProps, 'form'> {
  map: OlMap;
  layerBlackList?: string[];
  outputFormats?: string[];
  layouts?: Layout[];
  printManager: MapFishPrintV3Manager;
}

export const PrintForm: React.FC<PrintFormProps> = ({
  layerBlackList = [],
  map,
  printManager,
  ...restProps
}): JSX.Element => {
  const [form] = Form.useForm();
  const {
    t
  } = useTranslation();

  const [loading, setLoading] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const legendFilter = (l: OlLayer<OlSource>) => {
    const layerName = l.get('name');
    const notBlacklisted = !layerBlackList.includes(layerName);
    const notHidden = !l.get('hideLegendInPrint');
    const visible = l.getVisible() && MapUtil.layerInResolutionRange(l, map);
    const printableLayer = !(l instanceof OlLayerGroup);

    if (notBlacklisted && notHidden && visible && printableLayer) {
      const res = map.getView().getResolution();
      if (res) {
        l.set('customPrintLegendParams', {
          'SCALE': MapUtil.getScaleForResolution(res, 'm')
        });
      }
      return true;
    }
    return false;
  };

  const onDownloadClick = async () => {
    try {
      setErrorMsg(null);
      setLoading(true);

      await setCustomPrintParams();

      const downloadUrl = await printManager.print(false);

      if (!downloadUrl) {
        throw new Error('No download URL available, the job has failed.');
      }

      window.open(downloadUrl);
    } catch (error: any) {
      setErrorMsg(t('PrintForm.printJobErrorMsg'));
      Logger.error(error);
    } finally {
      setLoading(false);
    }
  };

  const setCustomPrintParams = async () => {
    printManager.legendFilter = legendFilter;
    printManager.customParams.printLegend = false;
  };

  const onAlertClose = () => {
    setErrorMsg(null);
  };

  if (!printManager?.isInitiated()) {
    return <></>;
  }

  const layout = {
    labelCol: {
      span: 8
    },
    wrapperCol: {
      span: 16
    }
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
      <Form
        form={form}
        className="print-form"
        layout="horizontal"
        {...layout}
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
          name="dpi"
          label={t('PrintForm.dpi')}
          initialValue={72}
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
            outputFormats={['pdf', 'jpg', 'png']}
            placeholder={t('PrintForm.outputFormatPlaceholder')}
          />
        </Form.Item>
        <Form.Item>
          <Button
            className='print-button'
            disabled={!printManager?.isInitiated()}
            icon={<FontAwesomeIcon icon={faDownload} />}
            loading={loading}
            onClick={onDownloadClick}
          >
            {t('PrintForm.downloadBtnText')}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default PrintForm;
