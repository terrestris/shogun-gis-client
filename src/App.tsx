import React, {
  useEffect
} from 'react';

import AddLayerModal from './components/AddLayerModal/index';
import BasicMapComponent from './components/BasicMapComponent';
import ClassificationDrawer from './components/ClassificationDrawer';
import CookieBanner from './components/CookieBanner';
import EditFeatureDrawer from './components/EditFeatureDrawer';
import Footer from './components/Footer';
import Header from './components/Header';
import LayerDetailsModal from './components/LayerDetailsModal';
import SearchResultDrawer from './components/SearchResultDrawer';
import StylingDrawer from './components/StylingDrawer';
import ToolMenu from './components/ToolMenu';
import UploadDataModal from './components/UploadDataModal';

import useRestoreTransientLayers from './hooks/useRestoreTransientLayers';

import './App.less';

export type AppProps = React.ComponentProps<'div'>;

export const App: React.FC<AppProps> = ({
  ...restProps
}): JSX.Element => {

  useRestoreTransientLayers();

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
      <CookieBanner />
      <AddLayerModal />
      <UploadDataModal />
      <EditFeatureDrawer />
      <LayerDetailsModal />
      <StylingDrawer />
      <SearchResultDrawer />
      <ClassificationDrawer />
    </div>
  );
};

export default App;
