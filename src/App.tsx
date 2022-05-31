import React from 'react';

import AddLayerModal from './components/AddLayerModal/AddLayerModal';
import BasicMapComponent from './components/BasicMapComponent';
import Footer from './components/Footer';
import Header from './components/Header';
import ToolMenu from './components/ToolMenu';

import './App.less';

export interface AppProps extends React.ComponentProps<'div'> { };

export const App: React.FC<AppProps> = ({
  ...restProps
}): JSX.Element => {
  return (
    <div
      className="App"
      {...restProps}
    >
      <Header />
      <BasicMapComponent />
      <ToolMenu />
      <Footer />
      <AddLayerModal />
    </div>
  );
};

export default App;
