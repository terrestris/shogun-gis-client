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
    solrBasePath: '/search/query',
    coreName: 'search',
    defaultUseViewBox: true,
    useNominatim: true,
    groupByCategory: true,
    boostDisplayedFields: false,
    useSolrHighlighting: true,
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
  enableFallbackConfig: true
};
