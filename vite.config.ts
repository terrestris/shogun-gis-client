import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteExternalsPlugin } from 'vite-plugin-externals';
import federation from "@originjs/vite-plugin-federation";
import topLevelAwait from "vite-plugin-top-level-await";
import config from './package.json';
const deps = config.dependencies;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    topLevelAwait({
      // The export name of top-level await promise for each chunk module
      promiseExportName: "__tla",
      // The function to generate import names of top-level await promise in each chunk module
      promiseImportName: i => `__tla_${i}`
    }),
    viteExternalsPlugin({
      clientConfig: 'clientConfig',
    }),
    federation({
      name: 'SHOGunGISClient',
      remotes: {
        ExamplePlugin: 'http://localhost:8888/assets/index.js'
      },
      shared: {
        react: {
          requiredVersion: deps.react
        },
        'react-dom': {
          requiredVersion: deps['react-dom']
        },
        'react-redux': {
          requiredVersion: deps['react-redux']
        },
        '@terrestris/react-geo': {
          requiredVersion: deps['@terrestris/react-geo']
        },
        'react-i18next': {
          requiredVersion: deps['react-i18next']
        },
        'ol': {
          requiredVersion: deps.ol
        }
      }
    }
  )
  ],
  server: {
    host: '0.0.0.0',
    port: 8080,
    preTransformRequests: false
  },
  build: {
    rollupOptions: {
      external: 'clientConfig'
    }
  }
});
