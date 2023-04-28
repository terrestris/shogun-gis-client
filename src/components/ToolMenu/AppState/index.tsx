import React from 'react';

import AppStateManagement from '../../AppStateManagement';
import AppStateUpload from '../../AppStateUpload';

import './index.less';

export type AppStateProps = {};

export const AppState: React.FC<AppStateProps> = ({}): JSX.Element => {
  return (
    <div
      className='app-state'
    >
      <AppStateManagement />
      <AppStateUpload />
    </div>
  );
};

export default AppState;
