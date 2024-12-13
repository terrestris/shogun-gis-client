<!-- Jest Coverage Comment:Begin -->
<!-- Jest Coverage Comment:End -->

# SHOGun GIS client

This repository contains the default WebGIS client used within the [SHOGun project](https://github.com/terrestris/shogun-docker).

The client was initialized with [create-react-geo-app](https://github.com/terrestris/create-react-geo-app).

## Installation 💾

We recommend to install the client via the prebuilt Docker image `docker-public.terrestris.de/terrestris/shogun-gis-client`.

## Usage 🖱️

Even if the client can be used without any backend providing a context configuration, it is designed to run on top of a [SHOGun backend](https://github.com/terrestris/shogun) while reading the configuration from the [`/applications`](https://petstore.swagger.io/?url=https://raw.githubusercontent.com/terrestris/shogun/gh-pages/api/swagger.json#/application-controller)  REST interface. To specify a configuration the query parameter `applicationId` must be set (e.g. `https://localhost/client/?applicationId=18` to get the configuration for the application with the ID 18).
If no ID is given (e.g. because no backend is available) or the requested application is not accessible, the client will load a fallback configuration.
It is possible to load the application config from a static URL with the configuration parameter `staticAppConfigUrl`.

### Print
To use print apps for different languages just name them after the language code (`ISO_639-1`). The print app that has the name of the currently selected language will be used.

## Configuration 🎨

Several global settings for the client can be configured via the [`gis-client-config.js`](https://github.com/terrestris/shogun-gis-client/blob/main/resources/config/gis-client-config.js) file:

| Name | Description                                                                                                                                                                                              | Default             |
| ---- |----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------|
| shogunBase | The base URL of SHOGun, e.g. `/api` or `https://my-shogun.org/`. If set to `false` no SHOGUN requests will be made by the application.                                                                   | '/'                 |
| staticAppConfigUrl | An URL to load an application configuration, this does not have to come frome shogun but has to have the same syntax (See https://github.com/terrestris/shogun-util/blob/main/src/model/Application.ts). | undefined           |
| layerConfigUrl | An URL to load a list of layers, this does not have to come from shogun but has to have the same syntax (See https://github.com/terrestris/shogun-util/blob/main/src/model/Layer.ts).                    | undefined           |
| keycloak.enabled | Whether Keycloak is used for authentication or not. Usually this should only set to `false` in client only mode or if no authentication is needed to access any SHOGun endpoints at all                  | false               |
| keycloak.host | The Keycloak host, e.g. `https://localhost/auth`                                                                                                                                                         | null                |
| keycloak.realm | The Keycloak realm that should be used for authentication, e.g. `SHOGun`                                                                                                                                 | null                |
| keycloak.clientId | The Keycloak client that should be used for authentication, e.g. `shogun-client`                                                                                                                         | null                |
| keycloak.onLoadAction | See [here](https://www.keycloak.org/docs/latest/securing_apps/#_javascript_adapter) for details                                                                                                          | 'check-sso'         |
| print.url | The url of the MapFish Print servlet                                                                                                                                                                     | '/print'            |
| plugins | The list of plugins to be loaded                                                                                                                                                                         | []                  |
| plugin.name | The name of the plugin                                                                                                                                                                                   | undefined           |
| plugin.exposedPaths | The list of exposed paths                                                                                                                                                                                | undefined           |
| plugin.resourcePath | The resource path                                                                                                                                                                                        | undefined           |
| geoserver.base | The base url of the GeoServer                                                                                                                                                                            | '/geoserver'        |
| geoserver.upload.workspace | The workspace the uploads should be placed in                                                                                                                                                            | 'SHOGUN'            |
| geoserver.upload.limit | The upload size limit in bytes (note: this is the client evaluation only!)                                                                                                                               | 200000000 (= 200MB) |
| geoserver.upload.authorizedRoles | The list of role names the upload should be allowed/visible to (note: this is the client evaluation only!)                                                                                               | ['admin']           |
| featureEditRoles.authorizedRolesForCreate | The list of role names the feature editing tools including the create options should be allowed/visible to (note: this is the client evaluation only!). String and regular expressions are supported.    | []                  |
| featureEditRoles.authorizedRolesForUpdate | The list of role names the feature editing tools including the update options should be allowed/visible to (note: this is the client evaluation only!). String and regular expressions are supported.    | []                  |
| featureEditRoles.authorizedRolesForDelete | The list of role names the feature editing tools including the delete options should be allowed/visible to (note: this is the client evaluation only!). String and regular expressions are supported.    | []                  |
| wfsLockFeatureEnabled | Whether WFS LockFeature is enabled during feature editing or not.                                                                                                                                        | false               |
| documentationButtonVisible | Whether the button in the user menu to open the documentation is visible or not. | true                |
| enableFallbackConfig | Whether the default application configuration should be loaded without any given application ID or not.                                                                                                  | true                |
| search.nominatimUrl | The nominatim URL to use.                                                                                                                                                                            | 'https://nominatim.openstreetmap.org/search?'     |
| search.solrBasePath | Base path to a solr instance.                                                                                                                                                                            | '/search/query'     |
| search.coreName | Solr core name.                                                                                                                                                                                          | 'search'            |
| search.defaultUseViewBox | Whether the search is restricted to the current view box.                                                                                                                                                | true                |
| search.groupByCategory | Groups search results by 'category' text field. If disabled, the layer title will be used instead.                                                                                                       | true                |
| search.useSolrHighlighting | Enable / disable solr search result highlighting.                                                                                                                                                        | true                |
| search.delay | Delay in milliseconds before search is triggered (debouncing).                                                                                                                                           | 1000                |
| search.minChars | Minimum search term length for the search to be triggered.                                                                                                                                               | 3                   |
| search.solrQueryConfig.queryParser | Solr query parser. Must be either 'lucene', 'dismax' or 'edismax'                                                                                                                                        | 'edismax'           |
| search.solrQueryConfig.rowsPerQuery | Number of requested rows per solr query.                                                                                                                                                                 | 100                 |
| search.solrQueryConfig.tagPre | HTML tag applied before search highlight.                                                                                                                                                                | `<b>`               |
| search.solrQueryConfig.tagPost | HTML tag applied after search highlight.                                                                                                                                                                 | `</b>`              |
| search.solrQueryConfig.requireFieldMatch | Only query terms aligning with the field being highlighted will in turn be highlighted.                                                                                                                  | true                |

The configuration file is not bundled and will be loaded before application start from `./gis-client-config.js`. Typically you want to override the file in a production environment and you can pass a custom file by mounting the desired one directly into the nginx container of the client. For example:

```yml
version: '3.7'
services:
  shogun-gis-client:
    image: docker-public.terrestris.de/terrestris/shogun-gis-client:latest
    volumes:
      - ./gis-client-config.js:/usr/share/nginx/html/gis-client-config.js
    (…)
```

The [shogun-docker](https://github.com/terrestris/shogun-docker) repository shows an alternative (and the preferred) way by providing the configuration file out of the root-nginx service while having support for dynamic environment variable replacement.

## Development 🧑‍💻

Checkout the repository and install all required dependencies via

```
npm i
```

While it's absolutely possible to run the client via

```
npm run start
```

to have the application available at [https://localhost:8080](https://localhost:8080) you usually want to start the full SHOGun stack for development. Please refer to the [shogun-docker](https://github.com/terrestris/shogun-docker) repository for further details.

### Development if shogun-gis-client is a dependency of your project

Injects the local version of shogun-gis-client into another project. This can be useful when developing https://github.com/terrestris/shogun-gis-client-plugins

```sh
npx watch-build-copy ./src "npm run build:dist" ./dist/ ../shogun-gis-client-plugins/node_modules/@terrestris/shogun-gis-client/dist
```

## End-to-End testing using Playwright

Ensure using the latest version of the E2E-Test package:

```
npm update @terrestris/shogun-e2e-tests
```

Set your domain including potential paths as the ´process.env.HOST´ variable in the [global-setup.js](./global-setup.js). For example:

```
shogun.terrestris.de
```

To run the E2E-tests locally just use the following command in the commandline:

```
npx playwright test
```

## Road to production 🏭

The build artifact of the client can either be built via

```
npm run build
```

or directly included in an `nginx` based Docker image via:

```
docker build -t shogun-gis-client:1.0.0 .
```

Run `docker run -p 80:80 shogun-gis-client:1.0.0` to start it locally.

## Contributing 💫

In short: yes, please contribute as you see fit 😊, we're looking forward to your input.

Be bold and open PRs and issues for anything that bugs you or for all the ideas you want
to share. We'd be happy to help you make your first steps or even bigger changes.
