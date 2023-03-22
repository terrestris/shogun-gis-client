## [5.1.1](https://github.com/terrestris/shogun-gis-client/compare/v5.1.0...v5.1.1) (2023-03-07)


### Bugfixes

* fixing playwright workflow ([5608d0d](https://github.com/terrestris/shogun-gis-client/commit/5608d0d615e62c0be2811684b97b0865b0da4017))

## [5.1.0](https://github.com/terrestris/shogun-gis-client/compare/v5.0.0...v5.1.0) (2023-03-07)


### Features

* init playwright ([245006d](https://github.com/terrestris/shogun-gis-client/commit/245006d2ea2e77672ada59a904eb93d117a91000))


### Dependencies

* **deps-dev:** bump @typescript-eslint/eslint-plugin ([1381e78](https://github.com/terrestris/shogun-gis-client/commit/1381e78ee8053091bce106af06d027ff8edba67a))
* **deps-dev:** bump @typescript-eslint/parser from 5.54.0 to 5.54.1 ([fa5e21c](https://github.com/terrestris/shogun-gis-client/commit/fa5e21c86244397cf1046fde89f2c291929fdd62))
* **deps-dev:** bump babel-jest from 29.4.3 to 29.5.0 ([b430e29](https://github.com/terrestris/shogun-gis-client/commit/b430e29605c5c86b3f85bf3f670180bbb2d35f5e))
* **deps-dev:** bump jest from 29.4.3 to 29.5.0 ([3a4fc6a](https://github.com/terrestris/shogun-gis-client/commit/3a4fc6a981d1a3ace017f438d00eb4f817502d1d))
* **deps-dev:** bump jest-environment-jsdom from 29.4.3 to 29.5.0 ([8e0214c](https://github.com/terrestris/shogun-gis-client/commit/8e0214c446aea9442f46ff8c602bdc16c88eacfd))
* **deps:** bump i18next from 22.4.10 to 22.4.11 ([f5265e0](https://github.com/terrestris/shogun-gis-client/commit/f5265e0ffbfbd03629a6eedb60197bd0d5a3199a))
* **deps:** bump ol from 7.2.2 to 7.3.0 ([c3c276d](https://github.com/terrestris/shogun-gis-client/commit/c3c276d23fdaf4ead6f822bbe08a4eec73d766b0))

## [5.0.0](https://github.com/terrestris/shogun-gis-client/compare/v4.13.0...v5.0.0) (2023-03-03)


### ⚠ BREAKING CHANGES

* don't pass client as prop, get it from hook instead

### Bugfixes

* don't query wmts layers ([bd200d5](https://github.com/terrestris/shogun-gis-client/commit/bd200d57e5d19b6266e3e08fbeb7a78415f649fc))
* filter invisible layers ([6c3c1c4](https://github.com/terrestris/shogun-gis-client/commit/6c3c1c40ba10ed67d1ee9c80065c1f735de6e647))


### Breaking changes

* remove client prop, get client from hook instead ([a8718b8](https://github.com/terrestris/shogun-gis-client/commit/a8718b8d04f53127406e0a284e53dbc52cd027f6))


### Dependencies

* **deps-dev:** bump @playwright/test from 1.31.0 to 1.31.1 ([84648ca](https://github.com/terrestris/shogun-gis-client/commit/84648ca5c0dcf49b38b64657037a65eae8ff0308))
* **deps-dev:** bump @playwright/test from 1.31.1 to 1.31.2 ([f90f08d](https://github.com/terrestris/shogun-gis-client/commit/f90f08d9db2b45a2627a55ff02b7369d74d2ce4c))
* **deps-dev:** bump @typescript-eslint/eslint-plugin ([ec358fa](https://github.com/terrestris/shogun-gis-client/commit/ec358faea95d8344b4722f18f2b4846ef52ed550))
* **deps-dev:** bump @typescript-eslint/parser from 5.53.0 to 5.54.0 ([9a51ffe](https://github.com/terrestris/shogun-gis-client/commit/9a51ffe822178274d8e04eba28747ef6bcea2707))
* **deps-dev:** bump eslint from 8.34.0 to 8.35.0 ([a3da2bd](https://github.com/terrestris/shogun-gis-client/commit/a3da2bd1bdffe98e6b4bd89882c59716e7670f12))
* **deps-dev:** bump semantic-release from 20.1.0 to 20.1.1 ([ea3d16b](https://github.com/terrestris/shogun-gis-client/commit/ea3d16b194eb111b2d59ab770396e9ee93602b52))
* **deps:** bump keycloak-js from 20.0.5 to 21.0.0 ([23081b8](https://github.com/terrestris/shogun-gis-client/commit/23081b81d5974ab93c61e143980a25be5f81e2be))
* **deps:** bump keycloak-js from 21.0.0 to 21.0.1 ([6b52a90](https://github.com/terrestris/shogun-gis-client/commit/6b52a90b34ea7fabb48bfc40d61a63207087a0a0))
* **deps:** bump react-i18next from 12.1.5 to 12.2.0 ([21cbfc8](https://github.com/terrestris/shogun-gis-client/commit/21cbfc8cffa46b2efc18f56c2b798910c64cbbcf))

## [4.13.0](https://github.com/terrestris/shogun-gis-client/compare/v4.12.2...v4.13.0) (2023-02-22)


### Features

* adds legal information links to the app state ([e4901e6](https://github.com/terrestris/shogun-gis-client/commit/e4901e6b894be38fca758c23c23928940f5162c5))
* pass custom print scales to print form, show scale combo ([5ab1160](https://github.com/terrestris/shogun-gis-client/commit/5ab1160ff87fc03051f7ef2da91927ace9810179))


### Dependencies

* bump mapfish-print-manager from 8.0.1 to 8.0.2 ([36e577d](https://github.com/terrestris/shogun-gis-client/commit/36e577d730c448123bc9754e673bd250dd1cf849))
* bump shogun-util to version 5.1.0 ([7abe29f](https://github.com/terrestris/shogun-gis-client/commit/7abe29f628fe457b9cadfd88fee1825516dce219))
* code styling ([5bffe01](https://github.com/terrestris/shogun-gis-client/commit/5bffe01d3130c30ec829508e4d0688aff118d737))
* **deps-dev:** bump @babel/cli from 7.20.7 to 7.21.0 ([29174a5](https://github.com/terrestris/shogun-gis-client/commit/29174a54178df4ccb5ce7aa9fc67d49a70262f02))
* **deps-dev:** bump @babel/core from 7.20.12 to 7.21.0 ([02cc86f](https://github.com/terrestris/shogun-gis-client/commit/02cc86f826314e3f0d21281e79bb030f2007c512))
* **deps-dev:** bump @babel/preset-typescript from 7.18.6 to 7.21.0 ([d3543f3](https://github.com/terrestris/shogun-gis-client/commit/d3543f381f306f3c7bce53aca7fa09c6f7e5c88f))
* **deps-dev:** bump @babel/runtime from 7.20.13 to 7.21.0 ([7eb5d12](https://github.com/terrestris/shogun-gis-client/commit/7eb5d124c18b5d45bb3e6b7014c396af6b0dcd13))
* **deps-dev:** bump @babel/runtime from 7.20.7 to 7.20.13 ([51354f4](https://github.com/terrestris/shogun-gis-client/commit/51354f4cb55aadb336b559cc4ab0f06a190f0347))
* **deps-dev:** bump @commitlint/cli from 17.4.2 to 17.4.3 ([966bb19](https://github.com/terrestris/shogun-gis-client/commit/966bb19d0c15427f39c54ec34c34e4a315f79164))
* **deps-dev:** bump @commitlint/cli from 17.4.3 to 17.4.4 ([10f12c9](https://github.com/terrestris/shogun-gis-client/commit/10f12c97c4a6a4af4c1f2c17b7996e4624bb2fcb))
* **deps-dev:** bump @commitlint/config-conventional ([8848bb5](https://github.com/terrestris/shogun-gis-client/commit/8848bb564e67f1bb71d7e13498dd6c0406c7754d))
* **deps-dev:** bump @commitlint/config-conventional ([7a58dc1](https://github.com/terrestris/shogun-gis-client/commit/7a58dc1ec6d60f39173d359c2d91bc77123c2d50))
* **deps-dev:** bump @playwright/test from 1.29.2 to 1.30.0 ([fab42d1](https://github.com/terrestris/shogun-gis-client/commit/fab42d1c00b33e9ebf59f20dc55b536c5ad6d73a))
* **deps-dev:** bump @playwright/test from 1.30.0 to 1.31.0 ([2f71415](https://github.com/terrestris/shogun-gis-client/commit/2f714158b70ba432e11db3b82b2ffdd375a22671))
* **deps-dev:** bump @semantic-release/npm from 9.0.1 to 9.0.2 ([87f9dea](https://github.com/terrestris/shogun-gis-client/commit/87f9dea135d765280e4405135d80695b9c92e5eb))
* **deps-dev:** bump @types/jest from 29.2.5 to 29.2.6 ([7337cdc](https://github.com/terrestris/shogun-gis-client/commit/7337cdcf14b9f0eb41bfde3157a884b357204247))
* **deps-dev:** bump @types/jest from 29.2.6 to 29.4.0 ([4d0c82c](https://github.com/terrestris/shogun-gis-client/commit/4d0c82ce6dac9ffaca5fb3e1ed61bbcadea8332b))
* **deps-dev:** bump @typescript-eslint/eslint-plugin ([7e2dd43](https://github.com/terrestris/shogun-gis-client/commit/7e2dd43d24727a1eb6521d4ef72152bb71d6708c))
* **deps-dev:** bump @typescript-eslint/eslint-plugin ([5954cd2](https://github.com/terrestris/shogun-gis-client/commit/5954cd2201f0bc4c0e1c82fab95f27d4928f0cf2))
* **deps-dev:** bump @typescript-eslint/eslint-plugin ([3587c9c](https://github.com/terrestris/shogun-gis-client/commit/3587c9c417e79788e2159b60c1e76d1cadde13c5))
* **deps-dev:** bump @typescript-eslint/eslint-plugin ([75d6521](https://github.com/terrestris/shogun-gis-client/commit/75d6521c3fc6f6fea667663c4aaf81a6873eb795))
* **deps-dev:** bump @typescript-eslint/eslint-plugin ([080a530](https://github.com/terrestris/shogun-gis-client/commit/080a5309ec9fd0e7f8be2fa8c0f0eae241e72b20))
* **deps-dev:** bump @typescript-eslint/eslint-plugin ([f599b37](https://github.com/terrestris/shogun-gis-client/commit/f599b370b0516b51d606b9a27b2d07f1bbbc5916))
* **deps-dev:** bump @typescript-eslint/parser from 5.48.1 to 5.48.2 ([dc855ad](https://github.com/terrestris/shogun-gis-client/commit/dc855ad88dae259ac5b6a7e38ffbce8dc6db96f4))
* **deps-dev:** bump @typescript-eslint/parser from 5.48.2 to 5.49.0 ([ea7514b](https://github.com/terrestris/shogun-gis-client/commit/ea7514b5f96e02eb1d1b77b3aebdc5d2e93ae9e3))
* **deps-dev:** bump @typescript-eslint/parser from 5.49.0 to 5.50.0 ([38beeaa](https://github.com/terrestris/shogun-gis-client/commit/38beeaa28a95384de86f297e021f72683162045e))
* **deps-dev:** bump @typescript-eslint/parser from 5.50.0 to 5.51.0 ([17960ca](https://github.com/terrestris/shogun-gis-client/commit/17960ca14cf80d2fd3705389131af05c2eb7ccac))
* **deps-dev:** bump @typescript-eslint/parser from 5.51.0 to 5.52.0 ([aa78e15](https://github.com/terrestris/shogun-gis-client/commit/aa78e15dca5abdd7ba3152976ff2f79c014d7a30))
* **deps-dev:** bump @typescript-eslint/parser from 5.52.0 to 5.53.0 ([ed55fa9](https://github.com/terrestris/shogun-gis-client/commit/ed55fa996e91bc19ff57bfb85e9340e346aa4d5f))
* **deps-dev:** bump babel-jest from 29.3.1 to 29.4.0 ([1eb1bb3](https://github.com/terrestris/shogun-gis-client/commit/1eb1bb3f0327170e1a1803f64190720410f6abad))
* **deps-dev:** bump babel-jest from 29.4.1 to 29.4.2 ([da45697](https://github.com/terrestris/shogun-gis-client/commit/da45697eac2765db69cf57369caa174d873d5c84))
* **deps-dev:** bump babel-jest from 29.4.2 to 29.4.3 ([620dd0a](https://github.com/terrestris/shogun-gis-client/commit/620dd0a0379ed96085c42dbe66b4a53301e6adc4))
* **deps-dev:** bump eslint from 8.31.0 to 8.32.0 ([4860cd3](https://github.com/terrestris/shogun-gis-client/commit/4860cd3b8f8e446eb640278a0f43c64d82f1d727))
* **deps-dev:** bump eslint from 8.32.0 to 8.33.0 ([3fe62ce](https://github.com/terrestris/shogun-gis-client/commit/3fe62cee99c02ace75dc06c5efd65c74c8321940))
* **deps-dev:** bump eslint from 8.33.0 to 8.34.0 ([6930bf8](https://github.com/terrestris/shogun-gis-client/commit/6930bf84fe692ed5028c69758cf0734f9f7d2a39))
* **deps-dev:** bump eslint-plugin-import from 2.27.4 to 2.27.5 ([1f62a65](https://github.com/terrestris/shogun-gis-client/commit/1f62a6509676812bba66ed768d17da1e47049f57))
* **deps-dev:** bump eslint-plugin-react from 7.32.0 to 7.32.1 ([9750486](https://github.com/terrestris/shogun-gis-client/commit/97504868c76c313024204f750d83db716239c0e5))
* **deps-dev:** bump eslint-plugin-react from 7.32.1 to 7.32.2 ([4532af4](https://github.com/terrestris/shogun-gis-client/commit/4532af4b9c8e7e32414538b19e32244121fa2ab1))
* **deps-dev:** bump jest from 29.3.1 to 29.4.0 ([b398605](https://github.com/terrestris/shogun-gis-client/commit/b39860561d97731e29792865932aae4c0f52c44a))
* **deps-dev:** bump jest from 29.4.0 to 29.4.1 ([bf70a03](https://github.com/terrestris/shogun-gis-client/commit/bf70a03808ca55509e15bb08eed819c2863cb0b4))
* **deps-dev:** bump jest from 29.4.1 to 29.4.2 ([9d041d4](https://github.com/terrestris/shogun-gis-client/commit/9d041d4d6efa094a8cc2221cb7bfb7b9d446cdf8))
* **deps-dev:** bump jest from 29.4.2 to 29.4.3 ([66fcb13](https://github.com/terrestris/shogun-gis-client/commit/66fcb1390d7b6d8d484eb8c3ec58a20c102a11e7))
* **deps-dev:** bump jest-environment-jsdom from 29.3.1 to 29.4.0 ([1e224d5](https://github.com/terrestris/shogun-gis-client/commit/1e224d5dd52cf009542a86a0dd6cb863537bba2f))
* **deps-dev:** bump jest-environment-jsdom from 29.4.0 to 29.4.1 ([370adfe](https://github.com/terrestris/shogun-gis-client/commit/370adfe33c8bc5f2c9d2225c0f7b037b7fccbc62))
* **deps-dev:** bump jest-environment-jsdom from 29.4.1 to 29.4.2 ([95d50dc](https://github.com/terrestris/shogun-gis-client/commit/95d50dc434aff545fd8e0c155be9c4c5ce41016b))
* **deps-dev:** bump jest-environment-jsdom from 29.4.2 to 29.4.3 ([4af787c](https://github.com/terrestris/shogun-gis-client/commit/4af787c6e21022bc2b2bf61c36beffa8ab969352))
* **deps-dev:** bump semantic-release from 20.0.2 to 20.0.3 ([e54f49f](https://github.com/terrestris/shogun-gis-client/commit/e54f49f4ef0ea4ae2f682bd295f1e52af353b22d))
* **deps-dev:** bump semantic-release from 20.0.3 to 20.0.4 ([576b275](https://github.com/terrestris/shogun-gis-client/commit/576b275805b3f84bb33752eb0155899c311dfb82))
* **deps-dev:** bump semantic-release from 20.0.4 to 20.1.0 ([df9f29d](https://github.com/terrestris/shogun-gis-client/commit/df9f29dc4008b2ff359443f0f0e9af3bc6022b2f))
* **deps-dev:** bump typescript from 4.9.4 to 4.9.5 ([c5d39c1](https://github.com/terrestris/shogun-gis-client/commit/c5d39c1511f24dc209c7b121522173dc25ee394c))
* **deps-dev:** bump webpack-bundle-analyzer from 4.7.0 to 4.8.0 ([441ab03](https://github.com/terrestris/shogun-gis-client/commit/441ab0314aa8d9ec997fae3fb0accd11cf8cbd15))
* **deps:** bump @reduxjs/toolkit from 1.9.1 to 1.9.2 ([9a317e3](https://github.com/terrestris/shogun-gis-client/commit/9a317e35ffd8f98edf4bb6462ed0c6a7c5414547))
* **deps:** bump @reduxjs/toolkit from 1.9.2 to 1.9.3 ([117808e](https://github.com/terrestris/shogun-gis-client/commit/117808eef7b1039f097d7c2bf46a75c9ca04ea58))
* **deps:** bump @terrestris/mapfish-print-manager from 8.0.2 to 8.1.0 ([c47d1dc](https://github.com/terrestris/shogun-gis-client/commit/c47d1dcd166887b5cf78811c91a4f7e90e89a264))
* **deps:** bump @terrestris/ol-util from 10.1.3 to 10.2.0 ([4183212](https://github.com/terrestris/shogun-gis-client/commit/4183212d093b33984e2f5d1b95e36b26d56bbb02))
* **deps:** bump @terrestris/ol-util from 10.2.0 to 10.2.1 ([180504c](https://github.com/terrestris/shogun-gis-client/commit/180504cd8a28b04c52c46a93156b27ec1bec1e25))
* **deps:** bump @terrestris/ol-util from 10.2.1 to 10.2.2 ([a0b8433](https://github.com/terrestris/shogun-gis-client/commit/a0b8433b65266f1f41f2d7da97ab091c80bfe21e))
* **deps:** bump @terrestris/ol-util from 10.2.2 to 10.2.3 ([1e061d6](https://github.com/terrestris/shogun-gis-client/commit/1e061d6a293a8e268c083c38a72c37db2ce5e9bd))
* **deps:** bump @terrestris/react-geo from 22.1.1 to 22.2.0 ([31f4f5d](https://github.com/terrestris/shogun-gis-client/commit/31f4f5d1e1452c92fcfb8e290f342d09ea6f9bc3))
* **deps:** bump @terrestris/react-geo from 22.2.0 to 22.2.1 ([ba474c4](https://github.com/terrestris/shogun-gis-client/commit/ba474c40ed41c6e8d19e2ccef03a5b221c69bbf8))
* **deps:** bump @terrestris/react-geo from 22.2.1 to 22.3.0 ([a2381e7](https://github.com/terrestris/shogun-gis-client/commit/a2381e73d9451306bbdfd4fbaded31e323c23b98))
* **deps:** bump @terrestris/react-geo from 22.3.0 to 22.3.1 ([64906bf](https://github.com/terrestris/shogun-gis-client/commit/64906bf32e3a9494c6802b108301b91194dcd404))
* **deps:** bump @terrestris/react-geo from 22.3.1 to 22.3.2 ([d7563bd](https://github.com/terrestris/shogun-gis-client/commit/d7563bd2c58a64504ff845da19513ebc784834f3))
* **deps:** bump antd from 4.24.7 to 4.24.8 ([3e5d311](https://github.com/terrestris/shogun-gis-client/commit/3e5d311205edb0411bb51a86cd2765c8b74ab987))
* **deps:** bump geostyler from 11.1.0 to 11.1.1 ([ddb3e80](https://github.com/terrestris/shogun-gis-client/commit/ddb3e80aea02e1e0466a7d5559d2fb4392990eb8))
* **deps:** bump i18next from 22.4.9 to 22.4.10 ([5fc0854](https://github.com/terrestris/shogun-gis-client/commit/5fc0854fc83a18594e7c3809944c579db4609b79))
* **deps:** bump keycloak-js from 20.0.3 to 20.0.5 ([f3152f9](https://github.com/terrestris/shogun-gis-client/commit/f3152f9b04fad039b3ff42c0220e456efdd43099))
* **deps:** bump react-i18next from 12.1.4 to 12.1.5 ([f204832](https://github.com/terrestris/shogun-gis-client/commit/f204832c8df24652b22ff7eca981f809883e6fa7))
* fix a lint warning in Draw component ([9138c50](https://github.com/terrestris/shogun-gis-client/commit/9138c50de983a76024f9b15b2b78c05bcf46e96b))
* update tests of Footer component ([4b260c5](https://github.com/terrestris/shogun-gis-client/commit/4b260c59c105870f1f8c5807bfd3a1c69b93d5ae))


### Bugfixes

* enhance typings and use null checks ([88360d8](https://github.com/terrestris/shogun-gis-client/commit/88360d8df7ea24fa99a23fe67e066201122dc173))
* make dpi and output formats configurable ([0e180b0](https://github.com/terrestris/shogun-gis-client/commit/0e180b074803778e88ba9a6014c35ee0581b6086))
* remove unneeded ignore statements ([b2507e0](https://github.com/terrestris/shogun-gis-client/commit/b2507e0abac98d67294a794fb76651a739c62c2a))
* set defaults of legal information links in store ([7ade3ee](https://github.com/terrestris/shogun-gis-client/commit/7ade3ee7754f542751ab106d058c6c3494987928))

## [4.12.2](https://github.com/terrestris/shogun-gis-client/compare/v4.12.1...v4.12.2) (2023-01-13)


### Dependencies

* **deps-dev:** bump @commitlint/cli from 17.4.1 to 17.4.2 ([43853d3](https://github.com/terrestris/shogun-gis-client/commit/43853d3f425fccfeb7fb65790b754c446ab1f9ed))
* **deps-dev:** bump @commitlint/config-conventional ([24de816](https://github.com/terrestris/shogun-gis-client/commit/24de816b5339797ff849d8b77c0f194a400e9419))
* **deps:** bump keycloak-js from 20.0.2 to 20.0.3 ([0e8cf7e](https://github.com/terrestris/shogun-gis-client/commit/0e8cf7e399f5b5c52a7f42d2dea291f1f8475973))


### Bugfixes

* adds a check for array length ([cc27dc3](https://github.com/terrestris/shogun-gis-client/commit/cc27dc3d6aa483235715239d9f93dee6aca199aa))
* pass projection to layer tree parser ([b7ae469](https://github.com/terrestris/shogun-gis-client/commit/b7ae469a58804e2e6b509e30660204e9a6725492))
* show mouse position for configured crs ([6c301c2](https://github.com/terrestris/shogun-gis-client/commit/6c301c24b804e17fff7cd9d5bb912b71d6bcfbf7))

## [4.12.1](https://github.com/terrestris/shogun-gis-client/compare/v4.12.0...v4.12.1) (2023-01-12)


### Bugfixes

* add mock for ResizeObserver ([778d8b8](https://github.com/terrestris/shogun-gis-client/commit/778d8b8b9e54f05fc01e5bf01ccedb8b7e35c1fc))
* add mock for ResizeObserver ([f10d052](https://github.com/terrestris/shogun-gis-client/commit/f10d052f7ec06d72730bebcb354d99fabaca7f0f))
* make use of custom github personal access token ([894ab5a](https://github.com/terrestris/shogun-gis-client/commit/894ab5aa9c36428b68543c3dca8e11dfe735c798))
* use default imports ([cb1c10a](https://github.com/terrestris/shogun-gis-client/commit/cb1c10ae7c06d9fb6bdd30d2a0653396587f9b45))


### Dependencies

* bump geostyler v11.1.0, geostyler-openlayers-parser v4.1.0 ([0f1015d](https://github.com/terrestris/shogun-gis-client/commit/0f1015de14101a913d0547070dde723128955921))
* bump ol v7.2.2 ([04623c4](https://github.com/terrestris/shogun-gis-client/commit/04623c4dbed1d4146520ab53f4947c722d2b7cc2))
* **deps-dev:** bump eslint-plugin-import from 2.26.0 to 2.27.2 ([f153dee](https://github.com/terrestris/shogun-gis-client/commit/f153dee5f83e200fc7076bac33f7696c732d8042))
* **deps-dev:** bump eslint-plugin-react from 7.31.11 to 7.32.0 ([7dbcdd3](https://github.com/terrestris/shogun-gis-client/commit/7dbcdd317e60ffef9d7b0093aecac08359609bb3))
* **deps:** bump @terrestris/react-geo from 22.1.0 to 22.1.1 ([3d4c7c6](https://github.com/terrestris/shogun-gis-client/commit/3d4c7c6776debfa35e3c938d58b9a49d86617657))
* update package-lock.json ([53c27a3](https://github.com/terrestris/shogun-gis-client/commit/53c27a381ccbe7d77fd33a6f81de1fc9c778ca5b))

## [4.12.0](https://github.com/terrestris/shogun-gis-client/compare/v4.11.0...v4.12.0) (2023-01-11)


### Features

* make view extent accessible per getter ([fc57f46](https://github.com/terrestris/shogun-gis-client/commit/fc57f46eaaa82a63d74393fd6f5fbcc85f601c85))
* set custom on style on document body ([68ba851](https://github.com/terrestris/shogun-gis-client/commit/68ba85162652c3debb69e097cd2bb63d7fa4722b))


### Dependencies

* **deps-dev:** bump @commitlint/cli from 17.4.0 to 17.4.1 ([1f75aa5](https://github.com/terrestris/shogun-gis-client/commit/1f75aa5b8e6ad3587088f8c52ac1568358a981b4))
* **deps-dev:** bump @typescript-eslint/eslint-plugin ([f07c140](https://github.com/terrestris/shogun-gis-client/commit/f07c140d84f1ff0c7fbba65333678af1f91b636d))
* **deps-dev:** bump @typescript-eslint/parser from 5.48.0 to 5.48.1 ([37918a0](https://github.com/terrestris/shogun-gis-client/commit/37918a07f5069a0b02e3aa51c3074c25aa457791))


### Changes in layout

* add hover style on some elements ([d12b207](https://github.com/terrestris/shogun-gis-client/commit/d12b207fe1c65a288d245a501dbdaf87e17418af))
* use equal spacing from bottom and right ([7267c44](https://github.com/terrestris/shogun-gis-client/commit/7267c44205189050ce3de8f40e3c94d021fedd4e))

## [4.11.0](https://github.com/terrestris/shogun-gis-client/compare/v4.10.3...v4.11.0) (2023-01-09)


### Features

* add completion if url and add version select ([#597](https://github.com/terrestris/shogun-gis-client/issues/597)) ([d6b599f](https://github.com/terrestris/shogun-gis-client/commit/d6b599f1b5202e19c74995b1487297519b432c77))
* add layer loading indicator to tree ([aafd8e1](https://github.com/terrestris/shogun-gis-client/commit/aafd8e1c1ee4bf1c7c4677b9a7c11fe588e54b52))
* **loadmask:** adding css transitions ([3badd6e](https://github.com/terrestris/shogun-gis-client/commit/3badd6ea596ee51b2be1b58041507fed12e30f0d))
* updating mapfish-print-manager ([2f6a274](https://github.com/terrestris/shogun-gis-client/commit/2f6a274f6802074d1c1a72a52b77b12346e75ce4))


### Bugfixes

* conflict-measuring-tools-print-panel ([ea210ca](https://github.com/terrestris/shogun-gis-client/commit/ea210ca31189c7c0fde2e6905ec5ec2b8ab974e8))
* **issue:** disable measure tools when panel collapses, highlight active tool ([36b99d3](https://github.com/terrestris/shogun-gis-client/commit/36b99d3645113201377aa065b29cd693bf58677d))
* **layout:** fix menu icons and text positioning ([0b92391](https://github.com/terrestris/shogun-gis-client/commit/0b9239133071c4e8826a3da2fa5ffccbf3e05316))
* menu width when collapsed ([c6f44de](https://github.com/terrestris/shogun-gis-client/commit/c6f44dec84fb009449c0b576cafdd641ab240413))
* refactoring of tool menu ([b144a86](https://github.com/terrestris/shogun-gis-client/commit/b144a86ba36790a0c656075a609e19028f6c7ab1))
* unregister listeners, typings ([5c831bd](https://github.com/terrestris/shogun-gis-client/commit/5c831bdd32846e82fd53445e2e80a92e24535fa3))


### Dependencies

* **deps-dev:** bump @babel/cli from 7.19.3 to 7.20.7 ([844fa27](https://github.com/terrestris/shogun-gis-client/commit/844fa27c0e8ef02b1b39288fee9a208be7f81b45))
* **deps-dev:** bump @babel/core from 7.20.5 to 7.20.7 ([765237d](https://github.com/terrestris/shogun-gis-client/commit/765237d62ac76e7b58636b395cd744ef35df183e))
* **deps-dev:** bump @babel/core from 7.20.7 to 7.20.12 ([4977556](https://github.com/terrestris/shogun-gis-client/commit/49775569d6353bfa350e1592f9657943590bf7b6))
* **deps-dev:** bump @babel/runtime from 7.20.6 to 7.20.7 ([63a8ff1](https://github.com/terrestris/shogun-gis-client/commit/63a8ff181327a17047e5ef2eb693361e78a3ad8b))
* **deps-dev:** bump @commitlint/cli from 17.3.0 to 17.4.0 ([d7f8764](https://github.com/terrestris/shogun-gis-client/commit/d7f87645bc526eec1e7cbb17b2117a6c8d036e50))
* **deps-dev:** bump @commitlint/config-conventional ([d5d9624](https://github.com/terrestris/shogun-gis-client/commit/d5d962428f2f24cdafd41ee23c3593c56b394159))
* **deps-dev:** bump @playwright/test from 1.29.0 to 1.29.1 ([d7d71e3](https://github.com/terrestris/shogun-gis-client/commit/d7d71e3bb200be95e59c63eea075784243b87725))
* **deps-dev:** bump @playwright/test from 1.29.1 to 1.29.2 ([2969375](https://github.com/terrestris/shogun-gis-client/commit/29693753e7655dc42c057009bacded49456431be))
* **deps-dev:** bump @types/jest from 29.2.4 to 29.2.5 ([f8ee10c](https://github.com/terrestris/shogun-gis-client/commit/f8ee10c5e11d5ea1917dec0f46373182fbf56b2f))
* **deps-dev:** bump @typescript-eslint/eslint-plugin ([bffd81c](https://github.com/terrestris/shogun-gis-client/commit/bffd81ccc146280617015bb83b70de4ca9a8b950))
* **deps-dev:** bump @typescript-eslint/parser from 5.47.0 to 5.48.0 ([7961457](https://github.com/terrestris/shogun-gis-client/commit/79614579089ad609a85b6edec954f89d1b160e10))
* **deps-dev:** bump babel-loader from 9.1.0 to 9.1.2 ([9bd5aec](https://github.com/terrestris/shogun-gis-client/commit/9bd5aecc650f05ba1a365daa2ec39d38075314a1))
* **deps-dev:** bump eslint from 8.30.0 to 8.31.0 ([e4a1f45](https://github.com/terrestris/shogun-gis-client/commit/e4a1f45113721f51ce4425bd7142b2f89a08cbb4))
* **deps-dev:** bump husky from 8.0.2 to 8.0.3 ([2660ff0](https://github.com/terrestris/shogun-gis-client/commit/2660ff01bbd39186b82abad19b91b1c91dc30eb0))
* **deps-dev:** bump semantic-release from 19.0.5 to 20.0.2 ([329ac90](https://github.com/terrestris/shogun-gis-client/commit/329ac90a4c0c450f2bd50ebf47c8ba8407827cf3))
* **deps:** bump @terrestris/shogun-util from 4.2.1 to 5.0.0 ([ac7dbb4](https://github.com/terrestris/shogun-gis-client/commit/ac7dbb41ad9a9c30d71a997a76a46f8130adce1f))
* **deps:** bump antd from 4.24.5 to 4.24.7 ([3d751ef](https://github.com/terrestris/shogun-gis-client/commit/3d751ef7d95007f8434cf1822cbc788169816488))
* **deps:** bump i18next from 22.4.6 to 22.4.8 ([bcdf843](https://github.com/terrestris/shogun-gis-client/commit/bcdf8436b6883892dd10c463f01b810b2b3f03f4))
* **deps:** bump i18next from 22.4.8 to 22.4.9 ([e502937](https://github.com/terrestris/shogun-gis-client/commit/e5029375ee0f8cee9244f0058e6ad7fe68d151d0))
* **deps:** bump react-i18next from 12.1.1 to 12.1.4 ([337f2f3](https://github.com/terrestris/shogun-gis-client/commit/337f2f3ec3e6c3742a7a3b749146fe65ad216362))


### Changes in configuration

* pin semantic version to compatible one ([df6fc1f](https://github.com/terrestris/shogun-gis-client/commit/df6fc1f9e254056431207194b183922bb0a993e5))

## [4.10.3](https://github.com/terrestris/shogun-gis-client/compare/v4.10.2...v4.10.3) (2022-12-20)


### Changes in layout

* flip buttons in footer ([e9115fb](https://github.com/terrestris/shogun-gis-client/commit/e9115fb85adcbc4209583239bd59b26593a3597b))


### Bugfixes

* create external layer group in permalink parser and remove layer config isImported ([6836db4](https://github.com/terrestris/shogun-gis-client/commit/6836db41b68c8e65084a258f15ecd85954bcd2d0))
* fix removing of external layers ([adcd21d](https://github.com/terrestris/shogun-gis-client/commit/adcd21d243d011b3a7a051a1329d542e6cc0461d))
* get rid of some ts-ignores ([a68a4d5](https://github.com/terrestris/shogun-gis-client/commit/a68a4d5432965fc0ab643026dbf3a13dfa48bdd9))
* make area above the notification clickable ([6e48cce](https://github.com/terrestris/shogun-gis-client/commit/6e48cce5c800803b06848e31f52cbab484270fa8))
* pass the bearer token to the legend if available ([2469b64](https://github.com/terrestris/shogun-gis-client/commit/2469b64810fb6fad1240f0c3cef35b3a57dfc21b))
* remove unneeded code ([3b3b7e6](https://github.com/terrestris/shogun-gis-client/commit/3b3b7e6caf0d83a162c3f599bfe75b4c5d5a38c7))
* set correct default style ([f4cea80](https://github.com/terrestris/shogun-gis-client/commit/f4cea807f34e64508370391b4a2ff6a84358a227))
* set empty layer array to prevent any NPE and set layer visibility as given in permalink ([68f5082](https://github.com/terrestris/shogun-gis-client/commit/68f5082f4bb776363f3543b26aef08fd38c76479))
* set empty layers array to fix any potential NPE and remove unneeded property on layer ([8851fe7](https://github.com/terrestris/shogun-gis-client/commit/8851fe763af3f11ccf5961db21d62774fda5a018))
* show zoomToExtent and showLegend for wms layers only ([e307d5f](https://github.com/terrestris/shogun-gis-client/commit/e307d5fd8f2a13a10a47165839de391bc9fce579))
* update to updated API from mapfish-print-manager and wrap instantiaton in try-catch ([c29f1a6](https://github.com/terrestris/shogun-gis-client/commit/c29f1a6c5543b173a77bd1eae43e24f3f7c532d2))


### Dependencies

* **deps-dev:** bump @casualbot/jest-sonar-reporter from 2.2.5 to 2.2.7 ([8428c9e](https://github.com/terrestris/shogun-gis-client/commit/8428c9ece28a85461bccd7350c830d7790bdf29c))
* **deps-dev:** bump @playwright/test from 1.28.1 to 1.29.0 ([ec94223](https://github.com/terrestris/shogun-gis-client/commit/ec94223d84dee9f51be502f09b75383ab9fa69f6))
* **deps-dev:** bump @types/js-md5 from 0.4.3 to 0.7.0 ([d45648d](https://github.com/terrestris/shogun-gis-client/commit/d45648d51cadf2b934eb139797eb52f320d80527))
* **deps-dev:** bump @typescript-eslint/eslint-plugin ([bb907ed](https://github.com/terrestris/shogun-gis-client/commit/bb907eda2732bec68926ae38b2dc362ec2ed8210))
* **deps-dev:** bump @typescript-eslint/eslint-plugin ([d401b44](https://github.com/terrestris/shogun-gis-client/commit/d401b442ce9342a8b09ceba005c114390a6117bb))
* **deps-dev:** bump @typescript-eslint/parser from 5.46.0 to 5.46.1 ([04a779d](https://github.com/terrestris/shogun-gis-client/commit/04a779dfaf5619c035b3a787ef95e1ba63552a8d))
* **deps-dev:** bump @typescript-eslint/parser from 5.46.1 to 5.47.0 ([a843d74](https://github.com/terrestris/shogun-gis-client/commit/a843d7431fa0ec35531c1e3487ae12d2f7a5f412))
* **deps-dev:** bump css-loader from 6.7.2 to 6.7.3 ([61b4ad6](https://github.com/terrestris/shogun-gis-client/commit/61b4ad69b8eecdd682a981d846636a1c74430274))
* **deps-dev:** bump eslint from 8.29.0 to 8.30.0 ([3d0f1e2](https://github.com/terrestris/shogun-gis-client/commit/3d0f1e2a1fc604bf92e78a74843ad379ef2ea5ef))
* **deps:** bump @terrestris/ol-util from 10.0.1 to 10.1.1 ([06fd073](https://github.com/terrestris/shogun-gis-client/commit/06fd0730c0a7728e731a86e48bd9bfbb37669291))
* **deps:** bump @terrestris/ol-util from 10.1.1 to 10.1.2 ([8e8a579](https://github.com/terrestris/shogun-gis-client/commit/8e8a579d1c661d8e97dae7121e06ce0f1baa1b1c))
* **deps:** bump @terrestris/ol-util from 10.1.2 to 10.1.3 ([e7e1f50](https://github.com/terrestris/shogun-gis-client/commit/e7e1f50ece417420ee5fa0609e35eea24acbe20d))
* **deps:** bump @terrestris/react-geo from 22.0.0 to 22.0.1 ([ba4bedf](https://github.com/terrestris/shogun-gis-client/commit/ba4bedf424cd8a12eac41b4dc63ec6fd86faf01d))
* **deps:** bump @terrestris/shogun-util from 4.1.4 to 4.2.0 ([0c6b3d2](https://github.com/terrestris/shogun-gis-client/commit/0c6b3d269db2738fb3f499406f43d541d180446f))
* **deps:** bump @terrestris/shogun-util from 4.2.0 to 4.2.1 ([838f3c1](https://github.com/terrestris/shogun-gis-client/commit/838f3c1e7a9412471450f8e45e8567bbaf058d07))
* **deps:** bump geostyler from 10.3.0 to 11.0.0 ([3d512a3](https://github.com/terrestris/shogun-gis-client/commit/3d512a3003354f6e3d65fd4b4f4a45c5927345b6))
* **deps:** bump i18next from 22.4.1 to 22.4.3 ([efd392e](https://github.com/terrestris/shogun-gis-client/commit/efd392e009b86cb07d9aeeead3aed5d5f98c44a0))
* **deps:** bump i18next from 22.4.3 to 22.4.5 ([0288091](https://github.com/terrestris/shogun-gis-client/commit/02880917fc194057e4d376daff1d40a939659a54))
* **deps:** bump i18next from 22.4.5 to 22.4.6 ([ce4c66c](https://github.com/terrestris/shogun-gis-client/commit/ce4c66ceacb7250ec2e0d502b734f73a01105a71))
* **deps:** bump keycloak-js from 20.0.1 to 20.0.2 ([ebca511](https://github.com/terrestris/shogun-gis-client/commit/ebca5114c7f013499199c81a5f45cdca47e97d07))
* update react-geo and ol-util ([9f6c014](https://github.com/terrestris/shogun-gis-client/commit/9f6c0148bf4722ca5639626e8c81efbcd02f4b11))
* update to latest mapfish-print-manager ([3d38eca](https://github.com/terrestris/shogun-gis-client/commit/3d38eca2dc03709f5434a9535898bba85be05e51))

## [4.10.2](https://github.com/terrestris/shogun-gis-client/compare/v4.10.1...v4.10.2) (2022-12-12)


### Dependencies

* **deps-dev:** bump @typescript-eslint/eslint-plugin ([01de24f](https://github.com/terrestris/shogun-gis-client/commit/01de24fcf14779d64e03e8e0bbd7198842a7e57c))
* **deps-dev:** bump @typescript-eslint/parser from 5.45.1 to 5.46.0 ([aebbd1c](https://github.com/terrestris/shogun-gis-client/commit/aebbd1ce7ac76666edf189717cfbf76dc6c6abc5))
* **deps:** bump @terrestris/ol-util from 10.0.0 to 10.0.1 ([b71f089](https://github.com/terrestris/shogun-gis-client/commit/b71f089eb420d8aa05dec6256775f0cd2f355435))
* **deps:** bump @terrestris/react-geo from 21.0.1 to 22.0.0 ([0075b6a](https://github.com/terrestris/shogun-gis-client/commit/0075b6a1b8c88d091f4d627f5b574e39688f8fab))
* **deps:** bump @terrestris/shogun-util from 4.1.3 to 4.1.4 ([f3ae87b](https://github.com/terrestris/shogun-gis-client/commit/f3ae87b1772d3ed070a2f02911f1312996760bf0))
* **deps:** bump i18next from 22.1.4 to 22.4.1 ([26bde0c](https://github.com/terrestris/shogun-gis-client/commit/26bde0c1548dbea8500bd3c439a906ad4a5ad812))
* fix shared modules config ([8876a22](https://github.com/terrestris/shogun-gis-client/commit/8876a22d15632554dbc5968200d0dc0b8c5b2bd0))


### Changes in layout

* fix positioning of icon and title ([dcf80ff](https://github.com/terrestris/shogun-gis-client/commit/dcf80ff2ac33a6a447d66f6277e6499caf52e3cd))
* remove unused hook ([6f82bc2](https://github.com/terrestris/shogun-gis-client/commit/6f82bc2edef56a36622f985cae89c01e9b17ac02))
* show feature info results in tabs and make it nicer ([f44da10](https://github.com/terrestris/shogun-gis-client/commit/f44da10c6703ce8264a278f3f64409bdba4b1634))


### Bugfixes

* lint warnings ([8c0bdb8](https://github.com/terrestris/shogun-gis-client/commit/8c0bdb890b28a47bf0f938c902cdc6560e33ba75))
* make use of path import ([457c4d6](https://github.com/terrestris/shogun-gis-client/commit/457c4d6827e58ccdf9975d414697b68d99d0bb76))
* pass client as prop ([2a869bd](https://github.com/terrestris/shogun-gis-client/commit/2a869bd3ea6481c428fd463544323eea1f30fd7d))
* prevent scrollbar on viewport ([af45d28](https://github.com/terrestris/shogun-gis-client/commit/af45d2875c5173c29b7682159d6dd1868ac4bb02))

## [4.10.1](https://github.com/terrestris/shogun-gis-client/compare/v4.10.0...v4.10.1) (2022-12-08)


### Dependencies

* **deps-dev:** bump typescript from 4.9.3 to 4.9.4 ([215ba36](https://github.com/terrestris/shogun-gis-client/commit/215ba36bcd60f8bb1c04c0aeb24c71010b09357a))
* **deps:** bump @terrestris/shogun-util from 4.1.2 to 4.1.3 ([4e485a7](https://github.com/terrestris/shogun-gis-client/commit/4e485a73edeeb9bb37ea2eb1151b76eef59e3f01))
* **deps:** bump geostyler from 10.2.0 to 10.3.0 ([05b7798](https://github.com/terrestris/shogun-gis-client/commit/05b7798da67bbd51a78273d5c560421dc5211e25))
* **deps:** bump i18next from 22.0.8 to 22.1.4 ([57f0c75](https://github.com/terrestris/shogun-gis-client/commit/57f0c757dfbb551a3822c445c1bab78c161e8827))
* **deps:** bump react-i18next from 12.1.0 to 12.1.1 ([f7ef7ff](https://github.com/terrestris/shogun-gis-client/commit/f7ef7ff139a214bd613aec3b4bb4389fd53582d4))


### Bugfixes

* avoid scrollbar on collapsed menu ([e8f8828](https://github.com/terrestris/shogun-gis-client/commit/e8f882862f70f52b8666b58c6387142127d3f95d))

## [4.10.0](https://github.com/terrestris/shogun-gis-client/compare/v4.9.0...v4.10.0) (2022-12-07)


### ⚠ BREAKING CHANGES

* tool menu plugins extend CollapsePanelProps in favour of MenuProps now

### Features

* add support for map plugins ([db3945d](https://github.com/terrestris/shogun-gis-client/commit/db3945def87c0bfbfe0d6514765274f62547c7be))


* reintegrate plugins invocation as collapse panel item, generalize tools creation ([291f0cd](https://github.com/terrestris/shogun-gis-client/commit/291f0cd87f75634b6aded2841f040856ce67de02))


### Changes in configuration

* copy missing less files to dist files ([7794255](https://github.com/terrestris/shogun-gis-client/commit/7794255c0f967a0c9b908ff0beb32d2828e57b5d))


### Dependencies

* bump react-geo v21.0.1 ([b27d386](https://github.com/terrestris/shogun-gis-client/commit/b27d38675161821f942774a14ecaf8bd7db803aa))
* bump shogun-util v4.1.2 ([8d63fc1](https://github.com/terrestris/shogun-gis-client/commit/8d63fc1f872a60f8b1f5531683728c632713cd78))
* **deps-dev:** bump @types/jest from 29.2.3 to 29.2.4 ([59b4b17](https://github.com/terrestris/shogun-gis-client/commit/59b4b177ac9fa18414d2b0aa8a17e7e5bac5fa81))
* **deps-dev:** bump @typescript-eslint/eslint-plugin ([d310b54](https://github.com/terrestris/shogun-gis-client/commit/d310b54f6c63813f16389739440e37101be60cce))
* **deps-dev:** bump @typescript-eslint/parser from 5.45.0 to 5.45.1 ([37c2ce1](https://github.com/terrestris/shogun-gis-client/commit/37c2ce1e0417f75b347d0cca89ecbad5850a20ee))
* **deps-dev:** bump eslint from 8.28.0 to 8.29.0 ([6a1af61](https://github.com/terrestris/shogun-gis-client/commit/6a1af61700af43cf6be0d5528f70524d76ffd912))
* **deps-dev:** bump fs-extra from 11.0.0 to 11.1.0 ([524ad8f](https://github.com/terrestris/shogun-gis-client/commit/524ad8f474f56cb964fcdebb9f9bd4a083085be8))
* **deps-dev:** bump mini-css-extract-plugin from 2.7.0 to 2.7.1 ([5a211a6](https://github.com/terrestris/shogun-gis-client/commit/5a211a676fa8e3b994bb698a2e5e24339f90519c))
* **deps-dev:** bump mini-css-extract-plugin from 2.7.1 to 2.7.2 ([66cbae8](https://github.com/terrestris/shogun-gis-client/commit/66cbae8560282e9203f9a687a397213ad56d760a))
* **deps-dev:** bump webpack-cli from 5.0.0 to 5.0.1 ([01b7db1](https://github.com/terrestris/shogun-gis-client/commit/01b7db14266f5f1be0ba89a18d08d2cd7334f0dc))
* **deps:** bump @reduxjs/toolkit from 1.9.0 to 1.9.1 ([e54c3a7](https://github.com/terrestris/shogun-gis-client/commit/e54c3a7bf89b1f85d0d47e35487eee28711c3f8f))
* **deps:** bump @terrestris/react-geo from 20.0.0 to 20.1.0 ([ad1c82a](https://github.com/terrestris/shogun-gis-client/commit/ad1c82a4a34dd28a95964d6288afd93ec44db190))
* **deps:** bump @terrestris/react-geo from 20.1.0 to 20.1.1 ([62d8be3](https://github.com/terrestris/shogun-gis-client/commit/62d8be3797143409d902531afea41d164ff82091))
* **deps:** bump @terrestris/shogun-util from 4.1.0 to 4.1.1 ([0b47a84](https://github.com/terrestris/shogun-gis-client/commit/0b47a84f1e69e34cfcd077e7b35029b18a549694))
* **deps:** bump antd from 4.24.4 to 4.24.5 ([a525c14](https://github.com/terrestris/shogun-gis-client/commit/a525c1410c4d95ed3b227e1dea3b03d6abca2ad6))
* **deps:** bump i18next from 22.0.6 to 22.0.8 ([aa366e9](https://github.com/terrestris/shogun-gis-client/commit/aa366e9b07ef9b682223c19edc6114d54773bf21))
* **deps:** bump react-i18next from 12.0.0 to 12.1.0 ([572e3ef](https://github.com/terrestris/shogun-gis-client/commit/572e3ef93493ef5fc38715e74f7f989adb22927a))
* fix typo ([9cae721](https://github.com/terrestris/shogun-gis-client/commit/9cae72146bd26908819718ecb993060ce6dfa3ef))


### Bugfixes

* fix menu styling after refactoring ([7b0ab81](https://github.com/terrestris/shogun-gis-client/commit/7b0ab81d3322a1d625110adf5dae2dba4c7d1581))
* fixes print for a larger variety of layers ([06c3305](https://github.com/terrestris/shogun-gis-client/commit/06c330520edacc6f59e2460ea32699bba1a4ee26))
* get rid of antd deprecation warnings ([5769e63](https://github.com/terrestris/shogun-gis-client/commit/5769e63f9f703817b9c732da5bc88c5446bc3c43))
* ignore spec files in tsc ([d48915e](https://github.com/terrestris/shogun-gis-client/commit/d48915eb0109cc17f611671e48fbd25cd540cf8f))
* pass correct props to print form ([ce63d7a](https://github.com/terrestris/shogun-gis-client/commit/ce63d7aeef3fe0e7c3cb1e17d1780d79765dbdbb))
* remove non more existing dispatch key ([4037fa1](https://github.com/terrestris/shogun-gis-client/commit/4037fa14c56c0833c903848502cc65ca3419ff1b))
* remove unnecessary chaining ([e20f4b5](https://github.com/terrestris/shogun-gis-client/commit/e20f4b5c1e0fa094c9df89a14741fd9a97fb63cc))
* remove unneeded mapping ([e901b8e](https://github.com/terrestris/shogun-gis-client/commit/e901b8ed6f8e18f6616b5a8a2dc71dee1b9fe634))
* specify babel ignore files in cli only ([b0da51f](https://github.com/terrestris/shogun-gis-client/commit/b0da51f9dffe068d5a87f363e586e7b5fb5d292b))


### Changes in layout

* adjusts cotainer heigt & item padding ([e8decd5](https://github.com/terrestris/shogun-gis-client/commit/e8decd54c9b78f5ca4237f40db2f18f236fc4ade))

## [4.9.0](https://github.com/terrestris/shogun-gis-client/compare/v4.8.1...v4.9.0) (2022-11-29)


### ⚠ BREAKING CHANGES

* update several dependencies including major versions, e.g. ol and i18next

### Features

* add and integrate WmsTimeSlider (WIP) ([61da002](https://github.com/terrestris/shogun-gis-client/commit/61da0024966cb8fe4184adfa04281ed2ae70e2be))
* add background layer switcher ([33ad7cb](https://github.com/terrestris/shogun-gis-client/commit/33ad7cb56de2e190d3ed05a5389cd2e7cd080117))
* adds i18n translation ([cafb4c6](https://github.com/terrestris/shogun-gis-client/commit/cafb4c651d7a3df6066852c0a480a6ae462d5bae))
* adds warning if no data are found ([b9afb8f](https://github.com/terrestris/shogun-gis-client/commit/b9afb8f2c0003ac1bbcdfb9c2e7087cde9e8480d))
* show the application description ([aaeba63](https://github.com/terrestris/shogun-gis-client/commit/aaeba63e31248cfb84de38ca65cd1af99d4e1bf9))


### Dependencies

* **deps-dev:** bump @babel/core from 7.19.6 to 7.20.2 ([a141d06](https://github.com/terrestris/shogun-gis-client/commit/a141d068f29f76cfc93a3045f141315aa299576d))
* **deps-dev:** bump @babel/preset-env from 7.19.4 to 7.20.2 ([6816cad](https://github.com/terrestris/shogun-gis-client/commit/6816cad28dc277cab50032898049956a1fb57e87))
* **deps-dev:** bump @commitlint/cli from 17.2.0 to 17.3.0 ([39fe5b1](https://github.com/terrestris/shogun-gis-client/commit/39fe5b1d6d533c938cb38caf417dedcd4273095e))
* **deps-dev:** bump @commitlint/config-conventional ([032e8d8](https://github.com/terrestris/shogun-gis-client/commit/032e8d85301c063213b7695650f4b9b8e074797e))
* **deps-dev:** bump @playwright/test from 1.27.1 to 1.28.0 ([e7531bf](https://github.com/terrestris/shogun-gis-client/commit/e7531bfaeb39691f7feaa074c4f933302a6c4167))
* **deps-dev:** bump @playwright/test from 1.28.0 to 1.28.1 ([d4d539c](https://github.com/terrestris/shogun-gis-client/commit/d4d539ca5f377a0f0447235a2b90f0a6b4e0e0a0))
* **deps-dev:** bump @pmmmwh/react-refresh-webpack-plugin ([9f65d73](https://github.com/terrestris/shogun-gis-client/commit/9f65d7351952862c65af012338100a59acd3f3c8))
* **deps-dev:** bump @pmmmwh/react-refresh-webpack-plugin ([ea65227](https://github.com/terrestris/shogun-gis-client/commit/ea652272f16c85278967240383908ee7eb48c889))
* **deps-dev:** bump @types/jest from 29.2.2 to 29.2.3 ([b555346](https://github.com/terrestris/shogun-gis-client/commit/b5553465813d2314626f21a0ec3448aa9f33a372))
* **deps-dev:** bump @typescript-eslint/eslint-plugin ([1dce1b7](https://github.com/terrestris/shogun-gis-client/commit/1dce1b75db67570a1b4e6b3de55ba9ce49d64d32))
* **deps-dev:** bump @typescript-eslint/eslint-plugin ([1b60e02](https://github.com/terrestris/shogun-gis-client/commit/1b60e028c1953f6e2963024e9acd2e4ffcdfaabb))
* **deps-dev:** bump @typescript-eslint/eslint-plugin ([32df9b9](https://github.com/terrestris/shogun-gis-client/commit/32df9b9a3bd2f453fc4daba0d8603e4369623b6c))
* **deps-dev:** bump @typescript-eslint/parser from 5.42.0 to 5.42.1 ([4ecd3bd](https://github.com/terrestris/shogun-gis-client/commit/4ecd3bd50de3aa9f716865ab7bd8555038a70ae6))
* **deps-dev:** bump @typescript-eslint/parser from 5.42.1 to 5.43.0 ([6e3fedc](https://github.com/terrestris/shogun-gis-client/commit/6e3fedc8a51db6c60f073aef9cf4ee74ae999127))
* **deps-dev:** bump @typescript-eslint/parser from 5.43.0 to 5.44.0 ([88b4f10](https://github.com/terrestris/shogun-gis-client/commit/88b4f10ea6df3cc7e32a6522deb15cdd3a2aa25e))
* **deps-dev:** bump babel-jest from 29.2.2 to 29.3.0 ([f30fe3c](https://github.com/terrestris/shogun-gis-client/commit/f30fe3cfb45b0c6b23c379be40690ad99eeccfb4))
* **deps-dev:** bump babel-jest from 29.3.0 to 29.3.1 ([bd7c82c](https://github.com/terrestris/shogun-gis-client/commit/bd7c82cd6ccd32e632671a9838554ff1e93abe8f))
* **deps-dev:** bump babel-loader from 9.0.1 to 9.1.0 ([a782f8f](https://github.com/terrestris/shogun-gis-client/commit/a782f8f6c48a18478546a8b1d7b07a154fdd7bed))
* **deps-dev:** bump css-loader from 6.7.1 to 6.7.2 ([8aefbc3](https://github.com/terrestris/shogun-gis-client/commit/8aefbc337b624abadbd2708c82d5ba78e717b6f0))
* **deps-dev:** bump eslint from 8.26.0 to 8.27.0 ([7d2f2f9](https://github.com/terrestris/shogun-gis-client/commit/7d2f2f952ea6146a48695a74e369cedcb56a9ee9))
* **deps-dev:** bump eslint from 8.27.0 to 8.28.0 ([e22e325](https://github.com/terrestris/shogun-gis-client/commit/e22e3251c94ffd2db4c57aa39fe5afd61afb0c86))
* **deps-dev:** bump eslint-plugin-react from 7.31.10 to 7.31.11 ([6b63667](https://github.com/terrestris/shogun-gis-client/commit/6b63667ed1cd4a5d523e5fd5290d557577b7173e))
* **deps-dev:** bump husky from 8.0.1 to 8.0.2 ([78bb6e6](https://github.com/terrestris/shogun-gis-client/commit/78bb6e69262d9370dd2c35ddde78a67492671b1c))
* **deps-dev:** bump jest from 29.2.2 to 29.3.0 ([d39cabc](https://github.com/terrestris/shogun-gis-client/commit/d39cabca3fa22018725c61310d7941e8b3b32d38))
* **deps-dev:** bump jest from 29.3.0 to 29.3.1 ([1e2ab67](https://github.com/terrestris/shogun-gis-client/commit/1e2ab670abc93ce43fbe04b52497d33b01e2fb29))
* **deps-dev:** bump jest-environment-jsdom from 29.2.2 to 29.3.0 ([ab5aa61](https://github.com/terrestris/shogun-gis-client/commit/ab5aa61067d3142b6efd0eaf59bc0c614c43c30e))
* **deps-dev:** bump jest-environment-jsdom from 29.3.0 to 29.3.1 ([2fdad5c](https://github.com/terrestris/shogun-gis-client/commit/2fdad5c80078c9030efc14cf5de74b80db4ea5af))
* **deps-dev:** bump mini-css-extract-plugin from 2.6.1 to 2.7.0 ([1efde5e](https://github.com/terrestris/shogun-gis-client/commit/1efde5e4c32e21e76c09fc29813f92b209265dc9))
* **deps-dev:** bump typescript from 4.8.4 to 4.9.3 ([5a4e373](https://github.com/terrestris/shogun-gis-client/commit/5a4e37329036708fefe39354511f218e0461cfcd))
* **deps-dev:** bump webpack from 5.74.0 to 5.75.0 ([0d503d3](https://github.com/terrestris/shogun-gis-client/commit/0d503d32465cad534e045c490b644ad2ab7a9d49))
* **deps-dev:** bump webpack-cli from 4.10.0 to 5.0.0 ([ed3de65](https://github.com/terrestris/shogun-gis-client/commit/ed3de65ffa37d32ae040c48a86be65ab42b4a7a7))
* **deps:** bump @reduxjs/toolkit from 1.8.6 to 1.9.0 ([36c39c7](https://github.com/terrestris/shogun-gis-client/commit/36c39c798158e698255efb56a52a92c683577112))
* **deps:** bump @terrestris/react-geo from 19.8.1 to 19.8.2 ([5ea148c](https://github.com/terrestris/shogun-gis-client/commit/5ea148c0125563b6d0cb01bc39d2f2396198e560))
* **deps:** bump antd from 4.24.0 to 4.24.1 ([81c949e](https://github.com/terrestris/shogun-gis-client/commit/81c949ed114a0df92509c706558d80cf8889b720))
* **deps:** bump antd from 4.24.1 to 4.24.2 ([e546a17](https://github.com/terrestris/shogun-gis-client/commit/e546a17561f216c90b41e9b93299851990f0794b))
* **deps:** bump antd from 4.24.2 to 4.24.3 ([03a116a](https://github.com/terrestris/shogun-gis-client/commit/03a116a53c81851efbb4405e9197f34b8702d823))
* **deps:** bump i18next-browser-languagedetector from 7.0.0 to 7.0.1 ([731c9b3](https://github.com/terrestris/shogun-gis-client/commit/731c9b30aee15293cc672542f42b4c76b6b654f9))
* **deps:** bump keycloak-js from 19.0.3 to 20.0.1 ([c266592](https://github.com/terrestris/shogun-gis-client/commit/c26659224a2a78a66861ada3b44e49973ad705b9))
* **deps:** bump react-redux from 8.0.4 to 8.0.5 ([b86efbb](https://github.com/terrestris/shogun-gis-client/commit/b86efbbf217c88f640cfdd984be42d7337a8c420))
* update dependencies ([1f7763b](https://github.com/terrestris/shogun-gis-client/commit/1f7763beb1e41019b5a582489c9a0307bfc7de17))
* update several dependencies including major versions, e.g. ol and i18next ([c62a871](https://github.com/terrestris/shogun-gis-client/commit/c62a87111c29c58676163779db5ca66c0c6ed1e5))
* update to latest shogun util ([6bbde33](https://github.com/terrestris/shogun-gis-client/commit/6bbde337e5f9f11b6fa20ed2135848f4abef5e0f))


### Bugfixes

* defines slider length ([5df9c95](https://github.com/terrestris/shogun-gis-client/commit/5df9c95cb22faee7ce5b9cbca24fb7422bf232f3))
* disable the background layer switcher ([7056463](https://github.com/terrestris/shogun-gis-client/commit/70564636391a3c233dc7c733d080d7c47d608118))
* fix tests ([b4e2aa4](https://github.com/terrestris/shogun-gis-client/commit/b4e2aa468cbcaf688db924158581bc9bbe60644a))
* fixing types due to update ([c3fc7db](https://github.com/terrestris/shogun-gis-client/commit/c3fc7db5e28f457acbfa64d65c70a7c5aa509c58))
* send auth header if required ([fe325ac](https://github.com/terrestris/shogun-gis-client/commit/fe325acf741d6c64c2ebd01a1ec6b4fbc728b7de))
* sets latest time of recording as initially shown layer ([14339a6](https://github.com/terrestris/shogun-gis-client/commit/14339a6464ef90386867da1e312545996e1610f1))

## [4.8.1](https://github.com/terrestris/shogun-gis-client/compare/v4.8.0...v4.8.1) (2022-11-03)


### Bugfixes

* trigger release ([091a778](https://github.com/terrestris/shogun-gis-client/commit/091a7781c12c90d36929a09d4439a90ccfe3ddc0))

## [4.8.0](https://github.com/terrestris/shogun-gis-client/compare/v4.7.1...v4.8.0) (2022-11-03)


### Features

* add viewbox config if extent is given ([8f39167](https://github.com/terrestris/shogun-gis-client/commit/8f391670f09426df7ec89971050dc988a33fbf07))
* adds a unittest for the AddLayerModal ([3cff2b9](https://github.com/terrestris/shogun-gis-client/commit/3cff2b9891448b3dc9e4677e5ab014f497125102))
* adds unit tests ([023d8e7](https://github.com/terrestris/shogun-gis-client/commit/023d8e7dc14a32557ee9589217fe4dea1cca25f7))
* integrate geostyler ([77d0151](https://github.com/terrestris/shogun-gis-client/commit/77d015160c2c43953ede31732184b795191a6462))


### Changes in configuration

* includes spec.ts data ([7ab979f](https://github.com/terrestris/shogun-gis-client/commit/7ab979fe975681863778a18dda9957c38fa29bae))


### Changes in layout

* fix warnings ([551bef3](https://github.com/terrestris/shogun-gis-client/commit/551bef38e3773dc6952ee38fb4df1e807e9b3490))


### Bugfixes

* add ts-ignore ([dc2bf4a](https://github.com/terrestris/shogun-gis-client/commit/dc2bf4a9620e7982f62da6f17050168dd3e8b460))
* fix test ([4d3fc07](https://github.com/terrestris/shogun-gis-client/commit/4d3fc073622f6ab34a7a1b2eb49c9597f84caa9c))
* fix typing ([1b7446d](https://github.com/terrestris/shogun-gis-client/commit/1b7446d77140006adff602c96df26430e52e2cc9))
* layergroup only appears in layertree when length > 0 ([3548f32](https://github.com/terrestris/shogun-gis-client/commit/3548f328c9c82b02e4c5a8062d12683c8d5a183d))
* remove unneeded imports ([a0d4e0a](https://github.com/terrestris/shogun-gis-client/commit/a0d4e0a129e1a1a4f2cc5dc6b2938167f03c661c))
* replace deprecated modal usage ([1e328dc](https://github.com/terrestris/shogun-gis-client/commit/1e328dc76c3ef3459b4afdee6ffe719644b1e29a))
* replace internal redux wrapper with new util ([9603646](https://github.com/terrestris/shogun-gis-client/commit/96036464da950a7d664a21610c41a62804f2c335))


### Dependencies

* **deps-dev:** bump @babel/core from 7.19.3 to 7.19.6 ([114ed7b](https://github.com/terrestris/shogun-gis-client/commit/114ed7b503973f8bd7389e17fd951a53a3f19aa3))
* **deps-dev:** bump @babel/runtime from 7.19.4 to 7.20.0 ([f60ebe9](https://github.com/terrestris/shogun-gis-client/commit/f60ebe9f201ea1da28ab5544dba0885059ddb9f5))
* **deps-dev:** bump @terrestris/eslint-config-typescript ([7162142](https://github.com/terrestris/shogun-gis-client/commit/71621421cd80400c99e108e014c3e03ee8c0c859))
* **deps-dev:** bump @typescript-eslint/eslint-plugin ([fbe60ee](https://github.com/terrestris/shogun-gis-client/commit/fbe60ee7ef4edc71cc1ccf047ce5e42ccb89bec5))
* **deps-dev:** bump @typescript-eslint/parser from 5.40.1 to 5.41.0 ([4483858](https://github.com/terrestris/shogun-gis-client/commit/448385818225fba38150917cd20d50f68a0ec531))
* **deps-dev:** bump babel-jest from 29.2.0 to 29.2.1 ([bacb602](https://github.com/terrestris/shogun-gis-client/commit/bacb602a9a419b55be3ad0d9ba67656761b1fa52))
* **deps-dev:** bump babel-loader from 8.2.5 to 9.0.0 ([7ae7d0a](https://github.com/terrestris/shogun-gis-client/commit/7ae7d0a02b451e6e1a15a78349f38c94d18271bd))
* **deps-dev:** bump eslint from 8.25.0 to 8.26.0 ([bbd6727](https://github.com/terrestris/shogun-gis-client/commit/bbd6727373f47c4e97d0de3fcae898c59792160a))
* **deps-dev:** bump jest from 29.2.0 to 29.2.1 ([0cb0b4b](https://github.com/terrestris/shogun-gis-client/commit/0cb0b4b830f8d0e07077059c8bcfc425743f378c))
* **deps-dev:** bump jest from 29.2.1 to 29.2.2 ([29ccb7a](https://github.com/terrestris/shogun-gis-client/commit/29ccb7a705aa725246c058911b2ed7e0687f85e1))
* **deps-dev:** bump jest-environment-jsdom from 29.2.0 to 29.2.1 ([587ada7](https://github.com/terrestris/shogun-gis-client/commit/587ada775d4ac0ce32b72e0d022cc86c123307fd))
* **deps-dev:** bump jest-environment-jsdom from 29.2.1 to 29.2.2 ([f3975a4](https://github.com/terrestris/shogun-gis-client/commit/f3975a422e90be9038aa1b14dcae28e7959521e4))
* **deps-dev:** bump webpack-bundle-analyzer from 4.6.1 to 4.7.0 ([8cd0a91](https://github.com/terrestris/shogun-gis-client/commit/8cd0a911c04fb91c3dd8a538fdb91ed82f6c241a))
* **deps:** bump i18next from 21.10.0 to 22.0.1 ([fff37af](https://github.com/terrestris/shogun-gis-client/commit/fff37af2ebf30363bfdb5671c617980bac3f8892))
* **deps:** bump i18next from 22.0.1 to 22.0.2 ([be6f612](https://github.com/terrestris/shogun-gis-client/commit/be6f6123695436433eb92875fb1b606e0ebbfef0))
* **deps:** bump i18next from 22.0.2 to 22.0.3 ([1b39b36](https://github.com/terrestris/shogun-gis-client/commit/1b39b363567f6bed29043e26906e9fe6188b65d5))
* **deps:** bump i18next-browser-languagedetector from 6.1.8 to 7.0.0 ([47135b0](https://github.com/terrestris/shogun-gis-client/commit/47135b08ce4e9efe4263f27cc5eaaa7db83b5480))
* **release:** 4.8.0 [skip ci] ([6346d30](https://github.com/terrestris/shogun-gis-client/commit/6346d30b7797408f1723d08a3bf52873b8d37d10))
* update eslint and add user-events ([b40c283](https://github.com/terrestris/shogun-gis-client/commit/b40c283fa8f02d7ad3e413c5b7f0d578b7e747ba))
* update several dependencies ([b389e45](https://github.com/terrestris/shogun-gis-client/commit/b389e45283703adaec2ad510517b39bac168045f))

## [4.8.0](https://github.com/terrestris/shogun-gis-client/compare/v4.7.1...v4.8.0) (2022-11-03)


### Features

* add viewbox config if extent is given ([8f39167](https://github.com/terrestris/shogun-gis-client/commit/8f391670f09426df7ec89971050dc988a33fbf07))
* adds a unittest for the AddLayerModal ([3cff2b9](https://github.com/terrestris/shogun-gis-client/commit/3cff2b9891448b3dc9e4677e5ab014f497125102))
* adds unit tests ([023d8e7](https://github.com/terrestris/shogun-gis-client/commit/023d8e7dc14a32557ee9589217fe4dea1cca25f7))
* integrate geostyler ([77d0151](https://github.com/terrestris/shogun-gis-client/commit/77d015160c2c43953ede31732184b795191a6462))


### Changes in configuration

* includes spec.ts data ([7ab979f](https://github.com/terrestris/shogun-gis-client/commit/7ab979fe975681863778a18dda9957c38fa29bae))


### Changes in layout

* fix warnings ([551bef3](https://github.com/terrestris/shogun-gis-client/commit/551bef38e3773dc6952ee38fb4df1e807e9b3490))


### Dependencies

* **deps-dev:** bump @babel/core from 7.19.3 to 7.19.6 ([114ed7b](https://github.com/terrestris/shogun-gis-client/commit/114ed7b503973f8bd7389e17fd951a53a3f19aa3))
* **deps-dev:** bump @babel/runtime from 7.19.4 to 7.20.0 ([f60ebe9](https://github.com/terrestris/shogun-gis-client/commit/f60ebe9f201ea1da28ab5544dba0885059ddb9f5))
* **deps-dev:** bump @terrestris/eslint-config-typescript ([7162142](https://github.com/terrestris/shogun-gis-client/commit/71621421cd80400c99e108e014c3e03ee8c0c859))
* **deps-dev:** bump @typescript-eslint/eslint-plugin ([fbe60ee](https://github.com/terrestris/shogun-gis-client/commit/fbe60ee7ef4edc71cc1ccf047ce5e42ccb89bec5))
* **deps-dev:** bump @typescript-eslint/parser from 5.40.1 to 5.41.0 ([4483858](https://github.com/terrestris/shogun-gis-client/commit/448385818225fba38150917cd20d50f68a0ec531))
* **deps-dev:** bump babel-jest from 29.2.0 to 29.2.1 ([bacb602](https://github.com/terrestris/shogun-gis-client/commit/bacb602a9a419b55be3ad0d9ba67656761b1fa52))
* **deps-dev:** bump babel-loader from 8.2.5 to 9.0.0 ([7ae7d0a](https://github.com/terrestris/shogun-gis-client/commit/7ae7d0a02b451e6e1a15a78349f38c94d18271bd))
* **deps-dev:** bump eslint from 8.25.0 to 8.26.0 ([bbd6727](https://github.com/terrestris/shogun-gis-client/commit/bbd6727373f47c4e97d0de3fcae898c59792160a))
* **deps-dev:** bump jest from 29.2.0 to 29.2.1 ([0cb0b4b](https://github.com/terrestris/shogun-gis-client/commit/0cb0b4b830f8d0e07077059c8bcfc425743f378c))
* **deps-dev:** bump jest from 29.2.1 to 29.2.2 ([29ccb7a](https://github.com/terrestris/shogun-gis-client/commit/29ccb7a705aa725246c058911b2ed7e0687f85e1))
* **deps-dev:** bump jest-environment-jsdom from 29.2.0 to 29.2.1 ([587ada7](https://github.com/terrestris/shogun-gis-client/commit/587ada775d4ac0ce32b72e0d022cc86c123307fd))
* **deps-dev:** bump jest-environment-jsdom from 29.2.1 to 29.2.2 ([f3975a4](https://github.com/terrestris/shogun-gis-client/commit/f3975a422e90be9038aa1b14dcae28e7959521e4))
* **deps-dev:** bump webpack-bundle-analyzer from 4.6.1 to 4.7.0 ([8cd0a91](https://github.com/terrestris/shogun-gis-client/commit/8cd0a911c04fb91c3dd8a538fdb91ed82f6c241a))
* **deps:** bump i18next from 21.10.0 to 22.0.1 ([fff37af](https://github.com/terrestris/shogun-gis-client/commit/fff37af2ebf30363bfdb5671c617980bac3f8892))
* **deps:** bump i18next from 22.0.1 to 22.0.2 ([be6f612](https://github.com/terrestris/shogun-gis-client/commit/be6f6123695436433eb92875fb1b606e0ebbfef0))
* **deps:** bump i18next from 22.0.2 to 22.0.3 ([1b39b36](https://github.com/terrestris/shogun-gis-client/commit/1b39b363567f6bed29043e26906e9fe6188b65d5))
* **deps:** bump i18next-browser-languagedetector from 6.1.8 to 7.0.0 ([47135b0](https://github.com/terrestris/shogun-gis-client/commit/47135b08ce4e9efe4263f27cc5eaaa7db83b5480))
* update eslint and add user-events ([b40c283](https://github.com/terrestris/shogun-gis-client/commit/b40c283fa8f02d7ad3e413c5b7f0d578b7e747ba))
* update several dependencies ([b389e45](https://github.com/terrestris/shogun-gis-client/commit/b389e45283703adaec2ad510517b39bac168045f))


### Bugfixes

* add ts-ignore ([dc2bf4a](https://github.com/terrestris/shogun-gis-client/commit/dc2bf4a9620e7982f62da6f17050168dd3e8b460))
* fix test ([4d3fc07](https://github.com/terrestris/shogun-gis-client/commit/4d3fc073622f6ab34a7a1b2eb49c9597f84caa9c))
* fix typing ([1b7446d](https://github.com/terrestris/shogun-gis-client/commit/1b7446d77140006adff602c96df26430e52e2cc9))
* layergroup only appears in layertree when length > 0 ([3548f32](https://github.com/terrestris/shogun-gis-client/commit/3548f328c9c82b02e4c5a8062d12683c8d5a183d))
* remove unneeded imports ([a0d4e0a](https://github.com/terrestris/shogun-gis-client/commit/a0d4e0a129e1a1a4f2cc5dc6b2938167f03c661c))
* replace deprecated modal usage ([1e328dc](https://github.com/terrestris/shogun-gis-client/commit/1e328dc76c3ef3459b4afdee6ffe719644b1e29a))
* replace internal redux wrapper with new util ([9603646](https://github.com/terrestris/shogun-gis-client/commit/96036464da950a7d664a21610c41a62804f2c335))

## [4.7.1](https://github.com/terrestris/shogun-gis-client/compare/v4.7.0...v4.7.1) (2022-10-18)


### Bugfixes

* fix instanceof checks ([a43559a](https://github.com/terrestris/shogun-gis-client/commit/a43559a83035699f0431542fe083b0e5ab86d829))


### Dependencies

* **deps-dev:** bump @typescript-eslint/eslint-plugin ([ec3cd63](https://github.com/terrestris/shogun-gis-client/commit/ec3cd637b85f46182d8b9438a7a1feb8ccfbde6e))
* **deps-dev:** bump @typescript-eslint/parser from 5.40.0 to 5.40.1 ([b9ada21](https://github.com/terrestris/shogun-gis-client/commit/b9ada212a09e95e640480022103d67bacb873eba))
* **deps:** bump antd from 4.23.5 to 4.23.6 ([0905b15](https://github.com/terrestris/shogun-gis-client/commit/0905b154874e944940c3712d0703df10604b9e44))

## [4.7.0](https://github.com/terrestris/shogun-gis-client/compare/v4.6.0...v4.7.0) (2022-10-17)


### Features

* add context menu items ([eb8bf34](https://github.com/terrestris/shogun-gis-client/commit/eb8bf342be74761a5d817635eb2305dbdd4361ab))
* add download layer option ([3e0c608](https://github.com/terrestris/shogun-gis-client/commit/3e0c608f06d33087ff4ed2e1ff36397a90416be4))
* implement download layer function ([7d39d83](https://github.com/terrestris/shogun-gis-client/commit/7d39d83a38a1dfc5441753c28a50e74b29434fd9))


### Bugfixes

* consider the placement of the header plugin (again) ([f378102](https://github.com/terrestris/shogun-gis-client/commit/f378102e8b63cdf89e2d95cc11636f7261bd4c17))
* only send bearerToken header when required ([f629ac2](https://github.com/terrestris/shogun-gis-client/commit/f629ac295ecbfdd482fc0ac57a2372203e845453))
* switch to async/await ([7e07cc7](https://github.com/terrestris/shogun-gis-client/commit/7e07cc76c5179b2f01be452d57a32fe7458148d9))
* use XML as default download format ([c3b9d8e](https://github.com/terrestris/shogun-gis-client/commit/c3b9d8e8e1b217d50fa20dfe1c8fed84f459db36))


### Dependencies

* **deps-dev:** bump @playwright/test from 1.27.0 to 1.27.1 ([42764b7](https://github.com/terrestris/shogun-gis-client/commit/42764b71fb2c727e23e6a8c09790938f288ad2e1))
* **deps-dev:** bump babel-jest from 29.1.2 to 29.2.0 ([a07a2f8](https://github.com/terrestris/shogun-gis-client/commit/a07a2f8a3353459d057286f98940be65f6b774a6))
* **deps-dev:** bump css-minimizer-webpack-plugin from 4.2.1 to 4.2.2 ([b3ca66b](https://github.com/terrestris/shogun-gis-client/commit/b3ca66ba4831c61c064ade7803bf209135414c10))
* **deps-dev:** bump jest from 29.1.2 to 29.2.0 ([ae79d78](https://github.com/terrestris/shogun-gis-client/commit/ae79d78a3c17a7b041349ce2baa0b81744186e32))
* **deps-dev:** bump jest-environment-jsdom from 29.1.2 to 29.2.0 ([2267057](https://github.com/terrestris/shogun-gis-client/commit/226705783080a1ad0bf0bea62b279b1d1582a44a))
* **deps:** bump @terrestris/react-geo from 19.5.0 to 19.6.0 ([698868f](https://github.com/terrestris/shogun-gis-client/commit/698868ff324fe8c1a3cc457f6ab6d2c81e17c1a8))
* update shogun-util to 3.7.0 ([9d117d2](https://github.com/terrestris/shogun-gis-client/commit/9d117d21d872df22358fff5c5f934d334f1ee8a2))

## [4.6.0](https://github.com/terrestris/shogun-gis-client/compare/v4.5.1...v4.6.0) (2022-10-11)


### Features

* add selectedFeatures slice for the store ([3712e3c](https://github.com/terrestris/shogun-gis-client/commit/3712e3ca0e347a507430d29abab9c8218f7d6aa2))
* add support for integration of plugins in the feature info tool ([ed27976](https://github.com/terrestris/shogun-gis-client/commit/ed279760bc42763f4e5e9cfe57376a58fe241b6a))
* add typing for feature info plugin and simplify identification by providing type guards ([7b8e817](https://github.com/terrestris/shogun-gis-client/commit/7b8e81700c3d7f6fac88531f72a5ae2aa7f56844))


### Dependencies

* **deps-dev:** bump @babel/preset-env from 7.19.3 to 7.19.4 ([1f27c36](https://github.com/terrestris/shogun-gis-client/commit/1f27c36c640695bb0dde4ddbf8ea4865e74a5b57))
* **deps-dev:** bump @babel/runtime from 7.19.0 to 7.19.4 ([05f1745](https://github.com/terrestris/shogun-gis-client/commit/05f1745a6f32846aec43c3b7eeb0fba6e2c43e86))
* **deps-dev:** bump @playwright/test from 1.26.1 to 1.27.0 ([1d0ad2d](https://github.com/terrestris/shogun-gis-client/commit/1d0ad2d66bd01b47250c4c829300c148181aafc1))
* **deps-dev:** bump @pmmmwh/react-refresh-webpack-plugin ([f6eb023](https://github.com/terrestris/shogun-gis-client/commit/f6eb023deef2b766738af2b8d8c3138938ba15e4))
* **deps-dev:** bump @types/jest from 29.1.1 to 29.1.2 ([3987eef](https://github.com/terrestris/shogun-gis-client/commit/3987eef031df93a59ca0667dd6c46df5bfa4b6a7))
* **deps-dev:** bump @typescript-eslint/eslint-plugin ([424a635](https://github.com/terrestris/shogun-gis-client/commit/424a635cf233eb02026cb23b2ea305291dc17522))
* **deps-dev:** bump @typescript-eslint/parser from 5.39.0 to 5.40.0 ([ce7948e](https://github.com/terrestris/shogun-gis-client/commit/ce7948e0ae0303edad309062cfa534680fb5dc03))
* **deps-dev:** bump css-minimizer-webpack-plugin from 4.2.0 to 4.2.1 ([650f2b9](https://github.com/terrestris/shogun-gis-client/commit/650f2b9c036d01851e9c746ac7b1eed7a9fee243))
* **deps-dev:** bump eslint from 8.24.0 to 8.25.0 ([3e30bb9](https://github.com/terrestris/shogun-gis-client/commit/3e30bb9fd6688780cd0955d2763ba6d0ae0ad83b))
* **deps-dev:** bump eslint-plugin-react from 7.31.8 to 7.31.9 ([2be1dd0](https://github.com/terrestris/shogun-gis-client/commit/2be1dd003495381f5ed9eca4b0ad222cc115572f))
* **deps-dev:** bump eslint-plugin-react from 7.31.9 to 7.31.10 ([47c9b9c](https://github.com/terrestris/shogun-gis-client/commit/47c9b9c2ff97bfc3b3bef8b8bc857b8f4db986f0))
* **deps-dev:** bump less-loader from 11.0.0 to 11.1.0 ([d412fa9](https://github.com/terrestris/shogun-gis-client/commit/d412fa9dc853fb7214237b99a8bfa4c6879a0611))
* **deps:** bump @reduxjs/toolkit from 1.8.5 to 1.8.6 ([8955226](https://github.com/terrestris/shogun-gis-client/commit/895522604a55d4fe55f3c6cbed50052659c87ab7))
* **deps:** bump antd from 4.23.4 to 4.23.5 ([8fd9a03](https://github.com/terrestris/shogun-gis-client/commit/8fd9a034a5be155d4fce85f77b13a0be4faf6c8e))
* **deps:** bump i18next from 21.9.2 to 21.10.0 ([720955b](https://github.com/terrestris/shogun-gis-client/commit/720955bec6fac3c91100e5f645d6d7097c27bad4))
* **deps:** bump i18next-browser-languagedetector from 6.1.5 to 6.1.6 ([412b179](https://github.com/terrestris/shogun-gis-client/commit/412b179d8b4c16f497b3662d95655b1f46ac1ac9))
* **deps:** bump i18next-browser-languagedetector from 6.1.6 to 6.1.8 ([7a6b2bf](https://github.com/terrestris/shogun-gis-client/commit/7a6b2bf2d1a890d1cc230378a2e45787507dcc67))
* **deps:** bump keycloak-js from 19.0.2 to 19.0.3 ([1ea61fd](https://github.com/terrestris/shogun-gis-client/commit/1ea61fd2e55864dc6b5c1ad1823d256913046565))
* update to latest react-geo ([442cd9c](https://github.com/terrestris/shogun-gis-client/commit/442cd9cd0c6fcd9c3cefa349152b24cd7774acf2))


### Bugfixes

* add permalink listener when opacity changes ([1c9078f](https://github.com/terrestris/shogun-gis-client/commit/1c9078f8d5f14724be22507303d30f6483a73b04))
* add some docs to the plugin types ([ac1acbe](https://github.com/terrestris/shogun-gis-client/commit/ac1acbe7ed91bb68ed91ebf936d5f35f3f9e7e54))
* correctly use layer config types ([71abb09](https://github.com/terrestris/shogun-gis-client/commit/71abb09d97d91ffdacf5260532ffcc7ad402a5ee))
* make copy icon clickable ([6e50a13](https://github.com/terrestris/shogun-gis-client/commit/6e50a13b8e122fb5c166a80cd8361465cfc017f2))
* rename variable and remove unused callback ([11a59be](https://github.com/terrestris/shogun-gis-client/commit/11a59bef631321bfd5bb5abd061a048cf237173e))
* save opacity in permalink ([2303456](https://github.com/terrestris/shogun-gis-client/commit/230345679f4044e54e2c1912ade98e7a229a8d43))
* show plugin for all layers if not specified otherwise ([59d7f9d](https://github.com/terrestris/shogun-gis-client/commit/59d7f9db1e37b79261cbd428de4d7eba25a7fe1c))

## [4.5.1](https://github.com/terrestris/shogun-gis-client/compare/v4.5.0...v4.5.1) (2022-10-04)


### Dependencies

* **deps-dev:** bump @typescript-eslint/eslint-plugin ([1acaa08](https://github.com/terrestris/shogun-gis-client/commit/1acaa0829b5cd398c4a24f44bb8ea770cad43d63))
* **deps-dev:** bump babel-jest from 29.1.0 to 29.1.2 ([3383340](https://github.com/terrestris/shogun-gis-client/commit/33833400f5120514930a5fb1d4319d4e99064b9a))
* **deps-dev:** bump jest-environment-jsdom from 29.1.1 to 29.1.2 ([e2aefaf](https://github.com/terrestris/shogun-gis-client/commit/e2aefaf7a883e5a25de3accbc4512539a6a1c108))
* **deps:** bump antd from 4.23.3 to 4.23.4 ([f276b2c](https://github.com/terrestris/shogun-gis-client/commit/f276b2cdee4d13189b3508b3655dd51f8ef3fac6))


### Bugfixes

* update outdated package-lock ([0a7ba9b](https://github.com/terrestris/shogun-gis-client/commit/0a7ba9b41a6d8522260ed14101e4ba3d3ea617f6))

## [4.5.0](https://github.com/terrestris/shogun-gis-client/compare/v4.4.0...v4.5.0) (2022-09-30)


### Features

* add print url to client config ([bfc9430](https://github.com/terrestris/shogun-gis-client/commit/bfc94302e1d7b29d1e754f0c70c9b6aceb5581b0))
* all imported layers can be deleted now ([8b81832](https://github.com/terrestris/shogun-gis-client/commit/8b8183219c02641b398ee34dea8d2a32c5cbbaa5))
* generates a new permalink whenever a layer is added ([17717fe](https://github.com/terrestris/shogun-gis-client/commit/17717fe53773c2a52f990185a0dee372e15bcb57))


### Dependencies

* **deps-dev:** bump @babel/cli from 7.18.10 to 7.19.3 ([caccc84](https://github.com/terrestris/shogun-gis-client/commit/caccc84a2f885ae125bc2cc7e22b09cff5785343))
* **deps-dev:** bump @babel/core from 7.19.1 to 7.19.3 ([4d4469c](https://github.com/terrestris/shogun-gis-client/commit/4d4469c536af3be0c4796854970782907dce3704))
* **deps-dev:** bump @babel/preset-env from 7.19.1 to 7.19.3 ([7efae60](https://github.com/terrestris/shogun-gis-client/commit/7efae60f1a7c4d3c0aeba303dfa77afae8894736))
* **deps-dev:** bump @playwright/test from 1.25.2 to 1.26.0 ([3c984df](https://github.com/terrestris/shogun-gis-client/commit/3c984df1fd30b4b3eb2c96fb6fcfbbb9d0c16255))
* **deps-dev:** bump @playwright/test from 1.26.0 to 1.26.1 ([a25efe5](https://github.com/terrestris/shogun-gis-client/commit/a25efe5be550b358510ae55703acd1c19833978d))
* **deps-dev:** bump @typescript-eslint/eslint-plugin ([ef5ca29](https://github.com/terrestris/shogun-gis-client/commit/ef5ca295ff5f8662aa5ef2c4b51b8cf732e9354f))
* **deps-dev:** bump @typescript-eslint/parser from 5.38.0 to 5.38.1 ([a37efb7](https://github.com/terrestris/shogun-gis-client/commit/a37efb785767e62c0b591bd5e78ab43537d3cfab))
* **deps-dev:** bump babel-jest from 29.0.3 to 29.1.0 ([e7752e4](https://github.com/terrestris/shogun-gis-client/commit/e7752e43daa8b7baf06c7926062fe509cca795cb))
* **deps-dev:** bump css-minimizer-webpack-plugin from 4.1.0 to 4.2.0 ([0426de1](https://github.com/terrestris/shogun-gis-client/commit/0426de1566cf1bfa4c3ce9cbf2b48cb1e3d2aa81))
* **deps-dev:** bump eslint from 8.23.1 to 8.24.0 ([fa992e0](https://github.com/terrestris/shogun-gis-client/commit/fa992e06c34b92a31b90b1f7ace89a2d7be77243))
* **deps-dev:** bump jest-environment-jsdom from 29.0.3 to 29.1.1 ([2109c74](https://github.com/terrestris/shogun-gis-client/commit/2109c74c329f5a2ffbc8968679fb156aca022313))
* **deps-dev:** bump typescript from 4.8.3 to 4.8.4 ([f831b87](https://github.com/terrestris/shogun-gis-client/commit/f831b873ccfcdc1cf03ac5ecb2f42dae68261fc3))
* **deps:** bump @terrestris/react-geo from 19.4.0 to 19.4.1 ([4da065a](https://github.com/terrestris/shogun-gis-client/commit/4da065aeb5a514e9365abc9da05c184e4308b8d4))
* **deps:** bump @terrestris/shogun-util from 3.5.0 to 3.6.0 ([4565aac](https://github.com/terrestris/shogun-gis-client/commit/4565aac44660b23781b139aece0eeb611960438a))
* **deps:** bump antd from 4.23.2 to 4.23.3 ([dda6cfe](https://github.com/terrestris/shogun-gis-client/commit/dda6cfed1cc2cd228b60f1740089882d1f7131fb))
* **deps:** bump react-redux from 8.0.2 to 8.0.4 ([9480c95](https://github.com/terrestris/shogun-gis-client/commit/9480c9522a386b999014161d7b755159d2e12132))
* update ol-util to 7.4.1 and react-geo to 19.4.2 ([0db7847](https://github.com/terrestris/shogun-gis-client/commit/0db78477411060e1ebbaf49a2b6de3d5b7b446a8))

## [4.4.0](https://github.com/terrestris/shogun-gis-client/compare/v4.3.1...v4.4.0) (2022-09-23)


### Features

* use docker-public.terrestris.de registry ([37a8e21](https://github.com/terrestris/shogun-gis-client/commit/37a8e217db98960db120eb0882b7024802f713f6))

## [4.3.1](https://github.com/terrestris/shogun-gis-client/compare/v4.3.0...v4.3.1) (2022-09-22)


### Dependencies

* **deps-dev:** bump @babel/runtime from 7.18.9 to 7.19.0 ([3993477](https://github.com/terrestris/shogun-gis-client/commit/3993477607424baeab7083392d5f2ffc985fd6f6))


### Bugfixes

* create processed layergroup in public apps ([620724b](https://github.com/terrestris/shogun-gis-client/commit/620724b88fdd58fb842d89e956f1b479c55012b2))
* permalink change listener for addLayer ([5687dbf](https://github.com/terrestris/shogun-gis-client/commit/5687dbf43e1d56856a045cd65535c179e0b94ce0))
* update hooks and their dependencies ([3fd7494](https://github.com/terrestris/shogun-gis-client/commit/3fd7494d32b5d20ae3a2424fb23cab8aa626906a))

## [4.3.0](https://github.com/terrestris/shogun-gis-client/compare/v4.2.1...v4.3.0) (2022-09-20)


### Features

* add change:layer listener for permalink ([abc443f](https://github.com/terrestris/shogun-gis-client/commit/abc443fc4ca22ef1ed5bf0c86ab55f119fa6d825))
* add watchBuild script ([01e6b6f](https://github.com/terrestris/shogun-gis-client/commit/01e6b6fcd2514c34a0b9f595b133ecd0d28d7763))
* hide empty invisible layer groups ([c1981be](https://github.com/terrestris/shogun-gis-client/commit/c1981becf51a944816b4e0523740ce50da51071b))
* save external layers in permalink ([2693f0b](https://github.com/terrestris/shogun-gis-client/commit/2693f0b2e740bd9c79ca1a2950ae7823b5ed53c0))


### Changes in configuration

* (dev) increase maximum line length ([53a2175](https://github.com/terrestris/shogun-gis-client/commit/53a21759fdd5cfa38c84f4c9bb4313af7faa9828))


### Bugfixes

* (WIP) add addLayer util ([6f6d229](https://github.com/terrestris/shogun-gis-client/commit/6f6d22907d461120fe4b5db54bc61cc2dcefee6a))
* add header offset to notification ([a426323](https://github.com/terrestris/shogun-gis-client/commit/a42632366abbd683665837ba84aebe7edbc4be5b))
* adjust webpack config ([7638615](https://github.com/terrestris/shogun-gis-client/commit/7638615177ebb6d8d4457969d9fd2e87745bad34))
* bugfixes ([747865a](https://github.com/terrestris/shogun-gis-client/commit/747865a2a84644131f822bc2fbca6e4abb676083))
* make layertree dropdown icon clickable ([a451528](https://github.com/terrestris/shogun-gis-client/commit/a4515289d1bcf4551168257d4ead8b2ae2d2d023))


### Dependencies

* **deps-dev:** bump @babel/core from 7.19.0 to 7.19.1 ([6049244](https://github.com/terrestris/shogun-gis-client/commit/60492441d089f86ffa0e5e8c839645ebde2d8a4a))
* **deps-dev:** bump @babel/preset-env from 7.19.0 to 7.19.1 ([93a852c](https://github.com/terrestris/shogun-gis-client/commit/93a852c34fee3d0ecb4ee15a1eb314ee13d165b4))
* **deps-dev:** bump @typescript-eslint/eslint-plugin ([1eff3f7](https://github.com/terrestris/shogun-gis-client/commit/1eff3f76f2f39ae09728f2fbf7a707267563c5cd))
* **deps-dev:** bump @typescript-eslint/parser from 5.37.0 to 5.38.0 ([d496014](https://github.com/terrestris/shogun-gis-client/commit/d496014aae418e411b78dcf338a0dff7726842df))
* **deps-dev:** bump webpack-dev-server from 4.11.0 to 4.11.1 ([1d8dbf1](https://github.com/terrestris/shogun-gis-client/commit/1d8dbf137c28594daaf0b7c30f79609ccf20ac49))
* **deps:** bump antd from 4.23.1 to 4.23.2 ([5a17c23](https://github.com/terrestris/shogun-gis-client/commit/5a17c23c171a5d07d15ce7559f5de6438182ca3a))
* **deps:** bump i18next from 21.9.1 to 21.9.2 ([6aeb4da](https://github.com/terrestris/shogun-gis-client/commit/6aeb4da39fd6787eaf95b4072e4a89c9bf0cea5d))
* **deps:** bump keycloak-js from 19.0.1 to 19.0.2 ([4d3c9e4](https://github.com/terrestris/shogun-gis-client/commit/4d3c9e4edd03df4f1038d10e0ac032f042e34a9e))
* update ol-util to 7.4.0 ([5925553](https://github.com/terrestris/shogun-gis-client/commit/592555382986ff4a498a32764bbcf686fb02503a))

## [4.2.1](https://github.com/terrestris/shogun-gis-client/compare/v4.2.0...v4.2.1) (2022-09-14)


### Bugfixes

* optimize loading of plugins with multiple exposed paths ([9c069ce](https://github.com/terrestris/shogun-gis-client/commit/9c069ce24dd0182d42b564ae5a76569e321bf76d))


### Dependencies

* **deps-dev:** bump @typescript-eslint/eslint-plugin ([01e4386](https://github.com/terrestris/shogun-gis-client/commit/01e4386851b6d6e4363958e34fccc6ae4ab5dd5a))
* **deps-dev:** bump @typescript-eslint/parser from 5.36.2 to 5.37.0 ([716c805](https://github.com/terrestris/shogun-gis-client/commit/716c8055c515fa7da17c1821d64a23c01b6b7bd9))
* **deps-dev:** bump babel-jest from 29.0.2 to 29.0.3 ([2f2f73a](https://github.com/terrestris/shogun-gis-client/commit/2f2f73a6c0422d5e705fc1a86993e8ea6f0db4fd))
* **deps-dev:** bump css-minimizer-webpack-plugin from 4.0.0 to 4.1.0 ([c5019b9](https://github.com/terrestris/shogun-gis-client/commit/c5019b921b236e6e84351e14ab81ea718333cf4d))
* **deps-dev:** bump eslint from 8.23.0 to 8.23.1 ([24d939b](https://github.com/terrestris/shogun-gis-client/commit/24d939bd64a616377b86fc52c72fcead1370ca8f))
* **deps-dev:** bump eslint-plugin-react from 7.31.7 to 7.31.8 ([95986c5](https://github.com/terrestris/shogun-gis-client/commit/95986c5843f34883b0a0e2453e822e2f935a1fe6))
* **deps-dev:** bump jest-environment-jsdom from 29.0.2 to 29.0.3 ([e0d6d8a](https://github.com/terrestris/shogun-gis-client/commit/e0d6d8a99b913fcfdcd067c0cb4c4dc211e08340))
* **deps-dev:** bump typescript from 4.8.2 to 4.8.3 ([7f06490](https://github.com/terrestris/shogun-gis-client/commit/7f06490fea6022c1ca8d0422e1740634ea6f57cc))
* **deps:** bump antd from 4.23.0 to 4.23.1 ([c6f44cd](https://github.com/terrestris/shogun-gis-client/commit/c6f44cd0fd647c818d14e251516d13dcb4aa5354))
* **deps:** bump react-i18next from 11.18.5 to 11.18.6 ([7b8d9ce](https://github.com/terrestris/shogun-gis-client/commit/7b8d9ce9e8755d2e982dfc20a8ff39a39dd362c0))

## [4.2.0](https://github.com/terrestris/shogun-gis-client/compare/v4.1.1...v4.2.0) (2022-09-08)


### Features

* add support for header plugins ([a973f3e](https://github.com/terrestris/shogun-gis-client/commit/a973f3eee2b036cf40585f8abe96766a558e615b))


### Bugfixes

* show backend version only if available ([3ca00ff](https://github.com/terrestris/shogun-gis-client/commit/3ca00ffa6e71b2e70feae1a70539d2736a447948))


### Dependencies

* **deps-dev:** bump @babel/core from 7.18.13 to 7.19.0 ([652426e](https://github.com/terrestris/shogun-gis-client/commit/652426e29d1ab1237b12c7e7737ca6904f7da756))
* **deps-dev:** bump @babel/preset-env from 7.18.10 to 7.19.0 ([43ca947](https://github.com/terrestris/shogun-gis-client/commit/43ca947761c30d5fee704f633c17057be08c2875))
* **deps-dev:** bump @playwright/test from 1.25.1 to 1.25.2 ([cc6a76d](https://github.com/terrestris/shogun-gis-client/commit/cc6a76d00609e4b6ba6030840d6a7f9d504dd7da))
* **deps-dev:** bump @typescript-eslint/eslint-plugin ([8165c9b](https://github.com/terrestris/shogun-gis-client/commit/8165c9bd3f7192a293babf644d50e725637807d6))
* **deps-dev:** bump @typescript-eslint/eslint-plugin ([198da55](https://github.com/terrestris/shogun-gis-client/commit/198da55592e19b197b5616a16476e0cf089a29b1))
* **deps-dev:** bump @typescript-eslint/parser from 5.36.0 to 5.36.1 ([db3be9f](https://github.com/terrestris/shogun-gis-client/commit/db3be9f3ceeb0bc6e1c88d4b2ada003ea578a9fe))
* **deps-dev:** bump @typescript-eslint/parser from 5.36.1 to 5.36.2 ([e14fd82](https://github.com/terrestris/shogun-gis-client/commit/e14fd822200e21096dfa1204632ec15baec63a31))
* **deps-dev:** bump babel-jest from 29.0.1 to 29.0.2 ([af9906c](https://github.com/terrestris/shogun-gis-client/commit/af9906c2c09fe8907e54a9a164c2a34cded52ce0))
* **deps-dev:** bump eslint-plugin-react from 7.31.1 to 7.31.6 ([bba1a73](https://github.com/terrestris/shogun-gis-client/commit/bba1a73af33d7c0fc066530edda4b23b9db2a99d))
* **deps-dev:** bump eslint-plugin-react from 7.31.6 to 7.31.7 ([5206094](https://github.com/terrestris/shogun-gis-client/commit/52060944ab7bd87949e07681424ab3f5618a52f0))
* **deps-dev:** bump jest from 29.0.1 to 29.0.2 ([c06d6f3](https://github.com/terrestris/shogun-gis-client/commit/c06d6f33fdb16f66617905fe4f339f96abcbda7c))
* **deps-dev:** bump jest-environment-jsdom from 29.0.1 to 29.0.2 ([0955492](https://github.com/terrestris/shogun-gis-client/commit/0955492f0bd238e692711bb1fc16c18de4e27109))
* **deps-dev:** bump webpack-dev-server from 4.10.1 to 4.11.0 ([78c5b17](https://github.com/terrestris/shogun-gis-client/commit/78c5b172a506ab1cf48691119cf2980eeb2284ec))
* **deps:** bump @terrestris/shogun-util from 3.4.1 to 3.5.0 ([f2de6c0](https://github.com/terrestris/shogun-gis-client/commit/f2de6c04368326a9c9badcbcd4056dc222aa2702))
* **deps:** bump antd from 4.22.8 to 4.23.0 ([f7a7a82](https://github.com/terrestris/shogun-gis-client/commit/f7a7a82a33356b7a6fe6b02092cd2753a87d1ed1))

## [4.1.1](https://github.com/terrestris/shogun-gis-client/compare/v4.1.0...v4.1.1) (2022-08-30)


### Dependencies

* **deps-dev:** bump @commitlint/cli from 17.0.3 to 17.1.1 ([cae65bb](https://github.com/terrestris/shogun-gis-client/commit/cae65bb02a6c0df0a9549375b71fad20a6f319b7))
* **deps-dev:** bump @commitlint/cli from 17.1.1 to 17.1.2 ([60e2991](https://github.com/terrestris/shogun-gis-client/commit/60e29910273d3117b17927706cf836615303c221))
* **deps-dev:** bump @commitlint/config-conventional ([cdec796](https://github.com/terrestris/shogun-gis-client/commit/cdec796e3b5aa5d265a9e0eef0db9154fe868fe9))
* **deps-dev:** bump @semantic-release/github from 8.0.5 to 8.0.6 ([7161a94](https://github.com/terrestris/shogun-gis-client/commit/7161a94789845b7b5a65a2c28579126cf394aaca))
* **deps-dev:** bump @types/jest from 28.1.8 to 29.0.0 ([c52a8fe](https://github.com/terrestris/shogun-gis-client/commit/c52a8fe32b1f5d6eff1f4652b5394f28b60051e1))
* **deps-dev:** bump @typescript-eslint/eslint-plugin ([4533000](https://github.com/terrestris/shogun-gis-client/commit/4533000169cc98f7f3a572ca933d41c2d5edfb10))
* **deps-dev:** bump @typescript-eslint/parser from 5.35.1 to 5.36.0 ([719125d](https://github.com/terrestris/shogun-gis-client/commit/719125df957200bf9e5db4f7dafd5be98f666323))
* **deps-dev:** bump babel-jest from 28.1.3 to 29.0.0 ([e2f4d82](https://github.com/terrestris/shogun-gis-client/commit/e2f4d828873de240df2e44770a538b61a0a38d28))
* **deps-dev:** bump babel-jest from 29.0.0 to 29.0.1 ([b8a063d](https://github.com/terrestris/shogun-gis-client/commit/b8a063de7b59352202870f97059c4c9b246824eb))
* **deps-dev:** bump eslint from 8.22.0 to 8.23.0 ([31457c1](https://github.com/terrestris/shogun-gis-client/commit/31457c1d82ded4d792c73cac769181d248b69aac))
* **deps-dev:** bump eslint-plugin-react from 7.31.0 to 7.31.1 ([446249a](https://github.com/terrestris/shogun-gis-client/commit/446249aaef29ef9e5401d09376b25cf61479d52e))
* **deps-dev:** bump jest from 29.0.0 to 29.0.1 ([77868c3](https://github.com/terrestris/shogun-gis-client/commit/77868c3ff9476f1a318c73b52d0d48bf40c857f8))
* **deps-dev:** bump jest-environment-jsdom from 28.1.3 to 29.0.0 ([a774ac3](https://github.com/terrestris/shogun-gis-client/commit/a774ac3d5273b8ee343c1df7b977c58f634125ec))
* **deps-dev:** bump jest-environment-jsdom from 29.0.0 to 29.0.1 ([bfdd3e0](https://github.com/terrestris/shogun-gis-client/commit/bfdd3e06a49b7b8f82d774dd7be01b46026d55d1))
* **deps-dev:** bump terser-webpack-plugin from 5.3.5 to 5.3.6 ([f7fc3c9](https://github.com/terrestris/shogun-gis-client/commit/f7fc3c928af97956b6486377ea9bdc155e843fd6))
* **deps-dev:** bump typescript from 4.7.4 to 4.8.2 ([50d05b7](https://github.com/terrestris/shogun-gis-client/commit/50d05b7c015bdcf543c9378e2a59eb8c21517167))
* **deps-dev:** bump webpack-dev-server from 4.10.0 to 4.10.1 ([830c7e3](https://github.com/terrestris/shogun-gis-client/commit/830c7e334a91da1ce9a23378e1f150081fad9b72))
* **deps:** bump antd from 4.22.7 to 4.22.8 ([3283020](https://github.com/terrestris/shogun-gis-client/commit/328302001ccb14f5ec4655ebadabfbc26ee85d88))
* installs color library ([4897643](https://github.com/terrestris/shogun-gis-client/commit/48976431c503f51a0aca0a4489d25079e643aa71))
* update react-i18next & jest ([26557ab](https://github.com/terrestris/shogun-gis-client/commit/26557ab51ea39d56365ef2b4c2cd45075805b64a))


### Changes in layout

* define a max width for the logo image ([e0f3d8c](https://github.com/terrestris/shogun-gis-client/commit/e0f3d8cff8edefd652bc5da4096bcba15d78bf9a))
* if color is too light, it will be manipulated a bit darker ([ee10f00](https://github.com/terrestris/shogun-gis-client/commit/ee10f0005d05a49d3185d2cb4977b170db92740e))

## [4.1.0](https://github.com/terrestris/shogun-gis-client/compare/v4.0.0...v4.1.0) (2022-08-25)


### Features

* support plugins via webpack module federation ([df44377](https://github.com/terrestris/shogun-gis-client/commit/df44377a9779045c594b454681aaf90b2157d9f8))


### Changes in configuration

* adds jest-sonar-reporter to report testcoverage and unittests to sonarqube ([ed08ba4](https://github.com/terrestris/shogun-gis-client/commit/ed08ba4ab7f5eb690c17460da6ce6e5ac73d1729))


### Dependencies

* **deps-dev:** bump @playwright/test from 1.25.0 to 1.25.1 ([6ec0732](https://github.com/terrestris/shogun-gis-client/commit/6ec0732d3270319ce70f5d790cc115ab76f8c75c))
* **deps-dev:** bump @types/jest from 28.1.7 to 28.1.8 ([b815f3f](https://github.com/terrestris/shogun-gis-client/commit/b815f3f7f939d1f837f98d0167101ba7cb5df6d6))
* **deps-dev:** bump @typescript-eslint/eslint-plugin ([a6ef3f4](https://github.com/terrestris/shogun-gis-client/commit/a6ef3f4ac2fea6bfba283e862a765a38bf67f2f3))
* **deps-dev:** bump @typescript-eslint/parser from 5.34.0 to 5.35.1 ([65d67e7](https://github.com/terrestris/shogun-gis-client/commit/65d67e73a447ffb907bcd4c233cc96142205d580))
* **deps-dev:** bump eslint-plugin-react from 7.30.1 to 7.31.0 ([cc9723c](https://github.com/terrestris/shogun-gis-client/commit/cc9723cc4a10e9ad768ec2d7a48f5b7b7ed8c5c8))
* **deps-dev:** bump semantic-release from 19.0.4 to 19.0.5 ([0f86acc](https://github.com/terrestris/shogun-gis-client/commit/0f86acc72cb6d1228bbb7c9c59c598fa2bb90207))


### Bugfixes

* defines linebreak ([3276f24](https://github.com/terrestris/shogun-gis-client/commit/3276f247aff6198c025653411f9d2d74e3b7fcc1))
* removes jpeg from print ([a48d7bb](https://github.com/terrestris/shogun-gis-client/commit/a48d7bbf4d1c95c2e84537d21259006852b2583a))
* removes unneded dependencies ([b28d606](https://github.com/terrestris/shogun-gis-client/commit/b28d60603b00280e70fde30427223ee48ab00ef4))
* toolbox is collapsed when run on phone or tablet ([#293](https://github.com/terrestris/shogun-gis-client/issues/293)) ([5da52d9](https://github.com/terrestris/shogun-gis-client/commit/5da52d976bb681d085d2e59595a9a63e35cbf37c))

## [4.0.0](https://github.com/terrestris/shogun-gis-client/compare/v3.4.1...v4.0.0) (2022-08-23)


### ⚠ BREAKING CHANGES

* The client has been rename to @terrestris/shogun-gis-client

### Breaking changes

* rename to shogun-gis-client ([0c19578](https://github.com/terrestris/shogun-gis-client/commit/0c19578b44761de23d9f1a8e28dc2cf4a20bcb2a))


### Bugfixes

* export type ([47df313](https://github.com/terrestris/shogun-gis-client/commit/47df3135031b5c7249312c2c1b4dfb482f99b190))
* read version from environment variable ([4d41cda](https://github.com/terrestris/shogun-gis-client/commit/4d41cdaff3ae3ab07d69ac41cbdb3f73710cce96))


### Changes in layout

* shorten argument ([8eaa2a1](https://github.com/terrestris/shogun-gis-client/commit/8eaa2a176c4178d2a05796265f08d426f6e5bfc7))


### Dependencies

* **deps-dev:** bump @babel/core from 7.18.10 to 7.18.13 ([e113515](https://github.com/terrestris/shogun-gis-client/commit/e113515f64304af0b5c416d3f8c34bf8c08628db))
* **deps-dev:** bump @playwright/test from 1.24.2 to 1.25.0 ([7ef8ebc](https://github.com/terrestris/shogun-gis-client/commit/7ef8ebc34a0e0cbb10d040f01d22fac35e04ea6c))
* **deps-dev:** bump @types/jest from 28.1.6 to 28.1.7 ([9667e41](https://github.com/terrestris/shogun-gis-client/commit/9667e41ca48619d6bdb9848bb9ff3f3d9869647b))
* **deps-dev:** bump @typescript-eslint/eslint-plugin ([ac674e3](https://github.com/terrestris/shogun-gis-client/commit/ac674e3cb2a2b00b3dc4c408b4ca7d714e655cad))
* **deps-dev:** bump @typescript-eslint/eslint-plugin ([f032e14](https://github.com/terrestris/shogun-gis-client/commit/f032e1425fc9613cccfbab023a12ef45b69406a7))
* **deps-dev:** bump @typescript-eslint/parser from 5.33.0 to 5.33.1 ([6f89b36](https://github.com/terrestris/shogun-gis-client/commit/6f89b3681e7aa52e8f2663507486873a3551f27a))
* **deps-dev:** bump @typescript-eslint/parser from 5.33.1 to 5.34.0 ([8ff7504](https://github.com/terrestris/shogun-gis-client/commit/8ff7504fe166dad158cd992c9a36cc9214c4c9a0))
* **deps-dev:** bump eslint from 8.21.0 to 8.22.0 ([f3abe1f](https://github.com/terrestris/shogun-gis-client/commit/f3abe1f5a346372b11271431a6b158307c5b5a41))
* **deps-dev:** bump semantic-release from 19.0.3 to 19.0.4 ([52e88cd](https://github.com/terrestris/shogun-gis-client/commit/52e88cdb6d88e2262088aace3f59477d27e593c1))
* **deps-dev:** bump terser-webpack-plugin from 5.3.3 to 5.3.4 ([527f945](https://github.com/terrestris/shogun-gis-client/commit/527f9453eb12fe647396dc5ac0acdb25d87cd4dd))
* **deps-dev:** bump terser-webpack-plugin from 5.3.4 to 5.3.5 ([9dd09fc](https://github.com/terrestris/shogun-gis-client/commit/9dd09fc67e47cf8ee350b38d3f188fc887b38622))
* **deps-dev:** bump webpack-bundle-analyzer from 4.5.0 to 4.6.0 ([251d2cd](https://github.com/terrestris/shogun-gis-client/commit/251d2cdbb336964768b4637276752ca2688a17ca))
* **deps-dev:** bump webpack-bundle-analyzer from 4.6.0 to 4.6.1 ([a7be31e](https://github.com/terrestris/shogun-gis-client/commit/a7be31e80bfc88d5e8cd1ddba65b8b498b7fb348))
* **deps-dev:** bump webpack-dev-server from 4.9.3 to 4.10.0 ([a610feb](https://github.com/terrestris/shogun-gis-client/commit/a610feb01990efc9b3887ba8f2a2b147877ee5d1))
* **deps:** bump @reduxjs/toolkit from 1.8.3 to 1.8.4 ([d48ac7b](https://github.com/terrestris/shogun-gis-client/commit/d48ac7b7adf5c42761e995ae92c56400c07e9abf))
* **deps:** bump @reduxjs/toolkit from 1.8.4 to 1.8.5 ([087e782](https://github.com/terrestris/shogun-gis-client/commit/087e7826155444a931376605ee06e69e30de648f))
* **deps:** bump @terrestris/ol-util from 7.2.0 to 7.3.0 ([bea172b](https://github.com/terrestris/shogun-gis-client/commit/bea172b4eeef37bacb762314b599e71924fc7fd4))
* **deps:** bump @terrestris/react-geo from 19.2.0 to 19.2.4 ([077d1f3](https://github.com/terrestris/shogun-gis-client/commit/077d1f398502d3fd76a1670adfd918b60122751f))
* **deps:** bump @terrestris/react-geo from 19.2.4 to 19.4.0 ([2b404be](https://github.com/terrestris/shogun-gis-client/commit/2b404be6845bbddc32ff6aca6f09069ac78ade45))
* **deps:** bump @terrestris/shogun-util from 3.2.2 to 3.4.0 ([7f9ef7d](https://github.com/terrestris/shogun-gis-client/commit/7f9ef7d890636a7538a44ca00cc516b79612995b))
* **deps:** bump @terrestris/shogun-util from 3.4.0 to 3.4.1 ([6e8dc9e](https://github.com/terrestris/shogun-gis-client/commit/6e8dc9e5ead10747e882ed1f3d04194a694ce438))
* **deps:** bump antd from 4.22.4 to 4.22.6 ([ab41c77](https://github.com/terrestris/shogun-gis-client/commit/ab41c77a6cb11b491cb60c7a41468c9f79aab518))
* **deps:** bump antd from 4.22.6 to 4.22.7 ([f1e27e7](https://github.com/terrestris/shogun-gis-client/commit/f1e27e74f964b5ccf9bf75938a919bd8793ff535))
* **deps:** bump i18next from 21.9.0 to 21.9.1 ([1932744](https://github.com/terrestris/shogun-gis-client/commit/193274459b6750c3ec71d7bf60e8605d9e703f3b))
* **deps:** bump i18next-browser-languagedetector from 6.1.4 to 6.1.5 ([67644df](https://github.com/terrestris/shogun-gis-client/commit/67644dfff064dafdf311f03ae24782d02482443f))
* **deps:** bump react-i18next from 11.18.3 to 11.18.4 ([6f47895](https://github.com/terrestris/shogun-gis-client/commit/6f4789529c4cff48794cf292caaf1700ce3dc247))


### Changes in configuration

* build and publish project artifact sources to npm ([c2c42a8](https://github.com/terrestris/shogun-gis-client/commit/c2c42a808cb5aae6e61cba7065ebc2af5187edb2))
* emit declaration by default ([409be69](https://github.com/terrestris/shogun-gis-client/commit/409be69dcc078171647c89239822d5bc8f7e7815))
* set publish config, required for scoped npm release ([67fa713](https://github.com/terrestris/shogun-gis-client/commit/67fa713c23eb623dffd14b3aa02ecaadd9552cbe))
* set root directory to src ([d4daf87](https://github.com/terrestris/shogun-gis-client/commit/d4daf87891f8e20a8db96e9924ad52734b9b3184))
* set webpack output directory to build ([26f8074](https://github.com/terrestris/shogun-gis-client/commit/26f80748051be5d2b1e08c661e8f023a8d646937))
* sort npm scripts ([1df07f8](https://github.com/terrestris/shogun-gis-client/commit/1df07f83c6580fd5700236d5864f57e3e3c7ae16))

## [3.4.1](https://github.com/terrestris/shogun-gis-client/compare/v3.4.0...v3.4.1) (2022-08-10)


### Changes in configuration

* scans the jest coverage and sends a report to sonarqube ([#239](https://github.com/terrestris/shogun-gis-client/issues/239)) ([3159cc7](https://github.com/terrestris/shogun-gis-client/commit/3159cc7ce470d67c0d194e2e8c23da63fd86006c))


### Dependencies

* **deps-dev:** bump @testing-library/jest-dom from 5.16.4 to 5.16.5 ([c26f1af](https://github.com/terrestris/shogun-gis-client/commit/c26f1afc620259d68ae4c6c15255353dedf81116))
* **deps-dev:** bump @typescript-eslint/eslint-plugin ([84f9fe2](https://github.com/terrestris/shogun-gis-client/commit/84f9fe2b404b95d0b054246d4be92e97ca0a3035))
* **deps-dev:** bump @typescript-eslint/parser from 5.32.0 to 5.33.0 ([19b78d3](https://github.com/terrestris/shogun-gis-client/commit/19b78d364ec09301d7def229a9e175cff8aa42e3))
* **deps:** bump antd from 4.22.3 to 4.22.4 ([14abf62](https://github.com/terrestris/shogun-gis-client/commit/14abf620d7c3469e395e71002a694469b27815df))
* **deps:** bump i18next from 21.8.16 to 21.9.0 ([55ca251](https://github.com/terrestris/shogun-gis-client/commit/55ca251df22678bdbbf59f287b716880e180534c))


### Bugfixes

* adjusts the [@media](https://github.com/media) query ([bbadcf9](https://github.com/terrestris/shogun-gis-client/commit/bbadcf94a216d9ab942b9a8ebc409b1b7c272c4f))
* assigns the correct name to identify the layer ([8cd702b](https://github.com/terrestris/shogun-gis-client/commit/8cd702baabf8a0864b9f4520bc767583844e34e2))

## [3.4.0](https://github.com/terrestris/shogun-gis-client/compare/v3.3.0...v3.4.0) (2022-08-02)


### Features

* **toolconfig:** added possibility to control tools that are shown through client config ([2f1a87e](https://github.com/terrestris/shogun-gis-client/commit/2f1a87ef05ea45ceaed53d55165566b5e5465495))


### Dependencies

* conflicts resolved ([1e595d6](https://github.com/terrestris/shogun-gis-client/commit/1e595d625142fbdbafc962eea365efbcd65553fa))
* **deps-dev:** bump @babel/core from 7.18.9 to 7.18.10 ([100ea3e](https://github.com/terrestris/shogun-gis-client/commit/100ea3e35e30e9bbc3dbd0078dd332cddfa01618))
* **deps-dev:** bump @babel/preset-env from 7.18.9 to 7.18.10 ([7295958](https://github.com/terrestris/shogun-gis-client/commit/7295958cb7fee9141a41432ddfbdad0066a4e271))
* **deps-dev:** bump @playwright/test from 1.24.1 to 1.24.2 ([3ba31a3](https://github.com/terrestris/shogun-gis-client/commit/3ba31a30ab50786356bfb293243bff078834a248))
* **deps-dev:** bump @typescript-eslint/eslint-plugin ([15f6fe1](https://github.com/terrestris/shogun-gis-client/commit/15f6fe11a5b2823c3d29097dc4b67be38faeca2a))
* **deps-dev:** bump @typescript-eslint/parser from 5.31.0 to 5.32.0 ([f7ec393](https://github.com/terrestris/shogun-gis-client/commit/f7ec393bc1564354d85b5b0a601ce0ce3a0af9dc))
* **deps-dev:** bump eslint from 8.20.0 to 8.21.0 ([eb7d209](https://github.com/terrestris/shogun-gis-client/commit/eb7d209c13785f4dbb0b010ac143c3b949942f7c))
* **deps:** bump @terrestris/shogun-util from 3.2.0 to 3.2.2 ([b6250d1](https://github.com/terrestris/shogun-gis-client/commit/b6250d140b8bc81e36bc91cc02c1ab9ff1d39829))
* **deps:** bump antd from 4.22.1 to 4.22.2 ([60f7fde](https://github.com/terrestris/shogun-gis-client/commit/60f7fde003c16d5fa54808093d3132fca36ae92d))
* **deps:** bump antd from 4.22.2 to 4.22.3 ([c87c217](https://github.com/terrestris/shogun-gis-client/commit/c87c217a9ab9a1fda68e1bc640d7796ae6e2f1b1))
* **deps:** bump i18next from 21.8.14 to 21.8.16 ([38c7c2e](https://github.com/terrestris/shogun-gis-client/commit/38c7c2e28a4960399921c192803ca04d14cc13f4))
* **deps:** bump keycloak-js from 18.0.1 to 19.0.0 ([fb16dbd](https://github.com/terrestris/shogun-gis-client/commit/fb16dbd03b2e6ad999e429782fa53192ac3688fa))
* **deps:** bump keycloak-js from 19.0.0 to 19.0.1 ([907e82d](https://github.com/terrestris/shogun-gis-client/commit/907e82d9b74afb0095aa9adecde25a205db6ce92))
* **draw-and-modify:** fixed types issues ([bd4e708](https://github.com/terrestris/shogun-gis-client/commit/bd4e708853632460881de9e2f3ff1727af853d0b))
* **tool-filter:** added separate store for available tools ([0a0d772](https://github.com/terrestris/shogun-gis-client/commit/0a0d772a5f446f5fdff40425a4c49a8977ed5a12))
* **tool-filter:** conflicts resolved ([36ddf6d](https://github.com/terrestris/shogun-gis-client/commit/36ddf6dc4e9c34321454f219be706db2a7881977))
* **tool-filtering:** fixed bug due to previous type linting. Added default fallback ([e90a23c](https://github.com/terrestris/shogun-gis-client/commit/e90a23ca9bd8652008a281d6b05e91fc451dcce6))
* **tools:** cleaned clientconfig. Changes to get the tools config from the store ([b6d2456](https://github.com/terrestris/shogun-gis-client/commit/b6d2456aa576bfaaee3e56de7635adffbdfa7822))
* update ol-util ([7c8fd20](https://github.com/terrestris/shogun-gis-client/commit/7c8fd20a1f2d77f28c1f212e9243111328f7084a))
* update ol, react-geo and shogun-util ([faef47a](https://github.com/terrestris/shogun-gis-client/commit/faef47a6c6880f51b86ed05ae603d751d39f1c6b))
* update react-geo ([28c99f5](https://github.com/terrestris/shogun-gis-client/commit/28c99f5be87628c43dd7da727bb8d78d26bf30f2))


### Bugfixes

* activate semantic-release/github plugin ([a0a4ed1](https://github.com/terrestris/shogun-gis-client/commit/a0a4ed1b3c938bd49bfea92ef7e4d21a81da8bd3))
* apply bearer token for GFI if needed ([9819b6b](https://github.com/terrestris/shogun-gis-client/commit/9819b6b23d07749955ba8b5cdb5b6f364ccf225d))
* pass the keycloak client to the bearer token header generator ([e05a29b](https://github.com/terrestris/shogun-gis-client/commit/e05a29b3e1affbb95198591226ff42df7ee5be5f))
* set correct types ([9451c2e](https://github.com/terrestris/shogun-gis-client/commit/9451c2e7c452b6b6a6be7e02906aba70cae44f09))
* take warning about duplicated key and correct menu divider into account ([5d3b37c](https://github.com/terrestris/shogun-gis-client/commit/5d3b37ca4ff407c0c7737d74793055abad8e907f))

## [3.3.0](https://github.com/terrestris/shogun-gis-client/compare/v3.2.0...v3.3.0) (2022-07-28)


### Features

* **draw-export:** added button to draw tools and method to export drawn features ([c09a2f5](https://github.com/terrestris/shogun-gis-client/commit/c09a2f537a390e0493dfdac8b176334d17c0f237))
* **draw:** added draw component and translations ([f8b7a05](https://github.com/terrestris/shogun-gis-client/commit/f8b7a0536d0847772a17538ce738ad6edcd904e7))
* **draw:** added edit, remove and delete buttons ([31e0a67](https://github.com/terrestris/shogun-gis-client/commit/31e0a67ad7476e5494962a53a8e921c6d5022b74))
* implements the client version into the footer ([410564c](https://github.com/terrestris/shogun-gis-client/commit/410564c80ed9e4b15f279208fc5a6b1de6de2d54))
* language selector ([#172](https://github.com/terrestris/shogun-gis-client/issues/172)) ([78418c1](https://github.com/terrestris/shogun-gis-client/commit/78418c113d6c8b3f89748a0d359c17a6f36436c3))
* make keycloak onload action configurable ([83a8f66](https://github.com/terrestris/shogun-gis-client/commit/83a8f66359a66e7d5a5c09ffac04ba0e6fe6db3c))
* save selection ([#176](https://github.com/terrestris/shogun-gis-client/issues/176)) ([d06b215](https://github.com/terrestris/shogun-gis-client/commit/d06b215f8c8235ca8f676cb69ecfc065c973386a))


### Bugfixes

* deletes empty line ([9f481d6](https://github.com/terrestris/shogun-gis-client/commit/9f481d654ef04c5035bb0a9a01e8459f4fd3fd46))
* deletes unneccessary translation ([9166a47](https://github.com/terrestris/shogun-gis-client/commit/9166a478bb7f200761ddc64fa0db11a27df4b3a7))
* lower z-index to prevent icon from overlap app elements ([b463610](https://github.com/terrestris/shogun-gis-client/commit/b4636102d8ae1b677141fdfb69d8aaf419951b8c))
* make Header and Footer more responsive ([badde0e](https://github.com/terrestris/shogun-gis-client/commit/badde0ec442266c232b2a98b0531cbfe01818915))
* remove the unneeded integration of the Permalink component in the main application ([57d961e](https://github.com/terrestris/shogun-gis-client/commit/57d961ec68b1aed17afb595f4479ba2c1d55f96a))
* removes unwanted imports ([cd7e8c1](https://github.com/terrestris/shogun-gis-client/commit/cd7e8c1207e73481e78cd041cdcd8e09ce5f774a))
* show the expand/collapse buttons in the tree ([aac41b7](https://github.com/terrestris/shogun-gis-client/commit/aac41b77924aba62dd7724a6e8b36748e832933c))


### Changes in layout

* adjust pressed style and set style for collapsed submenu as well ([a0cb522](https://github.com/terrestris/shogun-gis-client/commit/a0cb5222b42ec0d7e215bcf4739e80ec8ee6ae16))
* align items and add space between label and value ([b9592a7](https://github.com/terrestris/shogun-gis-client/commit/b9592a7b28de67527b8b3ab2edd3a3981d762677))
* reformat and set type to link ([14def14](https://github.com/terrestris/shogun-gis-client/commit/14def14945dc191af1cc0be6362200e2b3bfeaf3))
* Toolmenu styling ([#206](https://github.com/terrestris/shogun-gis-client/issues/206)) ([4fa4daa](https://github.com/terrestris/shogun-gis-client/commit/4fa4daabd5965d6fe334bc5caa67ca0d517672a2))


### Dependencies

* **deps-dev:** bump @babel/core from 7.18.6 to 7.18.9 ([0523b77](https://github.com/terrestris/shogun-gis-client/commit/0523b77d52f142593cd1d82e63e210b770d9ae39))
* **deps-dev:** bump @babel/preset-env from 7.18.6 to 7.18.9 ([32f2c94](https://github.com/terrestris/shogun-gis-client/commit/32f2c947d6c075260dff473857a7cc04b97d698f))
* **deps-dev:** bump @playwright/test from 1.23.2 to 1.23.4 ([859de2c](https://github.com/terrestris/shogun-gis-client/commit/859de2c7d529dd94408c09cf29fd45dadc43dae6))
* **deps-dev:** bump @playwright/test from 1.23.4 to 1.24.0 ([f6a13bd](https://github.com/terrestris/shogun-gis-client/commit/f6a13bd100f591f91728d04cac9f7e5faeb4535c))
* **deps-dev:** bump @playwright/test from 1.24.0 to 1.24.1 ([706e30c](https://github.com/terrestris/shogun-gis-client/commit/706e30cc1a096fd3835fe9a7516bfc8dec2bdcfd))
* **deps-dev:** bump @typescript-eslint/eslint-plugin ([1585157](https://github.com/terrestris/shogun-gis-client/commit/15851578630be8b71e452c9b43fa0a1ecf8afd96))
* **deps-dev:** bump @typescript-eslint/eslint-plugin ([a7e4ea4](https://github.com/terrestris/shogun-gis-client/commit/a7e4ea4c35132198122a51fba85d7ffcd55a0d32))
* **deps-dev:** bump @typescript-eslint/eslint-plugin ([b23098d](https://github.com/terrestris/shogun-gis-client/commit/b23098d12bf398c15e139127ff7036675e3cc5d5))
* **deps-dev:** bump @typescript-eslint/parser from 5.30.5 to 5.30.6 ([3bd08d9](https://github.com/terrestris/shogun-gis-client/commit/3bd08d97dffcf462813832eb9c247367540d95aa))
* **deps-dev:** bump @typescript-eslint/parser from 5.30.6 to 5.30.7 ([67f9ded](https://github.com/terrestris/shogun-gis-client/commit/67f9dedf3533e09033a14ba2eeb1b4e41e5d0c03))
* **deps-dev:** bump @typescript-eslint/parser from 5.30.7 to 5.31.0 ([59eae8c](https://github.com/terrestris/shogun-gis-client/commit/59eae8c26cbc47210ed3aa0198cd10d7d92afb73))
* **deps-dev:** bump eslint from 8.19.0 to 8.20.0 ([26ae94d](https://github.com/terrestris/shogun-gis-client/commit/26ae94dce9487d9e77de2673a81859f78fc39eeb))
* **deps-dev:** bump jest and @types/jest ([cf08d99](https://github.com/terrestris/shogun-gis-client/commit/cf08d994a22544b2ab9025891e607f888552c777))
* **deps-dev:** bump jest-environment-jsdom from 28.1.2 to 28.1.3 ([d904c83](https://github.com/terrestris/shogun-gis-client/commit/d904c83f23ab14d1e2b5bbbcdc2f3a88fe04b93c))
* **deps-dev:** bump webpack from 5.73.0 to 5.74.0 ([f17da3a](https://github.com/terrestris/shogun-gis-client/commit/f17da3a5f61b8e4e21bbf76362100d6b1418cb20))
* **deps:** bump @terrestris/react-geo from 17.4.1 to 17.5.0 ([8c5f242](https://github.com/terrestris/shogun-gis-client/commit/8c5f24281ec827712c506a80e0b0278a563a9845))
* **deps:** bump @terrestris/react-geo from 19.0.0 to 19.1.0 ([b36bec5](https://github.com/terrestris/shogun-gis-client/commit/b36bec5cac0baaacebef4442c854dd113cd2951d))
* **deps:** bump @terrestris/react-geo from 19.1.0 to 19.1.1 ([9c4da40](https://github.com/terrestris/shogun-gis-client/commit/9c4da40706a2225c904d0ba71f43d8d4e5246fad))
* **deps:** bump antd from 4.21.5 to 4.21.7 ([9aab769](https://github.com/terrestris/shogun-gis-client/commit/9aab769a92a8553bafb3d267ca36e7acba7dabb5))
* **deps:** bump antd from 4.21.7 to 4.22.0 ([3f99355](https://github.com/terrestris/shogun-gis-client/commit/3f9935516256fa72addc3a016942312999bb95c5))
* **deps:** bump antd from 4.22.0 to 4.22.1 ([e6fdade](https://github.com/terrestris/shogun-gis-client/commit/e6fdadef0af57a22bc3d9f1f8886b3c8107f0c5e))
* **deps:** bump i18next from 21.8.13 to 21.8.14 ([98195cb](https://github.com/terrestris/shogun-gis-client/commit/98195cb93851c27ccbafc72e96e2f072b3f89c1a))
* **deps:** bump react-i18next from 11.18.0 to 11.18.1 ([db2545f](https://github.com/terrestris/shogun-gis-client/commit/db2545fbeaccf96662fb26dda4506abeb216ddd3))
* **deps:** bump react-i18next from 11.18.1 to 11.18.3 ([4739e06](https://github.com/terrestris/shogun-gis-client/commit/4739e06cd5e9e8c0b34ffda4814e2175a40854e9))
* **draw-export:** added translations ([5755bc1](https://github.com/terrestris/shogun-gis-client/commit/5755bc1eb8968e547f9c11c4f2d442e9ed63f5b9))
* **draw:** added missing file ([d928b85](https://github.com/terrestris/shogun-gis-client/commit/d928b85cfaa70f7af9f22d408bc0e90d2feba319))
* **draw:** condensed if conditions in one if statement ([f6a8451](https://github.com/terrestris/shogun-gis-client/commit/f6a8451f3856a095d4a43deafcca40b02395b736))
* **draw:** fixed bug that was selecting modify and delete at the same time ([28faedf](https://github.com/terrestris/shogun-gis-client/commit/28faedf9db92b740f1caca377eaeaa70c05eeb84))
* **draw:** uploaded data is now transformed to map projection, cleanup ([aecc3f0](https://github.com/terrestris/shogun-gis-client/commit/aecc3f0336b3541f091c7c2f18896f44932f077d))
* **unit-tests:** added basic rendering unit tests to all components ([3bf444c](https://github.com/terrestris/shogun-gis-client/commit/3bf444c88b3e615d05e369f71d9e39046ef6aff6))
* **unit-tests:** added missing files ([ef3fd9c](https://github.com/terrestris/shogun-gis-client/commit/ef3fd9c65dcb3e4a7ddabd8f815c84cad3ed5aee))
* **unit-tests:** removed uneeded comments ([e86de02](https://github.com/terrestris/shogun-gis-client/commit/e86de0289d6c97a74721c586ffc03aa736f825f0))
* update react-geo ([e065bdd](https://github.com/terrestris/shogun-gis-client/commit/e065bddd42244991ca4baa8e7821edac801392d8))
* update README ([1b57ceb](https://github.com/terrestris/shogun-gis-client/commit/1b57ceb1f99fb2ddb32aba9603f1eaecdd592c32))
* update shogun-util ([8cd7c76](https://github.com/terrestris/shogun-gis-client/commit/8cd7c76dab166081fe422e4c3a65be17bd695338))

## [3.2.0](https://github.com/terrestris/shogun-gis-client/compare/v3.1.1...v3.2.0) (2022-07-08)


### Features

* add appInfo to store ([6d2cf6c](https://github.com/terrestris/shogun-gis-client/commit/6d2cf6c3e4757cc22db7af1655b0d3a41521d262))
* add ApplicationInfo component ([b6ce163](https://github.com/terrestris/shogun-gis-client/commit/b6ce1639138f3d577c8dbb0c292574dc5b899ce4))
* add getGravatarUrl util ([6e460c2](https://github.com/terrestris/shogun-gis-client/commit/6e460c2541505e068d40b647daf66207eb9d2003))
* add user to state ([c38e5f8](https://github.com/terrestris/shogun-gis-client/commit/c38e5f84fb5aec359140915744cc579e67cd32d4))
* add UserMenu component ([3bfcb9a](https://github.com/terrestris/shogun-gis-client/commit/3bfcb9a9e4b1c5a124e349ee360c31d76abe9dbc))
* fetch and set applicationInfo and user to store and initialize keycloak adapter if needed ([416abf8](https://github.com/terrestris/shogun-gis-client/commit/416abf83a9b0dfdaab38a3c1971d9f780f0072d1))
* hide the loading mask on init ([9e23a39](https://github.com/terrestris/shogun-gis-client/commit/9e23a390ea139c21e0549ee0d263f4f22408ee5c))
* show the UserMenu in header ([f6d6a2f](https://github.com/terrestris/shogun-gis-client/commit/f6d6a2f44f3fbaeafb1aa0e8ceba31b701c925c0))


### Changes in configuration

* change release workflow to be manually ([4a7e653](https://github.com/terrestris/shogun-gis-client/commit/4a7e653f0f305fcbfba45d381b5d48c18b3bd0d9))


### Changes in layout

* enhance loading animation ([02d43db](https://github.com/terrestris/shogun-gis-client/commit/02d43db66380b3847a8fee8b5a747e041eebf27d))


### Bugfixes

* accept full url ([2575e81](https://github.com/terrestris/shogun-gis-client/commit/2575e819c9d4343f4a2bc16a1e3c9c63304ff720))
* add missing translation key ([bac68a6](https://github.com/terrestris/shogun-gis-client/commit/bac68a6a1de122b4328d7f25b117465292004f9f))
* get client config from relative path ([5bc0b14](https://github.com/terrestris/shogun-gis-client/commit/5bc0b14430d62756418ed7c1914e6f76858d1d29))
* make use of changed shogun client name ([ad4c7c0](https://github.com/terrestris/shogun-gis-client/commit/ad4c7c0bf37d37ebd146d6e9fcbfd9046fa7c2ff))
* remove unneeded util class ([9e1e514](https://github.com/terrestris/shogun-gis-client/commit/9e1e514a3b3f2c01ef432dc47873227b4a93a9d4))
* set correct default logo path ([4adae28](https://github.com/terrestris/shogun-gis-client/commit/4adae28fa43933913d6bb3206205d74afc4b4fb1))
* support print for internal layers ([17dcc99](https://github.com/terrestris/shogun-gis-client/commit/17dcc996280e6c3a56d1a3c63a547badfa2b076d))
* wait until at least the map is visible before performing checks ([a8fd7d7](https://github.com/terrestris/shogun-gis-client/commit/a8fd7d773afa70d3035cc66d4036397a6ece5298))


### Dependencies

* add keycloak-js and js-md5 dependencies ([5d74bda](https://github.com/terrestris/shogun-gis-client/commit/5d74bdad5df629768de1bb09a08b0951d9ce0fe8))
* add mock for matchMedia ([c120cc6](https://github.com/terrestris/shogun-gis-client/commit/c120cc63fe42b9f90545b877e27c1446fc92d027))
* **deps-dev:** bump @babel/core from 7.18.2 to 7.18.5 ([f4f2dcb](https://github.com/terrestris/shogun-gis-client/commit/f4f2dcb5debfe96f8ae65e46bbc40414c70f7e27))
* **deps-dev:** bump @babel/core from 7.18.5 to 7.18.6 ([ac0df40](https://github.com/terrestris/shogun-gis-client/commit/ac0df4050a997061a1b3df17ca1b4f1213431219))
* **deps-dev:** bump @babel/preset-env from 7.18.2 to 7.18.6 ([8ae4792](https://github.com/terrestris/shogun-gis-client/commit/8ae4792dde26fe497e0f194af02ece116cfa3b75))
* **deps-dev:** bump @babel/preset-react from 7.17.12 to 7.18.6 ([5b59a25](https://github.com/terrestris/shogun-gis-client/commit/5b59a259d59c33def062e72da3b49c575c872549))
* **deps-dev:** bump @babel/preset-typescript from 7.17.12 to 7.18.6 ([9755a97](https://github.com/terrestris/shogun-gis-client/commit/9755a97af38c3d695261f020e5b20ef40206ad2f))
* **deps-dev:** bump @commitlint/cli from 17.0.1 to 17.0.2 ([16d6d4c](https://github.com/terrestris/shogun-gis-client/commit/16d6d4c622798df448302ad80b5f3bfb4cf8ba25))
* **deps-dev:** bump @commitlint/cli from 17.0.2 to 17.0.3 ([acfb338](https://github.com/terrestris/shogun-gis-client/commit/acfb3384739c773dddb183769dc3b3f2d5ba217e))
* **deps-dev:** bump @commitlint/config-conventional ([1b4a3e8](https://github.com/terrestris/shogun-gis-client/commit/1b4a3e8d5454138e29beb804d0af6708c94e1d05))
* **deps-dev:** bump @commitlint/config-conventional ([30a9585](https://github.com/terrestris/shogun-gis-client/commit/30a9585481f70b9a01c3e6de4fcc9774f8f18bc4))
* **deps-dev:** bump @playwright/test from 1.22.2 to 1.23.0 ([33b5fcc](https://github.com/terrestris/shogun-gis-client/commit/33b5fcc2fa3d2e7e5b50c9a98078ad4ecf714bb6))
* **deps-dev:** bump @playwright/test from 1.23.0 to 1.23.1 ([2fce9da](https://github.com/terrestris/shogun-gis-client/commit/2fce9dabd6b28e91018eced06649307c8f326126))
* **deps-dev:** bump @playwright/test from 1.23.1 to 1.23.2 ([50aac6d](https://github.com/terrestris/shogun-gis-client/commit/50aac6d849d9334023848757c43a5c5f061eb5eb))
* **deps-dev:** bump @semantic-release/github from 8.0.4 to 8.0.5 ([5d56b51](https://github.com/terrestris/shogun-gis-client/commit/5d56b51edada36a409a1715b2c733f1fafd7c175))
* **deps-dev:** bump @terrestris/eslint-config-typescript ([81f2832](https://github.com/terrestris/shogun-gis-client/commit/81f2832c1a4a15c31e9cad655ba5fc2b5b7003eb))
* **deps-dev:** bump @types/jest from 27.5.1 to 28.1.0 ([33c808a](https://github.com/terrestris/shogun-gis-client/commit/33c808a232f479c390aeda01cf2bd185c7df924d))
* **deps-dev:** bump @types/jest from 28.1.2 to 28.1.3 ([df4b731](https://github.com/terrestris/shogun-gis-client/commit/df4b731f6190b16bc5617f7b5ac884ba70ea5011))
* **deps-dev:** bump @typescript-eslint/eslint-plugin ([46eb547](https://github.com/terrestris/shogun-gis-client/commit/46eb547643dc5a64282f03030254bc919706aef4))
* **deps-dev:** bump @typescript-eslint/eslint-plugin ([e5ac89d](https://github.com/terrestris/shogun-gis-client/commit/e5ac89d90a6d4b70b16ea436696496b6b1c90120))
* **deps-dev:** bump @typescript-eslint/eslint-plugin ([675fe52](https://github.com/terrestris/shogun-gis-client/commit/675fe524992c2a102b86f642e7d274add961da74))
* **deps-dev:** bump @typescript-eslint/eslint-plugin ([a8598cd](https://github.com/terrestris/shogun-gis-client/commit/a8598cdd3bdcb387c07d42184f57018748d2462c))
* **deps-dev:** bump @typescript-eslint/eslint-plugin ([f32a0cd](https://github.com/terrestris/shogun-gis-client/commit/f32a0cd78ae0f0b673a55c04159c101ab8da922c))
* **deps-dev:** bump @typescript-eslint/parser from 5.27.0 to 5.27.1 ([cb63437](https://github.com/terrestris/shogun-gis-client/commit/cb63437cc77875fb0aeee5d906caba7852e51958))
* **deps-dev:** bump @typescript-eslint/parser from 5.27.1 to 5.28.0 ([a9d8407](https://github.com/terrestris/shogun-gis-client/commit/a9d840702af070fb8831a6458c0eae94b79e3aec))
* **deps-dev:** bump @typescript-eslint/parser from 5.28.0 to 5.29.0 ([39fab76](https://github.com/terrestris/shogun-gis-client/commit/39fab76a0f2832c9277568f6e2853d555b05daf1))
* **deps-dev:** bump @typescript-eslint/parser from 5.29.0 to 5.30.0 ([67d370a](https://github.com/terrestris/shogun-gis-client/commit/67d370a0b6f2d3a58b3f4a1c18f7cf9f9b87d7fc))
* **deps-dev:** bump @typescript-eslint/parser from 5.30.0 to 5.30.5 ([e7118b4](https://github.com/terrestris/shogun-gis-client/commit/e7118b4472a9462b112906c7d8f4c705b5e09cba))
* **deps-dev:** bump babel-jest from 28.1.0 to 28.1.1 ([e50487f](https://github.com/terrestris/shogun-gis-client/commit/e50487f108138f1d71d70092d1d1d03517c5b361))
* **deps-dev:** bump babel-jest from 28.1.1 to 28.1.2 ([a3b4d45](https://github.com/terrestris/shogun-gis-client/commit/a3b4d45f591691b4d56300dd35fdbeb7dee13f65))
* **deps-dev:** bump eslint from 8.16.0 to 8.17.0 ([24fd1f1](https://github.com/terrestris/shogun-gis-client/commit/24fd1f1c6d6c173e3cb56d9e5f3758e4afa64bd2))
* **deps-dev:** bump eslint from 8.17.0 to 8.18.0 ([c846fca](https://github.com/terrestris/shogun-gis-client/commit/c846fcab274e7c9589f6ebc0d006f9645c9c92ce))
* **deps-dev:** bump eslint from 8.18.0 to 8.19.0 ([f734c01](https://github.com/terrestris/shogun-gis-client/commit/f734c01017f883e49c243bfbe4cd08cf82c41818))
* **deps-dev:** bump eslint-plugin-react from 7.30.0 to 7.30.1 ([2199fd1](https://github.com/terrestris/shogun-gis-client/commit/2199fd144c9ec4e2f22ebe6ebcde85b03c9aeb41))
* **deps-dev:** bump jest and @types/jest ([12170a6](https://github.com/terrestris/shogun-gis-client/commit/12170a65b545d6d577eae9556b300757d1c71bd7))
* **deps-dev:** bump jest and @types/jest ([149b84d](https://github.com/terrestris/shogun-gis-client/commit/149b84da8539c612571465ba5100bd4eeb929afb))
* **deps-dev:** bump jest-environment-jsdom from 28.1.0 to 28.1.1 ([8c072a5](https://github.com/terrestris/shogun-gis-client/commit/8c072a524b68498b79959699cb30ff4de5880a30))
* **deps-dev:** bump jest-environment-jsdom from 28.1.1 to 28.1.2 ([1eba66a](https://github.com/terrestris/shogun-gis-client/commit/1eba66a4368cbb5e37e37c9c7f04930a7741b42a))
* **deps-dev:** bump less from 4.1.2 to 4.1.3 ([24c3d9f](https://github.com/terrestris/shogun-gis-client/commit/24c3d9ffa019557e0746a2801729a19ab13f4eed))
* **deps-dev:** bump mini-css-extract-plugin from 2.6.0 to 2.6.1 ([14000c8](https://github.com/terrestris/shogun-gis-client/commit/14000c8c81910c66e7afbf943cbb034d284b94ac))
* **deps-dev:** bump react-refresh from 0.13.0 to 0.14.0 ([7c3a313](https://github.com/terrestris/shogun-gis-client/commit/7c3a313a1a1b3803e73433be48035b702b83107c))
* **deps-dev:** bump semantic-release from 19.0.2 to 19.0.3 ([0cea4e5](https://github.com/terrestris/shogun-gis-client/commit/0cea4e584f8eefced85c9c1c24f821fe34d4c8b4))
* **deps-dev:** bump terser-webpack-plugin from 5.3.1 to 5.3.3 ([a44a734](https://github.com/terrestris/shogun-gis-client/commit/a44a734cc85cc1aac2bcc17c3127031250817c03))
* **deps-dev:** bump typescript from 4.7.2 to 4.7.3 ([12d04e6](https://github.com/terrestris/shogun-gis-client/commit/12d04e6f8fbc34c08976045fd7b9e678d527ba4c))
* **deps-dev:** bump typescript from 4.7.3 to 4.7.4 ([283e13b](https://github.com/terrestris/shogun-gis-client/commit/283e13b4f5743acbc6244142f4a874adfe323850))
* **deps-dev:** bump webpack from 5.72.1 to 5.73.0 ([72526f9](https://github.com/terrestris/shogun-gis-client/commit/72526f9e914d4b6aafa70298255625460d87a4db))
* **deps-dev:** bump webpack-cli from 4.9.2 to 4.10.0 ([c6ed2fd](https://github.com/terrestris/shogun-gis-client/commit/c6ed2fd3ebe515c36c59037fa514c74f4c7699dd))
* **deps-dev:** bump webpack-dev-server from 4.9.0 to 4.9.1 ([5860ef6](https://github.com/terrestris/shogun-gis-client/commit/5860ef6a946662911c039e7af0964bfa5b0438ab))
* **deps-dev:** bump webpack-dev-server from 4.9.1 to 4.9.2 ([d36c8de](https://github.com/terrestris/shogun-gis-client/commit/d36c8de03e82ba2ce409f36436361ba7e4c8d4fe))
* **deps-dev:** bump webpack-dev-server from 4.9.2 to 4.9.3 ([30573aa](https://github.com/terrestris/shogun-gis-client/commit/30573aa0dd914d12b55683e4c01636bad07e69a8))
* **deps:** bump @reduxjs/toolkit from 1.8.2 to 1.8.3 ([927d53b](https://github.com/terrestris/shogun-gis-client/commit/927d53bf7f079de2d0811703999e027302289385))
* **deps:** bump @terrestris/react-geo from 17.1.3 to 17.2.1 ([b485c4b](https://github.com/terrestris/shogun-gis-client/commit/b485c4bb461965b4072b0a8a6665391e732d8424))
* **deps:** bump @terrestris/react-geo from 17.2.1 to 17.2.2 ([ed32d6a](https://github.com/terrestris/shogun-gis-client/commit/ed32d6ac60dd87bd02f11f1badd60001f343bf9c))
* **deps:** bump @terrestris/react-geo from 17.2.2 to 17.3.0 ([8fbd893](https://github.com/terrestris/shogun-gis-client/commit/8fbd893f1da7e740b9ed4d14b2f10bf58423c2c2))
* **deps:** bump @terrestris/react-geo from 17.3.0 to 17.3.1 ([559030e](https://github.com/terrestris/shogun-gis-client/commit/559030ed803cb64a2b7b82a15945fb443df77bf8))
* **deps:** bump @terrestris/react-geo from 17.3.1 to 17.4.1 ([21ac106](https://github.com/terrestris/shogun-gis-client/commit/21ac1064d621bcac39d75cf488b50406b6cbe14e))
* **deps:** bump @terrestris/shogun-util from 1.0.1 to 1.1.0 ([9dcb73e](https://github.com/terrestris/shogun-gis-client/commit/9dcb73e22e3111b582c53e12dabe396e7b3ee615))
* **deps:** bump @terrestris/shogun-util from 1.1.0 to 1.2.1 ([d837f43](https://github.com/terrestris/shogun-gis-client/commit/d837f432a879c919cc6df5a3878cb7631340c7cd))
* **deps:** bump @terrestris/shogun-util from 2.0.0 to 3.0.0 ([354fa96](https://github.com/terrestris/shogun-gis-client/commit/354fa96da4bf25d9081db49614e80706c1a7ce03))
* **deps:** bump @terrestris/shogun-util from 3.0.0 to 3.1.2 ([d426116](https://github.com/terrestris/shogun-gis-client/commit/d42611606858028483f7adf192f31ac37a04c225))
* **deps:** bump antd from 4.20.7 to 4.21.0 ([ecb4d02](https://github.com/terrestris/shogun-gis-client/commit/ecb4d028853192ce10ad024ccece6585edb682f6))
* **deps:** bump antd from 4.21.0 to 4.21.1 ([3a379b3](https://github.com/terrestris/shogun-gis-client/commit/3a379b3f394b874ecec1586a0415e16634cbb904))
* **deps:** bump antd from 4.21.1 to 4.21.3 ([5901460](https://github.com/terrestris/shogun-gis-client/commit/59014606f4df0b63c2c98651ecde9134e194dfe6))
* **deps:** bump antd from 4.21.3 to 4.21.4 ([9f5e89c](https://github.com/terrestris/shogun-gis-client/commit/9f5e89c85919eec36f72726e1a89549923ff2cc1))
* **deps:** bump antd from 4.21.4 to 4.21.5 ([9acb16a](https://github.com/terrestris/shogun-gis-client/commit/9acb16a5fdf8b920dd6399e5f2223390794fdee7))
* **deps:** bump i18next from 21.8.10 to 21.8.11 ([b72ce14](https://github.com/terrestris/shogun-gis-client/commit/b72ce1449ad340f9ff679b6faabb2fbaef2a1ff2))
* **deps:** bump i18next from 21.8.11 to 21.8.12 ([4a21c18](https://github.com/terrestris/shogun-gis-client/commit/4a21c18c88f0258e4be4031310445a1a85367070))
* **deps:** bump i18next from 21.8.12 to 21.8.13 ([9b0014c](https://github.com/terrestris/shogun-gis-client/commit/9b0014c1a6c71b6368f92fd5de66309da351b56b))
* **deps:** bump i18next from 21.8.5 to 21.8.8 ([bdf517c](https://github.com/terrestris/shogun-gis-client/commit/bdf517cfc8b10208f31839eb2f66389f16e32d08))
* **deps:** bump i18next from 21.8.8 to 21.8.9 ([aabead9](https://github.com/terrestris/shogun-gis-client/commit/aabead959c86665e6a3fb57ad72187782feed572))
* **deps:** bump i18next from 21.8.9 to 21.8.10 ([be13c25](https://github.com/terrestris/shogun-gis-client/commit/be13c25a67b77a93229b62281836798ca9de6331))
* **deps:** bump react-i18next from 11.16.9 to 11.17.0 ([bdd6d6a](https://github.com/terrestris/shogun-gis-client/commit/bdd6d6aebff7d45d72e82e1885e15cec1b8af794))
* **deps:** bump react-i18next from 11.17.0 to 11.17.1 ([e532b15](https://github.com/terrestris/shogun-gis-client/commit/e532b15216d5fc54978e256a31ef7d18e5c24553))
* **deps:** bump react-i18next from 11.17.1 to 11.17.2 ([25113dc](https://github.com/terrestris/shogun-gis-client/commit/25113dcf12dd7c116c59c519556eca56c51b6eea))
* **deps:** bump react-i18next from 11.17.2 to 11.17.3 ([2b7e28e](https://github.com/terrestris/shogun-gis-client/commit/2b7e28e0f095b5f6a504f6214130337c20f275df))
* **deps:** bump react-i18next from 11.17.3 to 11.17.4 ([74c499b](https://github.com/terrestris/shogun-gis-client/commit/74c499bd314bfd610efcab138fce4926627021e8))
* **deps:** bump react-i18next from 11.17.4 to 11.18.0 ([e14fcf3](https://github.com/terrestris/shogun-gis-client/commit/e14fcf3a4ddede21db867f99620208762a287f09))
* update to the latest shogun-util ([e6ec46b](https://github.com/terrestris/shogun-gis-client/commit/e6ec46b958c3c02864a4120ec59d011302b7e004))
* update translations ([9f40e8e](https://github.com/terrestris/shogun-gis-client/commit/9f40e8e5808036f7cca56f15b84bee092f1cccbe))

### [3.1.1](https://github.com/terrestris/shogun-gis-client/compare/v3.1.0...v3.1.1) (2022-05-31)


### Changes in layout

* updates style of feature info ([4e7b1f7](https://github.com/terrestris/shogun-gis-client/commit/4e7b1f77af5d9c9110518faaf761d6821166f8b5))
* updates style of print form ([1cbba36](https://github.com/terrestris/shogun-gis-client/commit/1cbba36fcd27e0ef0c3b4c0097126bbc547d9fad))
* updates style of ToolMenu ([25e1392](https://github.com/terrestris/shogun-gis-client/commit/25e13925de490e6a172d08dc0dafe48812a620a3))

## [3.1.0](https://github.com/terrestris/shogun-gis-client/compare/v3.0.0...v3.1.0) (2022-05-31)


### Features

* add addLayerModal ([34f3a4d](https://github.com/terrestris/shogun-gis-client/commit/34f3a4de84eefe488c3db644dce755230e6ffcdf))


### Bugfixes

* move locales to translation file and fix lint ([790f02e](https://github.com/terrestris/shogun-gis-client/commit/790f02ec14d45a7bdffccca91c94d809f680cd16))


### Dependencies

* remove TODO ([8ff0eb3](https://github.com/terrestris/shogun-gis-client/commit/8ff0eb3e212d5a8a9401c7aa70545be9d1de36aa))

## [3.0.0](https://github.com/terrestris/shogun-gis-client/compare/v2.0.1...v3.0.0) (2022-05-31)


### Features

* add option to login into geoserver ([a519699](https://github.com/terrestris/shogun-gis-client/commit/a519699382db0ae34d86c449ddbb66c6a5bdb307))
* introduce GeoServerUtil ([9a0321d](https://github.com/terrestris/shogun-gis-client/commit/9a0321d88cdb3781f6c29d7d4c5057756296b88d))


### Breaking changes

* change path of client config ([42fc794](https://github.com/terrestris/shogun-gis-client/commit/42fc7944303febb6b2da0dd31aeff94a7e908410))


### Dependencies

* **deps-dev:** bump @typescript-eslint/eslint-plugin ([bff2460](https://github.com/terrestris/shogun-gis-client/commit/bff246097be6c9b393211c70ee25e00652033b54))
* **deps-dev:** bump @typescript-eslint/parser from 5.26.0 to 5.27.0 ([3184238](https://github.com/terrestris/shogun-gis-client/commit/31842383220e118551efa997c8f82683f87c12a2))
* **deps:** bump antd from 4.20.6 to 4.20.7 ([8c78b59](https://github.com/terrestris/shogun-gis-client/commit/8c78b590dbfd2d6b7d6b38918c463d7491d91fc5))

### [2.0.1](https://github.com/terrestris/shogun-gis-client/compare/v2.0.0...v2.0.1) (2022-05-30)


### Dependencies

* **deps-dev:** bump @babel/core from 7.18.0 to 7.18.2 ([defb552](https://github.com/terrestris/shogun-gis-client/commit/defb552b3253daac6fc8fc78afa58b1482c7e5fd))
* **deps-dev:** bump @babel/preset-env from 7.18.0 to 7.18.2 ([45e3fcc](https://github.com/terrestris/shogun-gis-client/commit/45e3fccec138775990b3897b1e719ddec51cb6f2))
* **deps-dev:** bump @commitlint/cli from 17.0.0 to 17.0.1 ([1909399](https://github.com/terrestris/shogun-gis-client/commit/1909399f874b66eab489697dd4d37207b175e318))
* **deps-dev:** bump typescript from 4.6.4 to 4.7.2 ([a5d3e43](https://github.com/terrestris/shogun-gis-client/commit/a5d3e4324474b9ca72e94b5ecbba79f39c101943))
* **deps:** bump @reduxjs/toolkit from 1.8.1 to 1.8.2 ([0b0852e](https://github.com/terrestris/shogun-gis-client/commit/0b0852e93acfbed8142a78d12592c6b84c67a77f))
* **deps:** bump i18next from 21.8.4 to 21.8.5 ([32dd20b](https://github.com/terrestris/shogun-gis-client/commit/32dd20bb519c3364dd0067f5968defedc9711979))


### Bugfixes

* fix color for scale ([e0be63e](https://github.com/terrestris/shogun-gis-client/commit/e0be63e4c6acc00a34876ed280912da631ebf847))
* open print in new browser tab ([a975959](https://github.com/terrestris/shogun-gis-client/commit/a97595946d59bb987c933aa105b78a0750b59ebc))

## [2.0.0](https://github.com/terrestris/shogun-gis-client/compare/v1.1.1...v2.0.0) (2022-05-24)


### Breaking changes

* implement handling for theming ([cd9f687](https://github.com/terrestris/shogun-gis-client/commit/cd9f6870df38bfe4c36d8326ca6e4ba915af3c6b))


### Bugfixes

* catch undefined theme ([1bf523d](https://github.com/terrestris/shogun-gis-client/commit/1bf523d0663215a7c9a296455f39a14c0fb8fbac))
* extract ConfigProvider from parseTheme ([5447e60](https://github.com/terrestris/shogun-gis-client/commit/5447e605439e6ac608c6ca32a88437ca3f01ce99))

### [1.1.1](https://github.com/terrestris/shogun-gis-client/compare/v1.1.0...v1.1.1) (2022-05-24)

## [1.1.0](https://github.com/terrestris/shogun-gis-client/compare/v1.0.2...v1.1.0) (2022-05-24)


### Features

* introduce client configuration file (currently for the appPrefix only) ([7651fa0](https://github.com/terrestris/shogun-gis-client/commit/7651fa01495e960328e3c3020cf5feda8952fd1f))


### Bugfixes

* provide empty clientConfig ([df63528](https://github.com/terrestris/shogun-gis-client/commit/df63528a376be4556b5ec75cbb4013c078d2705a))
* remove fallback configration, make use of client's internal defaults instead ([dd04408](https://github.com/terrestris/shogun-gis-client/commit/dd044084433f46a9be5c7a32f5dc546338dcf158))
* set correct default title ([4a455c2](https://github.com/terrestris/shogun-gis-client/commit/4a455c2fa372b622ab80868b6cff0c0d45288ff4))

### [1.0.2](https://github.com/terrestris/shogun-gis-client/compare/v1.0.1...v1.0.2) (2022-05-24)


### Changes in layout

* adjust style for the gfi result layer ([716b326](https://github.com/terrestris/shogun-gis-client/commit/716b326fd8d9a1ad8e2bb8705b043e6e6de90e7e))


### Bugfixes

* i18n for usage hint ([a9d191b](https://github.com/terrestris/shogun-gis-client/commit/a9d191b58324e7e779d2b57b8972ae8f069bc0a8))
* pass flat layers array to the CoordinateInfo ([34656f2](https://github.com/terrestris/shogun-gis-client/commit/34656f2829d3b8e0153a064d0e3e5e74d5e3d283))

### [1.0.1](https://github.com/terrestris/shogun-gis-client/compare/v1.0.0...v1.0.1) (2022-05-24)


### Dependencies

* **deps-dev:** bump @typescript-eslint/eslint-plugin ([7eb64d4](https://github.com/terrestris/shogun-gis-client/commit/7eb64d40e9838d6207a4f2fa19e8f75d3a5acfed))
* **deps-dev:** bump @typescript-eslint/parser from 5.25.0 to 5.26.0 ([faedbc0](https://github.com/terrestris/shogun-gis-client/commit/faedbc05ee3b9d5a30d97e93aa4de4d13f33f9e2))
* **deps:** bump i18next from 21.8.3 to 21.8.4 ([da47779](https://github.com/terrestris/shogun-gis-client/commit/da477795382d4ce23556089a2c05f93eacdbdd92))


### Bugfixes

* harmonize component signature by specifying the return type and passing through the rest props ([bffd8e7](https://github.com/terrestris/shogun-gis-client/commit/bffd8e7c5dcf972fe56887305b3317950854ac01))

## 1.0.0 (2022-05-23)


### Features

* init tool menu ([8e649c3](https://github.com/terrestris/shogun-gis-client/commit/8e649c33c92ceb109b476abd2fadfe0caf25ced3))


### Changes in configuration

* delete pre-push hook ([4d03878](https://github.com/terrestris/shogun-gis-client/commit/4d03878cd8217153079292c3d0fd23fdc06eaa4c))
* fix directory for release workflow ([6cdb72b](https://github.com/terrestris/shogun-gis-client/commit/6cdb72b92e6f36866c61d3a4b6a6df192fd0de2e))
* formatting ([f96fc9b](https://github.com/terrestris/shogun-gis-client/commit/f96fc9b783a432e36b92e48a42fa56f946bcd67f))
* initialize release.yml ([e2c7c7c](https://github.com/terrestris/shogun-gis-client/commit/e2c7c7c7690bc461c4c15197f96123ff62cd0e39))
* introduce commitlint ([38d4ce3](https://github.com/terrestris/shogun-gis-client/commit/38d4ce36d991e14d5758029708498a33a693eb2b))
* introduce husky ([e9f9263](https://github.com/terrestris/shogun-gis-client/commit/e9f9263abd6b367d1242cd2d2d81f11ec55d2eef))
* introduce semantic-release ([a2e4d41](https://github.com/terrestris/shogun-gis-client/commit/a2e4d41015e749d0af7af98fc3a910d02aa8f296))


### Breaking changes

* remove drawer and add toolMenu state ([ca735e3](https://github.com/terrestris/shogun-gis-client/commit/ca735e32257bed1f63fd00c06b8fbcdd2a34aa42))
* remove unneeded components ([60111d6](https://github.com/terrestris/shogun-gis-client/commit/60111d63ca5491c2c9fe1acb40ec5ef018fff745))


### Dependencies

* add mapfish-print-manager ([c733467](https://github.com/terrestris/shogun-gis-client/commit/c733467e567bb94518c37da289332a19138536e8))
* update react-geo ([6c1f11d](https://github.com/terrestris/shogun-gis-client/commit/6c1f11d46d36fdef27f1c26d984e1adff51c6c83))
* update translations ([90efc61](https://github.com/terrestris/shogun-gis-client/commit/90efc617ae5fa67d9e563c16ce6352b79f0f8f30))


### Bugfixes

* fix tests ([2435825](https://github.com/terrestris/shogun-gis-client/commit/2435825193b5b044e2eaac3039c7a6ffd8fccc01))
* show print tool ([fb06f91](https://github.com/terrestris/shogun-gis-client/commit/fb06f91a1b28689d7c3297c39fd9ccf7c5eeac43))
