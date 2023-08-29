import React, { useState } from 'react';

import {
  faBoxOpen
} from '@fortawesome/free-solid-svg-icons';
import {
  FontAwesomeIcon
} from '@fortawesome/react-fontawesome';

import {
  Input,
  InputNumber,
  DatePicker,
  Select,
  Switch,
  Checkbox,
  Form,
  FormItemProps,
  Upload,
  Button,
  Modal
} from 'antd';

import {
  FormInstance,
  FormProps
} from 'antd/lib/form/Form';
import {
  UploadChangeParam, UploadFile
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

  const removeFile = async (file: any) => { // todo: types
    const uuid = file?.response?.uuid;
    if (uuid) {
      const url = `/files/${uuid}`;
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
