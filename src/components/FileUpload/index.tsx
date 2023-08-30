import React from 'react';

import {
  Upload,
  Button
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

import useSHOGunAPIClient from '../../hooks/useSHOGunAPIClient';

import { ShogunFile } from '../EditFeatureDrawer/EditFeatureForm';

export type FileUploadProps = {
  format?: string;
  suffix?: string;
  label?: string;
  fieldConfig: PropertyFormItemEditConfig;
};

export const FileUpload: React.FC<FileUploadProps> = ({
  fieldConfig,
  label,
  ...passThroughProps
}): JSX.Element => {

  const client = useSHOGunAPIClient();
  const {
    t
  } = useTranslation();

  /**
   * Allows to download files that need authentication.
   */
  const showPreview = async (file: any) => {
    if (!client) {
      return;
    }
    const { response } = file;
    const fileName = response.fileName;

    const anchor = document.createElement('a');
    document.body.appendChild(anchor);
    const fileUrl = `/files/${response.fileUuid}`;

    const opts = {
      headers: { ... getBearerTokenHeader(client.getKeycloak())}
    };

    const result = await fetch(fileUrl, opts);
    const blob = await result.blob();
    let objectUrl = window.URL.createObjectURL(blob);

    anchor.href = objectUrl;
    anchor.download = fileName;
    anchor.click();
    window.URL.revokeObjectURL(objectUrl);
  };

  const removeFile = async (file: UploadFile<ShogunFile>) => {
    const uuid = file?.response?.fileUuid;
    if (uuid) {
      const url = `${client?.getBasePath()}files/${uuid}`;
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
    <Upload
      multiple
      name='file'
      action='/files/uploadToFileSystem'
      withCredentials={true}
      headers={{
        ...getCsrfTokenHeader(),
        ...getBearerTokenHeader(client.getKeycloak())
      }}
      onRemove={removeFile}
      onPreview={showPreview}
      {...fieldConfig?.fieldProps}
      {...passThroughProps}
    >
      <Button>{t('FileUpload.upload')}</Button>
    </Upload>
  );
};

export default FileUpload;
