import React, {
  useCallback,
  useEffect,
  useState
} from 'react';

import {
  faGripLines,
  faCircle,
  faSquare,
  faFont,
  faCircleNotch,
  faShapes,
  faPenToSquare,
  faUpload,
  faTrash,
  faEraser,
  faDownload
} from '@fortawesome/free-solid-svg-icons';

import {
  FontAwesomeIcon
} from '@fortawesome/react-fontawesome';

import {
  Button
} from 'antd';

import {
  Feature
} from 'ol';
import OlFeature from 'ol/Feature';
import GeoJSON from 'ol/format/GeoJSON';

import {
  useTranslation
} from 'react-i18next';

import { DeleteButton } from '@terrestris/react-geo/dist/Button/DeleteButton/DeleteButton';
import DrawButton from '@terrestris/react-geo/dist/Button/DrawButton/DrawButton';
import {
  ModifyButton, ModifyButtonProps
} from '@terrestris/react-geo/dist/Button/ModifyButton/ModifyButton';
import SimpleButton from '@terrestris/react-geo/dist/Button/SimpleButton/SimpleButton';
import {
  ToggleGroup, ToggleGroupProps
} from '@terrestris/react-geo/dist/Button/ToggleGroup/ToggleGroup';
import {
  useMap
} from '@terrestris/react-util/dist/Hooks/useMap/useMap';
import {
  DigitizeUtil
} from '@terrestris/react-util/dist/Util/DigitizeUtil';

import useAppDispatch from '../../../hooks/useAppDispatch';
import useAppSelector from '../../../hooks/useAppSelector';
import {
  removeInteractionStatus, setMapInteractionStatus
} from '../../../store/mapInteractionStatus';

import AttributionDrawer from './Attributions';
import DeleteAllButton from './DeleteAllButton';
import ImportDataModal from './ImportDataModal';
import StylingButton from './StylingDrawerButton';

import './index.less';

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
  showStyleFeatures?: boolean;
}

export type DrawProps = Partial<DefaultDrawProps>;

export const Draw: React.FC<DrawProps> = ({
  showDrawPoint,
  showDrawLine,
  showDrawPolygon,
  showDrawCircle,
  showDrawRectangle,
  showDrawAnnotation,
  showModifyFeatures,
  showUploadFeatures,
  showDeleteFeatures
}): JSX.Element => {
  const [selectedModifyFeature, setSelectedModifyFeature] = useState<OlFeature>();
  const [selectedButton, setSelectedButton] = useState<string>();
  const [isImportDataModalOpen, setIsImportDataModalOpen] = useState<boolean>(false);

  const mapInteractionStatus = useAppSelector(state => state.mapInteractionStatus);

  const dispatch = useAppDispatch();

  const {
    t
  } = useTranslation();

  const map = useMap();

  useEffect(() => {
    if (selectedButton !== undefined) {
      dispatch(setMapInteractionStatus('draw'));
    } else {
      dispatch(removeInteractionStatus('draw'));
    }
  }, [selectedButton, dispatch]);

  useEffect(() => {
    if (mapInteractionStatus !== 'draw') {
      setSelectedButton(undefined);
    }
  }, [mapInteractionStatus]);

  const onToggleChange: Exclude<ToggleGroupProps['onChange'], undefined> = useCallback((evt, value) => {
    setSelectedButton(value);
    if (value !== 'draw-modify') {
      setSelectedModifyFeature(undefined);
    }
  }, []);

  const onModifyFeatureSelect: Exclude<ModifyButtonProps['onFeatureSelect'], undefined> = useCallback(event => {
    if (event.selected.length > 0) {
      setSelectedModifyFeature(event.selected[0]);
    } else {
      setSelectedModifyFeature(undefined);
    }
  }, []);

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

  const onImportDataClick = () => {
    setIsImportDataModalOpen(true);
  };

  const onCloseImportDataModal = () => {
    setIsImportDataModalOpen(false);
  };

  if (!map) {
    return <></>;
  }

  return (
    <div
      className="draw-tools"
    >
      <ToggleGroup
        selected={selectedButton}
        onChange={onToggleChange}
      >
        {showDrawPoint ? (
          <DrawButton
            value="draw-point"
            key="draw-point"
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
            value="draw-line"
            key="draw-line"
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
            value="draw-polygon"
            key="draw-polygon"
            drawType="Polygon"
            type="link"
          >
            <FontAwesomeIcon
              icon={faShapes}
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
            value="draw-circle"
            key="draw-circle"
            drawType="Circle"
            type="link"
          >
            <FontAwesomeIcon
              icon={faCircleNotch}
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
            value="draw-rectangle"
            key="draw-rectangle"
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
            value="draw-text"
            key="draw-text"
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

        <StylingButton
          key="styling"
        />

        {showModifyFeatures ? (
          <ModifyButton
            value="draw-modify"
            key="draw-modify"
            type="link"
            onFeatureSelect={onModifyFeatureSelect}
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

        {showDeleteFeatures ? (
          <DeleteButton
            value="draw-delete"
            key="draw-delete"
            type="link"
          >
            <FontAwesomeIcon
              icon={faEraser}
            />
            <span
              className="draw-delete"
            >
              {t('Draw.delete')}
            </span>
          </DeleteButton>
        ) : <></>}
      </ToggleGroup>
      {showDeleteFeatures ? (
        <DeleteAllButton
          value="draw-delete-all"
          type="link"
        >
          <FontAwesomeIcon
            icon={faTrash}
          />
          <span
            className="draw-delete-all"
          >
            {t('DeleteAllButton.deleteAll')}
          </span>
        </DeleteAllButton>
      ):<></>}
      {showUploadFeatures ? (
        <>
          <Button
            onClick={onImportDataClick}
            aria-label='draw-upload'
            type="link"
            icon={
              <FontAwesomeIcon
                icon={faUpload}
              />
            }
          >
            <span
              className="draw-upload"
            >
              {t('Draw.upload')}
            </span>
          </Button>
          <ImportDataModal
            open={isImportDataModalOpen}
            onCancel={onCloseImportDataModal}
            onSuccess={onCloseImportDataModal}
          />
        </>
      ) : <></>}
      {showUploadFeatures ? (
        <SimpleButton
          value="draw-export"
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
      <AttributionDrawer
        selectedFeature={selectedModifyFeature}
      />
    </div>
  );
};

export default Draw;
