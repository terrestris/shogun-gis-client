import React from 'react';

import { useTranslation } from 'react-i18next';
import { useMap } from '@terrestris/react-geo/dist/Hook/useMap';

import { Button, Input, Modal, Table } from 'antd';

import OlLayerGroup from 'ol/layer/Group';

import { useDispatch, useSelector } from 'react-redux';

import { ProjectClientState } from '../../store/reducer';
import { deselectKey } from '../../store/MenuSelectedKeys';
import { hide } from '../../store';
import { useState } from 'react';
import { WMSLayer } from '@terrestris/ol-util/dist/types';
import { CapabilitiesUtil, MapUtil } from '@terrestris/ol-util';
import { getUid } from 'ol';

import './AddLayerModal.less';

interface DefaultAddLayerModalProps { }

export interface AddLayerModalProps extends Partial<DefaultAddLayerModalProps> { }

export const AddLayerModal: React.FC<AddLayerModalProps> = () => {

  const dispatch = useDispatch();
  const isModalVisible = useSelector(
    (state: ProjectClientState) => state.addLayerModalState.visible
  );
  const [loading, setLoading] = useState(false);
  const [layers, setLayers] = useState<WMSLayer[]>([]);
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [url, setUrl] = useState(
    'https://sgx.geodatenzentrum.de/wms_topplus_open?request=GetCapabilities&service=wms'
  );
  const map = useMap();
  const { t } = useTranslation();

  const getCapabilities = (capabilitiesUrl: string) => {
    setLoading(true);
    CapabilitiesUtil.getWmsCapabilities(capabilitiesUrl)
      .then((capabilities: any) => CapabilitiesUtil.getLayersFromWmsCapabilities(capabilities, 'Title'))
      .then(setLayers)
      .finally(() => setLoading(false));
  };

  const closeModal = () => {
    setSelectedRowKeys([]);
    setLayers([]);
    dispatch(hide());
    dispatch(deselectKey('addLayer'));
  };

  const onAddSelected = () => {
    const layersToAdd = layers.filter(layer => selectedRowKeys.includes(getUid(layer)));
    addLayers(layersToAdd);
  };

  const onAddAll = () => {
    addLayers(layers);
  };

  const addLayers = (layersToAdd: WMSLayer[]) => {

    if (!map) {
      return;
    }
    const targetFolderName = t('GproLayerTree.externalWmsFolder');
    let targetGroup = MapUtil.getLayerByName(map, targetFolderName) as OlLayerGroup;
    if (!targetGroup) {
      targetGroup = new OlLayerGroup();
      targetGroup.set('name', targetFolderName);
      const existingGroups = map.getLayerGroup().getLayers();
      existingGroups.insertAt(existingGroups?.getLength() || 0, targetGroup);
    }

    layersToAdd.forEach(layerToAdd => {
      if (!targetGroup.getLayers().getArray().includes(layerToAdd)) {
        layerToAdd.set('isExternalLayer', true);
        targetGroup.getLayers().push(layerToAdd);
      }
    });

    targetGroup.set('hideInLayerTree', targetGroup.getLayers().getLength() < 1);
    closeModal();
  };

  return (
    <Modal
      className="add-layer-modal"
      title="WMS layer hinzufügen"
      visible={isModalVisible}
      onCancel={closeModal}
      footer={[
        <Button
          key="add-selected"
          disabled={selectedRowKeys?.length < 1}
          onClick={onAddSelected}
        >
          {t('AddLayerModal.addSelectedLayers')}
        </Button>,
        <Button
          key="add-all"
          disabled={layers?.length < 1}
          onClick={onAddAll}
        >
          {t('AddLayerModal.addAllLayers')}
        </Button>
      ]}
    >
      <Input.Search
        placeholder={t('AddLayerModal.inputPlaceholder')}
        value={url}
        onChange={(event) => {
          setUrl(event.target.value);
        }}
        onSearch={getCapabilities}
        enterButton={true}
      />
      <Table
        loading={loading}
        columns={[
          {
            title: 'Name',
            render: (text: any, record: any) => {
              return record.get('title');
            }
          }
        ]}
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
