import React, {
  useEffect,
  useState
} from 'react';

import {
  faUserCog,
  faSignOut,
  faSignIn,
  faAngleDown
} from '@fortawesome/free-solid-svg-icons';
import {
  FontAwesomeIcon
} from '@fortawesome/react-fontawesome';

import {
  Button,
  Tooltip
} from 'antd';
import {
  ItemType
} from 'antd/lib/menu/interface';

import _isEmpty from 'lodash/isEmpty';

import {
  MenuInfo
} from 'rc-menu/lib/interface';

import {
  useTranslation
} from 'react-i18next';

import useAppSelector from '../../hooks/useAppSelector';
import useSHOGunAPIClient from '../../hooks/useSHOGunAPIClient';
import {
  getGravatarUrl
} from '../../utils/getGravatarUrl';

import UserChip from '../UserChip';

import './index.less';

export const UserMenu: React.FC = (): JSX.Element => {
  const {
    t
  } = useTranslation();

  const [loginUrl, setLoginUrl] = useState<string>();

  const client = useSHOGunAPIClient();
  const keycloak = client?.getKeycloak();

  const user = useAppSelector((state) => state.user);

  useEffect(() => {
    const getLoginUrl = async () => {
      const url = await keycloak?.createLoginUrl();
      setLoginUrl(url);
    };

    getLoginUrl();
  }, [keycloak]);

  const onMenuClick = (evt: MenuInfo) => {
    switch (evt.key) {
      case 'settings':
        if (keycloak) {
          keycloak.accountManagement();
        }
        break;
      case 'logout':
        if (keycloak) {
          keycloak.logout({
            redirectUri: loginUrl
          });
        }
        break;
      default:
        break;
    }
  };

  const getMenu = () => {
    const username: ItemType = {
      key: 'username',
      label: (
        <div
          className="username-menu-item"
          aria-label="user-name"
        >
          <span
            className="item-username"
          >
            {
              user.providerDetails?.username || user.authProviderId
            }
          </span>
          <br />
          <span
            className="item-fullname"
          >
            {
              `${user.providerDetails?.firstName || ''} ${user.providerDetails?.lastName || ''}`
            }
          </span>
        </div>
      )
    };

    const divider: ItemType = {
      type: 'divider'
    };

    const settings: ItemType = {
      key: 'settings',
      icon: (
        <FontAwesomeIcon
          icon={faUserCog}
        />
      ),
      label: t('UserMenu.settingsMenuTitle')
    };

    const logout: ItemType = {
      key: 'logout',
      icon: (
        <FontAwesomeIcon
          icon={faSignOut}
        />
      ),
      label: (
        <div
          aria-label="logout"
        >
          {t('UserMenu.logoutMenuTitle')}
        </div>
      )
    };

    const accountRoles = keycloak?.tokenParsed?.resource_access?.account?.roles;
    const hasUserManagementAccess = Array.isArray(accountRoles) && accountRoles.indexOf('manage-account') > -1;

    const items: ItemType[] = hasUserManagementAccess ? [
      username,
      divider,
      settings,
      divider,
      logout
    ] : [
      username,
      divider,
      logout
    ];

    return {
      items,
      onClick: onMenuClick
    };
  };

  const onLoginClick = () => {
    if (keycloak) {
      keycloak.login();
    }
  };

  return (
    <div
      className="user-menu"
    >
      {_isEmpty(user) ? (
        <Tooltip
          title={t('UserMenu.loginTooltip')}
        >
          <Button
            type="link"
            onClick={onLoginClick}
            icon={
              <FontAwesomeIcon
                icon={faSignIn}
              />
            }
          >
            {t('UserMenu.loginMenuTitle')}
          </Button>
        </Tooltip>
      ) : (
        <UserChip
          size="small"
          imageSrc={getGravatarUrl({
            email: user.providerDetails?.email || '',
            size: 28
          })}
          userName={
            <FontAwesomeIcon
              icon={faAngleDown}
            />
          }
          userMenu={getMenu()}
        />
      )}
    </div>
  );
};

export default UserMenu;
