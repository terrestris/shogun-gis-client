import React from 'react';

import BasicMapComponent from './components/BasicMapComponent';
import BasicNominatimSearch from './components/BasicNominatimSearch';
import Footer from './components/Footer';
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
      <Footer />
    </div>
  );
};

export default App;
