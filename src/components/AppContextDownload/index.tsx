import React from 'react';

import {
  faDownload
} from '@fortawesome/free-solid-svg-icons';

import {
  FontAwesomeIcon
} from '@fortawesome/react-fontawesome';

import {
  Button,
  ButtonProps,
  Tooltip
} from 'antd';

import {
  useTranslation
} from 'react-i18next';

import useAppSelector from '../../hooks/useAppSelector';
import useWriteAppContext from '../../hooks/useWriteAppContext';

import './index.less';

export type AppContextDownloadProps = {} & Partial<ButtonProps>;

export const AppContextDownload: React.FC<AppContextDownloadProps> = ({
  ...restProps
}): JSX.Element => {

  const writeAppContext = useWriteAppContext();

  const appId = useAppSelector(state => state.id);

  const {
    t
  } = useTranslation();

  const onExportClick = () => {
    if (!writeAppContext) {
      return;
    }

    const appContext = writeAppContext();

    const file = new Blob([JSON.stringify(appContext, null, '  ')], {
      type: 'application/json'
    });

    const url = window.URL.createObjectURL(file);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `appContext-${appId}.json`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Tooltip
      title={t('AppContextDownload.tooltip')}
    >
      <Button
        onClick={onExportClick}
        type="link"
        icon={(
          <FontAwesomeIcon
            icon={faDownload}
          />
        )}
        {...restProps}
      >
        {t('AppContextDownload.title')}
      </Button>
    </Tooltip>
  );
};

export default AppContextDownload;
