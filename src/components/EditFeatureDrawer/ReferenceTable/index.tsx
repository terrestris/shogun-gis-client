import React, {
  useCallback,
  useEffect,
  useState
} from 'react';

import {
  Alert,
  Button,
  Modal,
  Table
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
// import useAppSelector from '../../../hooks/useAppSelector';
import useExecuteGetFeature from '../../../hooks/useExecuteGetFeature';
import useSHOGunAPIClient from '../../../hooks/useSHOGunAPIClient';

// import {
//   setFeature as setRootFeature
// } from '../../../store/editFeature';

import EditFeatureFullForm from '../EditFeatureFullForm';

export type ReferenceDataType = {
  featureId: string | number;
  featureDescription: string;
};

export type ReferenceTableProps = TableProps<ReferenceDataType> & {
  parentEditFeature: OlFeature;
  layerId: number;
  propertyName: string;
  referencePropertyName: string;
  referencedLayerPropertyName: string;
  readOnly?: boolean;
  tablePropertyName?: string;
};

// TODO Readd WFS LockFeature
export const ReferenceTable: React.FC<ReferenceTableProps> = ({
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
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [layer, setLayer] = useState<WmsLayer>();
  const [errorMsg, setErrorMsg] = useState<string>();

  // TODO Replace with parent?
  // const editFeature = useAppSelector(state => state.editFeature.feature);
  // const editLayerId = useAppSelector(state => state.editFeature.layerId);

  const executeGetFeature = useExecuteGetFeature();
  const client = useSHOGunAPIClient();
  const dispatch = useAppDispatch();
  const map = useMap();
  const {
    t
  } = useTranslation();

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
      feat.properties[referencedLayerPropertyName] = parentEditFeature.getProperties()[referencePropertyName];
    }

    console.log(feat);

    setFeature(feat);
    setIsModalOpen(true);
  };

  const onEditClick = async (value: any, record: ReferenceDataType) => {
    const feat = features?.find(f => f.id === record.featureId);

    if (!feat) {
      return;
    }

    setFeature(feat);
    setIsModalOpen(true);
  };

  const onCancel = async () => {
    setErrorMsg(undefined);
    setIsModalOpen(false);
  };

  const getColumns = () => {
    const columns: ColumnsType<ReferenceDataType> = [{
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

  // const reloadParent = async () => {
  //   if (!map || !editLayerId || !parentEditFeature || !parentEditFeature.getId()) {
  //     return;
  //   }

  //   const rootLayer = MapUtil.getLayerByOlUid(map, editLayerId);

  //   if (!rootLayer || !isWmsLayer(rootLayer)) {
  //     return;
  //   }

  //   const updatedFeatures = await executeGetFeature({
  //     layer: rootLayer,
  //     filter: equalTo('id', (parentEditFeature.getId() as string).split('.')[1])
  //   });

  //   const f = updatedFeatures?.features[0];

  //   if (f) {
  //     dispatch(setRootFeature(f));
  //   }

  //   rootLayer.getSource()?.refresh();
  // };

  const onSaveSuccess = async () => {
    // await reloadParent();
  };

  const onDeleteSuccess = async () => {
    // await reloadParent();
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
        open={isModalOpen}
        maskClosable={false}
        footer={null}
        width={600}
        // Using the i18n from EditFeatureDrawer is intended here.
        title={`${t('EditFeatureDrawer.featureEditor')} - ${layer?.get('name')}`}
        onCancel={onCancel}
      >
        {
          // TODO include create button
          (layer && feature) && (
            <EditFeatureFullForm
              feature={feature}
              layer={layer}
              additionalAttributes={[
                referencedLayerPropertyName
              ]}
              showEditToolbar={false}
              onSaveSuccess={onSaveSuccess}
              onDeleteSuccess={onDeleteSuccess}
            />
          )
        }
      </Modal>
    </>
  );
};

export default ReferenceTable;
