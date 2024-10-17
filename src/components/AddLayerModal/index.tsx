import React, {
  useState,
  useEffect
} from 'react';

import {
  Input,
  Modal,
  ModalProps,
  notification,
  Select,
  Table,
  Typography
} from 'antd';

import {
  InputStatus
} from 'antd/lib/_util/statusUtils';

import {
  getUid
} from 'ol';
import OlLayerGroup from 'ol/layer/Group';
import ImageLayer from 'ol/layer/Image';
import TileLayer from 'ol/layer/Tile';
import ImageWMSSource from 'ol/source/ImageWMS';
import TileWMSSource from 'ol/source/TileWMS';

import {
  useTranslation
} from 'react-i18next';

import Logger from '@terrestris/base-util/dist/Logger';
import { UrlUtil } from '@terrestris/base-util/dist/UrlUtil/UrlUtil';
import CapabilitiesUtil from '@terrestris/ol-util/dist/CapabilitiesUtil/CapabilitiesUtil';
import { MapUtil } from '@terrestris/ol-util/dist/MapUtil/MapUtil';

import SimpleButton from '@terrestris/react-geo/dist/Button/SimpleButton/SimpleButton';
import {
  useMap
} from '@terrestris/react-util/dist/Hooks/useMap/useMap';

import useAppDispatch from '../../hooks/useAppDispatch';
import useAppSelector from '../../hooks/useAppSelector';
import {
  hide
} from '../../store/addLayerModal';

import './index.less';

export type AddLayerModalProps = Partial<ModalProps>;

export const AddLayerModal: React.FC<AddLayerModalProps> = ({
  ...restProps
}): JSX.Element => {
  const [loading, setLoading] = useState(false);
  const [layers, setLayers] = useState<(ImageLayer<ImageWMSSource> | TileLayer<TileWMSSource>)[]>([]);
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [validationStatus, setValidationStatus] = useState<InputStatus>('');
  const [url, setUrl] = useState(
    'https://sgx.geodatenzentrum.de/wms_topplus_open'
  );
  const [sanitizedUrl, setSanitizedUrl] = useState<string>();
  const [version, setVersion] = useState<string>('1.3.0');

  const isModalVisible = useAppSelector(state => state.addLayerModal.visible);

  const dispatch = useAppDispatch();

  const map = useMap();

  const {
    t
  } = useTranslation();

  useEffect(() => {
    if (!isModalVisible) {
      return;
    }
    setSanitizedUrl(UrlUtil.createValidGetCapabilitiesRequest(url, 'WMS', version));
  }, [version, isModalVisible, url]);

  const onUrlChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const value = evt.target.value;
    setValidationStatus(UrlUtil.isValid(value.trim()) ? '' : 'error');
    setUrl(evt.target.value);
  };

  const getCapabilities = async () => {
    if (!sanitizedUrl) {
      return;
    }
    try {
      setLoading(true);

      const capabilities = await CapabilitiesUtil.getWmsCapabilities(sanitizedUrl);
      const externalLayers = CapabilitiesUtil.getLayersFromWmsCapabilities(capabilities, 'Title');

      setLayers(externalLayers);
    } catch (error) {
      notification.error({
        message: t('AddLayerModal.errorMessage'),
        description: t('AddLayerModal.errorDescription')
      });

      Logger.error(error);
    } finally {
      setLoading(false);
    }
  };

  const closeModal = () => {
    setSelectedRowKeys([]);
    setLayers([]);
    dispatch(hide());
  };

  const onAddSelected = () => {
    const layersToAdd = layers.filter(layer => selectedRowKeys.includes(getUid(layer)));
    addLayers(layersToAdd);
  };

  const onAddAll = () => {
    addLayers(layers);
  };

  const addLayers = (layersToAdd: (ImageLayer<ImageWMSSource> | TileLayer<TileWMSSource>)[]) => {
    if (!map) {
      return;
    }

    const targetFolderName = t('AddLayerModal.externalWmsFolder');
    let targetGroup = MapUtil.getLayerByName(map, targetFolderName) as OlLayerGroup;

    if (!targetGroup) {
      targetGroup = new OlLayerGroup({
        layers: []
      });
      targetGroup.set('name', targetFolderName);
      const existingGroups = map.getLayerGroup().getLayers();
      existingGroups.insertAt(existingGroups?.getLength() || 0, targetGroup);
    }

    layersToAdd.forEach(layerToAdd => {
      if (!targetGroup.getLayers().getArray().includes(layerToAdd)) {
        layerToAdd.set('isExternalLayer', true);

        let layerUrl: string | undefined;
        if (layerToAdd instanceof ImageLayer) {
          layerUrl = layerToAdd.getSource()?.getUrl();
        }

        if (layerToAdd instanceof TileLayer) {
          const urls = layerToAdd.getSource()?.getUrls();
          layerUrl = urls?.length === 1 ? urls[0] : undefined;
        }

        const layerConfig = {
          name: layerToAdd.get('name'),
          type: layerToAdd instanceof TileLayer ? 'TILEWMS' : 'WMS',
          opacity: layerToAdd.getOpacity(),
          sourceConfig: {
            layerNames: layerToAdd.getSource()?.getParams().LAYERS,
            url: layerUrl,
            useBearerToken: false
          }
        };
        layerToAdd.set('layerConfig', layerConfig);
        targetGroup.getLayers().push(layerToAdd);
        const event = new CustomEvent('layerAdded', { detail: layerToAdd });
        document.dispatchEvent(event);
      }
    });

    closeModal();
  };

  return (
    <Modal
      className="add-layer-modal"
      title={t('AddLayerModal.title')}
      open={isModalVisible}
      onCancel={closeModal}
      width={600}
      footer={[
        <SimpleButton
          aria-label='add-all'
          key="add-all"
          disabled={layers?.length < 1}
          onClick={onAddAll}
        >
          {t('AddLayerModal.addAllLayers')}
        </SimpleButton>,
        <SimpleButton
          aria-label='add-selected'
          key="add-selected"
          disabled={selectedRowKeys?.length < 1}
          onClick={onAddSelected}
        >
          {t('AddLayerModal.addSelectedLayers')}
        </SimpleButton>
      ]}
      {...restProps}
    >
      <span>{t('AddLayerModal.requestWmsGetCapabilitiesInstruction')}</span>
      <Input.Search
        aria-label='input-search'
        className='url-input'
        placeholder={t('AddLayerModal.inputPlaceholder')}
        value={url}
        onChange={onUrlChange}
        onSearch={getCapabilities}
        status={validationStatus}
        enterButton={true}
        addonBefore={
          <Select
            aria-label='select-version'
            defaultValue='1.3.0'
            onChange={setVersion}
            options={[
              {
                value: '1.3.0',
                label: `${t('AddLayerModal.version')} 1.3.0`
              },
              {
                value: '1.1.1',
                label: `${t('AddLayerModal.version')} 1.1.1`
              }
            ]}
          >
          </Select>
        }
      />
      {
        validationStatus !== '' &&
        <Typography className='error'>
          {t('AddLayerModal.invalidUrlErrorMsg')}
        </Typography>
      }
      <Table
        aria-label='wms-table'
        loading={loading}
        columns={[
          {
            title: t('AddLayerModal.columnTitle'),
            render: (text: any, record: any) => {
              return record.get('title');
            }
          }
        ]}
        scroll={{
          y: 250
        }}
        rowKey={(record: any) => getUid(record)}
        rowSelection={{
          selectedRowKeys,
          onChange: setSelectedRowKeys
        }}
        pagination={false}
        dataSource={layers}
      />
    </Modal>
  );
};

export default AddLayerModal;
