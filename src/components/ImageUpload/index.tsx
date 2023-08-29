import React, { useState } from 'react';

import {
  faPlus
} from '@fortawesome/free-solid-svg-icons';
import {
  FontAwesomeIcon
} from '@fortawesome/react-fontawesome';

import {
  Upload,
  Modal
} from 'antd';

import _debounce from 'lodash/debounce';
import _isNil from 'lodash/isNil';
import _isObject from 'lodash/isObject';

import {
  useTranslation
} from 'react-i18next';

import {
  PropertyFormItemEditConfig
} from '@terrestris/shogun-util/dist/model/Layer';
import {
  getBearerTokenHeader
} from '@terrestris/shogun-util/dist/security/getBearerTokenHeader';
import {
  getCsrfTokenHeader
} from '@terrestris/shogun-util/dist/security/getCsrfTokenHeader';

import useSHOGunAPIClient from '../../hooks/useSHOGunAPIClient';

export type ImageUploadProps = {
  format?: string;
  suffix?: string;
  label?: string;
  fieldConfig: PropertyFormItemEditConfig;
};

export const ImageUpload: React.FC<ImageUploadProps> = ({
  fieldConfig,
  label,
  ...passThroughProps
}): JSX.Element => {

  const [imageModalVisible, setImageModalVisible] = useState<boolean>(false);
  const [mediaPreviewVisible, setMediaPreviewVisible] = useState<boolean>(false);
  const [previewImage, setPreviewImage] = useState<string>('');

  const client = useSHOGunAPIClient();
  const {
    t
  } = useTranslation();

  const imageUrlToBase64 = async (url: string): Promise<string> => {
    if (_isNil(url)) {
      return Promise.reject();
    }

    const response = await fetch(url, {
      credentials: 'include',
      headers: {
        ...getBearerTokenHeader(client?.getKeycloak())
      }
    });

    const blob = await response.blob();
    return new Promise<string>((onSuccess, onError) => {
      try {
        const reader = new FileReader() ;
        reader.onload = function () { onSuccess(this.result as string); };
        reader.readAsDataURL(blob);
      } catch (e) {
        onError(e);
      }
    });
  };

  /**
   * Shows preview of clicked uploaded image.
   * @param {Object} file Image file object.
   */
  const showImagePreview = async (file: any) => {
    const { response } = file;
    const previewImageUrl = `/imagefiles/${response.fileUuid}`;
    const img = await imageUrlToBase64(previewImageUrl);
    setPreviewImage(img);
    setMediaPreviewVisible(true);
  };

  if (!client) {
    return <></>;
  }

  return (
    <>
      <Upload
        accept="image/*"
        multiple
        name='file'
        action='/imagefiles/uploadToFileSystem'
        withCredentials={true}
        listType="picture-card"
        headers={{
          ...getCsrfTokenHeader(),
          ...getBearerTokenHeader(client.getKeycloak())
        }}
        // onRemove={confirmRemove} // todo: add delete fn
        onPreview={showImagePreview}
        {...fieldConfig?.fieldProps}
        {...passThroughProps}
      >
        <div>
          <FontAwesomeIcon icon={faPlus} />
          <div style={{ marginTop: 8 }}>{t('ImageUpload.upload')}</div>
        </div>
      </Upload>
      <Modal
        open={mediaPreviewVisible}
        footer={null}
        onCancel={() => setMediaPreviewVisible(false)}
      >
        <img
          alt="example"
          style={{ width: '100%' }}
          src={previewImage}
        />
      </Modal>
    </>
  );
};

export default ImageUpload;
