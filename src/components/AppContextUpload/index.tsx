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
  Button,
  Tooltip
} from 'antd';

import {
  useTranslation
} from 'react-i18next';

import UploadButton, {
  UploadButtonProps
} from '@terrestris/react-geo/dist/Button/UploadButton/UploadButton';

import Application from '@terrestris/shogun-util/dist/model/Application';

import useReadAppContext from '../../hooks/useReadAppContext';

import './index.less';

export type AppContextUploadProps = {} & Partial<UploadButtonProps>;

export const AppContextUpload: React.FC<AppContextUploadProps> = ({
  ...restProps
}): JSX.Element => {

  const [tooltipVisible, setTooltipVisible] = useState(false);

  const readAppContext = useReadAppContext();

  const {
    t
  } = useTranslation();

  const onChange = async (evt: React.ChangeEvent<HTMLInputElement>) => {
    if (!readAppContext) {
      return;
    }

    const files = evt.target.files;

    if (files?.length !== 1) {
      return;
    }

    const file = files[0];

    const applicationText = await file.text();

    if (!applicationText) {
      return;
    }

    const application: Application = JSON.parse(applicationText);

    readAppContext(application);

    evt.target.value = '';
  };

  return (
    <>
      <UploadButton
        className="app-context-upload"
        onChange={onChange}
        inputProps={{
          title: ' ',
          onMouseEnter: () => {
            setTooltipVisible(true);
          },
          onMouseLeave: () => {
            setTooltipVisible(false);
          }
        }}
        type="link"
        {...restProps}
      >
        <Tooltip
          open={tooltipVisible}
          title={t('AppContextUpload.tooltip')}
        >
          <Button
            type="link"
            icon={(
              <FontAwesomeIcon
                icon={faUpload}
              />
            )}
          >
            {t('AppContextUpload.title')}
          </Button>
        </Tooltip>
      </UploadButton>
    </>
  );
};

export default AppContextUpload;
