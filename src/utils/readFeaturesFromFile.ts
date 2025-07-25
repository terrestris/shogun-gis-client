import {
  GeoPackageAPI,
  setSqljsWasmLocateFile
} from '@ngageoint/geopackage';

import OlFeature from 'ol/Feature';
import OlFormatFeature from 'ol/format/Feature';
import OlFormatGeoJSON from 'ol/format/GeoJSON';
import OlFormatGML2 from 'ol/format/GML2';
import OlFormatGPX from 'ol/format/GPX';
import OlFormatKML from 'ol/format/KML';
import OlFormatWKB from 'ol/format/WKB';
import OlFormatWKT from 'ol/format/WKT';
import OlGeometry from 'ol/geom/Geometry';

import {
  ProjectionLike as OlProjectionLike
} from 'ol/proj';

import {
  parseZip
} from 'shpjs';

import Logger from '@terrestris/base-util/dist/Logger';

export type ParserFunction = (content: ArrayBuffer) => Promise<Record<string, OlFeature[]>>;

const readFile = async (file: File, parser: ParserFunction) => {
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
};

const readFeaturesFromGeopackage = async (file: File, projection?: OlProjectionLike) => {
  setSqljsWasmLocateFile(f => '/geopackage/' + f);

  return readFile(file, async fileContent => {
    const geopackage = await GeoPackageAPI.open(new Uint8Array(fileContent));

    const format = new OlFormatGeoJSON();
    const feats: Record<string, OlFeature[]> = {};

    geopackage.getFeatureTables().forEach(table => {
      const features: OlFeature[] = [];
      const featureDao = geopackage.getFeatureDao(table);
      const srs = featureDao.srs;
      const iterator = geopackage.iterateGeoJSONFeatures(table);
      let result = iterator.next();
      while (!result.done) {
        const feature = format.readFeature(result.value, {
          featureProjection: projection,
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
};

const readFeaturesFromShapeFile = async (file: File, projection?: OlProjectionLike) => {
  return readFile(file, async fileContent => {
    const geojson = await parseZip(fileContent);
    const format = new OlFormatGeoJSON({
      featureProjection: projection
    });
    const getFileName = (name?: string) => `${name || file.name}.shp`;

    const feats: Record<string, OlFeature[]> = {};
    if (Array.isArray(geojson)) {
      geojson.forEach(entry => {
        feats[getFileName(entry.fileName)] = format.readFeatures(entry);
      });
    } else {
      feats[getFileName(geojson.fileName)] = format.readFeatures(geojson);
    }

    return feats;
  });
};

const readFeaturesFromPlainFile = async (file: File, parser: OlFormatFeature, projection?: OlProjectionLike) => {
  return readFile(file, async fileContent => {
    const features = parser.readFeatures(new TextDecoder('utf-8').decode(fileContent), {
      featureProjection: projection
    });

    return {
      [file.name]: features
    };
  });
};

export const readFeaturesFromFile = async (file: File, projection?: OlProjectionLike) => {
  let features: Record<string, OlFeature<OlGeometry>[]> | undefined;

  // TODO Currently V2 only and also check for projection
  if (['application/gml+xml'].includes(file.type) || file.name.endsWith('.gml')) {
    features = await readFeaturesFromPlainFile(file, new OlFormatGML2(), projection);
  } else if (['application/gpx+xml'].includes(file.type) || file.name.endsWith('.gpx')) {
    features = await readFeaturesFromPlainFile(file, new OlFormatGPX(), projection);
  } else if (['application/vnd.google-earth.kml+xml'].includes(file.type) || file.name.endsWith('.kml')) {
    features = await readFeaturesFromPlainFile(file, new OlFormatKML({extractStyles: true}), projection);
  } else if (['application/geo+json', 'application/vnd.geo+json'].includes(file.type) || file.name.endsWith('.geojson')) {
    features = await readFeaturesFromPlainFile(file, new OlFormatGeoJSON(), projection);
  } else if (file.name.endsWith('.wkb')) {
    features = await readFeaturesFromPlainFile(file, new OlFormatWKB(), projection);
  } else if (file.name.endsWith('.wkt')) {
    // TODO wkt without projection
    features = await readFeaturesFromPlainFile(file, new OlFormatWKT(), projection);
  } else if (['application/zip'].includes(file.type) || file.name.endsWith('.zip')) {
    features = await readFeaturesFromShapeFile(file, projection);
  } else if (['application/geopackage+sqlite3'].includes(file.type) || file.name.endsWith('.gpkg')) {
    features = await readFeaturesFromGeopackage(file, projection);
  } else {
    Logger.warn('Unsupported file type.');
  }

  return features;
};

export default readFeaturesFromFile;
