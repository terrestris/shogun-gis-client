import React, {
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

import { TooltipPlacement } from 'antd/es/tooltip';
import {
  FeatureCollection,
  Feature
} from 'geojson';
import { t } from 'i18next';

import _isEmpty from 'lodash/isEmpty';

import { isEmpty as isEmptyOlExtent } from 'ol/extent';
import OlFeature from 'ol/Feature';
import OlFormatGeoJson from 'ol/format/GeoJSON';
import { DrawEvent as OlDrawEvent } from 'ol/interaction/Draw';
import OlLayerVector from 'ol/layer/Vector';
import OlSourceVector from 'ol/source/Vector';

import { DeleteButton } from '@terrestris/react-geo/dist/Button/DeleteButton/DeleteButton';
import DrawButton from '@terrestris/react-geo/dist/Button/DrawButton/DrawButton';
import { ModifyButton } from '@terrestris/react-geo/dist/Button/ModifyButton/ModifyButton';
import SimpleButton from '@terrestris/react-geo/dist/Button/SimpleButton/SimpleButton';
import { ToggleGroup } from '@terrestris/react-geo/dist/Button/ToggleGroup/ToggleGroup';

import { useMap } from '@terrestris/react-util/dist/Hooks/useMap/useMap';
import {
  DigitizeUtil
} from '@terrestris/react-util/dist/Util/DigitizeUtil';

import useAppDispatch from '../../../hooks/useAppDispatch';
import useAppSelector from '../../../hooks/useAppSelector';

import {
  setFormDirty
} from '../../../store/editFeature';
import Toolbar, { ToolbarProps } from '../../Toolbar';

import './index.less';

export type EditFeatureGeometryToolbarProps = ToolbarProps & {
  feature: Feature;
  historyLength?: number;
};

type DrawType = 'Point' | 'LineString' | 'Polygon';

type EditHistory = {
  past: FeatureCollection[];
  future: FeatureCollection[];
};
export const EditFeatureGeometryToolbar: React.FC<EditFeatureGeometryToolbarProps> = ({
  feature,
  historyLength = 10
}) => {

  const editHistory = useRef<EditHistory>({
    past: [],
    future: []
  });

  const map = useMap();
  const dispatch = useAppDispatch();

  const [editLayer, setEditLayer] = useState<OlLayerVector<OlFeature>>();
  const [, setRevision] = useState<number>(0);

  const gjFormat = useMemo(() => new OlFormatGeoJson(), []);

  const allowedEditMode = useAppSelector(state => state.editFeature.userEditMode);
  const formDirty = useAppSelector(state => state.editFeature.formDirty);

  useEffect(() => {
    if (!map) {
      return;
    }

    if (!editLayer) {
      setEditLayer(DigitizeUtil.getDigitizeLayer(map));
    }

    return () => {
      if (editLayer) {
        map?.removeLayer(editLayer);
      }
    };
  }, [editLayer, map]);

  useEffect(() => {
    const isModified = editHistory.current.past.length > 0;
    if (isModified && !formDirty) {
      dispatch(setFormDirty(true));
    }
  // we only want to change formDirty state when the editHistory changes
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, editHistory.current.past]);

  useEffect(() => {
    if (editLayer && feature?.id) {
      editLayer.getSource()?.clear();
      const olFeat = gjFormat.readFeature(feature);
      const source = editLayer.getSource() as OlSourceVector;
      source.addFeature(olFeat);
      setRevision(r => r + 1);

      if (!isEmptyOlExtent(source.getExtent())) {
        map?.getView().fit(source.getExtent(), {
          padding: [50, 50, 50, 50]
        });
      }
    }
  }, [feature, editLayer, gjFormat, map]);

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

  const onDrawEnd = (e: OlDrawEvent) => {
    // overwrite existing geometry of feature
    if (!feature.geometry.type.toLocaleLowerCase().startsWith('multi')) {
      const source = editLayer?.getSource();
      const existingFeature = source?.getFeatures()[0];
      if (existingFeature) {
        // drawbutton automatically adds the feature to the source so we need to remove it again
        source?.once('addfeature', (e2) => source.removeFeature(e2.feature!));
        existingFeature.setGeometry(e.feature.getGeometry());
      }
    }
    updateRevision();
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

  if (allowedEditMode.includes('EDIT_GEOMETRY')) {
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
                drawType={feature.geometry.type as DrawType}
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
  } else {
    return <></>;
  }
};

export default EditFeatureGeometryToolbar;
