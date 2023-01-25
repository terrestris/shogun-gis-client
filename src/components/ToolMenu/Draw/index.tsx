import React, {
  ChangeEvent,
  useEffect,
  useMemo
} from 'react';

import {
  faDrawPolygon,
  faGripLines,
  faCircle,
  faFont,
  faSquare,
  faPenToSquare,
  faUpload,
  faTrash,
  faDownload
} from '@fortawesome/free-solid-svg-icons';

import {
  FontAwesomeIcon
} from '@fortawesome/react-fontawesome';

import {
  Feature,
  GeoJsonProperties,
  Geometry
} from 'geojson';

import {
  getCenter
} from 'ol/extent';
import OlFeature from 'ol/Feature';
import OlFormatGeoJSON from 'ol/format/GeoJSON';
import OlGeomCircle from 'ol/geom/Circle';
import {
  fromCircle
} from 'ol/geom/Polygon';
import {
  DrawEvent as OlDrawEvent
} from 'ol/interaction/Draw';
import {
  ModifyEvent as OlModifyEvent
} from 'ol/interaction/Modify';
import {
  SelectEvent as OlSelectEvent
} from 'ol/interaction/Select';
import {
  TranslateEvent as OlTranslateEvent
} from 'ol/interaction/Translate';
import OlLayerVector from 'ol/layer/Vector';
import {
  transform
} from 'ol/proj';
import {
  getArea,
  getLength
} from 'ol/sphere';

import {
  useTranslation
} from 'react-i18next';

import Logger from '@terrestris/base-util/dist/Logger';

import DeleteButton from '@terrestris/react-geo/dist/Button/DeleteButton/DeleteButton';
import DrawButton from '@terrestris/react-geo/dist/Button/DrawButton/DrawButton';
import ModifyButton from '@terrestris/react-geo/dist/Button/ModifyButton/ModifyButton';
import SimpleButton from '@terrestris/react-geo/dist/Button/SimpleButton/SimpleButton';
import ToggleGroup from '@terrestris/react-geo/dist/Button/ToggleGroup/ToggleGroup';
import UploadButton from '@terrestris/react-geo/dist/Button/UploadButton/UploadButton';
import {
  useMap
} from '@terrestris/react-geo/dist/Hook/useMap';
import {
  DigitizeUtil
} from '@terrestris/react-geo/dist/Util/DigitizeUtil';

import useAppDispatch from '../../../hooks/useAppDispatch';
import useAppSelector from '../../../hooks/useAppSelector';

import {
  addDrawFeature,
  addDrawFeatures,
  ClientTools,
  DrawToolConfig,
  removeDrawFeature,
  updateDrawFeature
} from '../../../store/toolConfig';

import StylingDrawer from './StylingDrawer';

import './index.less';

// eslint-disable-next-line no-shadow
export enum InternalFeatureProperty {
  AREA = 'area',
  LENGTH = 'length',
  RADIUS = 'radius',
  CENTER_X = 'center_x',
  CENTER_Y = 'center_y'
};

export type DrawProps = {
  showDrawPoint?: boolean;
  showDrawLine?: boolean;
  showDrawPolygon?: boolean;
  showDrawCircle?: boolean;
  showDrawRectangle?: boolean;
  showDrawAnnotation?: boolean;
  showModifyFeatures?: boolean;
  showUploadFeatures?: boolean;
  showDownloadFeatures?: boolean;
  showDeleteFeatures?: boolean;
  showStyleEditor?: boolean;
};

export const Draw: React.FC<DrawProps> = ({
  showDrawPoint,
  showDrawLine,
  showDrawPolygon,
  showDrawCircle,
  showDrawRectangle,
  showDrawAnnotation,
  showModifyFeatures,
  showUploadFeatures,
  showDownloadFeatures,
  showDeleteFeatures,
  showStyleEditor
}): JSX.Element => {
  const {
    t
  } = useTranslation();

  const drawFeatures = useAppSelector(state => {
    const drawToolConfig = state.toolConfig.find(config => config.name === ClientTools.DRAW_TOOLS);

    if (!drawToolConfig) {
      return;
    }

    return (drawToolConfig as DrawToolConfig).config.features;
  });

  const dispatch = useAppDispatch();

  const map = useMap();

  const tempDrawLayer = useMemo(() => new OlLayerVector(), []);

  const drawVectorLayer = useMemo(() => {
    if (!map) {
      return;
    }

    return DigitizeUtil.getDigitizeLayer(map);
  }, [map]);

  const olFormatGeoJson = useMemo(() => {
    if (!map) {
      return;
    }

    return new OlFormatGeoJSON({
      dataProjection: 'EPSG:4326',
      featureProjection: map.getView().getProjection()
    });
  }, [map]);

  useEffect(() => {
    if (!drawVectorLayer) {
      return;
    }

    drawVectorLayer.set('hoverable', true);

    return () => {
      drawVectorLayer.set('hoverable', false);
    };
  }, [drawVectorLayer]);

  useEffect(() => {
    if (!map || !olFormatGeoJson || !drawVectorLayer) {
      return;
    }

    const source = drawVectorLayer.getSource();

    if (!source) {
      return;
    }

    try {
      const features = olFormatGeoJson.readFeatures(drawFeatures);

      features
        .filter(feat => feat.get(InternalFeatureProperty.CENTER_X) &&
          feat.get(InternalFeatureProperty.CENTER_Y) &&
          feat.get(InternalFeatureProperty.RADIUS))
        .forEach(feat => {
          const circleGeom = new OlGeomCircle(
            transform(
              [
                feat.get(InternalFeatureProperty.CENTER_X),
                feat.get(InternalFeatureProperty.CENTER_Y)
              ],
              'EPSG:4326',
              map.getView().getProjection()
            ),
            feat.get(InternalFeatureProperty.RADIUS)
          );
          feat.setGeometry(circleGeom);
        });

      features.forEach(feature => {
        const sourceFeature = source.getFeatures().find(f => f.getId() === feature.getId());

        if (sourceFeature) {
          sourceFeature.setProperties(feature.getProperties());
          sourceFeature.setGeometry(feature.getGeometry());
        } else {
          source.addFeature(feature);
        }
      });
    } catch (error) {
      Logger.warn('Error while restoring the draw features: ', error);
    }
  }, [drawFeatures, map, olFormatGeoJson, drawVectorLayer]);

  const onDrawEnd = (evt: OlDrawEvent) => {
    evt.stopPropagation();
    evt.preventDefault();

    const featureObj = writeFeatureObject(evt.feature);

    if (!featureObj) {
      return;
    }

    dispatch(addDrawFeature(featureObj));
  };

  const onModifyEnd = (evt: OlModifyEvent) => {
    const features = evt.features;

    features.forEach(feature => {
      if (!(feature instanceof OlFeature)) {
        return;
      }

      const featureObj = writeFeatureObject(feature);

      if (!featureObj) {
        return;
      }

      dispatch(updateDrawFeature(featureObj));
    });
  };

  const onTranslateEnd = (evt: OlTranslateEvent) => {
    const features = evt.features;

    features.forEach(feature => {
      const featureObj = writeFeatureObject(feature);

      if (!featureObj) {
        return;
      }

      dispatch(updateDrawFeature(featureObj));
    });
  };

  const onModifyModalLabelOk = (feature: OlFeature) => {
    const featureObj = writeFeatureObject(feature);

    if (!featureObj) {
      return;
    }

    dispatch(updateDrawFeature(featureObj));
  };

  const onFeatureRemove = (evt: OlSelectEvent) => {
    const features = evt.selected;

    features.forEach(feature => {
      const featureObj = writeFeatureObject(feature);

      if (!featureObj || !featureObj.id) {
        return;
      }

      dispatch(removeDrawFeature(featureObj.id));
    });
  };

  const onModalLabelOk = (feature: OlFeature) => {
    const featureObj = writeFeatureObject(feature);

    if (!featureObj) {
      return;
    }

    dispatch(addDrawFeature(featureObj));
  };

  const writeFeatureObject = (feature: OlFeature) => {
    if (!map || !olFormatGeoJson) {
      return;
    }

    const geometry = feature.getGeometry();

    if (!geometry) {
      return;
    }

    const featureObj = olFormatGeoJson.writeFeatureObject(feature);

    if (!featureObj.id) {
      featureObj.id = crypto.randomUUID();
    }

    if (!featureObj.properties) {
      featureObj.properties = {};
    }

    if (geometry instanceof OlGeomCircle) {
      const geom = olFormatGeoJson.writeGeometryObject(fromCircle(geometry, 128));
      featureObj.geometry = geom;
    }

    if (featureObj.geometry.type === 'LineString') {
      featureObj.properties[InternalFeatureProperty.LENGTH] = getLength(geometry);
    }

    if (featureObj.geometry.type === 'Polygon') {
      if (geometry instanceof OlGeomCircle) {
        featureObj.properties[InternalFeatureProperty.RADIUS] = geometry.getRadius();
        featureObj.properties[InternalFeatureProperty.AREA] = getArea(fromCircle(geometry, 128));
      } else {
        featureObj.properties[InternalFeatureProperty.AREA] = getArea(geometry);
      }
    }

    const center = transform(
      getCenter(geometry.getExtent()),
      map.getView().getProjection(),
      'EPSG:4326'
    );
    featureObj.properties[InternalFeatureProperty.CENTER_X] = center[0];
    featureObj.properties[InternalFeatureProperty.CENTER_Y] = center[1];

    return featureObj;
  };

  const onGeoJSONDownload = () => {
    if (!map) {
      return;
    }

    const fileToDownload = new Blob([JSON.stringify(drawFeatures, null, '  ')], {
      type: 'application/geo+json'
    });

    const url = window.URL.createObjectURL(fileToDownload);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'exportedFeatures.geojson');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const onUploadChange = (e: ChangeEvent<HTMLInputElement>) => {
    const uploadedFiles = e.target.files;

    if (
      (uploadedFiles && uploadedFiles.length === 1) &&
      (
        uploadedFiles[0].type === 'application/geo+json' ||
        uploadedFiles[0].type === 'application/geojson' ||
        uploadedFiles[0].type === 'application/json'
      )
    ) {
      onGeoJSONUpload(uploadedFiles[0]);
    }
  };

  const onGeoJSONUpload = (geoJSONFile: File) => {
    const fileReader = new FileReader();

    fileReader.onerror = () => {
      Logger.error('Error while parsing GeoJSON');
    };

    fileReader.onload = () => {
      if (!map || !(typeof fileReader.result === 'string')) {
        return;
      }

      try {
        const features = olFormatGeoJson?.readFeatures(fileReader.result);

        if (!features) {
          return;
        }

        const featureObjs: Feature<Geometry, GeoJsonProperties>[] = [];
        features.forEach(feature => {
          const featureObj = writeFeatureObject(feature);

          if (!featureObj) {
            return;
          }

          featureObjs.push(featureObj);
        });

        dispatch(addDrawFeatures({
          type: 'FeatureCollection',
          features: featureObjs
        }));
      } catch (error) {
        Logger.error('Error while parsing GeoJSON: ', error);
      }
    };

    fileReader.readAsText(geoJSONFile);
  };

  if (!map) {
    return <></>;
  }

  return (
    <ToggleGroup>
      {showDrawPoint ? (
        <DrawButton
          name="draw-point"
          onDrawEnd={onDrawEnd}
          digitizeLayer={tempDrawLayer}
          drawType="Point"
          type="link"
          pressed={false}
        >
          <FontAwesomeIcon
            icon={faCircle}
          />
          <span
            className="draw-point"
          >
            {t('Draw.point')}
          </span>
        </DrawButton>
      ) : <></>}

      {showDrawLine ? (
        <DrawButton
          name="draw-line"
          onDrawEnd={onDrawEnd}
          digitizeLayer={tempDrawLayer}
          drawType="LineString"
          type="link"
        >
          <FontAwesomeIcon
            icon={faGripLines}
          />
          <span
            className="draw-line"
          >
            {t('Draw.line')}
          </span>
        </DrawButton>
      ) : <></>}

      {showDrawPolygon ? (
        <DrawButton
          name="draw-polygon"
          onDrawEnd={onDrawEnd}
          digitizeLayer={tempDrawLayer}
          drawType="Polygon"
          type="link"
        >
          <FontAwesomeIcon
            icon={faDrawPolygon}
          />
          <span
            className="draw-polygon"
          >
            {t('Draw.polygon')}
          </span>
        </DrawButton>
      ) : <></>}

      {showDrawCircle ? (
        <DrawButton
          name="draw-circle"
          onDrawEnd={onDrawEnd}
          digitizeLayer={tempDrawLayer}
          drawType="Circle"
          type="link"
        >
          <FontAwesomeIcon
            icon={faCircle}
          />
          <span
            className="draw-circle"
          >
            {t('Draw.circle')}
          </span>
        </DrawButton>
      ) : <></>}

      {showDrawRectangle ? (
        <DrawButton
          name="draw-rectangle"
          onDrawEnd={onDrawEnd}
          digitizeLayer={tempDrawLayer}
          drawType="Rectangle"
          type="link"
        >
          <FontAwesomeIcon
            icon={faSquare}
          />
          <span
            className="draw-rectangle"
          >
            {t('Draw.rectangle')}
          </span>
        </DrawButton>
      ) : <></>}

      {showDrawAnnotation ? (
        <DrawButton
          name="draw-text"
          onModalLabelOk={onModalLabelOk}
          digitizeLayer={tempDrawLayer}
          drawType="Text"
          type="link"
        >
          <FontAwesomeIcon
            icon={faFont}
          />
          <span
            className="draw-text"
          >
            {t('Draw.text')}
          </span>
        </DrawButton>
      ) : <></>}

      {showModifyFeatures ? (
        <ModifyButton
          name="draw-modify"
          onModifyEnd={onModifyEnd}
          onTranslateEnd={onTranslateEnd}
          onModalLabelOk={onModifyModalLabelOk}
          type="link"
        >
          <FontAwesomeIcon
            icon={faPenToSquare}
          />
          <span
            className="draw-modify"
          >
            {t('Draw.modify')}
          </span>
        </ModifyButton>
      ) : <></>}

      {showUploadFeatures ? (
        <UploadButton
          name="draw-upload"
          onChange={onUploadChange}
          type="link"
        >
          <SimpleButton
            type="link"
          >
            <FontAwesomeIcon
              icon={faUpload}
            />
            <span
              className="draw-upload"
            >
              {t('Draw.upload')}
            </span>
          </SimpleButton>
        </UploadButton>
      ) : <></>}

      {showDownloadFeatures ? (
        <SimpleButton
          name="draw-export"
          onClick={onGeoJSONDownload}
          type="link"
        >
          <FontAwesomeIcon
            icon={faDownload}
          />
          <span
            className="draw-export"
          >
            {t('Draw.export')}
          </span>
        </SimpleButton>
      ) : <></>}

      {showDeleteFeatures ? (
        <DeleteButton
          name="draw-delete"
          onFeatureRemove={onFeatureRemove}
          type="link"
        >
          <FontAwesomeIcon
            icon={faTrash}
          />
          <span
            className="draw-delete"
          >
            {t('Draw.delete')}
          </span>
        </DeleteButton>
      ) : <></>}

      {showStyleEditor ?
        <StylingDrawer
          forceRender={true}
        /> :
        <></>
      }
    </ToggleGroup>
  );
};

export default Draw;
