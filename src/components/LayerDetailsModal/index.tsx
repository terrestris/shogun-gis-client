import React, {
  useState,
  useEffect
} from 'react';

import {
  FileTextOutlined
} from '@ant-design/icons';

import {
  Button,
  Modal,
  ModalProps,
  Tooltip
} from 'antd';

import OlLayer from 'ol/layer/Layer';

import {
  useTranslation
} from 'react-i18next';

import { MapUtil } from '@terrestris/ol-util/dist/MapUtil/MapUtil';

import {
  useMap
} from '@terrestris/react-util/dist/Hooks/useMap/useMap';

import useAppDispatch from '../../hooks/useAppDispatch';
import useAppSelector from '../../hooks/useAppSelector';
import useLocalize from '../../hooks/useLocalize';

import {
  hide as hideLayerDetailsModal,
  setLayer as setDetailsLayer
} from '../../store/layerDetailsModal';

import LayerConfiguration from './LayerConfiguration';
import LayerDetails from './LayerDetails';

import './index.less';

export type LayerDetailsModalProps = Partial<ModalProps>;

export const LayerDetailsModal: React.FC<LayerDetailsModalProps> = ({
  ...restProps
}): JSX.Element => {
  const [layer, setLayer] = useState<OlLayer>();
  const [configurationVisible, setConfigurationVisible] = useState<boolean>(false);

  const isModalVisible = useAppSelector(state => state.layerDetailsModal.visible);
  const layerId = useAppSelector(state => state.layerDetailsModal.layerId);

  const dispatch = useAppDispatch();

  const map = useMap();

  const localize = useLocalize();

  const {
    t
  } = useTranslation();

  useEffect(() => {
    if (!map) {
      return;
    }

    if (!layerId) {
      setLayer(undefined);
      return;
    }

    const l = MapUtil.getLayerByOlUid(map, layerId);

    if (!(l instanceof OlLayer)) {
      return;
    }

    setLayer(l);
  }, [map, layerId]);

  const closeModal = () => {
    dispatch(hideLayerDetailsModal());
    dispatch(setDetailsLayer(undefined));
  };

  const onShowConfigurationClick = () => {
    setConfigurationVisible(!configurationVisible);
  };

  return (
    <Modal
      className="layer-details-modal"
      title={(
        <div
          className="title-group"
        >
          <span>{t('LayerDetailsModal.title', {
            layerName: localize(layer?.get('name'))
          })}
          </span>
          {
            layer?.get('shogunId') && (
              <Tooltip
                title={configurationVisible ?
                  t('LayerDetailsModal.internalConfigurationButtonTooltipPressed') :
                  t('LayerDetailsModal.internalConfigurationButtonTooltip')
                }
              >
                <Button
                  type="link"
                  className={configurationVisible ? 'pressed' : ''}
                  icon={<FileTextOutlined />}
                  onClick={onShowConfigurationClick}
                />
              </Tooltip>
            )
          }
        </div>
      )}
      open={isModalVisible}
      onCancel={closeModal}
      width={800}
      footer={false}
      {...restProps}
    >
      <LayerDetails
        layer={layer}
        hidden={configurationVisible}
      />
      {
        layer?.get('shogunId') && (
          <LayerConfiguration
            layer={layer}
            hidden={!configurationVisible}
          />
        )
      }
    </Modal>
  );
};

export default LayerDetailsModal;
