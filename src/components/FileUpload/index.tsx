import React from 'react';

import {
  Upload,
  Button
} from 'antd';

import {
  UploadFile,
  UploadProps
} from 'antd/lib/upload/interface';

import _isNil from 'lodash/isNil';

import {
  useTranslation
} from 'react-i18next';

import ShogunFile from '@terrestris/shogun-util/dist/model/File';
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

export type FileUploadProps = {
  fieldConfig?: PropertyFormItemEditConfig;
  readOnly?: boolean;
} & Partial<UploadProps>;

export const FileUpload: React.FC<FileUploadProps> = ({
  readOnly = false,
  fieldConfig,
  ...passThroughProps
}): JSX.Element => {

  const client = useSHOGunAPIClient();
  const {
    t
  } = useTranslation();

  /**
   * Workaround which allows to download files that need authentication.
   */
  const showPreview = async (file: UploadFile<ShogunFile>) => {
    if (!client) {
      return;
    }
    const { response } = file;
    const fileName = response?.fileName;
    const fileUrl = `/files/${response?.fileUuid}`;

    if (_isNil(fileName) || _isNil(response?.fileUuid)) {
      return;
    }

    const anchor = document.createElement('a');
    document.body.appendChild(anchor);

    const opts = {
      headers: { ... getBearerTokenHeader(client.getKeycloak())}
    };

    const result = await fetch(fileUrl, opts);
    const blob = await result.blob();
    const objectUrl = window.URL.createObjectURL(blob);

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
      {
        !readOnly && (
          <Button>{t('FileUpload.upload')}</Button>
        )
      }
    </Upload>
  );
};

export default FileUpload;
