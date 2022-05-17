import React from 'react';

import {
  UserOutlined
} from '@ant-design/icons';

import SimpleButton from '@terrestris/react-geo/dist/Button/SimpleButton/SimpleButton';

import './Login.less';

interface DefaultLoginProps { }

export interface MainLoginProps extends Partial<DefaultLoginProps> { };

export const Login: React.FC<MainLoginProps> = () => {

  const loginlink = '/sso/login';

  return (
    <div className='login-button-wrapper'>
      <SimpleButton
        className='Login-Button'
        name='Login'
        icon={<UserOutlined />}
        shape="circle"
        tooltip='Login'
        onClick={() => window.open(loginlink, '_self')}
      >
        Login
      </SimpleButton>
    </div>
  );
};

export default Login;
