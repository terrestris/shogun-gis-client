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

import {
  UploadFile
} from 'antd/lib/upload/interface';

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

import useConvertImageUrl from '../../hooks/useConvertImageUrl';
import useSHOGunAPIClient from '../../hooks/useSHOGunAPIClient';

import { ShogunFile } from '../EditFeatureDrawer/EditFeatureForm';

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

  const [mediaPreviewVisible, setMediaPreviewVisible] = useState<boolean>(false);
  const [previewImage, setPreviewImage] = useState<string>('');

  const client = useSHOGunAPIClient();
  const imageUrlToBase64 = useConvertImageUrl();
  const {
    t
  } = useTranslation();

  /**
   * Shows preview of clicked uploaded image.
   * @param {Object} file Image file object.
   */
  const showImagePreview = async (file: any) => {
    const { response } = file;
    const previewImageUrl = `${client?.getBasePath()}imagefiles/${response.fileUuid}`;
    const img = await imageUrlToBase64(previewImageUrl);
    setPreviewImage(img);
    setMediaPreviewVisible(true);
  };

  const removeFile = async (file: UploadFile<ShogunFile>) => {
    const uuid = file?.response?.fileUuid;
    if (uuid) {
      const url = `${client?.getBasePath()}imagefiles/${uuid}`;
      return await fetch(url, {
        method: 'DELETE',
        credentials: 'same-origin',
        headers: {
          ...getCsrfTokenHeader(),
          ...getBearerTokenHeader(client?.getKeycloak())
        }
      });
    }
  };

  if (!client) {
    return <></>;
  }

  return (
    <>
      <Upload
        accept="image/*"
        multiple
        name="file"
        action={`${client.getBasePath()}imagefiles/uploadToFileSystem`}
        withCredentials={true}
        listType="picture-card"
        headers={{
          ...getCsrfTokenHeader(),
          ...getBearerTokenHeader(client.getKeycloak())
        }}
        onRemove={removeFile}
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
