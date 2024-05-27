import React, {
  useEffect,
  useState
} from 'react';

import {
  TableProps
} from 'antd';

import OlFeature from 'ol/Feature';
import OlGeometry from 'ol/geom/Geometry';
import OlLayerVector from 'ol/layer/Vector';

import {
  useTranslation
} from 'react-i18next';

import { MapUtil } from '@terrestris/ol-util/dist/MapUtil/MapUtil';

import PropertyGrid from '@terrestris/react-geo/dist/Grid/PropertyGrid/PropertyGrid';
import { useMap } from '@terrestris/react-util/dist/Hooks/useMap/useMap';

import useHighlightVectorLayer from '../../../../hooks/useHighlightVectorLayer';

import PaginationToolbar from '../PaginationToolbar';

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
  const [blacklistedAttributes, setBlacklistedAttributes] = useState<string[]>([]);

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

    const vectorLayer = MapUtil.getLayerByName(map, vectorLayerName) as OlLayerVector<OlFeature>;

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

    const vectorLayer = MapUtil.getLayerByName(map, vectorLayerName) as OlLayerVector<OlFeature>;

    if (!vectorLayer) {
      return;
    }

    const geomAttributes = Object.entries(selectedFeature.getProperties())
      .filter(([, value]) => value instanceof OlGeometry)
      .map(([key]) => key);

    setBlacklistedAttributes(geomAttributes);

    vectorLayer.getSource()?.clear();
    vectorLayer.getSource()?.addFeature(selectedFeature);
  }, [selectedFeature, map, vectorLayerName]);

  const onChange = (page: number) => {
    setCurrentPage(page);
    setSelectedFeature(features[page - 1]);
  };

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
      title={() => (
        <PaginationToolbar
          features={features}
          selectedFeature={selectedFeature}
          current={currentPage}
          onChange={onChange}
        />
      )}
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
