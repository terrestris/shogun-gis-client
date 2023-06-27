import React, {
  useState
} from 'react';

import {
  faTrash
} from '@fortawesome/free-solid-svg-icons';
import {
  FontAwesomeIcon
} from '@fortawesome/react-fontawesome';

import {
  Button,
  ButtonProps,
  Popconfirm
} from 'antd';

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

import useExecuteWfsTransaction from '../../../hooks/useExecuteWfsTransaction';

export type DeleteButtonProps = ButtonProps & {
  editFeature: OlFeature;
  layer: WmsLayer;
  onError?: (error: unknown) => void;
  onSuccess?: () => void;
};

export const DeleteButton: React.FC<DeleteButtonProps> = ({
  editFeature,
  layer,
  onError = () => {},
  onSuccess = () => {},
  ...passThroughProps
}) => {
  const [loading, setLoading] = useState<boolean>(false);

  const {
    t
  } = useTranslation();

  const map = useMap();

  const executeWfsTransaction = useExecuteWfsTransaction();

  const onConfirmDelete = async () => {
    if (!map) {
      return;
    }

    if (!layer || !isWmsLayer(layer)) {
      return;
    }

    try {
      setLoading(true);

      await executeWfsTransaction({
        deleteFeatures: [editFeature],
        layer: layer
      });

      layer.getSource()?.refresh();

      onSuccess();
    } catch (error) {
      Logger.error(error);

      onError(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Popconfirm
      title={t('DeleteButton.confirm')}
      onConfirm={onConfirmDelete}
      placement='bottomRight'
    >
      <Button
        type='primary'
        loading={loading}
        disabled={!editFeature.getId()}
        danger
        icon={(
          <FontAwesomeIcon
            icon={faTrash}
          />
        )}
        {...passThroughProps}
      >
        {
          t('DeleteButton.title')
        }
      </Button>
    </Popconfirm>
  );
};

export default DeleteButton;
