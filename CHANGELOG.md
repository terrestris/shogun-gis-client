## [3.1.0](https://github.com/terrestris/shogun-demo-client/compare/v3.0.0...v3.1.0) (2022-05-31)


### Features

* add addLayerModal ([34f3a4d](https://github.com/terrestris/shogun-demo-client/commit/34f3a4de84eefe488c3db644dce755230e6ffcdf))


### Bugfixes

* move locales to translation file and fix lint ([790f02e](https://github.com/terrestris/shogun-demo-client/commit/790f02ec14d45a7bdffccca91c94d809f680cd16))


### Dependencies

* remove TODO ([8ff0eb3](https://github.com/terrestris/shogun-demo-client/commit/8ff0eb3e212d5a8a9401c7aa70545be9d1de36aa))

## [3.0.0](https://github.com/terrestris/shogun-demo-client/compare/v2.0.1...v3.0.0) (2022-05-31)


### Features

* add option to login into geoserver ([a519699](https://github.com/terrestris/shogun-demo-client/commit/a519699382db0ae34d86c449ddbb66c6a5bdb307))
* introduce GeoServerUtil ([9a0321d](https://github.com/terrestris/shogun-demo-client/commit/9a0321d88cdb3781f6c29d7d4c5057756296b88d))


### Breaking changes

* change path of client config ([42fc794](https://github.com/terrestris/shogun-demo-client/commit/42fc7944303febb6b2da0dd31aeff94a7e908410))


### Dependencies

* **deps-dev:** bump @typescript-eslint/eslint-plugin ([bff2460](https://github.com/terrestris/shogun-demo-client/commit/bff246097be6c9b393211c70ee25e00652033b54))
* **deps-dev:** bump @typescript-eslint/parser from 5.26.0 to 5.27.0 ([3184238](https://github.com/terrestris/shogun-demo-client/commit/31842383220e118551efa997c8f82683f87c12a2))
* **deps:** bump antd from 4.20.6 to 4.20.7 ([8c78b59](https://github.com/terrestris/shogun-demo-client/commit/8c78b590dbfd2d6b7d6b38918c463d7491d91fc5))

### [2.0.1](https://github.com/terrestris/shogun-demo-client/compare/v2.0.0...v2.0.1) (2022-05-30)


### Dependencies

* **deps-dev:** bump @babel/core from 7.18.0 to 7.18.2 ([defb552](https://github.com/terrestris/shogun-demo-client/commit/defb552b3253daac6fc8fc78afa58b1482c7e5fd))
* **deps-dev:** bump @babel/preset-env from 7.18.0 to 7.18.2 ([45e3fcc](https://github.com/terrestris/shogun-demo-client/commit/45e3fccec138775990b3897b1e719ddec51cb6f2))
* **deps-dev:** bump @commitlint/cli from 17.0.0 to 17.0.1 ([1909399](https://github.com/terrestris/shogun-demo-client/commit/1909399f874b66eab489697dd4d37207b175e318))
* **deps-dev:** bump typescript from 4.6.4 to 4.7.2 ([a5d3e43](https://github.com/terrestris/shogun-demo-client/commit/a5d3e4324474b9ca72e94b5ecbba79f39c101943))
* **deps:** bump @reduxjs/toolkit from 1.8.1 to 1.8.2 ([0b0852e](https://github.com/terrestris/shogun-demo-client/commit/0b0852e93acfbed8142a78d12592c6b84c67a77f))
* **deps:** bump i18next from 21.8.4 to 21.8.5 ([32dd20b](https://github.com/terrestris/shogun-demo-client/commit/32dd20bb519c3364dd0067f5968defedc9711979))


### Bugfixes

* fix color for scale ([e0be63e](https://github.com/terrestris/shogun-demo-client/commit/e0be63e4c6acc00a34876ed280912da631ebf847))
* open print in new browser tab ([a975959](https://github.com/terrestris/shogun-demo-client/commit/a97595946d59bb987c933aa105b78a0750b59ebc))

## [2.0.0](https://github.com/terrestris/shogun-demo-client/compare/v1.1.1...v2.0.0) (2022-05-24)


### Breaking changes

* implement handling for theming ([cd9f687](https://github.com/terrestris/shogun-demo-client/commit/cd9f6870df38bfe4c36d8326ca6e4ba915af3c6b))


### Bugfixes

* catch undefined theme ([1bf523d](https://github.com/terrestris/shogun-demo-client/commit/1bf523d0663215a7c9a296455f39a14c0fb8fbac))
* extract ConfigProvider from parseTheme ([5447e60](https://github.com/terrestris/shogun-demo-client/commit/5447e605439e6ac608c6ca32a88437ca3f01ce99))

### [1.1.1](https://github.com/terrestris/shogun-demo-client/compare/v1.1.0...v1.1.1) (2022-05-24)

## [1.1.0](https://github.com/terrestris/shogun-demo-client/compare/v1.0.2...v1.1.0) (2022-05-24)


### Features

* introduce client configuration file (currently for the appPrefix only) ([7651fa0](https://github.com/terrestris/shogun-demo-client/commit/7651fa01495e960328e3c3020cf5feda8952fd1f))


### Bugfixes

* provide empty clientConfig ([df63528](https://github.com/terrestris/shogun-demo-client/commit/df63528a376be4556b5ec75cbb4013c078d2705a))
* remove fallback configration, make use of client's internal defaults instead ([dd04408](https://github.com/terrestris/shogun-demo-client/commit/dd044084433f46a9be5c7a32f5dc546338dcf158))
* set correct default title ([4a455c2](https://github.com/terrestris/shogun-demo-client/commit/4a455c2fa372b622ab80868b6cff0c0d45288ff4))

### [1.0.2](https://github.com/terrestris/shogun-demo-client/compare/v1.0.1...v1.0.2) (2022-05-24)


### Changes in layout

* adjust style for the gfi result layer ([716b326](https://github.com/terrestris/shogun-demo-client/commit/716b326fd8d9a1ad8e2bb8705b043e6e6de90e7e))


### Bugfixes

* i18n for usage hint ([a9d191b](https://github.com/terrestris/shogun-demo-client/commit/a9d191b58324e7e779d2b57b8972ae8f069bc0a8))
* pass flat layers array to the CoordinateInfo ([34656f2](https://github.com/terrestris/shogun-demo-client/commit/34656f2829d3b8e0153a064d0e3e5e74d5e3d283))

### [1.0.1](https://github.com/terrestris/shogun-demo-client/compare/v1.0.0...v1.0.1) (2022-05-24)


### Dependencies

* **deps-dev:** bump @typescript-eslint/eslint-plugin ([7eb64d4](https://github.com/terrestris/shogun-demo-client/commit/7eb64d40e9838d6207a4f2fa19e8f75d3a5acfed))
* **deps-dev:** bump @typescript-eslint/parser from 5.25.0 to 5.26.0 ([faedbc0](https://github.com/terrestris/shogun-demo-client/commit/faedbc05ee3b9d5a30d97e93aa4de4d13f33f9e2))
* **deps:** bump i18next from 21.8.3 to 21.8.4 ([da47779](https://github.com/terrestris/shogun-demo-client/commit/da477795382d4ce23556089a2c05f93eacdbdd92))


### Bugfixes

* harmonize component signature by specifying the return type and passing through the rest props ([bffd8e7](https://github.com/terrestris/shogun-demo-client/commit/bffd8e7c5dcf972fe56887305b3317950854ac01))

## 1.0.0 (2022-05-23)


### Features

* init tool menu ([8e649c3](https://github.com/terrestris/shogun-demo-client/commit/8e649c33c92ceb109b476abd2fadfe0caf25ced3))


### Changes in configuration

* delete pre-push hook ([4d03878](https://github.com/terrestris/shogun-demo-client/commit/4d03878cd8217153079292c3d0fd23fdc06eaa4c))
* fix directory for release workflow ([6cdb72b](https://github.com/terrestris/shogun-demo-client/commit/6cdb72b92e6f36866c61d3a4b6a6df192fd0de2e))
* formatting ([f96fc9b](https://github.com/terrestris/shogun-demo-client/commit/f96fc9b783a432e36b92e48a42fa56f946bcd67f))
* initialize release.yml ([e2c7c7c](https://github.com/terrestris/shogun-demo-client/commit/e2c7c7c7690bc461c4c15197f96123ff62cd0e39))
* introduce commitlint ([38d4ce3](https://github.com/terrestris/shogun-demo-client/commit/38d4ce36d991e14d5758029708498a33a693eb2b))
* introduce husky ([e9f9263](https://github.com/terrestris/shogun-demo-client/commit/e9f9263abd6b367d1242cd2d2d81f11ec55d2eef))
* introduce semantic-release ([a2e4d41](https://github.com/terrestris/shogun-demo-client/commit/a2e4d41015e749d0af7af98fc3a910d02aa8f296))


### Breaking changes

* remove drawer and add toolMenu state ([ca735e3](https://github.com/terrestris/shogun-demo-client/commit/ca735e32257bed1f63fd00c06b8fbcdd2a34aa42))
* remove unneeded components ([60111d6](https://github.com/terrestris/shogun-demo-client/commit/60111d63ca5491c2c9fe1acb40ec5ef018fff745))


### Dependencies

* add mapfish-print-manager ([c733467](https://github.com/terrestris/shogun-demo-client/commit/c733467e567bb94518c37da289332a19138536e8))
* update react-geo ([6c1f11d](https://github.com/terrestris/shogun-demo-client/commit/6c1f11d46d36fdef27f1c26d984e1adff51c6c83))
* update translations ([90efc61](https://github.com/terrestris/shogun-demo-client/commit/90efc617ae5fa67d9e563c16ce6352b79f0f8f30))


### Bugfixes

* fix tests ([2435825](https://github.com/terrestris/shogun-demo-client/commit/2435825193b5b044e2eaac3039c7a6ffd8fccc01))
* show print tool ([fb06f91](https://github.com/terrestris/shogun-demo-client/commit/fb06f91a1b28689d7c3297c39fd9ccf7c5eeac43))
