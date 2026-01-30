import React, {
  useState
} from 'react';

import {
  Modal,
  Statistic
} from 'antd';

import {
  ModalProps
} from 'antd/lib/modal';

import {
  useTranslation
} from 'react-i18next';

import useAppSelector from '../../hooks/useAppSelector';
import useLocalize from '../../hooks/useLocalize';

import {
  useClientVersion
} from '../../hooks/useVersion';

import './index.less';

interface ApplicationInfoProps extends ModalProps {
  opener?: JSX.Element;
}

export const ApplicationInfo: React.FC<ApplicationInfoProps> = ({
  opener,
  ...restProps
}) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const appInfo = useAppSelector(state => state.appInfo);
  const logoPath = useAppSelector(state => state.logoPath);
  const appDescription = useAppSelector(state => state.description);

  const localize = useLocalize();

  const {
    t
  } = useTranslation();

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  let Opener;
  if (opener) {
    Opener = React.cloneElement(
      opener,
      {
        onClick: toggleVisibility
      }
    );
  } else {
    Opener = <button onClick={toggleVisibility}>Open</button>;
  }

  return (
    <>
      {
        Opener
      }
      <Modal
        className='application-info'
        title={t('ApplicationInfo.title')}
        centered={true}
        open={isVisible}
        onOk={toggleVisibility}
        onCancel={toggleVisibility}
        footer={null}
        {...restProps}
      >
        <img
          className="logo"
          src={logoPath}
          alt="Logo"
        />
        <div
          className="description"
        >
          {localize(appDescription)}
        </div>
        <Statistic
          title={t('ApplicationInfo.clientVersionTitle')}
          value={useClientVersion()}
        />
        {
          (appInfo.version && appInfo.buildTime) &&
          <Statistic
            title={t('ApplicationInfo.backendVersionTitle')}
            value={`${appInfo.version} (${appInfo.buildTime})`}
          />
        }
      </Modal>
    </>
  );
};

export default ApplicationInfo;
