import React, {
  useEffect,
  useState
} from 'react';

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
  TableProps,
  Tooltip
} from 'antd';

import copy from 'copy-to-clipboard';

import _isFinite from 'lodash/isFinite';

import OlFeature from 'ol/Feature';
import OlFormatGeoJSON from 'ol/format/GeoJSON';
import OlLayerVector from 'ol/layer/Vector';
import OlSourceVector from 'ol/source/Vector';

import {
  useTranslation
} from 'react-i18next';

import MapUtil from '@terrestris/ol-util/dist/MapUtil/MapUtil';

import PropertyGrid from '@terrestris/react-geo/dist/Grid/PropertyGrid/PropertyGrid';
import useMap from '@terrestris/react-geo/dist/Hook/useMap';

import useHighlightVectorLayer from '../../../../hooks/useHighlightVectorLayer';

import './index.less';

export type FeatureInfoPropertyGridProps = {
  features: OlFeature[];
  layerName: string;
} & TableProps<OlFeature>;

export const FeatureInfoPropertyGrid: React.FC<FeatureInfoPropertyGridProps> = ({
  features,
  layerName,
  ...restProps
}): JSX.Element => {
  const [currentPage, setCurrentPage] = useState<number>();
  const [selectedFeature, setSelectedFeature] = useState<OlFeature>();

  const map = useMap();

  const {
    t
  } = useTranslation();

  const vectorLayerName = `selection-layer-${layerName}`;

  useHighlightVectorLayer({
    layerName: vectorLayerName
  });

  useEffect(() => {
    if (!map) {
      return;
    }

    const vectorLayer = MapUtil.getLayerByName(map, vectorLayerName) as OlLayerVector<OlSourceVector>;

    if (!vectorLayer) {
      return;
    }

    vectorLayer.getSource()?.clear();
    setCurrentPage(1);

    if (features.length > 0) {
      setSelectedFeature(features[0]);
    }
  }, [features, map, vectorLayerName]);

  useEffect(() => {
    if (!selectedFeature || !map) {
      return;
    }

    const vectorLayer = MapUtil.getLayerByName(map, vectorLayerName) as OlLayerVector<OlSourceVector>;

    if (!vectorLayer) {
      return;
    }

    vectorLayer.getSource()?.clear();
    vectorLayer.getSource()?.addFeature(selectedFeature);
  }, [selectedFeature, map, vectorLayerName]);

  const onChange = (page: number) => {
    setCurrentPage(page);
    setSelectedFeature(features[page - 1]);
  };

  const blacklistedAttributes = [
    'geom',
    'the_geom',
    'geometry'
  ];

  if (!selectedFeature) {
    return <></>;
  }

  const attributeFilter = selectedFeature.getKeys()
    .filter((prop: string | number | boolean) => {
      return !blacklistedAttributes.includes((prop as string).toLocaleLowerCase());
    });

  return (
    <PropertyGrid
      className="property-grid"
      feature={selectedFeature}
      attributeFilter={attributeFilter}
      size="small"
      sticky={true}
      title={() => {
        return (
          <>
            <Pagination
              simple
              total={features.length}
              size="small"
              pageSize={1}
              current={currentPage}
              onChange={onChange}
            />
            <div className='copy'>
              <Tooltip
                title={t('FeaturePropertyGrid.copyAsGeoJson')}
              >
                <Button
                  type="primary"
                  size='small'
                  onClick={() => {
                    copy(new OlFormatGeoJSON().writeFeature(selectedFeature));
                  }}
                  icon={<FontAwesomeIcon icon={faClipboardCheck} />}
                />
              </Tooltip>
              <Tooltip
                title={t('FeaturePropertyGrid.copyAsObject')}
              >
                <Button
                  type="primary"
                  size='small'
                  onClick={() => {
                    const props = selectedFeature.getProperties();
                    blacklistedAttributes.forEach(attr => delete props[attr]);
                    copy(JSON.stringify(props));
                  }}
                  icon={<FontAwesomeIcon icon={faClipboardList} />}
                />
              </Tooltip>
            </div>
          </>
        );
      }}
      columns={[{
        title: t('FeaturePropertyGrid.key'),
        dataIndex: 'attributeName',
        key: 'attributeName',
        width: '50%',
        ellipsis: true,
        defaultSortOrder: 'ascend',
        sorter: (a, b) => a.key.localeCompare(b.key)
      }, {
        title: t('FeaturePropertyGrid.value'),
        dataIndex: 'attributeValue',
        key: 'attributeValue',
        width: '50%',
        ellipsis: true
      }]}
      scroll={{
        scrollToFirstRowOnChange: true,
        y: 'calc(100% - 90px)'
      }}
      {...restProps}
    />
  );
};

export default FeatureInfoPropertyGrid;
