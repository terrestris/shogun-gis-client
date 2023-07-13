import React, {
  useCallback,
  useEffect,
  useState
} from 'react';

import {
  Alert,
  Button,
  Modal,
  Table,
  Spin
} from 'antd';

import {
  ColumnsType,
  TableProps
} from 'antd/lib/table';

import {
  Feature
} from 'geojson';

import OlFeature from 'ol/Feature';
import {
  equalTo
} from 'ol/format/filter';

import {
  useTranslation
} from 'react-i18next';

import Logger from '@terrestris/base-util/dist/Logger';

import {
  MapUtil
} from '@terrestris/ol-util/dist/MapUtil/MapUtil';

import {
  useMap
} from '@terrestris/react-geo/dist/Hook/useMap';
import {
  WmsLayer,
  isWmsLayer
} from '@terrestris/react-geo/dist/Util/typeUtils';

import SHOGunApplicationUtil from '@terrestris/shogun-util/dist/parser/SHOGunApplicationUtil';

import useAppDispatch from '../../../hooks/useAppDispatch';
import useAppSelector from '../../../hooks/useAppSelector';
import useExecuteGetFeature from '../../../hooks/useExecuteGetFeature';
import useSHOGunAPIClient from '../../../hooks/useSHOGunAPIClient';

import {
  setFeature as setEditFeature
} from '../../../store/editFeature';

import EditFeatureFullForm from '../EditFeatureFullForm';

import './index.less';

export type ReferenceDataType = {
  featureId: string | number;
  featureDescription: string;
};

export type ReferenceTableProps = TableProps<ReferenceDataType> & {
  parentEditLayer: WmsLayer;
  parentEditFeature: OlFeature;
  layerId: number;
  propertyName: string;
  referencePropertyName: string;
  referencedLayerPropertyName: string;
  readOnly?: boolean;
  tablePropertyName?: string;
};

// TODO Readd WFS LockFeature?
export const ReferenceTable: React.FC<ReferenceTableProps> = ({
  parentEditLayer,
  parentEditFeature,
  layerId,
  propertyName,
  referencePropertyName,
  referencedLayerPropertyName,
  readOnly,
  tablePropertyName,
  ...passThroughProps
}) => {
  const [isFeaturesLoading, setIsFeaturesLoading] = useState<boolean>(false);
  const [features, setFeatures] = useState<Feature[]>();
  const [feature, setFeature] = useState<Feature>();
  const [mode, setMode]= useState<'create' | 'update'>();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [layer, setLayer] = useState<WmsLayer>();
  const [errorMsg, setErrorMsg] = useState<string>();

  const rootEditFeature = useAppSelector(state => state.editFeature.feature);
  // const editLayerId = useAppSelector(state => state.editFeature.layerId);

  const executeGetFeature = useExecuteGetFeature();
  const client = useSHOGunAPIClient();
  const dispatch = useAppDispatch();
  const map = useMap();
  const {
    t
  } = useTranslation();

  useEffect(() => {
    return () => {
      console.log('UNMOUNT REFERENCE TABLE');
    };
  }, []);

  const getData = useCallback(async () => {
    if (!map || !client || !layerId) {
      return;
    }

    try {
      setIsFeaturesLoading(true);

      let lay: WmsLayer | null = null;
      const existingLayer = MapUtil.getLayersByProperty(map, 'shogunId', layerId)[0];
      if (existingLayer && isWmsLayer(existingLayer)) {
        lay = existingLayer;
      } else {
        const layerCfg = await client?.layer().findOne(layerId);

        const parser = new SHOGunApplicationUtil({
          client
        });

        const newLayer = await parser.parseLayer(layerCfg);

        if (newLayer && isWmsLayer(newLayer)) {
          lay = newLayer;
        }
      }

      if (!lay || !isWmsLayer(lay)) {
        return;
      }

      console.log('parentEditFeature', parentEditFeature);

      // eg in create mode
      if (!parentEditFeature.getProperties()[referencePropertyName]) {
        return;
      }

      // Get all referenced features
      const feat = await executeGetFeature({
        layer: lay,
        filter: equalTo(referencedLayerPropertyName, parentEditFeature.getProperties()[referencePropertyName])
      });

      setFeatures(feat?.features);
      setLayer(lay);
    } catch (error) {
      Logger.error(error);
    } finally {
      setIsFeaturesLoading(false);
    }
  }, [map, client, layerId, executeGetFeature, referencePropertyName, parentEditFeature, referencedLayerPropertyName]);

  useEffect(() => {
    getData();
  }, [getData]);

  useEffect(() => {
    if (!features || !feature) {
      return;
    }

    console.log(feature.id)
    console.log(features)

    const match = features.find(f => f.id === feature.id);

    console.log(match)
    if (!match) {
      return;
    }

    console.log('update feature ', match);

    setFeature(match);
  }, [features, feature]);

  const onAddClick = async () => {
    if (!client || !layer) {
      return;
    }

    // @ts-ignore
    const feat: Feature = {
      type: 'Feature',
      // TODO specify reference!
      properties: {}
      // geometry: {
      //   type: 'Point',
      //   coordinates: []
      // }
    };

    if (feat.properties) {
      feat.properties[`_${referencedLayerPropertyName}_`] = parentEditFeature.getProperties()[referencePropertyName];
    }

    console.log('add feature ', feat)

    setFeature(feat);
    setIsModalOpen(true);
  };

  const onEditClick = async (value: any, record: ReferenceDataType) => {
    const feat = features?.find(f => f.id === record.featureId);

    if (!feat) {
      return;
    }

    console.log('edit feature ', feat)

    setFeature(feat);
    setIsModalOpen(true);
  };

  const onCancel = async () => {
    setErrorMsg(undefined);
    setIsModalOpen(false);

    // TODO Check if something has changed before reloading
    // await reloadParent();
  };

  const getColumns = () => {
    const columns: ColumnsType<ReferenceDataType> = [{
      width: '100%',
      dataIndex: 'featureDescription'
    }];

    if (!readOnly) {
      columns.push({
        render: (value: any, record: ReferenceDataType) => {
          return (
            <Button
              onClick={() => onEditClick(value, record)}
            >
              {t('ReferenceTable.editButtonTitle')}
            </Button>
          );
        }
      });
    }

    return columns;
  };

  const reloadParent = async () => {
    if (!map || !parentEditLayer || !parentEditFeature || !parentEditFeature.getId()) {
      return;
    }

    const updatedFeatures = await executeGetFeature({
      layer: parentEditLayer,
      filter: equalTo('id', (parentEditFeature.getId() as string).split('.')[1])
    });

    const f = updatedFeatures?.features[0];

    if (f && rootEditFeature && f.id === rootEditFeature.id) {
      // TODO Create thunk for reloading the feature instead?
      dispatch(setEditFeature(f));
    }
    // TODO What should happen else?

    // TODO Is this needed? It's not supposed the layer is added to the map
    // parentEditLayer.getSource()?.refresh();
  };

  const onSaveSuccess = async (responseText?: string) => {
    await reloadParent();

    if (!responseText || !layer) {
      return;
    }

    // Reload feature in create mode.
    if (feature && !feature.id) {
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(responseText, 'text/xml');

      // Get feature id from response
      const featureId = xmlDoc.getElementsByTagName('ogc:FeatureId');
      const idString = featureId.item(0)?.getAttribute('fid');
      // const id = idString?.split('.')[1];

      if (idString) {
        setFeature({
          ...feature,
          id: idString
        });

        // const updatedFeatures = await executeGetFeature({
        //   layer: layer,
        //   filter: equalTo('id', id)
        // });

        // if (updatedFeatures && updatedFeatures.features.length === 1) {
        //   setFeature(updatedFeatures.features[0]);
        // }
      }
    }
  };

  const onDeleteSuccess = async () => {
    await reloadParent();

    setIsModalOpen(false);
  };

  const getDataSource = () => {
    return features?.map(feat => ({
      key: feat.id,
      featureId: feat.id,
      featureDescription: tablePropertyName ? feat.properties?.[tablePropertyName] : feat.properties?.[propertyName]
    } as ReferenceDataType));
  };

  return (
    <>
      {
        errorMsg && (
          <Alert
            className="error-alert"
            message={errorMsg}
            type="error"
            showIcon
          />
        )
      }
      <Button
        onClick={onAddClick}
      >
        {t('ReferenceTable.addButtonTitle')}
      </Button>
      <Table
        size='small'
        showHeader={false}
        pagination={false}
        columns={getColumns()}
        loading={isFeaturesLoading}
        dataSource={getDataSource()}
        {...passThroughProps}
      />
      <Modal
        className="reference-table-modal"
        open={isModalOpen}
        maskClosable={false}
        footer={null}
        width={600}
        destroyOnClose={true}
        // Using the i18n from EditFeatureDrawer is intended here.
        title={`${t('EditFeatureDrawer.featureEditor')} - ${layer?.get('name')}`}
        onCancel={onCancel}
      >
        {
          (layer && feature) && (
            <Spin
              spinning={isFeaturesLoading}
            >
              <EditFeatureFullForm
                feature={feature}
                layer={layer}
                // additionalAttributes={[
                //   referencedLayerPropertyName
                // ]}
                showEditToolbar={false}
                onSaveSuccess={onSaveSuccess}
                onDeleteSuccess={onDeleteSuccess}
              />
            </Spin>
          )
        }
      </Modal>
    </>
  );
};

export default ReferenceTable;
