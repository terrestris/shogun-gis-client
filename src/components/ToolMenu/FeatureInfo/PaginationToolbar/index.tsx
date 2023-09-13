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

import _isFinite from 'lodash/isFinite';

import { isEmpty as isEmptyOlExtent } from 'ol/extent';
import OlFeature from 'ol/Feature';
import OlFormatGeoJSON from 'ol/format/GeoJSON';
import OlGeometry from 'ol/geom/Geometry';

import {
  useTranslation
} from 'react-i18next';

import Logger from '@terrestris/base-util/dist/Logger';

import {
  useMap
} from '@terrestris/react-geo/dist/Hook/useMap';
import { DigitizeUtil } from '@terrestris/react-geo/dist/Util/DigitizeUtil';

import useAppDispatch from '../../../../hooks/useAppDispatch';
import useAppSelector from '../../../../hooks/useAppSelector';
import {
  setLayerId,
  setFeature
} from '../../../../store/editFeature';
import {
  show as showEditFeatureDrawer
} from '../../../../store/editFeatureDrawerOpen';

import './index.less';

export type PaginationToolbarProps = {
  features: OlFeature[];
  selectedFeature: OlFeature;
  exportFilter?: (propertyName: string, propertyValue: string) => boolean;
  layerUuid?: string;
} & PaginationProps;

export const PaginationToolbar: React.FC<PaginationToolbarProps> = ({
  features,
  selectedFeature,
  layerUuid,
  exportFilter,
  ...passThroughProps
}): JSX.Element => {

  const {
    t
  } = useTranslation();
  const dispatch = useAppDispatch();
  const map = useMap();

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

    let props = Object.entries(structuredClone(selectedFeature.getProperties()))
      .filter(([, value]) => !(value instanceof OlGeometry));

    if (exportFilter) {
      props = props.filter(([key, value]) => exportFilter(key, value));
    }

    copy(JSON.stringify(Object.fromEntries(props)));
  };

  const onEditFeatureBtnClick = () => {
    if (!layerUuid || !map) {
      return;
    }
    const selectedFeatureClone = selectedFeature.clone();
    const geojsonFeatureString = new OlFormatGeoJSON().writeFeature(selectedFeatureClone);

    try {
      const geojsonFeature = JSON.parse(geojsonFeatureString) as Feature;
      const editLayer = DigitizeUtil.getDigitizeLayer(map);
      if (editLayer) {
        const source = editLayer.getSource();
        if (source) {
          source.clear();
          source.addFeature(selectedFeature);
          if (!isEmptyOlExtent(source.getExtent())) {
            map.getView().fit(source.getExtent(), {
              padding: [150, 150, 150, 150]
            });
          }
        }
      }
      dispatch(setLayerId(layerUuid));
      dispatch(setFeature(geojsonFeature));
      dispatch(showEditFeatureDrawer());
    } catch (error) {
      Logger.error('Could not parse GeoJSON: ', error);
    }
  };

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
          (allowedEditMode.includes('CREATE') ||
          allowedEditMode.includes('DELETE') ||
          allowedEditMode.includes('UPDATE')) && (
            <Tooltip
              key="edit"
              title={t('PaginationToolbar.editFeature')}
              placement="bottom"
            >
              <Button
                type="primary"
                size="small"
                onClick={onEditFeatureBtnClick}
                icon={<FontAwesomeIcon icon={faEdit} />}
              />
            </Tooltip>
          )
        }
        <Tooltip
          title={t('PaginationToolbar.copyAsGeoJson')}
        >
          <Button
            type="primary"
            size="small"
            onClick={onCopyAsGeoJSONClick}
            icon={<FontAwesomeIcon icon={faClipboardCheck} />}
          />
        </Tooltip>
        <Tooltip
          title={t('PaginationToolbar.copyAsObject')}
        >
          <Button
            type="primary"
            size="small"
            onClick={onCopyAsObjectClick}
            icon={<FontAwesomeIcon icon={faClipboardList} />}
          />
        </Tooltip>
      </div>
    </div>
  );
};

export default PaginationToolbar;
