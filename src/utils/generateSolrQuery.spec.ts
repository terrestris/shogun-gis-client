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

    const expectedSolrQuery = '(featureType:"SHOGUN:bar" AND ((search:"foo") OR ((search:foo*^3 OR search:*foo*^2 OR search:foo~1))))';

    expect(generatedQuery).toEqual(expectedSolrQuery);
  });

  it('returns the correct solr query (single term, two attributes specified)', () => {
    let generatedQuery = generateSolrQuery({
      searchValue: 'lorem',
      map
    });

    // eslint-disable-next-line max-len
    const expectedSolrQuery = '(featureType:"SHOGUN:foo" AND ((attr1:"lorem" OR attr2:"lorem") OR ((attr1:lorem*^3 OR attr1:*lorem*^2 OR attr1:lorem~1) OR (attr2:lorem*^3 OR attr2:*lorem*^2 OR attr2:lorem~1)))) OR (featureType:"SHOGUN:bar" AND ((attr3:"lorem" OR attr4:"lorem") OR ((attr3:lorem*^3 OR attr3:*lorem*^2 OR attr3:lorem~1) OR (attr4:lorem*^3 OR attr4:*lorem*^2 OR attr4:lorem~1))))';

    expect(generatedQuery).toEqual(expectedSolrQuery);
  });

  it('returns the correct solr query (search phrase, two attributes specified)', () => {
    let generatedQuery = generateSolrQuery({
      searchValue: 'lorem ipsum',
      map
    });

    // eslint-disable-next-line max-len
    const expectedSolrQuery = '(featureType:"SHOGUN:foo" AND ((attr1:"lorem ipsum" OR attr2:"lorem ipsum") OR ((attr1:lorem*^3 OR attr1:*lorem*^2 OR attr1:lorem~1 OR attr1:ipsum*^3 OR attr1:*ipsum*^2 OR attr1:ipsum~1) OR (attr2:lorem*^3 OR attr2:*lorem*^2 OR attr2:lorem~1 OR attr2:ipsum*^3 OR attr2:*ipsum*^2 OR attr2:ipsum~1)))) OR (featureType:"SHOGUN:bar" AND ((attr3:"lorem ipsum" OR attr4:"lorem ipsum") OR ((attr3:lorem*^3 OR attr3:*lorem*^2 OR attr3:lorem~1 OR attr3:ipsum*^3 OR attr3:*ipsum*^2 OR attr3:ipsum~1) OR (attr4:lorem*^3 OR attr4:*lorem*^2 OR attr4:lorem~1 OR attr4:ipsum*^3 OR attr4:*ipsum*^2 OR attr4:ipsum~1))))';

    expect(generatedQuery).toEqual(expectedSolrQuery);
  });

});
