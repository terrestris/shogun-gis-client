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
  featureEditRoles: {
    authorizedRolesForCreate: [],
    authorizedRolesForUpdate: [],
    authorizedRolesForDelete: []
  },
  wfsLockFeatureEnabled: false,
  enableFallbackConfig: true
};
