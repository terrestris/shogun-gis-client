import React from 'react';
import SimpleButton from '@terrestris/react-geo/dist/Button/SimpleButton/SimpleButton';
import { UserOutlined } from '@ant-design/icons';

import './Login.less';

interface DefaultLoginProps { }

export interface MainLoginProps extends Partial<DefaultLoginProps> { };

export const Login: React.FC<MainLoginProps> = () => {

    const loginlink = 'http://localhost/sso/login'

    return (
        <div className='Login-Interface'>
            <SimpleButton
                className='Login-Button'
                name='Login'
                icon={<UserOutlined />}
                shape="circle"
                tooltip='Login'
                onClick={() => window.open(loginlink, '_self')}
            />
            <> Login</>
        </div>
    );
};

export default Login
