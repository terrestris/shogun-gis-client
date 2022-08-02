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
  Menu
} from 'antd';

import {
  ItemType
} from 'antd/lib/menu/hooks/useItems';

import _isEmpty from 'lodash/isEmpty';

import {
  MenuInfo
} from 'rc-menu/lib/interface';

import {
  useTranslation
} from 'react-i18next';

import UserChip from '@terrestris/react-geo/dist/UserChip/UserChip';

import useAppSelector from '../../hooks/useAppSelector';
import useSHOGunAPIClient from '../../hooks/useSHOGunAPIClient';
import {
  getGravatarUrl
} from '../../utils/getGravatarUrl';

import ApplicationInfo from '../ApplicationInfo';

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
          keycloak.logout();
        }
        break;
      default:
        break;
    }
  };

  const getMenu = () => {
    const login = {
      key: 'login',
      icon: (
        <FontAwesomeIcon
          icon={faSignIn}
        />
      ),
      label: t('UserMenu.loginMenuTitle')
    };

    const username = {
      key: 'username',
      label: (
        <div
          className="user-name"
        >
          <span>
            {
              user.providerDetails?.email
            }
          </span>
        </div>
      )
    };

    const divider = {
      type: 'divider'
    };

    const settings = {
      key: 'settings',
      icon: (
        <FontAwesomeIcon
          icon={faUserCog}
        />
      ),
      label: t('UserMenu.settingsMenuTitle')
    };

    const info = {
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
            >
              {t('UserMenu.infoMenuTitle')}
            </span>
          }
        />
      )
    };

    const logout = {
      key: 'logout',
      icon: (
        <FontAwesomeIcon
          icon={faSignOut}
        />
      ),
      label: t('UserMenu.logoutMenuTitle')
    };

    const items: ItemType[] = _isEmpty(user) ?
      [
        login,
        info
      ] :
      [
        username,
        divider,
        settings,
        info,
        divider,
        logout
      ];

    return (
      <Menu
        onClick={onMenuClick}
        className="user-chip-menu"
        items={items}
      />
    );
  };

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
