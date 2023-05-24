import React from 'react';

import { t } from 'i18next';

import SimpleButton, {
  SimpleButtonProps
} from '@terrestris/react-geo/dist/Button/SimpleButton/SimpleButton';

import './index.less';

export type EditFeatureSwitchProps = SimpleButtonProps & {};

export const EditFeatureSwitch: React.FC<EditFeatureSwitchProps> = ({
  ...passThroughProps
}) => {
  return (
    <div className="createOrEditFeature">
      <SimpleButton {...passThroughProps}>
        {t('EditFeatureDrawer.selectFeature')}
      </SimpleButton>
      <SimpleButton {...passThroughProps}>
        {t('EditFeatureDrawer.createFeature')}
      </SimpleButton>
    </div>
  );
};

export default EditFeatureSwitch;
