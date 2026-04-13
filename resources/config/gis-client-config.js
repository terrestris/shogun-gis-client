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
    url: '/print',
    outputFormats: [
      'pdf',
      'png'
    ]
  },
  plugins: [],
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
