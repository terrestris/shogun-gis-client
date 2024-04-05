import React, {
  useState
} from 'react';

import {
  faUpload
} from '@fortawesome/free-solid-svg-icons';
import {
  FontAwesomeIcon
} from '@fortawesome/react-fontawesome';

import {
  Alert,
  Modal,
  ModalProps,
  Spin,
  Upload
} from 'antd';

const { Dragger } = Upload;

import {
  RcFile,
  UploadChangeParam,
  UploadFile
} from 'antd/lib/upload/interface';

import ClientConfiguration from 'clientConfig';

import OlLayerGroup from 'ol/layer/Group';
import TileLayer from 'ol/layer/Tile';
import TileWMSSource from 'ol/source/TileWMS';

import {
  UploadRequestOption
} from 'rc-upload/lib/interface';

import {
  useTranslation
} from 'react-i18next';

import {
  Shapefile
} from 'shapefile.js';

import Logger from '@terrestris/base-util/dist/Logger';

import MapUtil from '@terrestris/ol-util/dist/MapUtil/MapUtil';

import {
  useMap
} from '@terrestris/react-util/dist/Hooks/useMap/useMap';

import Layer from '@terrestris/shogun-util/dist/model/Layer';
import SHOGunApplicationUtil from '@terrestris/shogun-util/dist/parser/SHOGunApplicationUtil';
import {
  getBearerTokenHeader
} from '@terrestris/shogun-util/dist/security/getBearerTokenHeader';

import useAppDispatch from '../../hooks/useAppDispatch';
import useAppSelector from '../../hooks/useAppSelector';
import useSHOGunAPIClient from '../../hooks/useSHOGunAPIClient';
import {
  hide
} from '../../store/uploadDataModal';

import './index.less';

type FeatureTypeAttribute = {
  name: string;
  minOccurs: number;
  maxOccurs: number;
  nillable: boolean;
  binding?: string | null;
  length?: number;
};

type FeatureTypeAttributes = {
  attribute: FeatureTypeAttribute[];
};

export type LayerUploadOptions = {
  baseUrl: string;
  workspace: string;
  storeName: string;
  layerName: string;
  file: RcFile;
};

export type LayerUploadResponse = {
  layerName: string;
  workspace: string;
  baseUrl: string;
};

export type UploadDataModalProps = Partial<ModalProps>;

export const UploadDataModal: React.FC<UploadDataModalProps> = ({
  ...restProps
}): JSX.Element => {
  const [uploadError, setUploadError] = useState('');
  const [uploadSuccess, setUploadSuccess] = useState('');
  const [isUploading, setIsUploading] = useState(false);

  const isModalVisible = useAppSelector(state => state.uploadDataModal.visible);
  const user = useAppSelector((state) => state.user);

  const dispatch = useAppDispatch();

  const map = useMap();
  const client = useSHOGunAPIClient();

  const {
    t
  } = useTranslation();

  const closeModal = () => {
    setUploadError('');
    setUploadSuccess('');
    dispatch(hide());
  };

  const addLayer = (layer: TileLayer<TileWMSSource>) => {
    if (!map) {
      return;
    }

    const targetFolderName = t('UploadDataModal.uploadedDataFolder');
    let targetGroup = MapUtil.getLayerByName(map, targetFolderName) as OlLayerGroup;

    if (!targetGroup) {
      targetGroup = new OlLayerGroup({
        layers: [],
        properties: {
          name: targetFolderName
        }
      });
      const existingGroups = map.getLayerGroup().getLayers();
      existingGroups.insertAt(existingGroups?.getLength() || 0, targetGroup);
    }

    if (!targetGroup.getLayers().getArray().includes(layer)) {
      targetGroup.getLayers().push(layer);
    }
  };

  const onBeforeFileUpload = (file: RcFile) => {
    const maxSize = ClientConfiguration.geoserver?.upload?.limit || 200000000;
    const fileType = file.type;
    const fileSize = file.size;

    setUploadError('');
    setUploadSuccess('');

    if (fileSize > maxSize) {
      setUploadError(t('UploadDataModal.error.maxSize', {
        maxSize: maxSize / 1000000
      }));

      return false;
    }

    const supportedFormats = ['application/zip', 'image/tiff'];
    if (!supportedFormats.includes(fileType)) {
      setUploadError(t('UploadDataModal.error.supportedFormats', {
        supportedFormats: supportedFormats.join(', ')
      }));

      return false;
    }

    return true;
  };

  const uploadGeoTiff = async (options: LayerUploadOptions): Promise<void> => {
    const {
      baseUrl,
      workspace,
      storeName,
      layerName,
      file
    } = options;

    const coverageStoreUrl = `${baseUrl}/rest/workspaces/${workspace}/coveragestores/` +
      `${storeName}/file.geotiff?configure=none`;

    const coverageStoreResponse = await fetch(coverageStoreUrl, {
      method: 'PUT',
      headers: {
        ...getBearerTokenHeader(client?.getKeycloak()),
        'Content-Type': 'image/tiff'
      },
      body: file
    });

    if (!coverageStoreResponse.ok) {
      throw new Error(t('UploadDataModal.error.general', {
        fileName: file.name
      }));
    }

    const coverageUrl = `${baseUrl}/rest/workspaces/${workspace}/coveragestores/${storeName}/coverages`;

    const coverageResponse = await fetch(coverageUrl, {
      method: 'POST',
      headers: {
        ...getBearerTokenHeader(client?.getKeycloak()),
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        coverage: {
          enabled: true,
          name: layerName,
          nativeName: layerName,
          title: layerName,
          keywords: {
            // eslint-disable-next-line quote-props
            'string': [
              'User upload',
              `Uploaded by ${user.providerDetails?.username}`
            ]
          }
        }
      })
    });

    if (!coverageResponse.ok) {
      throw new Error(t('UploadDataModal.error.general', {
        fileName: file.name
      }));
    }
  };

  const uploadShapeZip = async (options: LayerUploadOptions): Promise<void> => {
    const {
      baseUrl,
      workspace,
      storeName,
      layerName,
      file
    } = options;

    const shp = await Shapefile.load(file);

    let featureTypeName = '';
    let featureTypeAttributes: FeatureTypeAttributes = {
      attribute: []
    };

    if (Object.entries(shp).length !== 1) {
      throw new Error(t('UploadDataModal.error.zipContent'));
    }

    Object.entries(shp).forEach(([k, v]) => {
      featureTypeName = k;

      const dbfContent = v.parse('dbf', {
        properties: false
      });

      featureTypeAttributes.attribute = dbfContent.fields.map(field => ({
        name: field.name,
        minOccurs: 0,
        maxOccurs: 1,
        nillable: true,
        binding: getAttributeType(field.type),
        length: field.length
      }));

      const shxContent = v.parse('shx');

      featureTypeAttributes.attribute.push({
        name: 'the_geom',
        minOccurs: 0,
        maxOccurs: 1,
        nillable: true,
        binding: getGeometryType(shxContent.header.type)
      });
    });

    const url = `${baseUrl}/rest/workspaces/${workspace}/datastores/` +
      `${storeName}/file.shp?configure=none`;

    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        ...getBearerTokenHeader(client?.getKeycloak()),
        'Content-Type': 'application/zip'
      },
      body: file
    });

    if (!response.ok) {
      throw new Error(t('UploadDataModal.error.general', {
        fileName: file.name
      }));
    }

    const featureTypeUrl = `${baseUrl}/rest/workspaces/${workspace}/datastores/${storeName}/featuretypes`;

    const featureTypeResponse = await fetch(featureTypeUrl, {
      method: 'POST',
      headers: {
        ...getBearerTokenHeader(client?.getKeycloak()),
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        featureType: {
          enabled: true,
          name: layerName,
          nativeName: featureTypeName,
          title: layerName,
          attributes: featureTypeAttributes,
          keywords: {
            // eslint-disable-next-line quote-props
            'string': [
              'User upload',
              `Uploaded by ${user.providerDetails?.username}`
            ]
          }
        }
      })
    });

    if (!featureTypeResponse.ok) {
      throw new Error(t('UploadDataModal.error.general', {
        fileName: file.name
      }));
    }
  };

  const onFileUploadAction = async (options: UploadRequestOption<LayerUploadResponse>) => {
    const {
      onError,
      onSuccess,
      file
    } = options;

    const splittedFileName = (file as RcFile).name.split('.');
    const fileType = (file as RcFile).type;
    const geoServerBaseUrl = ClientConfiguration.geoserver?.base || '/geoserver';
    const workspace = ClientConfiguration.geoserver?.upload?.workspace || 'SHOGUN';
    const layerName = `${splittedFileName[0]}_${Date.now()}`.toUpperCase();

    const uploadData = {
      file: file as RcFile,
      baseUrl: geoServerBaseUrl,
      workspace: workspace,
      storeName: layerName,
      layerName: layerName
    };

    try {
      if (fileType === 'image/tiff') {
        await uploadGeoTiff(uploadData);
      }

      if (fileType === 'application/zip') {
        await uploadShapeZip(uploadData);
      }

      if (onSuccess) {
        onSuccess({
          baseUrl: geoServerBaseUrl,
          workspace: workspace,
          layerName: layerName
        });
      }
    } catch (error) {
      if (onError) {
        onError({
          name: 'UploadError',
          message: (error instanceof Error) ? error.message : t('UploadDataModal.error.general', {
            fileName: (file as RcFile).name
          })
        });
      }
    }
  };

  const onFileUploadChange = async (info: UploadChangeParam<UploadFile<LayerUploadResponse>>) => {
    const file = info.file;

    if (file.status === 'uploading') {
      setIsUploading(true);
    }

    if (file.status === 'done') {
      if (!client || !file.response) {
        return;
      }

      const layerConfig: Layer = {
        name: file.response.layerName,
        type: 'TILEWMS',
        clientConfig: {
          hoverable: true
        },
        sourceConfig: {
          url: `${file.response.baseUrl}/ows?`,
          layerNames: `${file.response.workspace}:${file.response.layerName}`,
          useBearerToken: true
        }
      };

      const parser = new SHOGunApplicationUtil({
        client
      });

      const olLayer = parser.parseTileLayer(layerConfig);
      olLayer.set('layerConfig', layerConfig);
      olLayer.set('isUploadedLayer', true);
      olLayer.set('groupName', t('UploadDataModal.uploadedDataFolder'));
      addLayer(olLayer);

      setUploadSuccess(t('UploadDataModal.success', {
        fileName: file.name,
        layerName: file.response.layerName
      }));

      setIsUploading(false);
    } else if (file.status === 'error') {
      setIsUploading(false);

      Logger.error(file.error);

      if (file.error && file.error.message) {
        setUploadError(file.error.message);
      } else {
        setUploadError(t('UploadDataModal.error.general', {
          fileName: file.name
        }));
      }
    }
  };

  const getGeometryType = (type: number) => {
    const types: {
      [key: number]: string | null;
    } = {
      0: null, // Null
      1: 'org.locationtech.jts.geom.Point', // Point
      3: 'org.locationtech.jts.geom.LineString', // Polyline
      5: 'org.locationtech.jts.geom.Polygon', // Polygon
      8: 'org.locationtech.jts.geom.MultiPoint', // MultiPoint
      11: 'org.locationtech.jts.geom.Point', // PointZ
      13: 'org.locationtech.jts.geom.LineString', // PolylineZ
      15: 'org.locationtech.jts.geom.Polygon', // PolygonZ
      18: 'org.locationtech.jts.geom.MultiPoint', // MultiPointZ
      21: 'org.locationtech.jts.geom.Point', // PointM
      23: 'org.locationtech.jts.geom.LineString', // PolylineM
      25: 'org.locationtech.jts.geom.Polygon', // PolygonM
      28: 'org.locationtech.jts.geom.MultiPoint', // MultiPointM
      31: null // MultiPatch
    };

    return types[type];
  };

  const getAttributeType = (dbfFieldType: string) => {
    switch (dbfFieldType) {
      case 'C': // Character
        return 'java.lang.String';
      case 'D': // Date
        return 'java.util.Date';
      case 'N': // Numeric
        return 'java.lang.Long';
      case 'F': // Floating point
        return 'java.lang.Double';
      case 'L': // Logical
        return 'java.lang.Boolean';
      case 'M': // Memo
        return null;
      default:
        return null;
    }
  };

  return (
    <Modal
      className="upload-data-modal"
      title={t('UploadDataModal.title')}
      open={isModalVisible}
      onCancel={closeModal}
      width={600}
      footer={false}
      {...restProps}
    >
      {
        uploadSuccess && (
          <Alert
            message={uploadSuccess}
            closable={true}
            type="success"
          />
        )
      }

      {
        uploadError && (
          <Alert
            message={uploadError}
            closable={true}
            type="error"
          />
        )
      }

      <Spin
        spinning={isUploading}
      >
        <Dragger
          customRequest={onFileUploadAction}
          accept='image/tiff,application/zip'
          maxCount={1}
          showUploadList={false}
          beforeUpload={onBeforeFileUpload}
          onChange={onFileUploadChange}
        >
          <p className="ant-upload-drag-icon">
            <FontAwesomeIcon
              icon={faUpload}
            />
          </p>
          <p className="ant-upload-text">
            {t('UploadDataModal.description')}
          </p>
          <p className="ant-upload-hint">
            {t('UploadDataModal.hint')}
          </p>
        </Dragger>
      </Spin>
    </Modal>
  );
};

export default UploadDataModal;
