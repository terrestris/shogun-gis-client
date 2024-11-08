import React, {
  useState
} from 'react';

import {
  faUpload
} from '@fortawesome/free-solid-svg-icons';
import {
  FontAwesomeIcon
} from '@fortawesome/react-fontawesome';

import {
  Alert,
  message,
  Modal,
  ModalProps,
  Spin,
  Upload
} from 'antd';

import {
  RcFile,
  UploadChangeParam,
  UploadFile
} from 'antd/lib/upload/interface';

import OlFeature from 'ol/Feature';
import OlFormatGeoJSON from 'ol/format/GeoJSON';

const { Dragger } = Upload;

import {
  UploadRequestOption
} from 'rc-upload/lib/interface';

import {
  useTranslation
} from 'react-i18next';

import Logger from '@terrestris/base-util/dist/Logger';

import {
  useMap
} from '@terrestris/react-util/dist/Hooks/useMap/useMap';
import {
  DigitizeUtil
} from '@terrestris/react-util/dist/Util/DigitizeUtil';

import './index.less';

export type ImportDataModalProps = Partial<ModalProps> & {
  onSuccess?: (features: OlFeature[]) => void;
  onFailure?: (error: Error) => void;
};

export const ImportDataModal: React.FC<ImportDataModalProps> = ({
  className = 'import-data-modal',
  footer = false,
  width = 600,
  onCancel,
  onSuccess,
  onFailure,
  ...passThroughProps
}): JSX.Element => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [importError, setImportError] = useState('');

  const map = useMap();

  const {
    t
  } = useTranslation();

  const supportedFileExtensions = [
    'json',
    'geojson'
  ];

  const supportedFormats = [
    'application/json',
    'application/geo+json',
    'application/geojson'
  ];

  const onCancelInternal = (evt: React.MouseEvent<HTMLButtonElement>) => {
    setImportError('');
    setIsLoading(false);

    onCancel?.(evt);
  };

  const onBeforeFileUpload = (file: RcFile) => {
    const fileType = file.type;
    const fileExtension = file.name.split('.').pop();

    setImportError('');

    if (!supportedFormats.includes(fileType) || (fileExtension && !supportedFileExtensions.includes(fileExtension))) {
      setImportError(t('ImportDataModal.error.supportedFormats', {
        supportedFormats: supportedFormats.join(', ')
      }));

      return false;
    }

    return true;
  };

  const readFeaturesFromFile = (options: UploadRequestOption<OlFeature[]>) => {
    const {
      file,
      onSuccess: onSuccessUpload,
      onError: onErrorUpload
    } = options;

    if (!(file instanceof File)) {
      return;
    }

    if (!map) {
      return;
    }

    const fileReader = new FileReader();

    fileReader.onload = () => {
      try {
        const features = new OlFormatGeoJSON().readFeatures(fileReader.result, {
          featureProjection: map.getView().getProjection()
        });

        onSuccessUpload?.(features);
      } catch (err) {
        onErrorUpload?.(err as Error);
        Logger.error('Error while reading the file: ', err);
      }
    };

    fileReader.readAsText(file);
  };

  const onFileUploadChange = (info: UploadChangeParam<UploadFile<OlFeature[]>>) => {
    const status = info.file.status;
    const features = info.file.response;

    if (!map) {
      return;
    }

    if (status === 'uploading') {
      setIsLoading(true);
    } else if (status === 'done') {
      const digitizeLayer = DigitizeUtil.getDigitizeLayer(map);
      const digitizeLayerSource = digitizeLayer.getSource();
      digitizeLayerSource?.addFeatures(features || []);

      setIsLoading(false);
      message.success(t('ImportDataModal.success'));
      onSuccess?.(features || []);
    } else if (status === 'error') {
      setIsLoading(false);
      setImportError(t('ImportDataModal.error.parsing'));
      onFailure?.(info.file.error);
    }
  };

  return (
    <Modal
      title={t('ImportDataModal.title')}
      onCancel={onCancelInternal}
      className={className}
      width={width}
      footer={footer}
      {...passThroughProps}
    >
      {
        importError && (
          <Alert
            message={importError}
            closable={true}
            type="error"
          />
        )
      }
      <Spin
        spinning={isLoading}
      >
        <Dragger
          customRequest={readFeaturesFromFile}
          accept={[...supportedFileExtensions.map(ext => `.${ext}`), supportedFormats].join(',')}
          maxCount={1}
          showUploadList={false}
          beforeUpload={onBeforeFileUpload}
          onChange={onFileUploadChange}
        >
          <p className="ant-upload-drag-icon">
            <FontAwesomeIcon
              icon={faUpload}
            />
          </p>
          <p className="ant-upload-text">
            {t('ImportDataModal.description')}
          </p>
          <p className="ant-upload-hint">
            {t('ImportDataModal.hint')}
          </p>
        </Dragger>
      </Spin>
    </Modal>
  );
};

export default ImportDataModal;
