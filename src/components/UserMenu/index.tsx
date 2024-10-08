import React from 'react';

import {
  faInfo,
  faUserCog,
  faSignOut,
  faSignIn,
  faAngleDown
} from '@fortawesome/free-solid-svg-icons';
import {
  FontAwesomeIcon
} from '@fortawesome/react-fontawesome';

import {
  ItemType
} from 'antd/lib/menu/interface';

import ClientConfiguration from 'clientConfig';

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

import ApplicationInfo from '../ApplicationInfo';
import UserChip from '../UserChip';

import './index.less';

interface OwnProps { }

type UserProps = OwnProps;

export const UserMenu: React.FC<UserProps> = (): JSX.Element => {
  const {
    t
  } = useTranslation();

  const client = useSHOGunAPIClient();
  const keycloak = client?.getKeycloak();

  const user = useAppSelector((state) => state.user);

  const onMenuClick = (evt: MenuInfo) => {
    switch (evt.key) {
      case 'settings':
        if (keycloak) {
          keycloak.accountManagement();
        }
        break;
      case 'info':
        // Don't do anything, visible state will be handled by the menu itself.
        break;
      case 'login':
        if (keycloak) {
          keycloak.login();
        }
        break;
      case 'logout':
        if (keycloak) {
          keycloak.logout({
            redirectUri: keycloak.createLoginUrl()
          });
        }
        break;
      default:
        break;
    }
  };

  const getMenu = () => {
    const login: ItemType = {
      key: 'login',
      icon: (
        <FontAwesomeIcon
          icon={faSignIn}
        />
      ),
      label: t('UserMenu.loginMenuTitle')
    };

    const username: ItemType = {
      key: 'username',
      label: (
        <div
          className="user-name"
          aria-label='user-name'
        >
          <span>
            {
              user.providerDetails?.username
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

    const info: ItemType = {
      key: 'info',
      icon: (
        <FontAwesomeIcon
          icon={faInfo}
        />
      ),
      label: (
        <ApplicationInfo
          opener={
            <span
              className="info-opener"
              aria-label='info-opener'
            >
              {t('UserMenu.infoMenuTitle')}
            </span>
          }
        />
      )
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
          aria-label='login'
        >
          {t('UserMenu.logoutMenuTitle')}
        </div>
      )
    };

    const items: ItemType[] = [];

    if (_isEmpty(user)) {
      if (ClientConfiguration.keycloak?.enabled) {
        items.push(login);
      }
      items.push(info);
    } else {
      const accountRoles = keycloak?.tokenParsed?.resource_access?.account?.roles;
      const hasUserManagementAccess = Array.isArray(accountRoles) && accountRoles.indexOf('manage-account') > -1;
      const itemsForLoggedInUser = hasUserManagementAccess ? [
        username,
        divider,
        settings,
        info,
        divider,
        logout
      ] : [
        username,
        divider,
        info,
        divider,
        logout
      ];

      items.push(...itemsForLoggedInUser);
    }

    return {
      items,
      onClick: onMenuClick
    };
  };

  if (_isEmpty(user)) {
    return <></>;
  }

  return (
    <UserChip
      size={'small'}
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
  );
};

export default UserMenu;
