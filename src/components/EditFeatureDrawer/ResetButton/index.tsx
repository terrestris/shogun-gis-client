import React, {
  useEffect,
  useState
} from 'react';

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

import OlFeature from 'ol/Feature';
import OlGeometry from 'ol/geom/Geometry';

import {
  useTranslation
} from 'react-i18next';

import {
  useMap
} from '@terrestris/react-geo/dist/Hook/useMap';
import {
  DigitizeUtil
} from '@terrestris/react-geo/dist/Util/DigitizeUtil';

import useAppDispatch from '../../../hooks/useAppDispatch';
import {
  setFormDirty
} from '../../../store/editFeature';

export type ResetButtonProps = Omit<ButtonProps, 'form'> & {
  editFeature: OlFeature;
  form: FormInstance;
};

export const ResetButton: React.FC<ResetButtonProps> = ({
  editFeature,
  form,
  ...passThroughProps
}) => {
  const [initialFeatureGeom, setInitialFeatureGeom] = useState<OlGeometry>();

  const {
    t
  } = useTranslation();

  const map = useMap();

  const dispatch = useAppDispatch();

  useEffect(() => {
    setInitialFeatureGeom(editFeature.getGeometry()?.clone());
  }, [editFeature]);

  const onClick = () => {
    form.resetFields();
    // TODO This assumption is probably not correct anymore
    dispatch(setFormDirty(false));

    if (!map) {
      return;
    }

    const editLayer = DigitizeUtil.getDigitizeLayer(map);

    if (!editLayer || !initialFeatureGeom) {
      return;
    }

    editFeature.set(editFeature.getGeometryName(), initialFeatureGeom.clone());
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
