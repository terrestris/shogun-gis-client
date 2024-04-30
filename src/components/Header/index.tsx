import React from 'react';

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
import SearchField from '../SearchField';

import UserMenu from '../UserMenu';

import './index.less';

export interface HeaderProps extends React.ComponentProps<'div'> { }

export const Header: React.FC<HeaderProps> = ({
  ...restProps
}): JSX.Element => {
  const title = useAppSelector((state) => state.title);
  const logoPath = useAppSelector((state) => state.logoPath);
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
        aria-label="logo"
        src={logoPath}
      />
    ), (
      <div
        key="title"
        className="title"
        aria-label="title"
      >
        {title}
      </div>
    )];

    insertPlugins('left', items);

    return items;
  };

  const getCenterItems = () => {
    const items = [
      <SearchField
        key="search"
        aria-label='search-input'
        name='search-input'
        className='search-input'
      />
    ];

    insertPlugins('center', items);

    return items;
  };

  const getRightItems = () => {
    const items = [
      <div
        key="user-menu"
        aria-label="user-menu"
      >
        <UserMenu
          key="user-menu"
        />
      </div>
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
