import React from 'react';

import AppContextDownload from '../../AppContextDownload';
import AppContextUpload from '../../AppContextUpload';

import './index.less';

export type AppContextProps = {};

export const AppContext: React.FC<AppContextProps> = ({}): JSX.Element => {
  return (
    <div
      className='app_context'
    >
      <AppContextDownload />
      <AppContextUpload />
    </div>
  );
};

export default AppContext;
