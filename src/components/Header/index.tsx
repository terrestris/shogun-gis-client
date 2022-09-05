import React from 'react';

import {
  useAppSelector
} from '../../hooks/useAppSelector';
import {
  usePlugins
} from '../../hooks/usePlugins';

import {
  HeaderPlacementOrientation
} from '../../plugin';

import BasicNominatimSearch from '../BasicNominatimSearch';

import UserMenu from '../UserMenu';

import './index.less';

export interface HeaderProps extends React.ComponentProps<'div'> { };

export const Header: React.FC<HeaderProps> = ({
  ...restProps
}): JSX.Element => {
  const title = useAppSelector((state) => state.title);
  const logoPath = useAppSelector((state) => state.logoPath);
  const plugins = usePlugins();

  const insertPlugins = (itemPosition: HeaderPlacementOrientation, items: JSX.Element[]) => {
    plugins
      .filter(plugin => plugin.integration?.placement === 'header' &&
        plugin.integration?.placementOrientation === itemPosition)
      .forEach(plugin => {
        const {
          key,
          wrappedComponent: WrappedPluginComponent
        } = plugin;

        items.splice(plugin.integration?.insertionIndex || 0, 0,
          <WrappedPluginComponent
            key={key}
          />
        );
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
