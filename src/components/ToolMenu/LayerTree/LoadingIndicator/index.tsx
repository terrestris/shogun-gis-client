import React from 'react';

import './index.less';

export const LoadingIndicator: React.FC = (): JSX.Element => {
  return (
    <div className="layer-node-title-loading-animation">
      <span className="dot-one">.</span>
      <span className="dot-two">.</span>
      <span className="dot-three">.</span>
    </div>
  );
};

export default LoadingIndicator;
