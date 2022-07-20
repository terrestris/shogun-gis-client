import React from 'react';

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

  const onGeoJSONUpload = (geoJSONFile: any ) => {
    const type = geoJSONFile.type !== 'application/geojson' ? geoJSONFile.type : 'NOT SUPPORTED';
    if (type !== 'NOT SUPPORTED') {

      var fileReader=new FileReader();

      fileReader.onload = () => {
        const geoJSONFeatures = new GeoJSON().readFeatures(fileReader.result);
        geoJSONFeatures.forEach(feat => {
          // TODO: Add some rule to have this projection always 4326 or 3857
          feat.getGeometry()?.transform('EPSG:4326', 'EPSG:3857');
        });
        if (map) {
          const digitizeLayer = DigitizeUtil.getDigitizeLayer(map);
          const digitizeLayerSource = digitizeLayer.getSource();
          digitizeLayerSource?.addFeatures(geoJSONFeatures);
        }

      };

      fileReader.readAsText(geoJSONFile);
    } else {
      alert('NOT SUPPORTED');
    }
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
        <span className="draw-text">{t('Draw.point')}</span>
      </DrawButton>

      <DrawButton
        name="drawLine"
        drawType="LineString"
      >
        <FontAwesomeIcon icon={faGripLines} />
        <span className="draw-text">{t('Draw.line')}</span>
      </DrawButton>

      <DrawButton
        name="drawPolygon"
        drawType="Polygon"
      >
        <FontAwesomeIcon icon={faDrawPolygon} />
        <span className="draw-text">{t('Draw.polygon')}</span>
      </DrawButton>

      <DrawButton
        name="drawCircle"
        drawType="Circle"
      >
        <FontAwesomeIcon icon={faCircle} />
        <span className="draw-text">{t('Draw.circle')}</span>
      </DrawButton>

      <DrawButton
        name="drawRectangle"
        drawType="Rectangle"
      >
        <FontAwesomeIcon icon={faSquare} />
        <span className="draw-text">{t('Draw.rectangle')}</span>
      </DrawButton>

      <DrawButton
        name="drawText"
        drawType="Text"
      >
        <FontAwesomeIcon icon={faFont} />
        <span className="draw-text">{t('Draw.text')}</span>
      </DrawButton>

      <ModifyButton>
        <FontAwesomeIcon icon={faPenToSquare} />
        <span className="draw-modify">{t('Draw.modify')}</span>
      </ModifyButton>

      <UploadButton
        onChange={e => {
          // @ts-ignore
          onGeoJSONUpload(e.target.files[0]);
        }}
      >
        <SimpleButton>
          <FontAwesomeIcon icon={faUpload} />
          <span className="draw-modify">{t('Draw.upload')}</span>
        </SimpleButton>
      </UploadButton>

      <DeleteButton>
        <FontAwesomeIcon icon={faTrash} />
        <span className="draw-modify">{t('Draw.delete')}</span>
      </DeleteButton>

    </ToggleGroup>
  );
};

export default Draw;
