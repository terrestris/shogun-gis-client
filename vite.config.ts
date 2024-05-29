import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
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
      shared: {
        react: {
          // singleton: true,
          // eager: true,
          requiredVersion: deps.react
        },
        'react-dom': {
          // singleton: true,
          // eager: true,
          requiredVersion: deps['react-dom']
        },
        'react-redux': {
          // singleton: true,
          // eager: true,
          requiredVersion: deps['react-redux']
        },
        '@terrestris/react-geo': {
          // singleton: true,
          // eager: true,
          requiredVersion: deps['@terrestris/react-geo']
        },
        'react-i18next': {
          // singleton: true,
          // eager: true,
          requiredVersion: deps['react-i18next']
        },
        'ol': {
          // singleton: true,
          // eager: true,
          requiredVersion: deps.ol
        }
      }
    }
    // {
    //   name: 'remote-app',
    //   filename: 'remoteEntry.js',
    //   // Modules to expose
    //   exposes: {
    //       './Button': './src/Button.vue',
    //   },
    //   shared: ['vue']
    // }
  )
  ],
  // resolve: {
  //   alias: [
  //     {
  //       find: 'clientConfig',
  //       replacement: 'gis-client-config.js'
  //     }
  //   ]
  // },
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
