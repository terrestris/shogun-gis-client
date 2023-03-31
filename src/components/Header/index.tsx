import React from 'react';

import {
  faFile
} from '@fortawesome/free-solid-svg-icons';

import {
  FontAwesomeIcon
} from '@fortawesome/react-fontawesome';

import {
  Tooltip
} from 'antd';

import {
  useTranslation
} from 'react-i18next';

import {
  useAppSelector
} from '../../hooks/useAppSelector';
import {
  usePlugins
} from '../../hooks/usePlugins';

import {
  HeaderPlacementOrientation,
  isHeaderIntegration
} from '../../plugin';

import BasicNominatimSearch from '../BasicNominatimSearch';

import UserMenu from '../UserMenu';

import './index.less';

export interface HeaderProps extends React.ComponentProps<'div'> { };

export const Header: React.FC<HeaderProps> = ({
  ...restProps
}): JSX.Element => {
  const title = useAppSelector(state => state.title);
  const stateOnly = useAppSelector(state => state.stateOnly);
  const logoPath = useAppSelector(state => state.logoPath);

  const { t } = useTranslation();

  const plugins = usePlugins();

  const insertPlugins = (itemPosition: HeaderPlacementOrientation, items: JSX.Element[]) => {
    plugins.forEach(plugin => {
      if (isHeaderIntegration(plugin.integration) && plugin.integration?.placementOrientation === itemPosition) {
        const {
          key,
          wrappedComponent: WrappedPluginComponent
        } = plugin;

        items.splice(plugin.integration?.insertionIndex || 0, 0,
          <WrappedPluginComponent
            key={key}
          />
        );
      }
    });
  };

  const getLeftItems = () => {
    const items = [(
      <img
        key="logo"
        className="logo"
        src={logoPath}
      />
    ), (
      <div
        key="title"
        className="title"
      >
        {title}
        {
          stateOnly &&
          <Tooltip
            title={t('Header.loadedStateTooltip')}
          >
            <FontAwesomeIcon
              icon={faFile}
            />
          </Tooltip>
        }
      </div>
    )];

    insertPlugins('left', items);

    return items;
  };

  const getCenterItems = () => {
    const items = [
      <BasicNominatimSearch
        key="search"
      />
    ];

    insertPlugins('center', items);

    return items;
  };

  const getRightItems = () => {
    const items = [
      <UserMenu
        key="user-menu"
      />
    ];

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
