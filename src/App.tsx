import React from 'react';

import BasicMapComponent from './components/BasicMapComponent';
import Footer from './components/Footer';
import Header from './components/Header';
import SideDrawer from './components/SideDrawer';

import './App.less';

export const App: React.FC = (): JSX.Element => {
  return (
    <div className="App">
      <Header />
      <BasicMapComponent />
      <SideDrawer />
      <Footer />
    </div>
  );
};

export default App;
