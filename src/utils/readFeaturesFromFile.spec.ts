import fs from 'fs/promises';
import path from 'path';

import OlGeometryCollection from 'ol/geom/GeometryCollection';
import OlGeomLineString from 'ol/geom/LineString';
import OlGeomPoint from 'ol/geom/Point';
import OlGeomPolygon from 'ol/geom/Polygon';

import Logger from '@terrestris/base-util/dist/Logger';

import readFeaturesFromFile from './readFeaturesFromFile';

describe('readFeaturesFromFile', () => {

  const readFile = async (filePath: string, fileType?: string) => {
    const fPath = path.resolve(__dirname, filePath);
    const fBuffer = await fs.readFile(fPath);
    const file = new File([fBuffer], path.basename(fPath), {
      type: fileType
    });

    return file;
  };

  let loggerSpy: jest.SpyInstance;

  beforeEach(() => {
    loggerSpy = jest.spyOn(Logger, 'warn').mockImplementation(() => {});
  });

  afterEach(() => {
    loggerSpy.mockRestore();
  });

  it('reads *.gml file (POINT)', async () => {
    const gmlFile = await readFile('../../resources/test-files/gml_v2/point.gml', 'application/gml+xml');

    const features = await readFeaturesFromFile(gmlFile);

    expect(features).toBeDefined();

    if (!features) {
      throw new Error('Features should not be undefined');
    }

    expect(Object.keys(features)).toHaveLength(1);
    expect(Object.keys(features)[0]).toEqual('point.gml');
    const pointFeatures = Object.values(features)[0];
    expect(pointFeatures).toHaveLength(4);
    pointFeatures.forEach(feature => expect(feature.getGeometry()).toBeInstanceOf(OlGeomPoint));
  });

  it('reads *.gml file (LINESTRING)', async () => {
    const gmlFile = await readFile('../../resources/test-files/gml_v2/linestring.gml', 'application/gml+xml');

    const features = await readFeaturesFromFile(gmlFile);

    expect(features).toBeDefined();

    if (!features) {
      throw new Error('Features should not be undefined');
    }

    expect(Object.keys(features)).toHaveLength(1);
    expect(Object.keys(features)[0]).toEqual('linestring.gml');
    const lineStringFeatures = Object.values(features)[0];
    expect(lineStringFeatures).toHaveLength(4);
    lineStringFeatures.forEach(feature => expect(feature.getGeometry()).toBeInstanceOf(OlGeomLineString));
  });

  it('reads *.gml file (POLYGON)', async () => {
    const gmlFile = await readFile('../../resources/test-files/gml_v2/polygon.gml', 'application/gml+xml');

    const features = await readFeaturesFromFile(gmlFile);

    expect(features).toBeDefined();

    if (!features) {
      throw new Error('Features should not be undefined');
    }

    expect(Object.keys(features)).toHaveLength(1);
    expect(Object.keys(features)[0]).toEqual('polygon.gml');
    const polygonFeatures = Object.values(features)[0];
    expect(polygonFeatures).toHaveLength(4);
    polygonFeatures.forEach(feature => expect(feature.getGeometry()).toBeInstanceOf(OlGeomPolygon));
  });

  it('reads *.kml file (POINT)', async () => {
    const kmlFile = await readFile('../../resources/test-files/kml/point.kml', 'application/vnd.google-earth.kml+xml');

    const features = await readFeaturesFromFile(kmlFile);

    expect(features).toBeDefined();

    if (!features) {
      throw new Error('Features should not be undefined');
    }

    expect(Object.keys(features)).toHaveLength(1);
    expect(Object.keys(features)[0]).toEqual('point.kml');
    const pointFeatures = Object.values(features)[0];
    expect(pointFeatures).toHaveLength(4);
    pointFeatures.forEach(feature => expect(feature.getGeometry()).toBeInstanceOf(OlGeomPoint));
  });

  it('reads *.kml file (LINESTRING)', async () => {
    const kmlFile = await readFile('../../resources/test-files/kml/linestring.kml', 'application/vnd.google-earth.kml+xml');

    const features = await readFeaturesFromFile(kmlFile);

    expect(features).toBeDefined();

    if (!features) {
      throw new Error('Features should not be undefined');
    }

    expect(Object.keys(features)).toHaveLength(1);
    expect(Object.keys(features)[0]).toEqual('linestring.kml');
    const lineStringFeatures = Object.values(features)[0];
    expect(lineStringFeatures).toHaveLength(4);
    lineStringFeatures.forEach(feature => expect(feature.getGeometry()).toBeInstanceOf(OlGeomLineString));
  });

  it('reads *.kml file (POLYGON)', async () => {
    const kmlFile = await readFile('../../resources/test-files/kml/polygon.kml', 'application/vnd.google-earth.kml+xml');

    const features = await readFeaturesFromFile(kmlFile);

    expect(features).toBeDefined();

    if (!features) {
      throw new Error('Features should not be undefined');
    }

    expect(Object.keys(features)).toHaveLength(1);
    expect(Object.keys(features)[0]).toEqual('polygon.kml');
    const polygonFeatures = Object.values(features)[0];
    expect(polygonFeatures).toHaveLength(4);
    polygonFeatures.forEach(feature => expect(feature.getGeometry()).toBeInstanceOf(OlGeomPolygon));
  });

  it('reads *.geojson file (POINT)', async () => {
    const geojsonFile = await readFile('../../resources/test-files/geojson/point.geojson', 'application/geo+json');

    const features = await readFeaturesFromFile(geojsonFile);

    expect(features).toBeDefined();

    if (!features) {
      throw new Error('Features should not be undefined');
    }

    expect(Object.keys(features)).toHaveLength(1);
    expect(Object.keys(features)[0]).toEqual('point.geojson');
    const pointFeatures = Object.values(features)[0];
    expect(pointFeatures).toHaveLength(4);
    pointFeatures.forEach(feature => expect(feature.getGeometry()).toBeInstanceOf(OlGeomPoint));
  });

  it('reads *.geojson file (LINESTRING)', async () => {
    const geojsonLineStringFile = await readFile('../../resources/test-files/geojson/linestring.geojson', 'application/geo+json');

    const features = await readFeaturesFromFile(geojsonLineStringFile);

    expect(features).toBeDefined();

    if (!features) {
      throw new Error('Features should not be undefined');
    }

    expect(Object.keys(features)).toHaveLength(1);
    expect(Object.keys(features)[0]).toEqual('linestring.geojson');
    const lineStringFeatures = Object.values(features)[0];
    expect(lineStringFeatures).toHaveLength(4);
    lineStringFeatures.forEach(feature => expect(feature.getGeometry()).toBeInstanceOf(OlGeomLineString));
  });

  it('reads *.geojson file (POLYGON)', async () => {
    const geojsonPolygonFile = await readFile('../../resources/test-files/geojson/polygon.geojson', 'application/geo+json');

    const features = await readFeaturesFromFile(geojsonPolygonFile);

    expect(features).toBeDefined();

    if (!features) {
      throw new Error('Features should not be undefined');
    }

    expect(Object.keys(features)).toHaveLength(1);
    expect(Object.keys(features)[0]).toEqual('polygon.geojson');
    const polygonFeatures = Object.values(features)[0];
    expect(polygonFeatures).toHaveLength(4);
    polygonFeatures.forEach(feature => expect(feature.getGeometry()).toBeInstanceOf(OlGeomPolygon));
  });

  it('reads *.zip (shape) file (POINT)', async () => {
    const shapeFile = await readFile('../../resources/test-files/shape-zip/point.zip', 'application/zip');

    const features = await readFeaturesFromFile(shapeFile);

    expect(features).toBeDefined();

    if (!features) {
      throw new Error('Features should not be undefined');
    }

    expect(Object.keys(features)).toHaveLength(1);
    expect(Object.keys(features)[0]).toEqual('point.shp');
    const pointFeatures = Object.values(features)[0];
    expect(pointFeatures).toHaveLength(4);
    pointFeatures.forEach(feature => expect(feature.getGeometry()).toBeInstanceOf(OlGeomPoint));
  });

  it('reads *.zip (shape) file (LINESTRING)', async () => {
    const shapeFile = await readFile('../../resources/test-files/shape-zip/linestring.zip', 'application/zip');

    const features = await readFeaturesFromFile(shapeFile);

    expect(features).toBeDefined();

    if (!features) {
      throw new Error('Features should not be undefined');
    }

    expect(Object.keys(features)).toHaveLength(1);
    expect(Object.keys(features)[0]).toEqual('linestring.shp');
    const lineStringFeatures = Object.values(features)[0];
    expect(lineStringFeatures).toHaveLength(4);
    lineStringFeatures.forEach(feature => expect(feature.getGeometry()).toBeInstanceOf(OlGeomLineString));
  });

  it('reads *.zip (shape) file (POLYGON)', async () => {
    const shapeFile = await readFile('../../resources/test-files/shape-zip/polygon.zip', 'application/zip');

    const features = await readFeaturesFromFile(shapeFile);

    expect(features).toBeDefined();

    if (!features) {
      throw new Error('Features should not be undefined');
    }

    expect(Object.keys(features)).toHaveLength(1);
    expect(Object.keys(features)[0]).toEqual('polygon.shp');
    const polygonFeatures = Object.values(features)[0];
    expect(polygonFeatures).toHaveLength(4);
    polygonFeatures.forEach(feature => expect(feature.getGeometry()).toBeInstanceOf(OlGeomPolygon));
  });

  it('reads *.gpkg file (POINT, LINESTRING, POLYGON)', async () => {
    const gpkgFile = await readFile('../../resources/test-files/gpkg/multiple.gpkg', 'application/geopackage+sqlite3');

    const features = await readFeaturesFromFile(gpkgFile);

    expect(features).toBeDefined();

    if (!features) {
      throw new Error('Features should not be undefined');
    }

    expect(Object.keys(features)).toHaveLength(3);
    expect(Object.keys(features)[0]).toEqual('point');
    expect(Object.keys(features)[1]).toEqual('line');
    expect(Object.keys(features)[2]).toEqual('polygon');

    const pointFeatures = Object.values(features)[0];
    expect(pointFeatures).toHaveLength(4);
    pointFeatures.forEach(feature => expect(feature.getGeometry()).toBeInstanceOf(OlGeomPoint));
    const lineStringFeatures = Object.values(features)[1];
    expect(lineStringFeatures).toHaveLength(4);
    lineStringFeatures.forEach(feature => expect(feature.getGeometry()).toBeInstanceOf(OlGeomLineString));
    const polygonFeatures = Object.values(features)[2];
    expect(polygonFeatures).toHaveLength(4);
    polygonFeatures.forEach(feature => expect(feature.getGeometry()).toBeInstanceOf(OlGeomPolygon));
  });

  it('reads *.wkb file (POINT)', async () => {
    const wktFile = await readFile('../../resources/test-files/wkb/point.wkb');

    const features = await readFeaturesFromFile(wktFile);

    expect(features).toBeDefined();

    if (!features) {
      throw new Error('Features should not be undefined');
    }

    expect(Object.keys(features)).toHaveLength(1);
    expect(Object.keys(features)[0]).toEqual('point.wkb');
    expect(Object.values(features)[0]).toHaveLength(1);
    const pointFeatures = Object.values(features)[0];
    expect(pointFeatures).toHaveLength(1);
    pointFeatures.forEach(feature => expect(feature.getGeometry()).toBeInstanceOf(OlGeomPoint));
  });

  it('reads *.wkb file (LINESTRING)', async () => {
    const wktFile = await readFile('../../resources/test-files/wkb/linestring.wkb');

    const features = await readFeaturesFromFile(wktFile);

    expect(features).toBeDefined();

    if (!features) {
      throw new Error('Features should not be undefined');
    }

    expect(Object.keys(features)).toHaveLength(1);
    expect(Object.keys(features)[0]).toEqual('linestring.wkb');
    expect(Object.values(features)[0]).toHaveLength(1);
    const lineStringFeatures = Object.values(features)[0];
    expect(lineStringFeatures).toHaveLength(1);
    lineStringFeatures.forEach(feature => expect(feature.getGeometry()).toBeInstanceOf(OlGeomLineString));
  });

  it('reads *.wkb file (POLYGON)', async () => {
    const wktFile = await readFile('../../resources/test-files/wkb/polygon.wkb');

    const features = await readFeaturesFromFile(wktFile);

    expect(features).toBeDefined();

    if (!features) {
      throw new Error('Features should not be undefined');
    }

    expect(Object.keys(features)).toHaveLength(1);
    expect(Object.keys(features)[0]).toEqual('polygon.wkb');
    expect(Object.values(features)[0]).toHaveLength(1);
    const polygonFeatures = Object.values(features)[0];
    expect(polygonFeatures).toHaveLength(1);
    polygonFeatures.forEach(feature => expect(feature.getGeometry()).toBeInstanceOf(OlGeomPolygon));
  });

  it('reads *.wkt file (POINT)', async () => {
    const wktFile = await readFile('../../resources/test-files/wkt/point.wkt');

    const features = await readFeaturesFromFile(wktFile);

    expect(features).toBeDefined();

    if (!features) {
      throw new Error('Features should not be undefined');
    }

    expect(Object.keys(features)).toHaveLength(1);
    expect(Object.keys(features)[0]).toEqual('point.wkt');
    expect(Object.values(features)[0]).toHaveLength(1);
    const pointGeometries = (Object.values(features)[0][0].getGeometry() as OlGeometryCollection).getGeometries();
    expect(pointGeometries).toHaveLength(4);
    pointGeometries.forEach(geometry => expect(geometry).toBeInstanceOf(OlGeomPoint));
  });

  it('reads *.wkt file (LINESTRING)', async () => {
    const wktFile = await readFile('../../resources/test-files/wkt/linestring.wkt');

    const features = await readFeaturesFromFile(wktFile);

    expect(features).toBeDefined();

    if (!features) {
      throw new Error('Features should not be undefined');
    }

    expect(Object.keys(features)).toHaveLength(1);
    expect(Object.keys(features)[0]).toEqual('linestring.wkt');
    expect(Object.values(features)[0]).toHaveLength(1);
    const lineStringGeometries = (Object.values(features)[0][0].getGeometry() as OlGeometryCollection).getGeometries();
    expect(lineStringGeometries).toHaveLength(4);
    lineStringGeometries.forEach(geometry => expect(geometry).toBeInstanceOf(OlGeomLineString));
  });

  it('reads *.wkt file (POLYGON)', async () => {
    const wktFile = await readFile('../../resources/test-files/wkt/polygon.wkt');

    const features = await readFeaturesFromFile(wktFile);

    expect(features).toBeDefined();

    if (!features) {
      throw new Error('Features should not be undefined');
    }

    expect(Object.keys(features)).toHaveLength(1);
    expect(Object.keys(features)[0]).toEqual('polygon.wkt');
    expect(Object.values(features)[0]).toHaveLength(1);
    const polygonGeometries = (Object.values(features)[0][0].getGeometry() as OlGeometryCollection).getGeometries();
    expect(polygonGeometries).toHaveLength(4);
    polygonGeometries.forEach(geometry => expect(geometry).toBeInstanceOf(OlGeomPolygon));
  });

  it('reads *.gpx file (POINT)', async () => {
    const gpxFile = await readFile('../../resources/test-files/gpx/point.gpx');

    const features = await readFeaturesFromFile(gpxFile);

    expect(features).toBeDefined();

    if (!features) {
      throw new Error('Features should not be undefined');
    }

    expect(Object.keys(features)).toHaveLength(1);
    expect(Object.keys(features)[0]).toEqual('point.gpx');
    const pointFeatures = Object.values(features)[0];
    expect(pointFeatures).toHaveLength(4);
    pointFeatures.forEach(feature => expect(feature.getGeometry()).toBeInstanceOf(OlGeomPoint));
  });

  it('ignores unsupported formats', async () => {
    const unsupportedFile = await readFile('../../resources/test-files/unsupportedFile.txt', 'text/plain');

    const features = await readFeaturesFromFile(unsupportedFile);

    expect(features).toBeUndefined();
    expect(loggerSpy).toHaveBeenCalledWith(expect.stringContaining('Unsupported file type.'));
  });
});
