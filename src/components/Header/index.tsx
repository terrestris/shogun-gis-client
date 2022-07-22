import React from 'react';

import {
  useAppSelector
} from '../../hooks/useAppSelector';

import BasicNominatimSearch from '../BasicNominatimSearch';

import LanguageSelect from '../LanguageSelector';
import UserMenu from '../UserMenu';

import './index.less';

export interface HeaderProps extends React.ComponentProps<'div'> { };

export const Header: React.FC<HeaderProps> = ({
  ...restProps
}): JSX.Element => {
  const title = useAppSelector((state) => state.title);
  const logoPath = useAppSelector((state) => state.logoPath);

  return (
    <div
      className="header"
      {...restProps}
    >
      <div
        className="item-container left-items"
      >
        <img
          className="logo"
          src={logoPath}
        />
        <div
          className="title"
        >
          {title}
        </div>
      </div>
      <div
        className="item-container center-items"
      >
        <BasicNominatimSearch />
      </div>
      <div
        className="item-container right-items"
      >
        <UserMenu />
      </div>
    </div>
  );
};

export default Header;
