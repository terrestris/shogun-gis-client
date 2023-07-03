import OlLayerTile from 'ol/layer/Tile';
import OlMap from 'ol/Map';
import OlSourceTileWMS from 'ol/source/TileWMS';

import generateSolrQuery from './generateSolrQuery';

describe('<generateSolrQuery />', () => {
  let map: OlMap;

  beforeEach(() => {
    const layer1 = new OlLayerTile({
      source: new OlSourceTileWMS({
        url: 'https://example.com/wms1',
        params: {
          LAYERS: 'SHOGUN:foo'
        }
      })
    });
    layer1.setProperties({
      searchConfig: {
        attributes: ['attr1', 'attr2']
      },
      searchable: true
    });

    const layer2 = new OlLayerTile({
      source: new OlSourceTileWMS({
        url: 'https://example.com/wms2',
        params: {
          LAYERS: 'SHOGUN:bar'
        }
      })
    });
    layer2.setProperties({
      searchConfig: {
        attributes: ['attr3', 'attr4']
      },
      searchable: true
    });

    map = new OlMap({
      controls: [],
      layers: [layer1, layer2]
    });
  });

  it('is defined', () => {
    expect(generateSolrQuery).not.toBeUndefined();
  });

  it('returns the correct solr query (single term, no attributes specified)', () => {
    const layerWithoutAttributeConfig = new OlLayerTile({
      source: new OlSourceTileWMS({
        url: 'https://example.com/wms2',
        params: {
          LAYERS: 'SHOGUN:bar'
        }
      })
    });

    layerWithoutAttributeConfig.setProperties({
      searchable: true
    });

    map.setLayers([layerWithoutAttributeConfig]);

    let generatedQuery = generateSolrQuery({
      searchValue: 'foo',
      map
    });

    const expectedSolrQuery = '(featureType:"SHOGUN:bar" AND ((foo*^3 OR *foo*^2 OR foo~1)))';

    expect(generatedQuery).toHaveLength(1);
    expect(generatedQuery[0].query).toEqual(expectedSolrQuery);
    expect(generatedQuery[0].fieldList).toBeUndefined();
  });

  it('returns the correct solr query (single term, two attributes specified)', () => {
    let generatedQuery = generateSolrQuery({
      searchValue: 'lorem',
      map
    });

    // eslint-disable-next-line max-len
    const expectedSolrQueryFoo = '(featureType:"SHOGUN:foo" AND ((lorem*^3 OR *lorem*^2 OR lorem~1)))';
    const expectedSolrQueryBar = '(featureType:"SHOGUN:bar" AND ((lorem*^3 OR *lorem*^2 OR lorem~1)))';

    expect(generatedQuery).toHaveLength(2);
    expect(generatedQuery[0].query).toEqual(expectedSolrQueryFoo);
    expect(generatedQuery[1].query).toEqual(expectedSolrQueryBar);
    expect(generatedQuery[0].fieldList).toEqual('attr1 attr2');
    expect(generatedQuery[1].fieldList).toEqual('attr3 attr4');
  });

  it('returns the correct solr query (search phrase, two attributes specified)', () => {
    let generatedQuery = generateSolrQuery({
      searchValue: 'lorem ipsum',
      map
    });

    const expectedSolrQueryFoo = '(featureType:"SHOGUN:foo" AND ((lorem*^3 OR *lorem*^2 OR lorem~1) AND (ipsum*^3 OR *ipsum*^2 OR ipsum~1)))';
    const expectedSolrQueryBar = '(featureType:"SHOGUN:bar" AND ((lorem*^3 OR *lorem*^2 OR lorem~1) AND (ipsum*^3 OR *ipsum*^2 OR ipsum~1)))';

    expect(generatedQuery).toHaveLength(2);
    expect(generatedQuery[0].query).toEqual(expectedSolrQueryFoo);
    expect(generatedQuery[1].query).toEqual(expectedSolrQueryBar);
    expect(generatedQuery[0].fieldList).toEqual('attr1 attr2');
    expect(generatedQuery[1].fieldList).toEqual('attr3 attr4');
  });

});
