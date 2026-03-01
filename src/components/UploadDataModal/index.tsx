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
  Button,
  Collapse,
  Modal,
  ModalProps,
  Select,
  Spin,
  Table,
  Upload
} from 'antd';

const {
  Dragger
} = Upload;

import {
  RcFile,
  UploadChangeParam,
  UploadFile
} from 'antd/lib/upload/interface';

import {
  getUid
} from 'ol';
import {
  Extent as OlExtent,
  extend,
  createEmpty
} from 'ol/extent';
import OlFeature from 'ol/Feature';
import OlLayerGroup from 'ol/layer/Group';
import OlLayer from 'ol/layer/Layer';
import OlLayerVector from 'ol/layer/Vector';
import OlLayerWebGLTile from 'ol/layer/WebGLTile';
import {
  ProjectionLike as OlProjectionLike,
  transformExtent
} from 'ol/proj';
import OlSourceGeoTIFF from 'ol/source/GeoTIFF';
import OlSourceVector from 'ol/source/Vector';

import proj4 from 'proj4';

import {
  UploadRequestOption
} from 'rc-upload/lib/interface';

import {
  useTranslation
} from 'react-i18next';

import Logger from '@terrestris/base-util/dist/Logger';

import {
  MapUtil
} from '@terrestris/ol-util/dist/MapUtil/MapUtil';

import {
  useMap
} from '@terrestris/react-util/dist/Hooks/useMap/useMap';

import useAppDispatch from '../../hooks/useAppDispatch';
import useAppSelector from '../../hooks/useAppSelector';
import useGetFitPadding from '../../hooks/useGetFitPadding';
import {
  hide
} from '../../store/uploadDataModal';

import {
  readFeaturesFromFile
} from '../../utils/readFeaturesFromFile';

import './index.less';

export type SupportedFormats = Record<string, {
  fileExtensions?: string[];
  mimeTypes?: string[];
}>;

export type UploadDataModalProps = Partial<ModalProps>;

export const UploadDataModal: React.FC<UploadDataModalProps> = ({
  ...restProps
}): JSX.Element => {
  const [uploadError, setUploadError] = useState('');
  const [uploadSuccess, setUploadSuccess] = useState('');
  const [isUploading, setIsUploading] = useState(false);
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [isUploadFinished, setIsUploadFinished] = useState(false);
  const [layerCandidates, setLayerCandidates] = useState<OlLayer[]>([]);
  const [selectedProjection, setSelectedProjection] = useState<string>();

  const isModalOpen = useAppSelector(state => state.uploadDataModal.visible);

  const dispatch = useAppDispatch();

  const getFitPadding = useGetFitPadding();

  const map = useMap();

  const {
    t
  } = useTranslation();

  const supportedFormats: SupportedFormats = {
    gml: {
      fileExtensions: [
        '.gml'
      ],
      mimeTypes: [
        'application/gml+xml'
      ]
    },
    gpx: {
      fileExtensions: [
        '.gpx'
      ],
      mimeTypes: [
        'application/gpx+xml'
      ]
    },
    kml: {
      fileExtensions: [
        '.kml'
      ],
      mimeTypes: [
        'application/vnd.google-earth.kml+xml'
      ]
    },
    geojson: {
      fileExtensions: [
        '.geojson',
        '.json'
      ],
      mimeTypes: [
        'application/geo+json',
        'application/vnd.geo+json'
      ]
    },
    zip: {
      fileExtensions: [
        '.zip'
      ],
      mimeTypes: [
        'application/zip'
      ]
    },
    gpkg: {
      fileExtensions: [
        '.gpkg'
      ],
      mimeTypes: [
        'application/geopackage+sqlite3'
      ]
    },
    geotiff: {
      fileExtensions: [
        '.tif',
        '.tiff'
      ],
      mimeTypes: [
        'image/tiff',
        'image/geo+tiff'
      ]
    },
    wkt: {
      fileExtensions: [
        '.wkt'
      ],
      mimeTypes: []
    },
    wkb: {
      fileExtensions: [
        '.wkb'
      ],
      mimeTypes: []
    }
  };

  const reset = () => {
    setUploadError('');
    setUploadSuccess('');
    setIsUploading(false);
    setSelectedRowKeys([]);
    setIsUploadFinished(false);
    setLayerCandidates([]);
    setSelectedProjection(undefined);
  };

  const closeModal = () => {
    reset();
    dispatch(hide());
  };

  const getRandomId = () => {
    // Randomly generated negative ID between -2 and -1.000.000 to
    // avoid conflicts with existing layers. The ID is needed to
    // actually make the layer visible in the tree.
    return Math.floor(Math.random() * -999999) - 1;
  };

  const createRasterLayer = (file: RcFile, dataProjection?: OlProjectionLike) => {
    const rasterLayer = new OlLayerWebGLTile({
      source: new OlSourceGeoTIFF({
        projection: dataProjection,
        sources: [{
          blob: file
        }]
      }),
      properties: {
        shogunId: getRandomId(),
        name: file.name,
        hoverable: false,
        isUploadedLayer: true,
        groupName: t('UploadDataModal.uploadedDataFolder')
      }
    });

    return rasterLayer;
  };

  const createVectorLayer = (features: OlFeature[], fileName: string) => {
    const layer = new OlLayerVector({
      visible: true,
      source: new OlSourceVector({
        features: features
      }),
      properties: {
        shogunId: getRandomId(),
        name: fileName,
        hoverable: true,
        isUploadedLayer: true,
        groupName: t('UploadDataModal.uploadedDataFolder')
      }
    });

    return layer;
  };

  const zoomTo = (extent: OlExtent) => {
    map?.getView().fit(extent, {
      duration: 500,
      padding: getFitPadding(true)
    });
  };

  const addLayer = (layer: OlLayer) => {
    if (!map) {
      return;
    }

    const targetFolderName = t('UploadDataModal.uploadedDataFolder');
    let targetGroup = MapUtil.getLayerByName(map, targetFolderName) as OlLayerGroup;
    const targetGroupAvailableInMap = !!targetGroup;

    if (!targetGroup) {
      targetGroup = new OlLayerGroup({
        layers: [],
        properties: {
          name: targetFolderName
        }
      });
    }

    if (!targetGroup.getLayers().getArray().includes(layer)) {
      targetGroup.getLayers().push(layer);
    }

    if (!targetGroupAvailableInMap) {
      const existingGroups = map.getLayerGroup().getLayers();
      existingGroups.insertAt(existingGroups?.getLength() || 0, targetGroup);
    }
  };

  const generateExtent = async (layers: OlLayer[]) => {
    const extent: OlExtent = createEmpty();

    for (const layer of layers) {
      let layerExtent = createEmpty();

      if (layer instanceof OlLayerVector) {
        layerExtent = layer.getSource().getExtent();
      } else if (layer instanceof OlLayerWebGLTile) {
        const view = await layer.getSource()?.getView();
        const viewExtent = view?.extent;
        const viewProjection = view?.projection;

        if (!viewExtent) {
          continue;
        }

        layerExtent = transformExtent(viewExtent, viewProjection, map?.getView().getProjection());
      }

      extend(extent, layerExtent);
    }

    return extent;
  };

  const isSupportedFile = (file: File) => {
    const fileName = file.name;
    const fileType = file.type;

    for (const values of Object.values(supportedFormats)) {
      const {
        fileExtensions,
        mimeTypes
      } = values;

      if (mimeTypes && mimeTypes.includes(fileType)) {
        return true;
      }

      if (fileExtensions && fileExtensions.some(ext => fileName.toLowerCase().endsWith(ext))) {
        return true;
      }
    }

    return false;
  };

  const getSupportedFileExtensions = () => {
    return (Object.values(supportedFormats).map(format => format.fileExtensions).flat()).join(', ');
  };

  const onBeforeFileUpload = (file: RcFile) => {
    setUploadError('');
    setUploadSuccess('');

    if (!isSupportedFile(file)) {
      setUploadError(t('UploadDataModal.error.supportedFormats', {
        supportedFormats: getSupportedFileExtensions()
      }));

      return false;
    }

    return true;
  };

  const onFileUploadAction = async (options: UploadRequestOption) => {
    const {
      onError,
      onSuccess,
      file
    } = options;

    const rcFile = file as RcFile;

    try {
      onSuccess?.({}, rcFile);
    } catch (error) {
      onError?.({
        name: 'UploadError',
        message: (error instanceof Error) ? error.message : t('UploadDataModal.error.general', {
          fileName: rcFile.name
        })
      });
    }
  };

  const onFileUploadChange = async (info: UploadChangeParam<UploadFile>) => {
    const file = info.file;

    if (file.status === 'uploading') {
      setIsUploading(true);
    }

    if (file.status === 'done') {
      try {
        const layers: OlLayer[] = [];

        if (file.type && ['image/tiff', 'image/geo+tiff'].includes(file.type)) {
          if (file.originFileObj) {
            layers.push(createRasterLayer(file.originFileObj, selectedProjection));
          }
        } else {
          const features = await readFeaturesFromFile((file.originFileObj as File),
            map?.getView().getProjection(), selectedProjection);

          if (!features || Object.keys(features).length === 0) {
            Logger.warn(`No features found in file ${file.name}`);
          }

          for (const [fileName, featureList] of Object.entries(features || {})) {
            if (!featureList || featureList.length === 0) {
              Logger.warn(`No features found in entry: ${fileName} of file ${file.name}`);
              continue;
            }

            layers.push(createVectorLayer(featureList, fileName));
          }
        }

        setUploadSuccess(t('UploadDataModal.success', {
          fileName: file.name,
          layerName: file.name
        }));
        setLayerCandidates(layers);
        setSelectedRowKeys(layers.map(layer => getUid(layer)));
      } catch (error) {
        Logger.error(error);

        setUploadError(t('UploadDataModal.error.general', {
          fileName: file.name
        }));
      } finally {
        setIsUploading(false);
        setIsUploadFinished(true);
      }
    }

    if (file.status === 'error') {
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

  const onAddClick = async () => {
    const layers = layerCandidates.filter(layerCandidate => {
      return selectedRowKeys.includes(getUid(layerCandidate));
    });

    layers.forEach(layer => addLayer(layer));

    const extent = await generateExtent(layers);

    zoomTo(extent);

    closeModal();
  };

  const getOptions = () => {
    return Object.entries(proj4.defs || {})
      .filter(([code]) => code.startsWith('EPSG:') && !isNaN(Number(code.split(':')[1])))
      .sort(([codeA], [codeB]) => parseInt(codeA.split(':')[1], 10) - parseInt(codeB.split(':')[1], 10))
      .map(([code, def]) => ({
        label: `${code} - ${typeof def === 'string' ? def : def?.title || ''}`,
        value: code
      }));
  };

  const favourites = ['EPSG:4326', 'EPSG:3857'];

  return (
    <Modal
      className="upload-data-modal"
      maskClosable={false}
      title={t('UploadDataModal.title')}
      open={isModalOpen}
      onCancel={closeModal}
      width={600}
      footer={false}
      {...restProps}
    >
      {
        uploadSuccess && (
          <Alert
            title={uploadSuccess}
            closable={true}
            type="success"
          />
        )
      }
      {
        uploadError && (
          <Alert
            title={uploadError}
            closable={true}
            type="error"
          />
        )
      }
      {
        !isUploadFinished ? (
          <Spin
            spinning={isUploading}
          >
            <Dragger
              customRequest={onFileUploadAction}
              accept={getSupportedFileExtensions()}
              maxCount={1}
              showUploadList={false}
              beforeUpload={onBeforeFileUpload}
              onChange={onFileUploadChange}
              directory={false}
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
            <Collapse
              ghost={true}
              items={[{
                key: '1',
                label: t('UploadDataModal.advancedOptionsLabel'),
                children: (
                  <Select
                    showSearch
                    placeholder={t('UploadDataModal.selectProjectionPlaceholder')}
                    value={selectedProjection}
                    onSelect={setSelectedProjection}
                    options={[{
                      label: <span>{t('UploadDataModal.favouritesLabel')}</span>,
                      title: 'favourites',
                      options: getOptions().filter(obj => favourites.includes(obj.value))
                    }, {
                      label: <span>{t('UploadDataModal.othersLabel')}</span>,
                      title: 'others',
                      options: getOptions().filter(obj => !favourites.includes(obj.value))
                    }]}
                  >
                  </Select>
                )
              }]}
            />
          </Spin>
        ) : (
          <div
            className="file-selection-wrapper"
          >
            <p>
              {t('UploadDataModal.selectEntriesHint')}
            </p>
            <Table
              size="small"
              columns={[{
                title: t('UploadDataModal.nameColumnTitle'),
                dataIndex: 'fileName',
                key: 'fileName',
                render: (text: string) => <code>{text}</code>
              }]}
              dataSource={layerCandidates.map(layerCandidate => ({
                key: getUid(layerCandidate),
                fileName: layerCandidate.get('name')
              }))}
              rowSelection={{
                type: 'checkbox',
                selectedRowKeys: selectedRowKeys,
                onChange: (keys: React.Key[]) => {
                  setSelectedRowKeys(keys);
                }
              }}
            />
            <div
              className="bottom-button-toolbar"
            >
              <Button
                disabled={selectedRowKeys.length === 0}
                onClick={onAddClick}
              >
                {t('UploadDataModal.addSelectedButtonTitle')}
              </Button>
            </div>
          </div>
        )
      }
    </Modal>
  );
};

export default UploadDataModal;
