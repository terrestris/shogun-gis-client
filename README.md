# SHOGun GIS client

This repository contains the default WebGIS client used within the [SHOGun project](https://github.com/terrestris/shogun-docker).

The client was initialized with [create-react-geo-app](https://github.com/terrestris/create-react-geo-app).

## Installation 💾

We recommended to install the client via the prebuilt Docker image `docker-public.terrestris.de/terrestris/shogun-gis-client`.

## Usage 🖱️

Even if the client can be used without any backend providing a context configuration, it is designed to run on top of a [SHOGun backend](https://github.com/terrestris/shogun) while reading the configuration from the [`/applications`](https://petstore.swagger.io/?url=https://raw.githubusercontent.com/terrestris/shogun/gh-pages/api/swagger.json#/application-controller)  REST interface. To specify a configuration the query parameter `applicationId` must be set (e.g. `https://localhost/client/?applicationId=18` to get the configuration for the application with the ID 18).
If no ID is given (e.g. because no backend is available) or the requested application is not accessible, the client will load a fallback configuration.

## Configuration 🎨

Several global settings for the client can be configured via the [`gis-client-config.js`](https://github.com/terrestris/shogun-gis-client/blob/main/resources/config/gis-client-config.js) file:

| Name | Description | Default |
| ---- | ----------- | ------- |
| shogunBase | The base URL of SHOGun, e.g. `/api` or `https://my-shogun.org/` | '/' |
| keycloak.enabled | Whether Keycloak is used for authentication or not. Usually this should only set to `false` in client only mode or if no authentication is needed to access any SHOGun endpoints at all | false |
| keycloak.host | The Keycloak host, e.g. `https://localhost/auth` | null |
| keycloak.realm | The Keycloak realm that should be used for authentication, e.g. `SHOGun` | null |
| keycloak.clientId | The Keycloak client that should be used for authentication, e.g. `shogun-client` | null |
| keycloak.onLoadAction | See [here](https://www.keycloak.org/docs/latest/securing_apps/#_javascript_adapter) for details | 'check-sso' |
| print.url | The url of the MapFish Print servlet | '/print' |

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
