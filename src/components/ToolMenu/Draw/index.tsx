import React, {
  ChangeEvent
} from 'react';

import {
  faDrawPolygon,
  faGripLines,
  faCircle,
  faFont,
  faSquare,
  faPenToSquare,
  faUpload,
  faTrash
} from '@fortawesome/free-solid-svg-icons';

import {
  FontAwesomeIcon
} from '@fortawesome/react-fontawesome';

import GeoJSON from 'ol/format/GeoJSON';

import {
  useTranslation
} from 'react-i18next';

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

import './index.less';

interface DefaultDrawProps { }

export interface DrawProps extends Partial<DefaultDrawProps> { }

export const Draw: React.FC<DrawProps> = (): JSX.Element => {
  const {
    t
  } = useTranslation();

  const map = useMap();

  const onGeoJSONUpload = (geoJSONFile: File) => {
    const fileReader = new FileReader();

    fileReader.onload = () => {
      const geoJSONFeatures = new GeoJSON().readFeatures(fileReader.result);

      if (map) {
        const mapProjection = map.getView().getProjection().getCode();
        geoJSONFeatures.forEach(feat => {
          feat.getGeometry()?.transform('EPSG:4326', mapProjection);
        });
        const digitizeLayer = DigitizeUtil.getDigitizeLayer(map);
        const digitizeLayerSource = digitizeLayer.getSource();
        digitizeLayerSource?.addFeatures(geoJSONFeatures);
      }

    };

    fileReader.readAsText(geoJSONFile);
  };

  if (!map) {
    return <></>;
  }

  return (
    <ToggleGroup>
      <DrawButton
        name="drawPoint"
        drawType="Point"
      >
        <FontAwesomeIcon icon={faCircle} />
        <span className="draw-point">{t('Draw.point')}</span>
      </DrawButton>

      <DrawButton
        name="drawLine"
        drawType="LineString"
      >
        <FontAwesomeIcon icon={faGripLines} />
        <span className="draw-line">{t('Draw.line')}</span>
      </DrawButton>

      <DrawButton
        name="drawPolygon"
        drawType="Polygon"
      >
        <FontAwesomeIcon icon={faDrawPolygon} />
        <span className="draw-polygon">{t('Draw.polygon')}</span>
      </DrawButton>

      <DrawButton
        name="drawCircle"
        drawType="Circle"
      >
        <FontAwesomeIcon icon={faCircle} />
        <span className="draw-circle">{t('Draw.circle')}</span>
      </DrawButton>

      <DrawButton
        name="drawRectangle"
        drawType="Rectangle"
      >
        <FontAwesomeIcon icon={faSquare} />
        <span className="draw-rectangle">{t('Draw.rectangle')}</span>
      </DrawButton>

      <DrawButton
        name="drawText"
        drawType="Text"
      >
        <FontAwesomeIcon icon={faFont} />
        <span className="draw-text">{t('Draw.text')}</span>
      </DrawButton>

      <ModifyButton name='draw-modify'>
        <FontAwesomeIcon icon={faPenToSquare} />
        <span className="draw-modify">{t('Draw.modify')}</span>
      </ModifyButton>

      <UploadButton
        name='draw-upload'
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          const uploadedFiles = e.target.files;
          if (uploadedFiles && uploadedFiles.length === 1) {
            if (
              uploadedFiles[0].type === 'application/geo+json' ||
              uploadedFiles[0].type === 'application/geojson'
            ) {
              onGeoJSONUpload(uploadedFiles[0]);
            }
          }
        }}
      >
        <SimpleButton>
          <FontAwesomeIcon icon={faUpload} />
          <span className="draw-upload">{t('Draw.upload')}</span>
        </SimpleButton>
      </UploadButton>

      <DeleteButton name='draw-delete'>
        <FontAwesomeIcon icon={faTrash} />
        <span className="draw-delete">{t('Draw.delete')}</span>
      </DeleteButton>

    </ToggleGroup>
  );
};

export default Draw;
