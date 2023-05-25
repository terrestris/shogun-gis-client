import React from 'react';

import {
  faFloppyDisk
} from '@fortawesome/free-solid-svg-icons';
import {
  FontAwesomeIcon
} from '@fortawesome/react-fontawesome';

import {
  Button,
  ButtonProps
} from 'antd';

import {
  FormInstance
} from 'antd/lib/form/Form';

import OlSourceVector from 'ol/source/Vector';

import {
  useTranslation
} from 'react-i18next';

import {
  Logger
} from '@terrestris/base-util';

import {
  MapUtil
} from '@terrestris/ol-util/dist/MapUtil/MapUtil';

import {
  useMap
} from '@terrestris/react-geo/dist/Hook/useMap';
import { DigitizeUtil } from '@terrestris/react-geo/dist/Util/DigitizeUtil';

export type SaveButtonProps = Omit<ButtonProps, 'form'> & {
  form: FormInstance;
  layerId?: string;
};

export const SaveButton: React.FC<SaveButtonProps> = ({
  form,
  layerId,
  ...passThroughProps
}) => {

  const map = useMap();

  const {
    t
  } = useTranslation();

  const onClick = async () => {
    try {
      await form.validateFields();

      const values = form.getFieldsValue();

      if (!map || !layerId) {
        return;
      }

      const layer = MapUtil.getLayerByOlUid(map, layerId);

      const editLayer = DigitizeUtil.getDigitizeLayer(map);
      if (editLayer) {
        if ((editLayer.getSource() as OlSourceVector)?.getFeatures()?.length < 1) {
          console.log('Cannot save feature without geometry!');
        };
      }

      console.log(`TODO: Save the following values for layer ${layer?.get('name')}`, values);
    } catch (error) {
      Logger.error(error);
    }
  };

  return (
    <Button
      type='primary'
      onClick={onClick}
      icon={(
        <FontAwesomeIcon
          icon={faFloppyDisk}
        />
      )}
      {...passThroughProps}
    >
      {
        t('SaveButton.title')
      }
    </Button>
  );
};

export default SaveButton;
