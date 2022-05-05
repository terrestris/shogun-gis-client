import React from 'react';

import BasicMapComponent from './components/BasicMapComponent';
import BasicNominatimSearch from './components/BasicNominatimSearch';
import SideDrawer from './components/SideDrawer';
import ToggleDrawerButton from './components/ToggleDrawerButton';

import './App.less';

export const App: React.FC = (): JSX.Element => {
  return (
    <div className="App">
      <BasicMapComponent />
      <BasicNominatimSearch />
      <ToggleDrawerButton />
      <SideDrawer />
    </div>
  );
};

export default App;
