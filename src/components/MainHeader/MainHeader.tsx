import React from 'react';

import LogoImg from '../../../resources/public/logo.png';

import BasicNominatimSearch from '../BasicNominatimSearch';

import Login from '../Login/Login';

import './MainHeader.less';

interface DefaultMainHeaderProps { }

export interface MainHeaderProps extends Partial<DefaultMainHeaderProps> { };

export const MainHeader: React.FC<MainHeaderProps> = () => {
  return (
    <div
      className="main-header"
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
          SHOGun
          <br />
          Demoapplikation
        </div>
      </div>
      <div
        className="item-container center-items"
      >
        <BasicNominatimSearch />
      </div>
      <Login />
      <div
        className="item-container right-items"
      >
        Servicemenü
      </div>
    </div>
  );
};

export default MainHeader;
