import React from 'react';

import './index.less';

export type FeedbackIconProps = {
  loadComplete: boolean;
};

export const FeedbackIcon: React.FC<FeedbackIconProps> = ({
  loadComplete = false
}) => {

  return (
    <div className={loadComplete ? 'feedback-icon' : 'feedback-icon hidden'}>
      <div className={loadComplete ? 'checkmark' : 'checkmark-hidden'} />
    </div>
  );
};

export default FeedbackIcon;
