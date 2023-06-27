import React, {
  useState
} from 'react';

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

import OlFeature from 'ol/Feature';

import {
  useTranslation
} from 'react-i18next';

import Logger from '@terrestris/base-util/dist/Logger';

import {
  useMap
} from '@terrestris/react-geo/dist/Hook/useMap';
import {
  WmsLayer,
  isWmsLayer
} from '@terrestris/react-geo/dist/Util/typeUtils';

import useAppDispatch from '../../../hooks/useAppDispatch';
import useAppSelector from '../../../hooks/useAppSelector';
import useExecuteWfsTransaction from '../../../hooks/useExecuteWfsTransaction';
import {
  setFormDirty
} from '../../../store/editFeature';

import FeedbackIcon from '../../FeedbackIcon';

import './index.less';

export type SaveButtonProps = Omit<ButtonProps, 'form'> & {
  form: FormInstance;
  layer: WmsLayer;
  editFeature: OlFeature;
  onError?: (error: unknown) => void;
  onSuccess?: (response?: string) => void;
};

export const SaveButton: React.FC<SaveButtonProps> = ({
  form,
  layer,
  editFeature,
  onError = () => {},
  onSuccess = () => {},
  ...passThroughProps
}) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [saveCompleted, setSaveCompleted] = useState(false);

  const map = useMap();

  const executeWfsTransaction = useExecuteWfsTransaction();

  const dispatch = useAppDispatch();

  const formDirty = useAppSelector(
    state => state.editFeature.formDirty
  );

  const {
    t
  } = useTranslation();

  const onClick = async () => {
    if (!map) {
      return;
    }

    if (!layer || !isWmsLayer(layer)) {
      return;
    }

    try {
      await form.validateFields();
    } catch (error) {
      Logger.warn('Validation has failed: ', error);
      return;
    }

    try {
      setLoading(true);

      const result = await executeWfsTransaction({
        layer: layer,
        upsertFeatures: [editFeature]
      });

      layer.getSource()?.refresh();

      setSaveCompleted(true);
      setTimeout(() => {
        setSaveCompleted(false);
      }, 3000);

      onSuccess(result);
    } catch (error) {
      Logger.error(error);

      onError(error);
    } finally {
      setLoading(false);
      dispatch(setFormDirty(false));
    }
  };

  return (
    <Button
      className='save-button'
      type='primary'
      onClick={onClick}
      loading={loading}
      disabled={!formDirty}
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
      <FeedbackIcon loadComplete={saveCompleted} />
    </Button>
  );
};

export default SaveButton;
