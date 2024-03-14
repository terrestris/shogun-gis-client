import React, {
  useState
} from 'react';

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
  UploadFile,
  UploadProps
} from 'antd/lib/upload/interface';

import _isNil from 'lodash/isNil';

import {
  useTranslation
} from 'react-i18next';

import { useAsyncEffect } from '@terrestris/react-util/dist/Hooks/useAsyncEffect/useAsyncEffect';

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

import useConvertImageUrl from '../../hooks/useConvertImageUrl';
import useSHOGunAPIClient from '../../hooks/useSHOGunAPIClient';

export type ImageUploadProps = {
  fieldConfig?: PropertyFormItemEditConfig;
  readOnly?: boolean;
  initialFileList?: UploadFile<any>[];
} & Partial<UploadProps>;

export const ImageUpload: React.FC<ImageUploadProps> = ({
  fieldConfig,
  readOnly = false,
  initialFileList,
  ...passThroughProps
}): JSX.Element => {

  const [mediaPreviewVisible, setMediaPreviewVisible] = useState<boolean>(false);
  const [previewImage, setPreviewImage] = useState<string>('');
  const [defaultFileListWithBlob, setDefaultFileListWithBlob] = useState<UploadFile<ShogunFile>[]>();

  const client = useSHOGunAPIClient();
  const imageUrlToBase64 = useConvertImageUrl();
  const {
    t
  } = useTranslation();

  useAsyncEffect(async () => {
    if (!initialFileList || initialFileList.length === 0) {
      return;
    }
    const convertDefaultFileList = async (fileList: UploadFile<ShogunFile>[]) => {
      const fileListPromises = fileList.map(async (val: any) => ({
        ...val,
        thumbUrl: await imageUrlToBase64(`${client?.getBasePath()}imagefiles/${val?.response?.fileUuid}/thumbnail`),
        url: undefined
      }));
      return await Promise.all(fileListPromises);
    };
    const fl = await convertDefaultFileList(initialFileList);
    setDefaultFileListWithBlob(fl);
  }, [initialFileList?.length]);

  /**
   * Shows preview of clicked uploaded image.
   * @param {Object} file Image file object.
   */
  const showImagePreview = async (file: UploadFile<ShogunFile>) => {
    const { response } = file;
    if (_isNil(response) || _isNil(response?.fileUuid)) {
      return;
    }
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
        fileList={readOnly ? defaultFileListWithBlob : undefined}
        {...fieldConfig?.fieldProps}
        {...passThroughProps}
      >
        {
          !readOnly && (
            <div>
              <FontAwesomeIcon icon={faPlus} />
              <div style={{ marginTop: 8 }}>{t('ImageUpload.upload')}</div>
            </div>
          )
        }
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
