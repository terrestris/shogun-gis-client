import React from 'react';

import {
  faClipboardCheck,
  faClipboardList,
  faEdit
} from '@fortawesome/free-solid-svg-icons';
import {
  FontAwesomeIcon
} from '@fortawesome/react-fontawesome';

import {
  Button,
  Pagination,
  PaginationProps,
  Tooltip
} from 'antd';

import copy from 'copy-to-clipboard';

import {
  Feature
} from 'geojson';
import _clone from 'lodash/clone';

import {
  getUid
} from 'ol';
import { isEmpty as isEmptyOlExtent } from 'ol/extent';
import OlFeature from 'ol/Feature';
import OlFormatGeoJSON from 'ol/format/GeoJSON';
import OlGeometry from 'ol/geom/Geometry';
import OlLayer from 'ol/layer/Layer';

import {
  useTranslation
} from 'react-i18next';

import Logger from '@terrestris/base-util/dist/Logger';

import {
  useMap
} from '@terrestris/react-util/dist/Hooks/useMap/useMap';
import { DigitizeUtil } from '@terrestris/react-util/dist/Util/DigitizeUtil';

import useAppDispatch from '../../../../hooks/useAppDispatch';
import useAppSelector from '../../../../hooks/useAppSelector';
import {
  setLayerId,
  setFeature
} from '../../../../store/editFeature';
import {
  show as showEditFeatureDrawer
} from '../../../../store/editFeatureDrawerOpen';
import { CopyTools } from '../../../../store/featureInfo';

import './index.less';

export type PaginationToolbarProps = {
  exportFilter?: (propertyName: string, propertyValue: string) => boolean;
  features: OlFeature[];
  layer?: OlLayer;
  selectedFeature: OlFeature;
} & PaginationProps;

export const PaginationToolbar: React.FC<PaginationToolbarProps> = ({
  exportFilter,
  features,
  layer,
  selectedFeature,
  ...passThroughProps
}): JSX.Element => {

  const {
    t
  } = useTranslation();
  const dispatch = useAppDispatch();
  const map = useMap();

  const activeCopyTools = useAppSelector(state => state.featureInfo.activeCopyTools);

  const allowedEditMode = useAppSelector(
    state => state.editFeature.userEditMode
  );

  const onCopyAsGeoJSONClick = () => {
    if (!selectedFeature) {
      return;
    }

    const selectedFeatureClone = selectedFeature.clone();

    if (exportFilter) {
      const propertyEntries = Object.entries(selectedFeatureClone.getProperties());
      const filteredPropertyEntries = propertyEntries.filter(([key, value]) => exportFilter(key, value));

      for (const [key, value] of propertyEntries) {
        if (value instanceof OlGeometry) {
          continue;
        }

        selectedFeatureClone.unset(key);
      }

      selectedFeatureClone.setProperties(Object.fromEntries(filteredPropertyEntries));
    }

    copy(new OlFormatGeoJSON().writeFeature(selectedFeatureClone));
  };

  const onCopyAsObjectClick = () => {
    if (!selectedFeature) {
      return;
    }

    let props = Object.entries(_clone(selectedFeature.getProperties()))
      .filter(([, value]) => !(value instanceof OlGeometry));

    if (exportFilter) {
      props = props.filter(([key, value]) => exportFilter(key, value));
    }

    copy(JSON.stringify(Object.fromEntries(props)));
  };

  const onEditFeatureBtnClick = () => {
    if (!layer || !map) {
      return;
    }

    const geojsonFeatureString = new OlFormatGeoJSON().writeFeature(selectedFeature);

    try {
      const geojsonFeature = JSON.parse(geojsonFeatureString) as Feature;
      const editLayer = DigitizeUtil.getDigitizeLayer(map);

      if (!editLayer) {
        return;
      }

      const source = editLayer.getSource();

      if (!source) {
        return;
      }

      source.clear();
      source.addFeature(selectedFeature);

      if (isEmptyOlExtent(source.getExtent())) {
        return;
      }

      map.getView().fit(source.getExtent(), {
        padding: [150, 150, 150, 150]
      });
      dispatch(setLayerId(getUid(layer)));
      dispatch(setFeature(geojsonFeature));
      dispatch(showEditFeatureDrawer());
    } catch (error) {
      Logger.error('Could not parse GeoJSON: ', error);
    }
  };

  const isEditButtonVisible = allowedEditMode.includes('CREATE') ||
    allowedEditMode.includes('DELETE') ||
    allowedEditMode.includes('UPDATE');
  const isLayerEditable = layer?.get('editable');

  return (
    <div
      className="pagination-toolbar"
    >
      <Pagination
        simple
        total={features.length}
        size="small"
        pageSize={1}
        {...passThroughProps}
      />
      <div
        className="copy-buttons"
      >
        {
          isEditButtonVisible && (
            <Tooltip
              key="edit"
              title={isLayerEditable ? t('PaginationToolbar.editFeature') : t('PaginationToolbar.editDisabled')}
            >
              <Button
                type="text"
                size="small"
                onClick={onEditFeatureBtnClick}
                icon={<FontAwesomeIcon icon={faEdit} />}
                disabled={!isLayerEditable}
              />
            </Tooltip>
          )
        }
        {
          activeCopyTools?.includes(CopyTools.COPY_AS_GEOJSON) && (
            <Tooltip
              title={t('PaginationToolbar.copyAsGeoJson')}
            >
              <Button
                type="text"
                size="small"
                onClick={onCopyAsGeoJSONClick}
                icon={<FontAwesomeIcon icon={faClipboardCheck} />}
              />
            </Tooltip>
          )
        }
        {
          activeCopyTools?.includes(CopyTools.COPY_AS_OBJECT) && (
            <Tooltip
              title={t('PaginationToolbar.copyAsObject')}
            >
              <Button
                type="text"
                size="small"
                onClick={onCopyAsObjectClick}
                icon={<FontAwesomeIcon icon={faClipboardList} />}
              />
            </Tooltip>
          )
        }
      </div>
    </div>
  );
};

export default PaginationToolbar;
