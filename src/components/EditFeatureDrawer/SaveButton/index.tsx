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

import {
  useTranslation
} from 'react-i18next';

import {
  Logger
} from '@terrestris/base-util';

import {
  WmsLayer,
  isWmsLayer
} from '@terrestris/ol-util/dist/typeUtils/typeUtils';

import {
  useMap
} from '@terrestris/react-util/dist/Hooks/useMap/useMap';
import {
  DigitizeUtil
} from '@terrestris/react-util/dist/Util/DigitizeUtil';

import useAppDispatch from '../../../hooks/useAppDispatch';
import useAppSelector from '../../../hooks/useAppSelector';
import useExecuteWfsTransaction from '../../../hooks/useExecuteWfsTransaction';
import useWriteWfsTransaction from '../../../hooks/useWriteWfsTransaction';
import {
  setFormDirty
} from '../../../store/editFeature';

import './index.less';
import FeedbackIcon from '../../FeedbackIcon';

export type SaveButtonProps = Omit<ButtonProps, 'form'> & {
  form: FormInstance;
  layer: WmsLayer;
  onError?: (error?: unknown) => void;
  onSuccess?: (response?: string) => void;
};

export const SaveButton: React.FC<SaveButtonProps> = ({
  form,
  layer,
  onError = () => {},
  onSuccess = () => {},
  ...passThroughProps
}) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [saveCompleted, setSaveCompleted] = useState(false);

  const map = useMap();

  const writeWfsTransaction = useWriteWfsTransaction();
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

    const editLayer = DigitizeUtil.getDigitizeLayer(map);

    if (!editLayer) {
      Logger.error('Cannot find the digitize layer');
      onError();
      return;
    }

    const features = editLayer.getSource()?.getFeatures();

    if (!features || features.length === 0) {
      Logger.error('Cannot save feature without geometry');
      onError(t('SaveButton.errorNoGeometry'));
      return;
    }

    try {
      await form.validateFields();
    } catch (error) {
      onError(error);
      Logger.warn('Validation has failed: ', error);
      return;
    }

    try {
      setLoading(true);

      const transaction = await writeWfsTransaction({
        upsertFeatures: features,
        form: form,
        layer: layer
      });

      if (!transaction) {
        return;
      }

      const result = await executeWfsTransaction({
        layer: layer,
        transaction: transaction
      });

      layer.getSource()?.refresh();

      setSaveCompleted(true);
      setTimeout(() => {
        setSaveCompleted(false);
      }, 3000);

      dispatch(setFormDirty(false));

      onSuccess(result);
    } catch (error) {
      Logger.error(error);

      onError(error);
    } finally {
      setLoading(false);
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
