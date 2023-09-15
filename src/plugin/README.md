## Write plugins for shogun-gis-client

In order to create a new plugin `newplugin` use the following steps:

1. Initialize a new plugin in a new npm project having a `package.json` containing at least
```
{
  "name": "my-new-plugin",
  "version": "0.0.1-dev",
  "private": true,
  "description": "My new plugin",
  "author": "terrestris GmbH & Co. KG <info@terrestris.de>",
  "scripts": {
    "build": "webpack --config webpack.prod.js",
    "start": "webpack serve --config webpack.dev.js"
  }
}
```

2. Create a subfolder `src` containing
* An `index.ts` exporting all subcomponents
* A Subfolder(s) containing at least one component and a plugin configuration file `plugin.ts` which describes the plugin
```
import type {
  ClientPlugin
} from '@terrestris/shogun-gis-client/dist/plugin';

import locale from './i18n'; // include i18n if required

import MyNewComponent from './index';

export const MyNewPlugin: ClientPlugin = {
  key: 'my-new-plugin',
  integration: {
    placement: 'header',
    placementOrientation: 'center'
  },
  i18n: locale,
  component: MyNewComponent
};

export default MyNewPlugin;
```

3. Define dependencies / dev dependencies when required and *not* included already in the ones of `shogun-gis-client`
4. Create new webpack-configurations and adapt especially `webpack-common.js` to your needs. Here `shared` dependencies have to be defined which are provided by the module loading / integrating your new plugin:
```
...

  plugins: [
    new ModuleFederationPlugin({
      name: 'MyNewPlugin',
      filename: 'index.js',
      exposes: {
        './MyNewComponent './src/MyNewComponent/plugin',
      },
      shared: {
        react: {
          requiredVersion: '^17',
          singleton: true
        },
        'react-dom': {
          requiredVersion: '^17',
          singleton: true
        },
        antd: {
          requiredVersion: '^4',
          singleton: true
        },
        'react-i18next': {
          singleton: true,
          requiredVersion: '^13',
        }
      }
    })
]
```

and `webpack.dev.js`:

```js
const path = require('path');

const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const {
  merge
} = require('webpack-merge');

const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    server: 'https',
    port: 4123,
    static: path.join(__dirname, 'resources', 'public')
  }
});
```

5. In order to be included in your shogun-gis-client instance, you need to register your plugin in the config as well
```
  ...
  plugins: [{
    name: 'MyNewPlugin',
    resourcePath: '/toBeDefined/my-new-client/index.js',
    exposedPaths: [
      './MyNewComponent'
    ]
  },
  ... // other plugins
  ]
  ...
```
6. In nginx config, expose your new plugin (assumption: webpack dev server of plugin uses port 4123)
```
location /toBeDefined/my-new-client/ {
    proxy_pass https://my-new-plugin-service:4123/;

    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
    proxy_set_header X-Forwarded-Port $server_port;

    # WebSocket support (nginx 1.4)
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection "upgrade";
  }
```
7. Finally, add docker container for plugin in your `docker-compose.yml` (and `common-services.yaml` if present)

```
  my-new-plugin-service:
    restart: unless-stopped
    build:
      context: ${PATH_TO_YOUR_NEW_PLUGIN}
      dockerfile: Dockerfile-dev
    ports:
      - "4123:4123"
    volumes:
      - ${PATH_TO_YOUR_NEW_PLUGIN}:/app
    networks:
      - gdawasser-net

```
8. In your plugin folder (`PATH_TO_YOUR_NEW_PLUGIN`) you have to add at least a file `Dockerfile-dev`, containing the webpack start:

```dockerfile
FROM node:18.17.0-alpine@sha256:93d91deea65c9a0475507e8bc8b1917d6278522322f00c00b3ab09cab6830060

WORKDIR /app

ENTRYPOINT npm run start
```
