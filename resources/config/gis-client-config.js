var clientConfig = {
  shogunBase: '/',
  keycloak: {
    enabled: false,
    host: null,
    realm: null,
    clientId: null,
    onLoadAction: 'check-sso'
  },
  print: {
    url: '/print'
  },
  plugins: [],
  geoserver: {
    base: '/geoserver',
    upload: {
      workspace: 'SHOGUN-UPLOADS',
      limit: 200000000, // ~200MB
      authorizedRoles: [
        'admin'
      ]
    }
  },
  search: {
    nominatimUrl: 'https://nominatim.openstreetmap.org/search?',
    solrBasePath: '/search/query',
    coreName: 'search',
    defaultUseViewBox: true,
    groupByCategory: true,
    useSolrHighlighting: true,
    activateLayerOnClick: true,
    delay: 1000,
    minChars: 3,
    solrQueryConfig: {
      queryParser: 'edismax',
      rowsPerQuery: 100,
      tagPre: '<b>',
      tagPost: '</b>',
      requireFieldMatch: true
    }
  },
  featureEditRoles: {
    authorizedRolesForCreate: [],
    authorizedRolesForUpdate: [],
    authorizedRolesForDelete: []
  },
  wfsLockFeatureEnabled: false,
  documentationButtonVisible: true,
  enableFallbackConfig: true
};
