import React, {
  useEffect
} from 'react';

import AddLayerModal from './components/AddLayerModal/AddLayerModal';
import BasicMapComponent from './components/BasicMapComponent';
import Footer from './components/Footer';
import Header from './components/Header';
import PermalinkModal from './components/PermalinkModal';
import ToolMenu from './components/ToolMenu';

import './App.less';

export interface AppProps extends React.ComponentProps<'div'> { };

export const App: React.FC<AppProps> = ({
  ...restProps
}): JSX.Element => {

  useEffect(() => {
    const loadingMask = document.querySelectorAll('.loadmask')[0];

    if (loadingMask) {
      loadingMask.classList.add('loadmask-hidden');
    }
  }, []);

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
      <PermalinkModal />
    </div>
  );
};

export default App;
