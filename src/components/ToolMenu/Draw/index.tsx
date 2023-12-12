import React, {
  ChangeEvent,
  useEffect,
  useState
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
  Feature
} from 'ol';
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

import AttributionDrawer from './Attributions';
import StylingDrawer from './StylingDrawer';

interface DefaultDrawProps {
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
}

export interface DrawProps extends Partial<DefaultDrawProps> { }

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
  showDeleteFeatures
}): JSX.Element => {
  const [openAttributeDrawer, setOpenAttributeDrawer] = useState(false);
  const [selectedButton, setSelectedButton] = useState<string>();

  const {
    t
  } = useTranslation();

  const map = useMap();

  const onGeoJSONDownload = () => {
    const clonedFeatures: Feature[] = [];
    if (map) {
      const mapProjection = map.getView().getProjection().getCode();
      const digitizeLayer = DigitizeUtil.getDigitizeLayer(map);
      const digitizedFeatures = digitizeLayer.getSource()?.getFeatures();
      if (digitizedFeatures && digitizedFeatures.length > 0) {
        digitizedFeatures.forEach(feat => {
          const clonedFeature = feat.clone();
          clonedFeature.getGeometry()?.transform(mapProjection, 'EPSG:4326');
          clonedFeatures.push(clonedFeature);
        });
        const geoJSON = new GeoJSON().writeFeatures(clonedFeatures);

        const fileToDownload = new Blob([geoJSON], {
          type: 'application/geo+json'
        });

        // download the file
        const url = window.URL.createObjectURL(fileToDownload);
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'exportedFeatures.geojson');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    }
  };

  const onUploadChange = (e: ChangeEvent<HTMLInputElement>) => {
    const uploadedFiles = e.target.files;
    if (
      (uploadedFiles && uploadedFiles.length === 1) &&
      (
        uploadedFiles[0].type === 'application/geo+json' ||
        uploadedFiles[0].type === 'application/geojson' ||
        uploadedFiles[0].name.includes('.geojson') ||
        uploadedFiles[0].name.includes('.json')
      )
    ) {
      onGeoJSONUpload(uploadedFiles[0]);
    }
  };

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

  const onToggleChange = (childProps: any) => {
    setSelectedButton(childProps.name);
  };

  const attributeDrawer = (active: any) => {
    if (openAttributeDrawer === false && active === true) {
      setOpenAttributeDrawer(true);
    }
    if (openAttributeDrawer === true && active === false && selectedButton === 'draw-modify') {
      setOpenAttributeDrawer(false);
    }
  };

  return (
    <>
      <ToggleGroup
        selectedName={selectedButton}
        onChange={onToggleChange}
      >

        {showDrawPoint ? (
          <DrawButton
            name="draw-point"
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
            type="link"
            onToggle={(evt) => attributeDrawer(evt)}
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
            aria-label='draw-upload'
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

        {showUploadFeatures ? (
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
        <StylingDrawer />
      </ToggleGroup>
      <AttributionDrawer
        open={openAttributeDrawer}
        onCustomClose={() => setOpenAttributeDrawer(false)}
      />
    </>
  );
};

export default Draw;
