import React from 'react';

import LogoImg from '../../../resources/public/loading.png';
import { useAppSelector } from '../../hooks/useAppSelector';

import BasicNominatimSearch from '../BasicNominatimSearch';
import ToggleDrawerButton from '../ToggleDrawerButton';

import './index.less';

export interface HeaderProps extends React.ComponentProps<'div'> { };

export const Header: React.FC<HeaderProps> = () => {
  const title = useAppSelector((state) => state.title);

  return (
    <div
      className="header"
    >
      <div
        className="item-container left-items"
      >
        <img
          className="logo"
          src={LogoImg}
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
        <ToggleDrawerButton />
      </div>
    </div>
  );
};

export default Header;
