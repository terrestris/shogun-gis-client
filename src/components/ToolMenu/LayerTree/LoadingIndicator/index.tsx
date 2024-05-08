import React from 'react';

import { Spin } from 'antd';
import './index.less';

export const LoadingIndicator: React.FC = (): JSX.Element => {
  return (
    <div className="layer-node-title-loading-animation">
      <Spin
        size='small'
      />
    </div>
  );
};

export default LoadingIndicator;
