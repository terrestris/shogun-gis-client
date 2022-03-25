import React from 'react';

import BasicMapComponent from './components/BasicMapComponent';
import ToggleDrawerButton from './components/ToggleDrawerButton';
import SideDrawer from './components/SideDrawer';
import BasicNominatimSearch from './components/BasicNominatimSearch';

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
