import React, {
  useCallback,
  useEffect,
  useState
} from 'react';

import {
  GeoPackageAPI,
  setSqljsWasmLocateFile
} from '@ngageoint/geopackage';

import {
  Modal,
  Table
} from 'antd';

import OlFeature from 'ol/Feature';
import OlFeatureFormat from 'ol/format/Feature';
import OlFormatGeoJSON from 'ol/format/GeoJSON';
import OlFormatGML from 'ol/format/GML';
import OlFormatGPX from 'ol/format/GPX';
import OlFormatKML from 'ol/format/KML';
import OlFormatWKB from 'ol/format/WKB';
import OlFormatWKT from 'ol/format/WKT';
import OlGeometry from 'ol/geom/Geometry';
import OlLayerVector from 'ol/layer/Vector';
import OlSourceVector from 'ol/source/Vector';

import shp from 'shpjs';

import Logger from '@terrestris/base-util/dist/Logger';

import {
  useMap
} from '@terrestris/react-util/dist/Hooks/useMap/useMap';

import './useDragDropUpload.less';

export type ParserFunction = (content: ArrayBuffer) => Promise<Record<string, OlFeature[]>>;

export type UseDragDropUploadOpts = {
  /**
   * The target drop zone element, if not given the map's target element will be used.
   */
  target?: HTMLElement;
};

// TODOs add support for client plugins?

/**
 * Hook to handle drag and drop uploads of vector data (GeoJSON, GPX, KML).
 * It adds the features to the map and allows for further processing.
 *
 * @param opts - Optional parameters for the hook.
 * @returns {void}
 */
export const useDragDropUpload = (opts?: UseDragDropUploadOpts) => {
  const map = useMap();

  const [target, setTarget] = useState<HTMLElement | undefined>();
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

  const addFeatures = useCallback((features: OlFeature[], fileName: string) => {
    if (!map) {
      return;
    }

    const vectorSource = new OlSourceVector({
      features: features
    });

    map.addLayer(
      new OlLayerVector({
        source: vectorSource,
        properties: {
          // Randomly generated negative ID between -2 and -1.000.000 to
          // avoid conflicts with existing layers. The ID is needed to
          // actually make the layer visible in the tree.
          shogunId: Math.floor(Math.random() * -999999) - 1,
          name: fileName,
          hoverable: true
        }
      })
    );

    map.getView().fit(vectorSource.getExtent());
  }, [map]);

  const onDragOver = useCallback((event: DragEvent) => {
    event.preventDefault();
    event.stopPropagation();

    target?.classList.add('dragging');
  }, [target?.classList]);

  const onDragLeave = useCallback((event: DragEvent) => {
    // event.stopPropagation();
    if (event.currentTarget !== event.target) {
      return;
    }

    target?.classList.remove('dragging');
  }, [target?.classList]);

  const readFile = useCallback(async (file: File, parser: ParserFunction) => {
    const fileReader = new FileReader();

    const fileContent = new Promise<ArrayBuffer>((resolve, reject) => {
      fileReader.onload = e => {
        const content = e.target?.result;

        if (content instanceof ArrayBuffer) {
          resolve(content);
        } else {
          reject(new Error('File could not be read as array buffer.'));
        }
      };

      fileReader.onerror = () => {
        reject(new Error(`Error reading plain file ${file.name}`));
      };

      fileReader.readAsArrayBuffer(file);
    });

    if (!fileContent) {
      return;
    }

    return await parser(await fileContent);
  }, []);

  const readFeaturesFromGeopackage = useCallback(async (file: File) => {
    return readFile(file, async fileContent => {
      const geopackage = await GeoPackageAPI.open(new Uint8Array(fileContent));

      const format = new OlFormatGeoJSON();
      const features: OlFeature[] = [];
      const feats: Record<string, OlFeature[]> = {};

      geopackage.getFeatureTables().forEach(table => {
        const featureDao = geopackage.getFeatureDao(table);
        const srs = featureDao.srs;
        const iterator = geopackage.iterateGeoJSONFeatures(table);
        let result = iterator.next();
        while (!result.done) {
          const feature = format.readFeature(result.value, {
            featureProjection: map?.getView().getProjection(),
            dataProjection: `${srs.organization}:${srs.organization_coordsys_id}`
          });

          if (Array.isArray(feature)) {
            features.push(...feature);
          } else {
            features.push(feature);
          }

          result = iterator.next();
        }

        if (!feats[table]) {
          feats[table] = [];
        }

        feats[table].push(...features);
      });

      return feats;
    });
  }, [map, readFile]);

  const readFeaturesFromShapeFile = useCallback(async (file: File) => {
    return readFile(file, async fileContent => {
      const geojson = await shp(fileContent);
      const format = new OlFormatGeoJSON({
        featureProjection: map?.getView().getProjection()
      });
      const getFileName = (name?: string) => `${name || file.name}.shp`;

      const feats: Record<string, OlFeature[]> = {};
      if (Array.isArray(geojson)) {
        geojson.forEach((entry) => {
          feats[getFileName(entry.fileName)] = format.readFeatures(entry);
        });
      } else {
        feats[getFileName(geojson.fileName)] = format.readFeatures(geojson);
      }

      return feats;
    });
  }, [map, readFile]);

  const readFeaturesFromPlainFile = useCallback(async (file: File, parser: OlFeatureFormat) => {
    return readFile(file, async fileContent => {
      const features = parser.readFeatures(new TextDecoder('utf-8').decode(fileContent), {
        featureProjection: map?.getView().getProjection()
      });

      return {
        [file.name]: features
      };
    });
  }, [map, readFile]);

  const readFeatures = useCallback(async (file: File) => {
    let features: Record<string, OlFeature<OlGeometry>[] | undefined> | undefined;

    if (['application/gml+xml'].includes(file.type) || file.name.endsWith('.gml')) {
      features = await readFeaturesFromPlainFile(file, new OlFormatGML());
    } else if (['application/gpx+xml'].includes(file.type) || file.name.endsWith('.gpx')) {
      features = await readFeaturesFromPlainFile(file, new OlFormatGPX());
    } else if (['application/vnd.google-earth.kml+xml'].includes(file.type) || file.name.endsWith('.kml')) {
      features = await readFeaturesFromPlainFile(file, new OlFormatKML({extractStyles: true}));
    } else if (['application/geo+json', 'application/vnd.geo+json'].includes(file.type) || file.name.endsWith('.geojson')) {
      features = await readFeaturesFromPlainFile(file, new OlFormatGeoJSON());
    } else if (file.name.endsWith('.wkb')) {
      features = await readFeaturesFromPlainFile(file, new OlFormatWKB());
    } else if (file.name.endsWith('.wkt')) {
      features = await readFeaturesFromPlainFile(file, new OlFormatWKT());
    } else if (['application/zip'].includes(file.type) || file.name.endsWith('.zip')) {
      features = await readFeaturesFromShapeFile(file);
    } else if (['application/geopackage+sqlite3'].includes(file.type) || file.name.endsWith('.gpkg')) {
      features = await readFeaturesFromGeopackage(file);
    } else {
      Logger.warn('Unsupported file type for drag and drop upload.');
    }

    return features;
  }, [readFeaturesFromGeopackage, readFeaturesFromPlainFile, readFeaturesFromShapeFile]);

  const onDrop = useCallback(async (event: DragEvent) => {
    event.preventDefault();
    // event.stopPropagation();
    if (event.currentTarget !== event.target) {
      return;
    }

    target?.classList.remove('dragging');

    const files = event?.dataTransfer?.files;

    if (!files || files.length === 0) {
      return;
    }

    target?.classList.add('loading');

    for (let index = 0; index < files.length; index++) {
      try {
        const file = files.item(index);

        if (!file) {
          continue;
        }

        // // Calculate hash of the file (SHA-256)
        // const arrayBuffer = await file.arrayBuffer();
        // const hashBuffer = await crypto.subtle.digest('SHA-256', arrayBuffer);
        // const hashArray = Array.from(new Uint8Array(hashBuffer));
        // const fileHash = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
        // Logger.info(`File hash (SHA-256) for ${file.name}: ${fileHash}`);

        const features = await readFeatures(file);

        if (!features || Object.keys(features).length === 0) {
          throw new Error('No features found in the uploaded files.');
        }

        if (Object.keys(features).length > 1) {
          Modal.confirm({
            title: 'Multiple Features Detected',
            // TODO Make component instead of hook to make things working.
            content: (
              <div>
                <p>
                  Multiple entries were detected in the uploaded file <code>{file.name}</code>.
                  Please select the entries you want to add to the map.
                </p>
                <Table
                  columns={[{
                    title: 'File Name',
                    dataIndex: 'fileName',
                    // key: 'idx',
                    render: (text: string) => <code>{text}</code>
                  }]}
                  dataSource={Object.keys(features).map((fileName, idx) => ({
                    key: idx,
                    fileName: fileName
                  }))}
                  rowSelection={{
                    type: 'checkbox',
                    selectedRowKeys: selectedRowKeys,
                    onChange: (newSelectedRowKeys: React.Key[]) => {
                      setSelectedRowKeys(newSelectedRowKeys);
                    }
                  }}
                />
                {/* <ul>
                  {Object.keys(features).map(fileName => (<li><code>{fileName}</code></li>))}
                </ul> */}
              </div>
            ),
            onOk: () => {
              for (const [fileName, featureList] of Object.entries(features)) {
                if (!featureList || featureList.length === 0) {
                  Logger.warn(`No features found in file: ${fileName}`);
                  continue;
                }

                addFeatures(featureList, fileName);
              }
            }
          });
        } else {
          for (const [fileName, featureList] of Object.entries(features)) {
            if (!featureList || featureList.length === 0) {
              Logger.warn(`No features found in file: ${fileName}`);
              continue;
            }

            addFeatures(featureList, fileName);
          }
        }
      } catch (error) {
        Logger.error('Error while adding files to the map: ', error);
      }
    }

    target?.classList.remove('loading');
  }, [addFeatures, readFeatures, selectedRowKeys, target?.classList]);

  useEffect(() => {
    setSqljsWasmLocateFile(file => '/geopackage/' + file);
  }, []);

  useEffect(() => {
    setTarget(opts?.target ? opts.target : map?.getTargetElement());

    return () => {
      setTarget(undefined);
    };
  }, [map, opts?.target]);

  useEffect(() => {
    target?.addEventListener('dragover', onDragOver);
    target?.addEventListener('dragleave', onDragLeave);
    target?.addEventListener('drop', onDrop);

    return () => {
      target?.removeEventListener('dragover', onDragOver);
      target?.removeEventListener('dragleave', onDragLeave);
      target?.removeEventListener('drop', onDrop);
    };
  }, [onDragLeave, onDragOver, onDrop, target]);
};

export default useDragDropUpload;
