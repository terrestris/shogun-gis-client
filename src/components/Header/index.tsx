import React from 'react';

import {
  Tooltip,
  Typography
} from 'antd';

import ClientConfiguration from 'clientConfig';

import {
  useTranslation
} from 'react-i18next';

import DocumentationButton from '../../components/DocumentationButton';
import {
  useAppSelector
} from '../../hooks/useAppSelector';
import {
  useLocalize
} from '../../hooks/useLocalize';
import {
  usePlugins
} from '../../hooks/usePlugins';

import {
  HeaderPlacementOrientation,
  isHeaderIntegration
} from '../../plugin';
import SearchField from '../SearchField';

import UserMenu from '../UserMenu';

import './index.less';

export type HeaderProps = React.ComponentProps<'div'>;

export const Header: React.FC<HeaderProps> = ({
  ...restProps
}): JSX.Element => {
  const title = useAppSelector(state => state.title);
  const logoPath = useAppSelector(state => state.logoPath);
  const userMenuVisible = useAppSelector(state => state.userMenu.visible);

  const localize = useLocalize();

  const { t } = useTranslation();
  const plugins = usePlugins();

  const { Link } = Typography;

  const insertPlugins = (itemPosition: HeaderPlacementOrientation, items: JSX.Element[]) => {
    plugins.forEach(plugin => {
      if (isHeaderIntegration(plugin.integration) && plugin.integration?.placementOrientation === itemPosition) {
        const {
          key,
          wrappedComponent: WrappedPluginComponent
        } = plugin;

        items.splice(plugin.integration?.insertionIndex ?? 0, 0,
          <WrappedPluginComponent
            key={key}
          />
        );
      }
    });
  };

  const getLeftItems = () => {
    const items = [
      <Tooltip
        key="logo"
        title={t('Header.backToHome')}
        placement="bottomLeft"
      >
        <Link
          href={
            ClientConfiguration.logoLinkUrl ||
            ClientConfiguration.shogunBase ||
            '/'
          }
          aria-label={t('Header.backToHome')}
          className="logo-link"
        >
          <img
            className="logo"
            data-testid="logo"
            src={logoPath}
            alt=""
            aria-hidden="true"
          />
        </Link>
      </Tooltip>,
      <div
        key="title"
        className="title"
        aria-label="title"
      >
        {localize(title)}
      </div>
    ];

    insertPlugins('left', items);

    return items;
  };

  const getCenterItems = () => {
    const items = [
      <SearchField
        key="search"
        aria-label="search-input"
        name="search-input"
        className="search-input"
      />
    ];

    insertPlugins('center', items);

    return items;
  };

  const getDocsButton = () => {
    if (!ClientConfiguration.documentationButtonVisible) {
      return;
    }

    return (
      <DocumentationButton
        key="docs-button"
      />
    );
  };

  const getUserMenu = () => {
    if (!userMenuVisible || !ClientConfiguration.keycloak?.enabled) {
      return;
    }

    return (
      <div
        key="user-menu"
        aria-label="user-menu"
      >
        <UserMenu
          key="user-menu"
        />
      </div>
    );
  };

  const getRightItems = () => {
    const items = [
      getDocsButton(),
      getUserMenu()
    ].filter((item) => {
      return item !== undefined;
    });

    insertPlugins('right', items);

    return items;
  };

  return (
    <div
      className="header"
      {...restProps}
    >
      <div
        className="item-container left-items"
      >
        {
          getLeftItems()
        }
      </div>
      <div
        className="item-container center-items"
      >
        {
          getCenterItems()
        }
      </div>
      <div
        className="item-container right-items"
      >
        {
          getRightItems()
        }
      </div>
    </div>
  );
};

export default Header;
