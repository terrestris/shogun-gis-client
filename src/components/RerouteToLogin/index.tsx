import React, {
  useEffect,
  useState
} from 'react';

import {
  faRightToBracket
} from '@fortawesome/free-solid-svg-icons';

import {
  FontAwesomeIcon
} from '@fortawesome/react-fontawesome';

import {
  Button,
  Flex
} from 'antd';

import useSHOGunAPIClient from '../../hooks/useSHOGunAPIClient';

import './index.less';

export interface RerouteToLoginProps {
  rerouteMsg: string;
}

const RerouteToLogin: React.FC<RerouteToLoginProps> = ({
  rerouteMsg
}) => {

  const [loginUrl, setLoginUrl] = useState<string>();

  const client = useSHOGunAPIClient();
  const keycloak = client?.getKeycloak();

  useEffect(() => {
    const getLoginUrl = async () => {
      const url = await keycloak?.createLoginUrl();
      if (url) {
        setLoginUrl(url);
      }
    };

    getLoginUrl();
  }, [keycloak]);

  const onLoginLinkClick = () => {
    if (keycloak) {
      window.open(loginUrl, '_self');
    }
  };

  return (
    <Flex
      align='center'
    >
      <Button
        type='link'
        onClick={onLoginLinkClick}
        icon={
          <FontAwesomeIcon icon={faRightToBracket} />
        }
      >
        {rerouteMsg}
        <i className="fa-solid fa-right-to-bracket"></i>
      </Button>
    </Flex>
  );
};

export default RerouteToLogin;
