import React from 'react';

import {
  faClipboardCheck,
  faClipboardList
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

import _isFinite from 'lodash/isFinite';

import OlFeature from 'ol/Feature';
import OlFormatGeoJSON from 'ol/format/GeoJSON';
import OlGeometry from 'ol/geom/Geometry';

import {
  useTranslation
} from 'react-i18next';

import './index.less';

export type PaginationToolbarProps = {
  features: OlFeature[];
  selectedFeature: OlFeature;
  exportFilter?: (propertyName: string, propertyValue: string) => boolean;
} & PaginationProps;

export const PaginationToolbar: React.FC<PaginationToolbarProps> = ({
  features,
  selectedFeature,
  exportFilter,
  ...passThroughProps
}): JSX.Element => {

  const {
    t
  } = useTranslation();

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
