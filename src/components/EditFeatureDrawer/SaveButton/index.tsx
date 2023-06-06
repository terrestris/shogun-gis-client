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
  useMap
} from '@terrestris/react-geo/dist/Hook/useMap';
import {
  DigitizeUtil
} from '@terrestris/react-geo/dist/Util/DigitizeUtil';
import {
  WmsLayer,
  isWmsLayer
} from '@terrestris/react-geo/dist/Util/typeUtils';

import useExecuteWfsTransaction from '../../../hooks/useExecuteWfsTransaction';
import useWriteWfsTransaction from '../../../hooks/useWriteWfsTransaction';

export type SaveButtonProps = Omit<ButtonProps, 'form'> & {
  form: FormInstance;
  layer: WmsLayer;
  onError?: (error: unknown) => void;
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

  const map = useMap();

  const writeWfsTransaction = useWriteWfsTransaction();
  const executeWfsTransaction = useExecuteWfsTransaction();

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
      return;
    }

    const features = editLayer.getSource()?.getFeatures();

    if (!features || features.length === 0) {
      Logger.error('Cannot save feature without geometry');
      return;
    };

    try {
      await form.validateFields();
    } catch (error) {
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
      type='primary'
      onClick={onClick}
      loading={loading}
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
