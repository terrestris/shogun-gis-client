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

import {
  Feature
} from 'geojson';

import OlFormatGeoJSON from 'ol/format/GeoJSON';

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
import {
  isWmsLayer
} from '@terrestris/react-geo/dist/Util/typeUtils';

import useExecuteWfsTransaction from '../../../hooks/useExecuteWfsTransaction';
import useWriteWfsTransaction from '../../../hooks/useWriteWfsTransaction';

export type DeleteButtonProps = ButtonProps & {
  feature: Feature;
  layerId: string;
  onError?: (error: unknown) => void;
  onSuccess?: () => void;
};

export const DeleteButton: React.FC<DeleteButtonProps> = ({
  feature,
  layerId,
  onError = () => {},
  onSuccess = () => {},
  ...passThroughProps
}) => {
  const [loading, setLoading] = useState<boolean>(false);

  const {
    t
  } = useTranslation();

  const map = useMap();

  const writeWfsTransaction = useWriteWfsTransaction();
  const executeWfsTransaction = useExecuteWfsTransaction();

  const onConfirmDelete = async () => {
    if (!map) {
      return;
    }

    const layer = MapUtil.getLayerByOlUid(map, layerId);

    if (!layer || !isWmsLayer(layer)) {
      return;
    }

    try {
      setLoading(true);

      const olFeature = new OlFormatGeoJSON().readFeature(feature);

      const transaction = writeWfsTransaction({
        deleteFeatures: [olFeature],
        layer: layer
      });

      if (!transaction) {
        return;
      }

      await executeWfsTransaction({
        layer: layer,
        transaction: transaction
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
