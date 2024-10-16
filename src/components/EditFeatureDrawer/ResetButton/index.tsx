import React from 'react';

import {
  faRotateLeft
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

import {
  Feature
} from 'geojson';

import OlFormatGeoJson from 'ol/format/GeoJSON';
import {
  useTranslation
} from 'react-i18next';

import {
  useMap
} from '@terrestris/react-util/dist/Hooks/useMap/useMap';
import { DigitizeUtil } from '@terrestris/react-util/dist/Util/DigitizeUtil';

import useAppDispatch from '../../../hooks/useAppDispatch';
import {
  setFormDirty
} from '../../../store/editFeature';

export type ResetButtonProps = Omit<ButtonProps, 'form'> & {
  feature: Feature;
  form: FormInstance;
};

export const ResetButton: React.FC<ResetButtonProps> = ({
  feature,
  form,
  ...passThroughProps
}) => {

  const {
    t
  } = useTranslation();

  const map = useMap();

  const dispatch = useAppDispatch();

  const onClick = () => {
    form.resetFields();
    dispatch(setFormDirty(false));

    if (map) {
      const editLayer = DigitizeUtil.getDigitizeLayer(map);
      if (editLayer) {
        editLayer.getSource()?.clear();
        const format = new OlFormatGeoJson();
        const olFeat = format.readFeature(feature);

        if (Array.isArray(olFeat)) {
          return;
        }

        editLayer.getSource()?.addFeature(olFeat);
      }
    }
  };

  return (
    <Button
      type='primary'
      onClick={onClick}
      icon={(
        <FontAwesomeIcon
          icon={faRotateLeft}
        />
      )}
      {...passThroughProps}
    >
      {
        t('ResetButton.title')
      }
    </Button>
  );
};

export default ResetButton;
