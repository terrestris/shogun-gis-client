import React, {
  useEffect,
  useState
} from 'react';

import {
  DoubleLeftOutlined
} from '@ant-design/icons';

import {
  Button,
  Tooltip,
  Flex
} from 'antd';

import useSHOGunAPIClient from '../../hooks/useSHOGunAPIClient';

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
      setLoginUrl(url);
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
      <Tooltip
        title='Login'
      >
        <Button
          type='link'
          onClick={onLoginLinkClick}
        >
          <DoubleLeftOutlined />
        </Button>
      </Tooltip>
      {rerouteMsg}
    </Flex>
  );
};

export default RerouteToLogin;
