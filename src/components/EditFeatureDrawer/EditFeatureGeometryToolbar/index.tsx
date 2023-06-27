import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react';

import {
  faPencil,
  faTrash,
  faDrawPolygon,
  faUndo
} from '@fortawesome/free-solid-svg-icons';
import {
  FontAwesomeIcon
} from '@fortawesome/react-fontawesome';

import {
  TooltipPlacement
} from 'antd/es/tooltip';
import {
  FeatureCollection
} from 'geojson';
import _isEmpty from 'lodash/isEmpty';

import {
  isEmpty as isEmptyOlExtent
} from 'ol/extent';
import OlFeature from 'ol/Feature';
import OlFormatGeoJson from 'ol/format/GeoJSON';
import OlGeometry from 'ol/geom/Geometry';
import OlGeomMultiLineString from 'ol/geom/MultiLineString';
import OlGeomMultiPoint from 'ol/geom/MultiPoint';
import OlGeomMultiPolygon from 'ol/geom/MultiPolygon';
import {
  DrawEvent as OlDrawEvent
} from 'ol/interaction/Draw';
import OlLayerVector from 'ol/layer/Vector';
import OlSourceVector, {
  VectorSourceEvent as OlVectorSourceEvent
} from 'ol/source/Vector';

import {
  useTranslation
} from 'react-i18next';

import DeleteButton from '@terrestris/react-geo/dist/Button/DeleteButton/DeleteButton';
import DrawButton from '@terrestris/react-geo/dist/Button/DrawButton/DrawButton';
import ModifyButton from '@terrestris/react-geo/dist/Button/ModifyButton/ModifyButton';
import SimpleButton from '@terrestris/react-geo/dist/Button/SimpleButton/SimpleButton';
import ToggleGroup from '@terrestris/react-geo/dist/Button/ToggleGroup/ToggleGroup';
import {
  useMap
} from '@terrestris/react-geo/dist/Hook/useMap';
import Toolbar, {
  ToolbarProps
} from '@terrestris/react-geo/dist/Toolbar/Toolbar';

import {
  DigitizeUtil
} from '@terrestris/react-geo/dist/Util/DigitizeUtil';

import useAppSelector from '../../../hooks/useAppSelector';

import './index.less';

export type EditFeatureGeometryToolbarProps = ToolbarProps & {
  editFeature: OlFeature;
  historyLength?: number;
};

type DrawType = 'Point' | 'LineString' | 'Polygon';

type EditHistory = {
  past: FeatureCollection[];
  future: FeatureCollection[];
};
export const EditFeatureGeometryToolbar: React.FC<EditFeatureGeometryToolbarProps> = ({
  editFeature,
  historyLength = 10
}) => {

  const editHistory = useRef<EditHistory>({
    past: [],
    future: []
  });

  const map = useMap();

  const {
    t
  } = useTranslation();

  const [editLayer, setEditLayer] = useState<OlLayerVector<OlSourceVector<OlGeometry>>>();
  const [, setRevision] = useState<number>(0);

  const gjFormat = useMemo(() => new OlFormatGeoJson(), []);

  const allowedEditMode = useAppSelector(
    state => state.editFeature.userEditMode
  );

  const onAddFeature = useCallback((evt: OlVectorSourceEvent<OlGeometry>) => {
    const source = evt.target as OlSourceVector;

    if (source.getFeatures().length > 1 && evt.feature) {
      source.removeFeature(evt.feature);
    }
  }, []);

  useEffect(() => {
    if (!map) {
      return;
    }

    if (!editLayer) {
      const layer = DigitizeUtil.getDigitizeLayer(map);

      layer.getSource()?.on('addfeature', onAddFeature);
      setEditLayer(layer);
    }

    return () => {
      if (editLayer) {
        editLayer.getSource()?.un('addfeature', onAddFeature);
        map?.removeLayer(editLayer);
      }
    };
  }, [editLayer, map, onAddFeature]);

  useEffect(() => {
    if (!editLayer) {
      return;
    }

    const source = editLayer.getSource();

    if (!source) {
      return;
    }

    source.clear();
    source.addFeature(editFeature);
    setRevision(r => r + 1);

    if (isEmptyOlExtent(source.getExtent())) {
      return;
    }

    map?.getView().fit(source.getExtent(), {
      padding: [50, 50, 50, 50]
    });
  }, [editLayer, editFeature, map]);

  const undoEdit = () => {
    const editSource = editLayer?.getSource();
    const features = editSource?.getFeatures();

    if (!features) {
      return;
    }

    const clone: FeatureCollection = gjFormat.writeFeaturesObject(features);
    const previousSource = editHistory.current.past[editHistory.current.past.length - 1];
    if (!_isEmpty(previousSource)) {
      editSource?.clear();
      editSource?.addFeatures(gjFormat.readFeatures(previousSource));
      editHistory.current = {
        past: editHistory.current.past.slice(0, -1),
        future: [...editHistory.current.future, clone].slice(-historyLength)
      };
      setRevision(r => r + 1);
    }
  };

  const redoEdit = () => {
    const editSource = editLayer?.getSource();
    const features = editSource?.getFeatures();

    if (!features) {
      return;
    }

    const clone = gjFormat.writeFeaturesObject(features);
    const nextSource = editHistory.current.future[editHistory.current.future.length - 1];
    if (!_isEmpty(nextSource)) {
      editSource?.clear();
      editSource?.addFeatures(gjFormat.readFeatures(nextSource));

      editHistory.current = {
        future: editHistory.current.future.slice(0, -1),
        past: [...editHistory.current.past, clone].slice(-historyLength)
      };
      setRevision(r => r + 1);
    }
  };

  const onDrawEnd = (drawEvt: OlDrawEvent) => {
    updateRevision();

    const drawGeometry = drawEvt.feature.getGeometry()?.clone();
    const editGeometry = editFeature.getGeometry();

    if (!drawGeometry) {
      return;
    }

    if (editGeometry instanceof OlGeomMultiPolygon) {
      (drawGeometry as OlGeomMultiPolygon).getPolygons().forEach(geom => {
        editGeometry.appendPolygon(geom);
      });
    } else if (editGeometry instanceof OlGeomMultiLineString) {
      (drawGeometry as OlGeomMultiLineString).getLineStrings().forEach(geom => {
        editGeometry.appendLineString(geom);
      });
    } else if (editGeometry instanceof OlGeomMultiPoint) {
      (drawGeometry as OlGeomMultiPoint).getPoints().forEach(geom => {
        editGeometry.appendPoint(geom);
      });
    } else {
      editFeature.setGeometry(drawGeometry);
    }
  };

  const updateRevision = () => {
    const features = editLayer?.getSource()?.getFeatures();

    if (!features) {
      return;
    }

    const clone: FeatureCollection = gjFormat.writeFeaturesObject(features);
    editHistory.current = {
      ...editHistory.current,
      past: [...editHistory.current.past, clone].slice(-10)
    };
    setRevision(r => r + 1);
  };

  const btnTooltipProps = {
    tooltipPlacement: 'left' as TooltipPlacement,
    tooltipProps: {
      mouseEnterDelay: 0.5
    }
  };

  if (!editLayer) {
    return <></>;
  }

  if (!allowedEditMode.includes('EDIT_GEOMETRY')) {
    return <></>;
  }

  return (
    <Toolbar
      className="geometry-edit-tb"
      alignment="vertical"
    >
      <ToggleGroup>
        {
          allowedEditMode.includes('CREATE') ?
            <DrawButton
              icon={
                <FontAwesomeIcon icon={faPencil} />
              }
              pressedIcon={
                <FontAwesomeIcon icon={faPencil} />
              }
              name="draw"
              digitizeLayer={editLayer}
              tooltip={t('EditFeatureGeometryToolbar.draw')}
              drawType={editFeature.getGeometry()?.getType() as DrawType}
              onDrawEnd={onDrawEnd}
              {...btnTooltipProps}
            />
            : <></>
        }
        {
          allowedEditMode.includes('UPDATE') ?
            <ModifyButton
              icon={
                <FontAwesomeIcon icon={faDrawPolygon} />
              }
              pressedIcon={
                <FontAwesomeIcon icon={faDrawPolygon} />
              }
              name="edit"
              digitizeLayer={editLayer}
              tooltip={t('EditFeatureGeometryToolbar.edit')}
              onModifyStart={updateRevision}
              onModifyEnd={updateRevision}
              onTranslateEnd={updateRevision}
              {...btnTooltipProps}
            />
            : <></>
        }
        {
          allowedEditMode.includes('DELETE') ?
            <DeleteButton
              icon={
                <FontAwesomeIcon icon={faTrash} />
              }
              pressedIcon={
                <FontAwesomeIcon icon={faTrash} />
              }
              name="delete"
              digitizeLayer={editLayer}
              tooltip={t('EditFeatureGeometryToolbar.delete')}
              onFeatureRemove={updateRevision}
              {...btnTooltipProps}
            />
            : <></>
        }
      </ToggleGroup>
      <SimpleButton
        icon={
          <FontAwesomeIcon icon={faUndo} />
        }
        tooltip={t('EditFeatureGeometryToolbar.undo')}
        onClick={undoEdit}
        disabled={editHistory.current.past?.length === 0}
        {...btnTooltipProps}
      />
      <SimpleButton
        icon={
          <FontAwesomeIcon
            icon={faUndo}
            flip="horizontal"
          />
        }
        tooltip={t('EditFeatureGeometryToolbar.redo')}
        onClick={redoEdit}
        disabled={editHistory.current.future?.length === 0}
        {...btnTooltipProps}
      />
    </Toolbar>
  );
};

export default EditFeatureGeometryToolbar;
