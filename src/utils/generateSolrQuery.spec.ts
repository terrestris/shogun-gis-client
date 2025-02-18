import OlLayerTile from 'ol/layer/Tile';
import OlMap from 'ol/Map';
import OlSourceTileWMS from 'ol/source/TileWMS';

import generateSolrQuery from './generateSolrQuery';

describe('<generateSolrQuery />', () => {
  let map: OlMap;
  let layer1: OlLayerTile<OlSourceTileWMS>;
  let layer2: OlLayerTile<OlSourceTileWMS>;

  beforeEach(() => {
    layer1 = new OlLayerTile({
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

    layer2 = new OlLayerTile({
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

    const generatedQueries = generateSolrQuery({
      searchValue: 'foo',
      map
    });

    const expectedSolrQuery = '(featureType:"SHOGUN:bar") AND ((foo^4 OR *foo*^2 OR foo~1))';

    expect(generatedQueries).toHaveLength(1);
    expect(generatedQueries[0].query).toEqual(expectedSolrQuery);
    expect(generatedQueries[0].fieldList).toBeUndefined();
  });

  it('returns the correct solr query for multiple layers (single term, no attributes specified)', () => {
    layer1.setProperties({
      searchConfig: null,
      searchable: true
    });
    layer2.setProperties({
      searchConfig: null,
      searchable: true
    });

    const generatedQueries = generateSolrQuery({
      searchValue: 'foo',
      map
    });

    const expectedSolrQuery = '(featureType:"SHOGUN:foo" OR featureType:"SHOGUN:bar") AND ((foo^4 OR *foo*^2 OR foo~1))';

    expect(generatedQueries).toHaveLength(1);
    expect(generatedQueries[0].query).toEqual(expectedSolrQuery);
    expect(generatedQueries[0].fieldList).toBeUndefined();
  });

  it('generates a grouped solr query for identical searchAttributes', () => {
    layer1.setProperties({
      searchConfig: {
        attributes: ['street', 'number']
      },
      searchable: true
    });
    layer2.setProperties({
      searchConfig: {
        attributes: ['street', 'number']
      },
      searchable: true
    });

    const generatedQueries = generateSolrQuery({
      searchValue: 'dummy',
      map
    });

    const expectedSolrQuery = '(featureType:"SHOGUN:foo" OR featureType:"SHOGUN:bar") AND ((dummy^4 OR *dummy*^2 OR dummy~1))';

    expect(generatedQueries).toHaveLength(1);
    expect(generatedQueries[0].query).toEqual(expectedSolrQuery);
    expect(generatedQueries[0].fieldList).toBe('street number');
  });

  it('returns the correct solr query (single term, two attributes specified)', () => {
    const generatedQueries = generateSolrQuery({
      searchValue: 'lorem',
      map
    });

    const expectedSolrQueryFoo = '(featureType:"SHOGUN:foo") AND ((lorem^4 OR *lorem*^2 OR lorem~1))';
    const expectedSolrQueryBar = '(featureType:"SHOGUN:bar") AND ((lorem^4 OR *lorem*^2 OR lorem~1))';

    expect(generatedQueries).toHaveLength(2);
    expect(generatedQueries[0].query).toEqual(expectedSolrQueryFoo);
    expect(generatedQueries[1].query).toEqual(expectedSolrQueryBar);
    expect(generatedQueries[0].fieldList).toEqual('attr1 attr2');
    expect(generatedQueries[1].fieldList).toEqual('attr3 attr4');
  });

  it('returns the correct solr query (search phrase, two attributes specified)', () => {
    const generatedQueries = generateSolrQuery({
      searchValue: 'lorem ipsum',
      map
    });

    const expectedSolrQueryFoo = '(featureType:"SHOGUN:foo") AND ((lorem^4 OR *lorem*^2 OR lorem~1) AND (ipsum^4 OR *ipsum*^2 OR ipsum~1))';
    const expectedSolrQueryBar = '(featureType:"SHOGUN:bar") AND ((lorem^4 OR *lorem*^2 OR lorem~1) AND (ipsum^4 OR *ipsum*^2 OR ipsum~1))';

    expect(generatedQueries).toHaveLength(2);
    expect(generatedQueries[0].query).toEqual(expectedSolrQueryFoo);
    expect(generatedQueries[1].query).toEqual(expectedSolrQueryBar);
    expect(generatedQueries[0].fieldList).toEqual('attr1 attr2');
    expect(generatedQueries[1].fieldList).toEqual('attr3 attr4');
  });

});
