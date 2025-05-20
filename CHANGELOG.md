## [10.0.0-next.10](https://github.com/terrestris/shogun-gis-client/compare/v10.0.0-next.9...v10.0.0-next.10) (2025-05-20)


### Features

* adds processing of the configuration for SearchResult ([902c165](https://github.com/terrestris/shogun-gis-client/commit/902c1653af7306993f156c644ffc3699bdd0451b))
* adds useGetFitPadding hook ([b1019f8](https://github.com/terrestris/shogun-gis-client/commit/b1019f8598ecbc121ac871ed40f9c6379e7acf90))
* enhance SearchResultDrawer with dynamic title resolution and attribute display ([b7c0274](https://github.com/terrestris/shogun-gis-client/commit/b7c0274a064f4487b7ed3a4047b266b921e2f01d))
* introduces SearchResultDrawer ([0779354](https://github.com/terrestris/shogun-gis-client/commit/07793544feabf33d2825d1d54172b92d776d9239))


### Bugfixes

* rename slice ([0f3f524](https://github.com/terrestris/shogun-gis-client/commit/0f3f524e6ead1ed3ceb0ebbd0a86a72018ad4e32))
* wrap methods in useCallback to prevent infinity loops ([73a6819](https://github.com/terrestris/shogun-gis-client/commit/73a6819cd82277e34bed78d8de19fee69eea55a5))

## [10.0.0-next.9](https://github.com/terrestris/shogun-gis-client/compare/v10.0.0-next.8...v10.0.0-next.9) (2025-05-20)


### Bugfixes

* unify ol import paths for rspack ([023fb33](https://github.com/terrestris/shogun-gis-client/commit/023fb33fdf7a4b1f1115bb8d22cca6c2f8581dcc))

## [10.0.0-next.8](https://github.com/terrestris/shogun-gis-client/compare/v10.0.0-next.7...v10.0.0-next.8) (2025-05-15)


### Dependencies

* **deps-dev:** bump @babel/cli from 7.27.0 to 7.27.2 ([2160cc5](https://github.com/terrestris/shogun-gis-client/commit/2160cc580b0c94fec4ee71b808877deb7552d1d5))
* **deps-dev:** bump @babel/core from 7.26.10 to 7.27.1 ([94ac9f0](https://github.com/terrestris/shogun-gis-client/commit/94ac9f06fa8e5b6018e27afa57c092a7eb394a78))
* **deps-dev:** bump @babel/preset-env from 7.26.9 to 7.27.2 ([eee6703](https://github.com/terrestris/shogun-gis-client/commit/eee67034fceece5d5951ad3ff49d68bf26dde9a9))
* **deps-dev:** bump @babel/preset-react from 7.26.3 to 7.27.1 ([9544c04](https://github.com/terrestris/shogun-gis-client/commit/9544c04964de46718fb2cbb5d77e65642fef584f))
* **deps-dev:** bump @babel/preset-typescript from 7.27.0 to 7.27.1 ([8836dca](https://github.com/terrestris/shogun-gis-client/commit/8836dcaef5da66df69156f2b5a9290bbc17fffd1))
* **deps-dev:** bump @babel/runtime from 7.27.0 to 7.27.1 ([f2009fa](https://github.com/terrestris/shogun-gis-client/commit/f2009fac8b0286874f954657b10ceb74531cb951))
* **deps-dev:** bump @commitlint/cli from 19.8.0 to 19.8.1 ([14d241e](https://github.com/terrestris/shogun-gis-client/commit/14d241e2948404a96e63c54c463af785a5e7371f))
* **deps-dev:** bump @commitlint/config-conventional ([27611c4](https://github.com/terrestris/shogun-gis-client/commit/27611c4f7944157cfbaaa1e4e21ab7fc9aa51a02))
* **deps-dev:** bump @eslint/js from 9.24.0 to 9.25.1 ([45aaf5b](https://github.com/terrestris/shogun-gis-client/commit/45aaf5b623e9cd890a35a32d7f1487e94f7a1bac))
* **deps-dev:** bump @module-federation/enhanced from 0.11.4 to 0.12.0 ([cd2eb27](https://github.com/terrestris/shogun-gis-client/commit/cd2eb27cd1de325b82c179126d42ef4e3acfd75e))
* **deps-dev:** bump @module-federation/enhanced from 0.12.0 to 0.13.0 ([2bf98ce](https://github.com/terrestris/shogun-gis-client/commit/2bf98ce5a1a1804d1ff0c9e9d15afb97c229a25d))
* **deps-dev:** bump @module-federation/enhanced from 0.13.0 to 0.13.1 ([1fff2f1](https://github.com/terrestris/shogun-gis-client/commit/1fff2f103d1c369c12c2423dd5f53e9ab92c7436))
* **deps-dev:** bump @playwright/test from 1.51.1 to 1.52.0 ([4f0332f](https://github.com/terrestris/shogun-gis-client/commit/4f0332fc023d39356341644edc177e1862f8903f))
* **deps-dev:** bump @rspack/cli from 1.3.4 to 1.3.5 ([4a6e911](https://github.com/terrestris/shogun-gis-client/commit/4a6e91195b76bfac211337330a550fe2a6150d90))
* **deps-dev:** bump @rspack/cli from 1.3.5 to 1.3.8 ([fae18cc](https://github.com/terrestris/shogun-gis-client/commit/fae18cc91f2f3d9ecd8970a7572b2202549e86b5))
* **deps-dev:** bump @rspack/cli from 1.3.8 to 1.3.9 ([293f034](https://github.com/terrestris/shogun-gis-client/commit/293f034ce333ef5c322684adab321e22fa292053))
* **deps-dev:** bump @rspack/cli from 1.3.9 to 1.3.10 ([03d5679](https://github.com/terrestris/shogun-gis-client/commit/03d5679943bd53dce2c7056af3bbe8200229b464))
* **deps-dev:** bump @rspack/core from 1.3.4 to 1.3.5 ([ea07dbe](https://github.com/terrestris/shogun-gis-client/commit/ea07dbe7dc03a88cdae197547d03497042e59da3))
* **deps-dev:** bump @rspack/core from 1.3.5 to 1.3.7 ([09c243e](https://github.com/terrestris/shogun-gis-client/commit/09c243e2e5c354b1eb6f70a4b70c6078dd9a9ec7))
* **deps-dev:** bump @rspack/core from 1.3.7 to 1.3.8 ([a43f075](https://github.com/terrestris/shogun-gis-client/commit/a43f075aaa9ba50d191e35677bdd49c9f1192ef5))
* **deps-dev:** bump @rspack/core from 1.3.8 to 1.3.9 ([e0ef030](https://github.com/terrestris/shogun-gis-client/commit/e0ef030f8da4cc4543eb060c88410084bfc6877c))
* **deps-dev:** bump @rspack/core from 1.3.9 to 1.3.10 ([a9d0edf](https://github.com/terrestris/shogun-gis-client/commit/a9d0edf1973e6c2c68aab1ad102d295b4152a4db))
* **deps-dev:** bump @rspack/plugin-react-refresh from 1.2.0 to 1.2.1 ([02937e1](https://github.com/terrestris/shogun-gis-client/commit/02937e10fe4bbcd84ac3554c78763def5b31c39c))
* **deps-dev:** bump @rspack/plugin-react-refresh from 1.2.1 to 1.3.1 ([11d5caa](https://github.com/terrestris/shogun-gis-client/commit/11d5caa4decd2769deb9b6ebda995301af168df7))
* **deps-dev:** bump @rspack/plugin-react-refresh from 1.3.1 to 1.4.1 ([8c8dd13](https://github.com/terrestris/shogun-gis-client/commit/8c8dd135227f8a91dddc9addb8339ba0fb9f1cfc))
* **deps-dev:** bump @rspack/plugin-react-refresh from 1.4.1 to 1.4.3 ([24046b5](https://github.com/terrestris/shogun-gis-client/commit/24046b5cd9014682c1dfe2be0b17fac842117c16))
* **deps-dev:** bump @semantic-release/github from 11.0.1 to 11.0.2 ([12b6c67](https://github.com/terrestris/shogun-gis-client/commit/12b6c679516d0cb108a3570cfa4af02ee3337bc1))
* **deps-dev:** bump @swc/helpers from 0.5.15 to 0.5.17 ([e252d14](https://github.com/terrestris/shogun-gis-client/commit/e252d1454c80a34721965c9b922da33166575b71))
* **deps-dev:** bump @types/node from 22.14.0 to 22.14.1 ([7c21a39](https://github.com/terrestris/shogun-gis-client/commit/7c21a393a17b523f6d2089928c897050e0539c85))
* **deps-dev:** bump @types/node from 22.14.1 to 22.15.3 ([52988cf](https://github.com/terrestris/shogun-gis-client/commit/52988cff85438258729c97550353221508dc2d86))
* **deps-dev:** bump @types/node from 22.15.16 to 22.15.18 ([2fbf528](https://github.com/terrestris/shogun-gis-client/commit/2fbf5289d5cdfb9df8fc7f7ce9ecb567f8902d17))
* **deps-dev:** bump @types/node from 22.15.3 to 22.15.16 ([7bf1538](https://github.com/terrestris/shogun-gis-client/commit/7bf153802d18837a877fd08b2cc32124e1fe3882))
* **deps-dev:** bump @typescript-eslint/eslint-plugin ([26d2ca0](https://github.com/terrestris/shogun-gis-client/commit/26d2ca04302bc4cfc9775546403c722bd795d7df))
* **deps-dev:** bump @typescript-eslint/parser from 8.29.1 to 8.30.1 ([82510f5](https://github.com/terrestris/shogun-gis-client/commit/82510f52e9ba9c45fecf0a3718da86d37e153271))
* **deps-dev:** bump @typescript-eslint/parser from 8.30.1 to 8.31.1 ([f846a52](https://github.com/terrestris/shogun-gis-client/commit/f846a5243a1e57b4bc0dbebddc1da303ca1bf0ef))
* **deps-dev:** bump eslint from 9.24.0 to 9.25.1 ([35eb980](https://github.com/terrestris/shogun-gis-client/commit/35eb980f2463bf38397d2e6d4714b396c78e9e69))
* **deps-dev:** bump eslint from 9.25.1 to 9.26.0 ([a503d43](https://github.com/terrestris/shogun-gis-client/commit/a503d433e70cf226016a6d3bab82a8394344712e))
* **deps-dev:** bump eslint-plugin-react-refresh from 0.4.19 to 0.4.20 ([a4c3f3d](https://github.com/terrestris/shogun-gis-client/commit/a4c3f3dd1df3c250084b895b4779ccb364bddb33))
* **deps-dev:** bump globals from 16.0.0 to 16.1.0 ([aca47eb](https://github.com/terrestris/shogun-gis-client/commit/aca47ebe7f95d9f33a8604a8ba9fddcd297177ee))
* **deps-dev:** bump less-loader from 12.2.0 to 12.3.0 ([e85de16](https://github.com/terrestris/shogun-gis-client/commit/e85de165cff3f838a5886751cadb56dedbaf2af2))
* **deps-dev:** bump ts-jest from 29.3.1 to 29.3.2 ([bb2a080](https://github.com/terrestris/shogun-gis-client/commit/bb2a0806d6771f4b9fbb9a11a6b50d99bc73cb01))
* **deps-dev:** bump ts-jest from 29.3.2 to 29.3.3 ([0c2ec96](https://github.com/terrestris/shogun-gis-client/commit/0c2ec96f51091845faef28f1cb742067f5244c13))
* **deps-dev:** bump typescript-eslint from 8.29.1 to 8.30.1 ([11ef11e](https://github.com/terrestris/shogun-gis-client/commit/11ef11e67d8bd706cc01ba18bf983e4ea3a08e8b))
* **deps-dev:** bump typescript-eslint from 8.30.1 to 8.31.1 ([7911fa8](https://github.com/terrestris/shogun-gis-client/commit/7911fa8c7770f13691f59d4f9b3718aa2309e8ad))
* **deps-dev:** bump typescript-eslint from 8.31.1 to 8.32.0 ([797f50e](https://github.com/terrestris/shogun-gis-client/commit/797f50e45e33eeda0fd234da749d6b3640afe724))
* **deps-dev:** bump typescript-eslint from 8.32.0 to 8.32.1 ([fd88632](https://github.com/terrestris/shogun-gis-client/commit/fd88632e3c52fbca9c5900894491395a2cc53519))
* **deps:** bump @reduxjs/toolkit from 2.6.1 to 2.7.0 ([1a37440](https://github.com/terrestris/shogun-gis-client/commit/1a3744004bfd5bbfd84c906dc68084298dfbd3b4))
* **deps:** bump @reduxjs/toolkit from 2.7.0 to 2.8.1 ([7e49a29](https://github.com/terrestris/shogun-gis-client/commit/7e49a29ad18466581e55e64c83eaacef1bb33102))
* **deps:** bump @reduxjs/toolkit from 2.8.1 to 2.8.2 ([9a1dca6](https://github.com/terrestris/shogun-gis-client/commit/9a1dca6b792b7a87c27ade50441a8f906c80409b))
* **deps:** bump @terrestris/shogun-util from 10.5.1 to 10.5.2 ([be97303](https://github.com/terrestris/shogun-gis-client/commit/be9730342f2525eb6dc178fe4bb391d763561bc3))
* **deps:** bump @terrestris/shogun-util from 10.5.2 to 10.6.0 ([bd7aec1](https://github.com/terrestris/shogun-gis-client/commit/bd7aec1a2017589104452b1d116051f084d68949))
* **deps:** bump antd from 5.24.6 to 5.24.7 ([b54e376](https://github.com/terrestris/shogun-gis-client/commit/b54e3769ba4f891288c2a2b428997c61c42a326a))
* **deps:** bump antd from 5.24.7 to 5.24.8 ([eb39a5a](https://github.com/terrestris/shogun-gis-client/commit/eb39a5a68fe04fb43d23dcec3d50c7f0a1836d08))
* **deps:** bump antd from 5.24.8 to 5.24.9 ([1850680](https://github.com/terrestris/shogun-gis-client/commit/1850680e8c701b3abc22e8ec8bfaa9b8d29881a2))
* **deps:** bump dotenv from 16.4.7 to 16.5.0 ([5c2f9f8](https://github.com/terrestris/shogun-gis-client/commit/5c2f9f8ea56ca5682f646e8d099ff4d6c1171b8e))
* **deps:** bump geostyler-openlayers-parser from 5.0.2 to 5.1.0 ([8628cfd](https://github.com/terrestris/shogun-gis-client/commit/8628cfd9ac75a8584573cd45328167a0e1747a49))
* **deps:** bump i18next-browser-languagedetector from 8.0.4 to 8.0.5 ([2c2d88c](https://github.com/terrestris/shogun-gis-client/commit/2c2d88c48b4c7aacdb89f81443cf78eb352cd431))
* **deps:** bump i18next-browser-languagedetector from 8.0.5 to 8.1.0 ([e843ea2](https://github.com/terrestris/shogun-gis-client/commit/e843ea23437d08446e63efd3e092fd204d338552))
* **deps:** bump nginx from 1.27.4-alpine-slim to 1.27.5-alpine-slim ([0184678](https://github.com/terrestris/shogun-gis-client/commit/0184678d33b375b40566559c007667fac7822276))
* **deps:** bump playwright from v1.51.1-jammy to v1.52.0-jammy ([95313f0](https://github.com/terrestris/shogun-gis-client/commit/95313f02db20a8a2afda21bcf7cfe5de671c90b7))
* **deps:** bump proj4 from 2.15.0 to 2.16.2 ([42b67b4](https://github.com/terrestris/shogun-gis-client/commit/42b67b49439f21fa4dd41d1dc1577796e41b4086))
* **deps:** bump react-i18next from 15.4.1 to 15.5.1 ([48b9093](https://github.com/terrestris/shogun-gis-client/commit/48b909379e2da9145eca5178135dbfed35ee1591))
* **deps:** bump SonarSource/sonarqube-scan-action from 5.1.0 to 5.2.0 ([9c1f99a](https://github.com/terrestris/shogun-gis-client/commit/9c1f99ac25fe0ed048ee9153ad65d509df1bf0ef))
* merge current main ([5bf30fe](https://github.com/terrestris/shogun-gis-client/commit/5bf30fed3dfb943205f330302fc5a13a787480e3))


### Changes in configuration

* fix pipeline for next branches without any new release ([b03e176](https://github.com/terrestris/shogun-gis-client/commit/b03e17630bf726780346ad48948bba3887fe65d9))


### Bugfixes

* revert previous attempt ([2128df9](https://github.com/terrestris/shogun-gis-client/commit/2128df9ff48c476c1074713cfe0bf90a9a3b3a92))

## [10.0.0-next.7](https://github.com/terrestris/shogun-gis-client/compare/v10.0.0-next.6...v10.0.0-next.7) (2025-04-14)


### Bugfixes

* update react-geo ([446626f](https://github.com/terrestris/shogun-gis-client/commit/446626f5286b2a9d567297fb5d4dec3442fb8d75))

## [10.0.0-next.6](https://github.com/terrestris/shogun-gis-client/compare/v10.0.0-next.5...v10.0.0-next.6) (2025-04-14)


### Bugfixes

* update react-geo ([4d47160](https://github.com/terrestris/shogun-gis-client/commit/4d47160c57c0bb5ff81d5e16820d5fdaf670faa4))

## [10.0.0-next.5](https://github.com/terrestris/shogun-gis-client/compare/v10.0.0-next.4...v10.0.0-next.5) (2025-04-10)


### Bugfixes

* bump shogun-util to v10.5.2 ([3d5482b](https://github.com/terrestris/shogun-gis-client/commit/3d5482b001daeb6713b5c4af3d73bec0f4b9db7c))

## [10.0.0-next.4](https://github.com/terrestris/shogun-gis-client/compare/v10.0.0-next.3...v10.0.0-next.4) (2025-04-10)


### Dependencies

* adds missing rimraf dependency ([a8a28eb](https://github.com/terrestris/shogun-gis-client/commit/a8a28eb40e169840fc04b36cf4cb2c06ed01af0b))
* **deps-dev:** bump @babel/cli from 7.26.4 to 7.27.0 ([4b1d0fd](https://github.com/terrestris/shogun-gis-client/commit/4b1d0fd810671cd0d4578389a7718b3f32e61f04))
* **deps-dev:** bump @babel/preset-typescript from 7.26.0 to 7.27.0 ([c866596](https://github.com/terrestris/shogun-gis-client/commit/c86659654b9391202378fa0e83a3262de465794c))
* **deps-dev:** bump @babel/runtime from 7.26.10 to 7.27.0 ([ecfb04c](https://github.com/terrestris/shogun-gis-client/commit/ecfb04cc436e9d868c688a66008d6c451d952e48))
* **deps-dev:** bump @eslint/js from 9.23.0 to 9.24.0 ([3a6e709](https://github.com/terrestris/shogun-gis-client/commit/3a6e7095a50820d98508da15c5b2aa86d5625a64))
* **deps-dev:** bump @module-federation/enhanced from 0.11.1 to 0.11.3 ([ff98151](https://github.com/terrestris/shogun-gis-client/commit/ff981516eb704b4cd2547a1eadf4612cae485fb5))
* **deps-dev:** bump @module-federation/enhanced from 0.11.3 to 0.11.4 ([070ed32](https://github.com/terrestris/shogun-gis-client/commit/070ed327a22df811fcddfe5fd16f78f965b1d057))
* **deps-dev:** bump @rspack/cli from 1.2.8 to 1.3.2 ([82e49a8](https://github.com/terrestris/shogun-gis-client/commit/82e49a860bd6f46241b11d644ef0b26d5c515281))
* **deps-dev:** bump @rspack/cli from 1.3.2 to 1.3.4 ([1a767cb](https://github.com/terrestris/shogun-gis-client/commit/1a767cb4a0477699915dcfa3962cf3aa40880f95))
* **deps-dev:** bump @rspack/core from 1.2.8 to 1.3.1 ([5ab4775](https://github.com/terrestris/shogun-gis-client/commit/5ab4775ba3806b1d084c1c3be83cad9ca26a978c))
* **deps-dev:** bump @rspack/core from 1.3.1 to 1.3.2 ([2d5a726](https://github.com/terrestris/shogun-gis-client/commit/2d5a726d8f530d34dee8f38e9091078b854e8f91))
* **deps-dev:** bump @rspack/core from 1.3.2 to 1.3.4 ([0faeae3](https://github.com/terrestris/shogun-gis-client/commit/0faeae30711084ea58cb6e8da38608045b5d6605))
* **deps-dev:** bump @rspack/plugin-react-refresh from 1.0.1 to 1.2.0 ([39bbe4c](https://github.com/terrestris/shogun-gis-client/commit/39bbe4c14ec84fc01042e22a9925bcde083f1375))
* **deps-dev:** bump @testing-library/react from 16.2.0 to 16.3.0 ([eec1435](https://github.com/terrestris/shogun-gis-client/commit/eec1435433e52e838b98b3294ec1bf8049c472c0))
* **deps-dev:** bump @types/node from 22.13.11 to 22.13.13 ([33adb1a](https://github.com/terrestris/shogun-gis-client/commit/33adb1a541e52124ddb163a62a88d9b2d2e19eb0))
* **deps-dev:** bump @types/node from 22.13.13 to 22.13.17 ([7e63c0a](https://github.com/terrestris/shogun-gis-client/commit/7e63c0a177368a3bc8c0449371250bcfcbc2d6e4))
* **deps-dev:** bump @types/node from 22.13.17 to 22.14.0 ([3f5b356](https://github.com/terrestris/shogun-gis-client/commit/3f5b356ffbacd599a77daf443c8070ca69c41643))
* **deps-dev:** bump @typescript-eslint/eslint-plugin ([bec76d6](https://github.com/terrestris/shogun-gis-client/commit/bec76d6c8d54ae5533167965fa4f0d80597ad00f))
* **deps-dev:** bump @typescript-eslint/eslint-plugin ([7f2178a](https://github.com/terrestris/shogun-gis-client/commit/7f2178ab77d5417e2651ebd9ce806d7175f52405))
* **deps-dev:** bump @typescript-eslint/parser from 8.27.0 to 8.28.0 ([f31e527](https://github.com/terrestris/shogun-gis-client/commit/f31e527ba283304e9c4021372b46c4aafa6e698c))
* **deps-dev:** bump @typescript-eslint/parser from 8.29.0 to 8.29.1 ([b7ad65d](https://github.com/terrestris/shogun-gis-client/commit/b7ad65d9682865443f6e1c1d6772fdd8fb8be836))
* **deps-dev:** bump eslint from 9.23.0 to 9.24.0 ([1b50fa1](https://github.com/terrestris/shogun-gis-client/commit/1b50fa142e5f5edcfaedbd8a8cd5a6925dbe9bc8))
* **deps-dev:** bump eslint-plugin-react from 7.37.4 to 7.37.5 ([a0a2a21](https://github.com/terrestris/shogun-gis-client/commit/a0a2a2140ff52f748f8c4ad996c0b0446454eda0))
* **deps-dev:** bump less from 4.2.2 to 4.3.0 ([a0f22d6](https://github.com/terrestris/shogun-gis-client/commit/a0f22d6ca70eb155c17560b62edfaa740c2d725b))
* **deps-dev:** bump nwsapi from 2.2.19 to 2.2.20 ([6e8d0c9](https://github.com/terrestris/shogun-gis-client/commit/6e8d0c9a20401bcad43d23074f58219ef8052b80))
* **deps-dev:** bump react-refresh from 0.16.0 to 0.17.0 ([0edcf9f](https://github.com/terrestris/shogun-gis-client/commit/0edcf9fa1b9372b99545e0154de496c27fb79594))
* **deps-dev:** bump ts-jest from 29.2.6 to 29.3.0 ([cfa9250](https://github.com/terrestris/shogun-gis-client/commit/cfa9250f3b481e2f3ae141efbe631ccd576bbdd4))
* **deps-dev:** bump ts-jest from 29.3.0 to 29.3.1 ([a35a39b](https://github.com/terrestris/shogun-gis-client/commit/a35a39b30233c22b337c368296923667a598021a))
* **deps-dev:** bump typescript from 5.8.2 to 5.8.3 ([5a97685](https://github.com/terrestris/shogun-gis-client/commit/5a976856d3710634dc1f415caef6242efac40e86))
* **deps-dev:** bump typescript-eslint from 8.27.0 to 8.29.0 ([a7b6b60](https://github.com/terrestris/shogun-gis-client/commit/a7b6b609edbb630c20811493fd5b14b405e8928f))
* **deps-dev:** bump typescript-eslint from 8.29.0 to 8.29.1 ([0b262b5](https://github.com/terrestris/shogun-gis-client/commit/0b262b5cb24a2645a42b957ac762efa2a3868ae8))
* **deps:** bump @terrestris/ol-util from 21.1.0 to 21.1.1 ([cd58261](https://github.com/terrestris/shogun-gis-client/commit/cd58261b57b62fa63a5efc7ded81d6c886806ebd))
* **deps:** bump @terrestris/ol-util from 21.1.1 to 21.3.0 ([52fef10](https://github.com/terrestris/shogun-gis-client/commit/52fef10a56551863011b758e547bc2691f68b691))
* **deps:** bump antd from 5.24.4 to 5.24.5 ([8430ecd](https://github.com/terrestris/shogun-gis-client/commit/8430ecdf95e88c7df4fe73a7ae8b19c926c7c516))
* **deps:** bump antd from 5.24.5 to 5.24.6 ([467002c](https://github.com/terrestris/shogun-gis-client/commit/467002c57e9e18ef9a03ca09a1e4a80460bc9a60))
* **deps:** bump SonarSource/sonarqube-scan-action from 5.0.0 to 5.1.0 ([47824c7](https://github.com/terrestris/shogun-gis-client/commit/47824c7baed9f478b79927d299ba56960f15ffdc))
* merge branch 'main' into merge-main ([cb5deb2](https://github.com/terrestris/shogun-gis-client/commit/cb5deb25e6d0cc34bce825de470e3c9bed0b9ce8))
* update [@terrestris](https://github.com/terrestris) libs to latest version ([303048a](https://github.com/terrestris/shogun-gis-client/commit/303048aecc53ce6fa60a46a330502c44b3a71d22))


### Bugfixes

* typings ([0df42ed](https://github.com/terrestris/shogun-gis-client/commit/0df42edf510c1b87f169db3170e6d024f80cc19b))

## [10.0.0-next.3](https://github.com/terrestris/shogun-gis-client/compare/v10.0.0-next.2...v10.0.0-next.3) (2025-03-28)


### Dependencies

* copy src files in watch build script as well ([e7fa502](https://github.com/terrestris/shogun-gis-client/commit/e7fa50254facb775f20480ae5e5220c03c970b0f))


### Features

* introduce resizable drawer and introduce maxHeight to toolMenu ([c69e62c](https://github.com/terrestris/shogun-gis-client/commit/c69e62c784fe4e3ed49328f993950d51895d976f))


### Bugfixes

* layout improvements ([308ae96](https://github.com/terrestris/shogun-gis-client/commit/308ae96407c83ce23d26fcb730059d0fb96d005b))
* pin version of ol-mapbox-style to 12.4.0 ([a02e58d](https://github.com/terrestris/shogun-gis-client/commit/a02e58df52c2681b5484fa2220f5a30e61ad022e))

## [10.0.0-next.2](https://github.com/terrestris/shogun-gis-client/compare/v10.0.0-next.1...v10.0.0-next.2) (2025-03-26)


### Bugfixes

* **measure:** use geodesic length measurements only for sperical projections ([15ce7e9](https://github.com/terrestris/shogun-gis-client/commit/15ce7e9051405a0837741e1838951e2374081734))

## [10.0.0-next.1](https://github.com/terrestris/shogun-gis-client/compare/v9.1.0-next.1...v10.0.0-next.1) (2025-03-24)


### ⚠ BREAKING CHANGES

* **time:** replace moment by dayjs

### Dependencies

* several dependecy upgrades ([b951a6d](https://github.com/terrestris/shogun-gis-client/commit/b951a6d0920b7448e33f8d2be78f6726f2035971))


### Bugfixes

* keep node versions in Dockerfiles in sync with the required one by nvmrc ([2740832](https://github.com/terrestris/shogun-gis-client/commit/2740832c29b8eecd197e29923d0f43849d9213ed))
* **time:** replace moment by dayjs ([a6cc8c7](https://github.com/terrestris/shogun-gis-client/commit/a6cc8c718fde744813e2e6275a6cb5f6230a5e6d))

## [9.1.0-next.1](https://github.com/terrestris/shogun-gis-client/compare/v9.0.0...v9.1.0-next.1) (2025-03-24)


### Dependencies

* bump versions of terrestris elint configs ([6d03ae4](https://github.com/terrestris/shogun-gis-client/commit/6d03ae4a513f1dbd9a7719029cd7912dd45228d6))
* **deps-dev:** bump @babel/core from 7.26.0 to 7.26.7 ([614dbe1](https://github.com/terrestris/shogun-gis-client/commit/614dbe1a5be4f0621771b8c79674f88a4cb32cd7))
* **deps-dev:** bump @babel/core from 7.26.7 to 7.26.8 ([33104e6](https://github.com/terrestris/shogun-gis-client/commit/33104e6a0bed0f46298baa87aa8811800df896eb))
* **deps-dev:** bump @babel/core from 7.26.8 to 7.26.9 ([d66775d](https://github.com/terrestris/shogun-gis-client/commit/d66775d68d5dee4beaadc8ec9c2e8438b19e6d1d))
* **deps-dev:** bump @babel/core from 7.26.9 to 7.26.10 ([44b7a30](https://github.com/terrestris/shogun-gis-client/commit/44b7a30df30248e1ea31ae9be548246770ab67ee))
* **deps-dev:** bump @babel/preset-env from 7.26.0 to 7.26.7 ([c0c0de5](https://github.com/terrestris/shogun-gis-client/commit/c0c0de502131e3b56a6b8a3a5594cd5b04dd5aa7))
* **deps-dev:** bump @babel/preset-env from 7.26.7 to 7.26.8 ([7f3c7a8](https://github.com/terrestris/shogun-gis-client/commit/7f3c7a88446c7752d3cbec3f7b974352ba209188))
* **deps-dev:** bump @babel/preset-env from 7.26.8 to 7.26.9 ([bdcfd04](https://github.com/terrestris/shogun-gis-client/commit/bdcfd045ef3fcac3e1b2c8f2fa2a59ee0d685e49))
* **deps-dev:** bump @babel/runtime from 7.26.0 to 7.26.7 ([a71d27e](https://github.com/terrestris/shogun-gis-client/commit/a71d27e2f66a83b24a66b67c30b61cd013a858a3))
* **deps-dev:** bump @babel/runtime from 7.26.7 to 7.26.9 ([b9746fe](https://github.com/terrestris/shogun-gis-client/commit/b9746fee65d9bfa5a635e624d15f4cb93e28ca2b))
* **deps-dev:** bump @babel/runtime from 7.26.9 to 7.26.10 ([e41fc10](https://github.com/terrestris/shogun-gis-client/commit/e41fc10bad2e9da99eaed7c450b3b702c788ecc3))
* **deps-dev:** bump @commitlint/cli from 19.6.1 to 19.7.1 ([6bf5654](https://github.com/terrestris/shogun-gis-client/commit/6bf5654e4900f74881a562f9f5f3fc880c3e3b6c))
* **deps-dev:** bump @commitlint/cli from 19.7.1 to 19.8.0 ([ce51c9b](https://github.com/terrestris/shogun-gis-client/commit/ce51c9be838b43c7c6bc330946995208d3fee503))
* **deps-dev:** bump @commitlint/config-conventional ([a529d1a](https://github.com/terrestris/shogun-gis-client/commit/a529d1a39852e4ca556ab53eacc1bc59c332bf6e))
* **deps-dev:** bump @commitlint/config-conventional ([810b96a](https://github.com/terrestris/shogun-gis-client/commit/810b96a861250da0487b16c8f76b20febd400421))
* **deps-dev:** bump @eslint/js and @types/eslint__js ([2a8dab9](https://github.com/terrestris/shogun-gis-client/commit/2a8dab936694ba9c739ba45e3c54667ff87f7893))
* **deps-dev:** bump @eslint/js from 9.18.0 to 9.19.0 ([7cc5b65](https://github.com/terrestris/shogun-gis-client/commit/7cc5b659f2d563e133b265a3f3a5dae14f6bc1a5))
* **deps-dev:** bump @eslint/js from 9.19.0 to 9.20.0 ([2a6ef85](https://github.com/terrestris/shogun-gis-client/commit/2a6ef85d1812c4048364d87ad98f131919a55441))
* **deps-dev:** bump @eslint/js from 9.22.0 to 9.23.0 ([d70cc25](https://github.com/terrestris/shogun-gis-client/commit/d70cc2534c822c343586bfc91e04aa8d24268a47))
* **deps-dev:** bump @module-federation/enhanced from 0.10.0 to 0.11.0 ([17563a6](https://github.com/terrestris/shogun-gis-client/commit/17563a6ab379829b00b5bdb31649ada754149632))
* **deps-dev:** bump @module-federation/enhanced from 0.11.0 to 0.11.1 ([2e0e287](https://github.com/terrestris/shogun-gis-client/commit/2e0e2871db55bb1999a62f28022e2189c204bbc9))
* **deps-dev:** bump @module-federation/enhanced from 0.8.11 to 0.8.12 ([70b2342](https://github.com/terrestris/shogun-gis-client/commit/70b23427d91191ee51497eafb3beafb58feb8734))
* **deps-dev:** bump @module-federation/enhanced from 0.8.12 to 0.9.0 ([4f2a70e](https://github.com/terrestris/shogun-gis-client/commit/4f2a70e0a77c546dfc1aa8f1bf275b1a57f7516a))
* **deps-dev:** bump @module-federation/enhanced from 0.8.9 to 0.8.11 ([57cd7cc](https://github.com/terrestris/shogun-gis-client/commit/57cd7cc4e3bd82ea331251b97ccc74a8795d3bab))
* **deps-dev:** bump @module-federation/enhanced from 0.9.0 to 0.9.1 ([96f72bf](https://github.com/terrestris/shogun-gis-client/commit/96f72bf9b4ebb7177ba5316aeced630e645c278d))
* **deps-dev:** bump @module-federation/enhanced from 0.9.1 to 0.10.0 ([8e11040](https://github.com/terrestris/shogun-gis-client/commit/8e1104085318121222500f23ec0199c75e84cd44))
* **deps-dev:** bump @playwright/test from 1.49.1 to 1.50.0 ([334cb80](https://github.com/terrestris/shogun-gis-client/commit/334cb80c22212928aea75516be9a807a166ee8f9))
* **deps-dev:** bump @playwright/test from 1.50.0 to 1.50.1 ([48bf627](https://github.com/terrestris/shogun-gis-client/commit/48bf627943866f22cf540e079c30e214b62cd17f))
* **deps-dev:** bump @playwright/test from 1.50.1 to 1.51.0 ([71bd103](https://github.com/terrestris/shogun-gis-client/commit/71bd1038ddff05943b50f5b6ab838bf128c0f173))
* **deps-dev:** bump @playwright/test from 1.51.0 to 1.51.1 ([80b2d03](https://github.com/terrestris/shogun-gis-client/commit/80b2d037f5163e6808f56fc44aa158104a3a1a6d))
* **deps-dev:** bump @rspack/cli from 1.1.8 to 1.2.3 ([cb60e14](https://github.com/terrestris/shogun-gis-client/commit/cb60e1442ded6e46ba06d3306cf719d22704f245))
* **deps-dev:** bump @rspack/cli from 1.2.3 to 1.2.5 ([26d3e50](https://github.com/terrestris/shogun-gis-client/commit/26d3e5085165a899c685c4aa4c0aff1ed0c47fae))
* **deps-dev:** bump @rspack/cli from 1.2.5 to 1.2.6 ([15251cd](https://github.com/terrestris/shogun-gis-client/commit/15251cd0433f835412553fc9d9625b4289aba716))
* **deps-dev:** bump @rspack/cli from 1.2.6 to 1.2.7 ([972f18e](https://github.com/terrestris/shogun-gis-client/commit/972f18eaa493bba736481d0fe0fecc7b680b76c3))
* **deps-dev:** bump @rspack/cli from 1.2.7 to 1.2.8 ([c414642](https://github.com/terrestris/shogun-gis-client/commit/c41464217e4f8e038882cf8396c6003811d6d219))
* **deps-dev:** bump @rspack/core from 1.1.8 to 1.2.3 ([997bfcb](https://github.com/terrestris/shogun-gis-client/commit/997bfcb785cf1efe7e32e1feadb57d410ef7bd9c))
* **deps-dev:** bump @rspack/core from 1.2.3 to 1.2.5 ([9333680](https://github.com/terrestris/shogun-gis-client/commit/9333680cb76b9b879f7c9c7879c64f3d3b92af4a))
* **deps-dev:** bump @rspack/core from 1.2.5 to 1.2.6 ([e19b923](https://github.com/terrestris/shogun-gis-client/commit/e19b92396b9dbf855181933a1ed1934bf795760b))
* **deps-dev:** bump @rspack/core from 1.2.6 to 1.2.7 ([03fb188](https://github.com/terrestris/shogun-gis-client/commit/03fb188068e0c40040b128c880852036f020faa8))
* **deps-dev:** bump @rspack/core from 1.2.7 to 1.2.8 ([144c3b9](https://github.com/terrestris/shogun-gis-client/commit/144c3b9fbda06ba0a39a516ad0081dfd1437be56))
* **deps-dev:** bump @stylistic/eslint-plugin from 2.13.0 to 4.0.1 ([bc2f8dc](https://github.com/terrestris/shogun-gis-client/commit/bc2f8dc5ba51cb658c60cbb1b6954663fe258c0e))
* **deps-dev:** bump @stylistic/eslint-plugin from 4.0.1 to 4.1.0 ([543e539](https://github.com/terrestris/shogun-gis-client/commit/543e539747741b6e4467a0e81d0ffc90b41b6eeb))
* **deps-dev:** bump @stylistic/eslint-plugin from 4.1.0 to 4.2.0 ([7307564](https://github.com/terrestris/shogun-gis-client/commit/73075645c51406e793b90223e0245363c3e2745d))
* **deps-dev:** bump @types/node from 22.10.10 to 22.12.0 ([6fd24db](https://github.com/terrestris/shogun-gis-client/commit/6fd24dbb5d7c8207d5e3639fcf322636f96f98f4))
* **deps-dev:** bump @types/node from 22.10.9 to 22.10.10 ([b76534f](https://github.com/terrestris/shogun-gis-client/commit/b76534fa25e30f481560ce29ffb7184d42602f3d))
* **deps-dev:** bump @types/node from 22.12.0 to 22.13.0 ([790049b](https://github.com/terrestris/shogun-gis-client/commit/790049b708c98180eb10f47b9430b5b5923216dc))
* **deps-dev:** bump @types/node from 22.13.0 to 22.13.1 ([1fa299a](https://github.com/terrestris/shogun-gis-client/commit/1fa299a52a917179d6607694bb755dae45ad74c3))
* **deps-dev:** bump @types/node from 22.13.1 to 22.13.4 ([b0db77f](https://github.com/terrestris/shogun-gis-client/commit/b0db77f20118945828598c29777493518a9ec99f))
* **deps-dev:** bump @types/node from 22.13.10 to 22.13.11 ([d73cb1c](https://github.com/terrestris/shogun-gis-client/commit/d73cb1c49bab9684d7f7c3ef4f93469fa575b961))
* **deps-dev:** bump @types/node from 22.13.4 to 22.13.5 ([7b6cba9](https://github.com/terrestris/shogun-gis-client/commit/7b6cba97555d900a3413a835101632c671de9f49))
* **deps-dev:** bump @types/node from 22.13.5 to 22.13.9 ([ff91045](https://github.com/terrestris/shogun-gis-client/commit/ff910452ed6ceef2fdd99e41303b8d74ce76f862))
* **deps-dev:** bump @types/node from 22.13.9 to 22.13.10 ([32f892c](https://github.com/terrestris/shogun-gis-client/commit/32f892c782b037105527496700f8958d21258706))
* **deps-dev:** bump @typescript-eslint/eslint-plugin ([ccf9207](https://github.com/terrestris/shogun-gis-client/commit/ccf92078270357cc23b202e2146f57c8418534f7))
* **deps-dev:** bump @typescript-eslint/eslint-plugin ([da4aa7a](https://github.com/terrestris/shogun-gis-client/commit/da4aa7a1201cb11e655ed62c6b7a9d33bad018a1))
* **deps-dev:** bump babel-loader from 9.2.1 to 10.0.0 ([b83155f](https://github.com/terrestris/shogun-gis-client/commit/b83155f225552d520158383ba6c516c32c79068d))
* **deps-dev:** bump eslint from 9.18.0 to 9.19.0 ([c76e8b6](https://github.com/terrestris/shogun-gis-client/commit/c76e8b6f8fd86ad96eb4ce90f5b8f34b1080c18a))
* **deps-dev:** bump eslint from 9.19.0 to 9.20.1 ([142c78a](https://github.com/terrestris/shogun-gis-client/commit/142c78a5434504a4a431cefbca4220ede2e7223d))
* **deps-dev:** bump eslint from 9.20.1 to 9.21.0 ([12b3f6c](https://github.com/terrestris/shogun-gis-client/commit/12b3f6c1ceca2b671d41d06f77628942addecd29))
* **deps-dev:** bump eslint from 9.21.0 to 9.22.0 ([20b509b](https://github.com/terrestris/shogun-gis-client/commit/20b509b91f3f144702d9e8303001a780f29cb903))
* **deps-dev:** bump eslint from 9.22.0 to 9.23.0 ([5dd8176](https://github.com/terrestris/shogun-gis-client/commit/5dd81767068416d2134cfe58636fe6a48a01f794))
* **deps-dev:** bump eslint-plugin-react-refresh from 0.4.18 to 0.4.19 ([27a358f](https://github.com/terrestris/shogun-gis-client/commit/27a358f4c5162d5cea066cb972f313e0b1bf79dc))
* **deps-dev:** bump globals from 15.14.0 to 15.15.0 ([bede712](https://github.com/terrestris/shogun-gis-client/commit/bede712e1aa426be32b6fa718c49187618c1388a))
* **deps-dev:** bump globals from 15.15.0 to 16.0.0 ([84f0f7e](https://github.com/terrestris/shogun-gis-client/commit/84f0f7e2d2fd5e885b6e6dba972c9dd443c19a09))
* **deps-dev:** bump nwsapi from 2.2.16 to 2.2.19 ([58a90aa](https://github.com/terrestris/shogun-gis-client/commit/58a90aa9ab11d5da0961177efa7bb9c385e4c820))
* **deps-dev:** bump semantic-release from 24.2.1 to 24.2.2 ([bbfa2fc](https://github.com/terrestris/shogun-gis-client/commit/bbfa2fc4d4a81ed30bbb3da1076b4e452cc80fe1))
* **deps-dev:** bump semantic-release from 24.2.2 to 24.2.3 ([0228a48](https://github.com/terrestris/shogun-gis-client/commit/0228a483a5c609fb94952a8289992c5d6b315fba))
* **deps-dev:** bump ts-jest from 29.2.5 to 29.2.6 ([df82f82](https://github.com/terrestris/shogun-gis-client/commit/df82f82c4ab16119ca84f22541f9ec4575ca1d6c))
* **deps-dev:** bump typescript from 5.7.3 to 5.8.2 ([2c1dfee](https://github.com/terrestris/shogun-gis-client/commit/2c1dfeeec996e92851d968627c499c62d49911d2))
* **deps-dev:** bump typescript-eslint from 8.21.0 to 8.22.0 ([7c23492](https://github.com/terrestris/shogun-gis-client/commit/7c23492c8a03494bd36006d0edb0bf4773464051))
* **deps-dev:** bump typescript-eslint from 8.22.0 to 8.23.0 ([8b8d40a](https://github.com/terrestris/shogun-gis-client/commit/8b8d40a68492cf476029b1c26f66b2051e7a259e))
* **deps-dev:** bump typescript-eslint from 8.23.0 to 8.24.0 ([4935f23](https://github.com/terrestris/shogun-gis-client/commit/4935f23c1a01d06a3dea2b8724bacb3d8d503d16))
* **deps-dev:** bump typescript-eslint from 8.24.0 to 8.24.1 ([eacf1e6](https://github.com/terrestris/shogun-gis-client/commit/eacf1e67ac6ed280b2352a86485b02020cd63bbd))
* **deps-dev:** bump typescript-eslint from 8.24.1 to 8.25.0 ([d9b3477](https://github.com/terrestris/shogun-gis-client/commit/d9b34779425168b6dfb3ee790e7a3f6868fc871d))
* **deps-dev:** bump typescript-eslint from 8.25.0 to 8.26.0 ([fef2dda](https://github.com/terrestris/shogun-gis-client/commit/fef2dda14a3bfced91c45eb2afe517f7543c4a81))
* **deps-dev:** bump typescript-eslint from 8.26.0 to 8.26.1 ([0832501](https://github.com/terrestris/shogun-gis-client/commit/08325019694a81c51239472a5eade248da91f243))
* **deps-dev:** bump typescript-eslint from 8.26.1 to 8.27.0 ([e71c594](https://github.com/terrestris/shogun-gis-client/commit/e71c59451d2dde668822714ef73bd9159522a023))
* **deps:** bump @monaco-editor/react from 4.6.0 to 4.7.0 ([b022c57](https://github.com/terrestris/shogun-gis-client/commit/b022c579b8b364ae422964274af20744ced9c140))
* **deps:** bump @reduxjs/toolkit from 2.5.0 to 2.5.1 ([d8a992a](https://github.com/terrestris/shogun-gis-client/commit/d8a992a5f8c85bf29d0e6b4c760a97a0580cec50))
* **deps:** bump @reduxjs/toolkit from 2.5.1 to 2.6.0 ([7af3782](https://github.com/terrestris/shogun-gis-client/commit/7af3782a83c24bbc1e399bc76fe9bfc067739493))
* **deps:** bump @reduxjs/toolkit from 2.6.0 to 2.6.1 ([7bc8b36](https://github.com/terrestris/shogun-gis-client/commit/7bc8b3643181eb02d06d8d21dae1b86ee4312c99))
* **deps:** bump @terrestris/ol-util from 21.0.0 to 21.1.0 ([02482e8](https://github.com/terrestris/shogun-gis-client/commit/02482e88f45ba04e094ed4a4c35610d9cdac008f))
* **deps:** bump @terrestris/react-util from 10.0.1 to 10.1.0 ([f0a7bf2](https://github.com/terrestris/shogun-gis-client/commit/f0a7bf2c53b0946bd4e55e2d68b2e8b0f9ac6fc0))
* **deps:** bump @terrestris/react-util from 10.1.0 to 10.1.1 ([86b0612](https://github.com/terrestris/shogun-gis-client/commit/86b061221df653db3dc157e55edb63a9c0092a30))
* **deps:** bump @terrestris/shogun-util from 10.4.1 to 10.4.3 ([684a319](https://github.com/terrestris/shogun-gis-client/commit/684a319f19c2837dbfe9024ea7d61a180af97735))
* **deps:** bump @terrestris/shogun-util from 10.4.3 to 10.5.0 ([139768c](https://github.com/terrestris/shogun-gis-client/commit/139768c194e5d1bc90a92f807d80bc3cbd8d9811))
* **deps:** bump @terrestris/shogun-util from 10.5.0 to 10.5.1 ([dc98e29](https://github.com/terrestris/shogun-gis-client/commit/dc98e2907793a5334f3397a393181605372bdcf4))
* **deps:** bump antd from 5.23.2 to 5.23.3 ([cc5cf6b](https://github.com/terrestris/shogun-gis-client/commit/cc5cf6b50c7e20866e0227ccbe3618bc276938b9))
* **deps:** bump antd from 5.23.3 to 5.23.4 ([faac909](https://github.com/terrestris/shogun-gis-client/commit/faac909266e754e6798815e1b99c64a1357a2d19))
* **deps:** bump antd from 5.23.4 to 5.24.0 ([23cb6b4](https://github.com/terrestris/shogun-gis-client/commit/23cb6b4fd68d74e64fee7052c9416568c48dbcb1))
* **deps:** bump antd from 5.24.0 to 5.24.1 ([724c02d](https://github.com/terrestris/shogun-gis-client/commit/724c02d2de7a2fa46d624bf120397c5fd14f9f41))
* **deps:** bump antd from 5.24.1 to 5.24.2 ([750e94a](https://github.com/terrestris/shogun-gis-client/commit/750e94acf1707b487045018cddf98c6c129894fa))
* **deps:** bump antd from 5.24.2 to 5.24.3 ([53fdd2b](https://github.com/terrestris/shogun-gis-client/commit/53fdd2b962086c6447a24b015171c601d75fc7ee))
* **deps:** bump antd from 5.24.3 to 5.24.4 ([9c19dcc](https://github.com/terrestris/shogun-gis-client/commit/9c19dcc52272dbd74773b2c543ca915ff3e5defe))
* **deps:** bump color from 4.2.3 to 5.0.0 ([241b7a1](https://github.com/terrestris/shogun-gis-client/commit/241b7a1e659bad90f71a8d96ddc9e443dd66b8a3))
* **deps:** bump geostyler from 15.0.1 to 16.0.1 ([4c09038](https://github.com/terrestris/shogun-gis-client/commit/4c090380fe3f6da5c90a17f03b2613b31fe41085))
* **deps:** bump geostyler-openlayers-parser from 5.0.1 to 5.0.2 ([49307a9](https://github.com/terrestris/shogun-gis-client/commit/49307a98c0d54e199ca4cde743796a8c63f17b5a))
* **deps:** bump i18next from 24.2.1 to 24.2.2 ([afffe26](https://github.com/terrestris/shogun-gis-client/commit/afffe26a19e15d2c28acf34960d22691b9a84846))
* **deps:** bump i18next from 24.2.2 to 24.2.3 ([8c8f42a](https://github.com/terrestris/shogun-gis-client/commit/8c8f42ac706553d59dbc9b0a97fe41133be5ff9a))
* **deps:** bump i18next-browser-languagedetector from 8.0.2 to 8.0.3 ([72a3fc5](https://github.com/terrestris/shogun-gis-client/commit/72a3fc56a45d0f3fdfc7ff8cd0789fb4353b8f59))
* **deps:** bump i18next-browser-languagedetector from 8.0.3 to 8.0.4 ([38edc36](https://github.com/terrestris/shogun-gis-client/commit/38edc36e2e3ab2654811553954bd2959c5cc2eeb))
* **deps:** bump JamesIves/github-pages-deploy-action ([aceb986](https://github.com/terrestris/shogun-gis-client/commit/aceb98618e77a163af7c9d8ef9e7114d2b31fa7c))
* **deps:** bump JamesIves/github-pages-deploy-action ([95a0b1b](https://github.com/terrestris/shogun-gis-client/commit/95a0b1b5570bf7e23d50096850a8056d39c7270e))
* **deps:** bump keycloak-js from 26.1.0 to 26.1.1 ([5f8f37f](https://github.com/terrestris/shogun-gis-client/commit/5f8f37f9bf1a65dd662a83108c8d35e0aef1fb0e))
* **deps:** bump keycloak-js from 26.1.1 to 26.1.2 ([2684fc8](https://github.com/terrestris/shogun-gis-client/commit/2684fc86a08c87cd9edf2982d711e952a35dcb35))
* **deps:** bump keycloak-js from 26.1.2 to 26.2.0 ([93402b2](https://github.com/terrestris/shogun-gis-client/commit/93402b2716196322ce24cf1db42354b4d3e19764))
* **deps:** bump nginx from 1.27.1-alpine-slim to 1.27.4-alpine-slim ([6ce9814](https://github.com/terrestris/shogun-gis-client/commit/6ce9814b6697ffeb4dbf2bafa78262f2055ccded))
* **deps:** bump node from 20.17.0-alpine3.19 to 23.3.0-alpine3.19 ([2145a36](https://github.com/terrestris/shogun-gis-client/commit/2145a360115c4e5794c682cc98db013dd200077e))
* **deps:** bump ol from 10.3.1 to 10.4.0 ([3093e27](https://github.com/terrestris/shogun-gis-client/commit/3093e276f107613e09198aa55b82a64e35833f0c))
* **deps:** bump playwright from v1.36.1-jammy to v1.50.1-jammy ([64fa64d](https://github.com/terrestris/shogun-gis-client/commit/64fa64d566bd55b24820d0b0af23ef59e4a8de6e))
* **deps:** bump playwright from v1.50.1-jammy to v1.51.0-jammy ([c0e33f9](https://github.com/terrestris/shogun-gis-client/commit/c0e33f900c226d5d535816338ed897741063f1d9))
* **deps:** bump playwright from v1.51.0-jammy to v1.51.1-jammy ([479c496](https://github.com/terrestris/shogun-gis-client/commit/479c496166a6f80415442694f0476bb759a3c66f))
* **deps:** bump react-i18next from 15.4.0 to 15.4.1 ([d09365e](https://github.com/terrestris/shogun-gis-client/commit/d09365ee780ef79d86600fd8c79b8e2c0d976277))
* **deps:** bump SonarSource/sonarqube-scan-action from 3.0.0 to 4.2.1 ([c5d6b56](https://github.com/terrestris/shogun-gis-client/commit/c5d6b56d9d2fbf624d24d9a3c06a66353ac545c4))
* **deps:** bump SonarSource/sonarqube-scan-action from 4.2.1 to 5.0.0 ([83de3ef](https://github.com/terrestris/shogun-gis-client/commit/83de3ef8885242cbfea556cefeb23d70b9b8b8ee))
* merge branch 'main' into dependabot/npm_and_yarn/stylistic/eslint-plugin-4.0.1 ([b87ab82](https://github.com/terrestris/shogun-gis-client/commit/b87ab820506d55ccbb11a2f16d846634ff3cf13c))


### Changes in configuration

* build latest tag after all other tags ([b12c6da](https://github.com/terrestris/shogun-gis-client/commit/b12c6da7995ce761970d4ddb8abd21f3474469fd))
* minors ([b12c593](https://github.com/terrestris/shogun-gis-client/commit/b12c593aaf1e3daf6ad3f9b453ae1ae6686b27cd))


### Features

* add proj4 to module federation ([0a902c6](https://github.com/terrestris/shogun-gis-client/commit/0a902c67a0bfc19ce2912fae3391cbbed8d952db))
* move info opener to footer and make user menu visibility configurable ([e9764c8](https://github.com/terrestris/shogun-gis-client/commit/e9764c8057dfcce1439ba653957721f81fe2c425))
* regulary update docker base images ([436590a](https://github.com/terrestris/shogun-gis-client/commit/436590a055d2d10e4a33e576db41bec8dea33609))


### Bugfixes

* add missing key ([25a46d8](https://github.com/terrestris/shogun-gis-client/commit/25a46d80c4f7574bf862f375980f478767d49e9c))
* address several code smells detected by SonarQube ([8512706](https://github.com/terrestris/shogun-gis-client/commit/851270678dd4f42f5bd33ff5bc374ddf25b7df95))
* adds quickselect to transform ignore patterns ([81fb6a7](https://github.com/terrestris/shogun-gis-client/commit/81fb6a7508a5d6c34e3c1baa56f1040f30931dc5))
* change role ([0526c64](https://github.com/terrestris/shogun-gis-client/commit/0526c64bb614be7b3b23c0fbd3c812d01671f512))
* ensure an object is passed ([f12ca98](https://github.com/terrestris/shogun-gis-client/commit/f12ca989e36ff1576fe3eedacebcfb320b123767))
* linter warnings ([5381de5](https://github.com/terrestris/shogun-gis-client/commit/5381de5093979926a202b3251e6c9cb2965cd2b7))
* merge conflicts ([6a25912](https://github.com/terrestris/shogun-gis-client/commit/6a259128120a24ac272c3403131ce3a9ad474158))
* minor formatting issues ([5ebe326](https://github.com/terrestris/shogun-gis-client/commit/5ebe3263ab172f41bddbe2f81e83ad0a68c7f044))
* minor issues reported by sonarqube ([82c95ed](https://github.com/terrestris/shogun-gis-client/commit/82c95ed2c31b7e5a93387066c4f1df7c48a7d08b))
* move toolbar when drawer opens/closes ([bcaeef7](https://github.com/terrestris/shogun-gis-client/commit/bcaeef7d8d93f2068a9a9b9e1414eceade6f2095))
* potentially null error ([6c1256d](https://github.com/terrestris/shogun-gis-client/commit/6c1256da0b7bfb5e8074e5974ea4fddcd9fe2a48))
* resolve conflict in Draw test ([204d236](https://github.com/terrestris/shogun-gis-client/commit/204d236e0eecdf2ec9fdc20b4ddea841e82d242a))
* resolve merge conflict ([630b013](https://github.com/terrestris/shogun-gis-client/commit/630b013f610d4ea0209219ff1162d4c9233cc5df))
* set current map scale on initial render ([befadab](https://github.com/terrestris/shogun-gis-client/commit/befadab6f480e3bf02eb637163b900953798e2e2))
* update header layout ([b258ac7](https://github.com/terrestris/shogun-gis-client/commit/b258ac7bdd84a84769ab1e3e984461252d4706cd))
* use async/await syntax ([405a0a1](https://github.com/terrestris/shogun-gis-client/commit/405a0a1b4634243bf147a152b78ca72ec4d1f809))
* version conflicts ([caf86c4](https://github.com/terrestris/shogun-gis-client/commit/caf86c4d4b265b1d5aaf95645ddcf4ccd88e045d))

## [9.0.0](https://github.com/terrestris/shogun-gis-client/compare/v8.11.1...v9.0.0) (2025-01-24)


### ⚠ BREAKING CHANGES

* updates several major dependencies

The following major dependencies have been updated

- @terrestris/react-geo from version 23 to 25
- antd from 4 to 5
- react from version 17 to 18
- ol from version 7 to 10
- geostyler from 12 to 15

In addition webpack has been replaced by rspack.

### Dependencies

* add a watch:buildto npm script entry ([18d5500](https://github.com/terrestris/shogun-gis-client/commit/18d5500d3e710603f1a224301b71aa2ed38b1bf4))
* ignore test-results in subpaths ([6eb402c](https://github.com/terrestris/shogun-gis-client/commit/6eb402c6a3afd2da3fe36f4a135136580ba85f3a))
* latest updates especially shogun-util and module federation ([46a950a](https://github.com/terrestris/shogun-gis-client/commit/46a950a826c92cdeed642461de16b909477b7c58))
* merge branch 'next' into reloadFeatureFix ([810521e](https://github.com/terrestris/shogun-gis-client/commit/810521eb7157733ee05ec5306d2d542f92ddb3ce))
* **release:** 9.0.0-next.1 [skip ci] ([ec4134d](https://github.com/terrestris/shogun-gis-client/commit/ec4134d62f733a0546fc5b27908d60026aa7db8f))
* **release:** 9.0.0-next.2 [skip ci] ([d75d3d4](https://github.com/terrestris/shogun-gis-client/commit/d75d3d4fad61ee9cba450473bc736431dd3476a7)), closes [#1762](https://github.com/terrestris/shogun-gis-client/issues/1762)
* **release:** 9.0.0-next.3 [skip ci] ([5814db4](https://github.com/terrestris/shogun-gis-client/commit/5814db404d541d12d22ef6ff24770b200e850395))
* **release:** 9.0.0-next.4 [skip ci] ([ce722d3](https://github.com/terrestris/shogun-gis-client/commit/ce722d343b3020bcdc2e5d93279f2b2e4978f9b4)), closes [#1785](https://github.com/terrestris/shogun-gis-client/issues/1785)
* **release:** 9.0.0-next.5 [skip ci] ([aa8af34](https://github.com/terrestris/shogun-gis-client/commit/aa8af3400b8f53eaa36bed647be3c76e531edda7)), closes [#1784](https://github.com/terrestris/shogun-gis-client/issues/1784)
* **release:** 9.0.0-next.6 [skip ci] ([f44f9f3](https://github.com/terrestris/shogun-gis-client/commit/f44f9f34c489b334133efa663313553a32bc5a2b)), closes [#1791](https://github.com/terrestris/shogun-gis-client/issues/1791)
* remove non-working update-coverage workflow ([18956c6](https://github.com/terrestris/shogun-gis-client/commit/18956c67353bf14c668d8cbd1c7384ada0224e07))
* resolve merge conflicts ([e2e534d](https://github.com/terrestris/shogun-gis-client/commit/e2e534dd509ddf9ea5d24a4ead60561d4261e115))
* resolve merge conflicts for merge into main ([91e9bc2](https://github.com/terrestris/shogun-gis-client/commit/91e9bc28842f0b295a6efd6c6e3b56bca2803966))
* try to fix coverage pipeline ([6cc0789](https://github.com/terrestris/shogun-gis-client/commit/6cc07891af523c8b3837946886749d3442963064))
* update dependencies ([7f91b84](https://github.com/terrestris/shogun-gis-client/commit/7f91b84a8b10584b493a394b14a0fdf3c92a8d4d))
* update dependencies ([74460e9](https://github.com/terrestris/shogun-gis-client/commit/74460e992b793b8545bdd37348aaf79821947d56))
* update dependencies ([e7fc751](https://github.com/terrestris/shogun-gis-client/commit/e7fc751ccf3ab4a3015ed20506ad4bde4174f6dd))
* update react-geo ([c278008](https://github.com/terrestris/shogun-gis-client/commit/c278008daa7854c0c1119ab94cbca06718a240d8))


### Changes in configuration

* define MULTI_LINES_TEXT ([f5ba097](https://github.com/terrestris/shogun-gis-client/commit/f5ba0970dbf93a6600b23914ec8bc2792c521d7f))
* ensure proper formatting ([8b89ca4](https://github.com/terrestris/shogun-gis-client/commit/8b89ca42e18c5c4d92b9ae8f3c4ab45fce62114f))
* fix end of file ([07e397f](https://github.com/terrestris/shogun-gis-client/commit/07e397fef0a4104b2757f8f34de9447e4fcaad35))
* fix multiline handling ([d6dc266](https://github.com/terrestris/shogun-gis-client/commit/d6dc266b223c605045a1238dfb0e70efcc9d9fb9))
* properly escape echo command ([4ef7c94](https://github.com/terrestris/shogun-gis-client/commit/4ef7c94fb6d3ec15a639e2f4a1206940f0bae384))
* store and pass multiple-files-input correctly ([9a7cb97](https://github.com/terrestris/shogun-gis-client/commit/9a7cb97ce769260dde5f3471c30a801c58303daa))


### Features

* add XYZ and Stamen/Stadia serializers ([a0141cf](https://github.com/terrestris/shogun-gis-client/commit/a0141cf952325f360ddacebdb0942e57a4565625))
* adds a configuration in the ToolConfig in order to customise display of layer-icons per app ([2f6538f](https://github.com/terrestris/shogun-gis-client/commit/2f6538f67796b079bd5a52d5dd8443293f8e0d98))
* adds icon to indicate searchable, hoverable and/or editable layer ([25ef26a](https://github.com/terrestris/shogun-gis-client/commit/25ef26ae78e0e03b5b09420ceaaa56f6051b2ea3))
* adds Map Toolbar to the gis-client ([#1784](https://github.com/terrestris/shogun-gis-client/issues/1784)) ([6159ce8](https://github.com/terrestris/shogun-gis-client/commit/6159ce80c32df260f4d08202f1468517db3897bc))
* adds reroute link from error page to login ([133c46c](https://github.com/terrestris/shogun-gis-client/commit/133c46c3489ba44e4eea85f7d556ba1ac892d0a2))
* adds tooltips to layertree icons ([#1785](https://github.com/terrestris/shogun-gis-client/issues/1785)) ([05cf7ea](https://github.com/terrestris/shogun-gis-client/commit/05cf7ea0deae93224e07438720c3d01d237eff33))
* include wfs search and refactor MultiSearch ([ada52b2](https://github.com/terrestris/shogun-gis-client/commit/ada52b2e5f55b9303c5191b4dd5c690343ae6933))
* init ImportDataModal (and fix minor styling issues) ([08b1016](https://github.com/terrestris/shogun-gis-client/commit/08b101692153ce3192b5cc30f3daf21eb0738e94))
* introduces the new api endpoint applicationName ([#1791](https://github.com/terrestris/shogun-gis-client/issues/1791)) ([3d07d57](https://github.com/terrestris/shogun-gis-client/commit/3d07d5703e863c496c13610d6b89e1ae93e74de2))
* parse map interactions ([4525420](https://github.com/terrestris/shogun-gis-client/commit/4525420966f92aefdedc613c885f4015334e444f))
* remove static loading text, add loading indicator and minor css cleanup ([92b0ec7](https://github.com/terrestris/shogun-gis-client/commit/92b0ec7509a7fbdcbe0a0ecdd1efa3a8078b2a06))
* update all dependencies to their latest versions ([3cfe3b3](https://github.com/terrestris/shogun-gis-client/commit/3cfe3b334a84cfd668825f34ace637bb414ecbf2))
* update react-geo ([d51a10b](https://github.com/terrestris/shogun-gis-client/commit/d51a10b0abec01f80c80551ec6a2b01596e3434b))


### Bugfixes

* add layer to target group before adding it to the map ([4279c64](https://github.com/terrestris/shogun-gis-client/commit/4279c64d30b6a2215c0f1d6123209ae10989d3a9))
* add missing fields due to dependency update ([d623c5a](https://github.com/terrestris/shogun-gis-client/commit/d623c5ab0e37993e40d0598f2a671e3df36f7ef4))
* add missing keys in list ([9719761](https://github.com/terrestris/shogun-gis-client/commit/97197618bffc3f0b694af914ccde69e34f6b2316))
* check condition for icon display and styling ([bc33a7e](https://github.com/terrestris/shogun-gis-client/commit/bc33a7ebbd80eef550abf653843036302a416f2c))
* condition checks and css ([87a1114](https://github.com/terrestris/shogun-gis-client/commit/87a1114f8b7ba89e461b19010ce388b96e60859f))
* coverage comment ([f43c290](https://github.com/terrestris/shogun-gis-client/commit/f43c2907b0212cf709719413e2ccde2869895eef))
* coverage comment (use printf) ([3c0cab7](https://github.com/terrestris/shogun-gis-client/commit/3c0cab76a4b45a2655c145651edb7509a080661e))
* create deep clone from state value ([66dcc10](https://github.com/terrestris/shogun-gis-client/commit/66dcc10cb9f580e6128512b1631ca61112368354))
* cursor jumps on keystroke ([691fe6f](https://github.com/terrestris/shogun-gis-client/commit/691fe6f90535f710afbdc21bae9a645d5dd5bc5c))
* drag and drop in nodeTitleRenderer ([a9264f2](https://github.com/terrestris/shogun-gis-client/commit/a9264f253ca88dd0d3e85d379695c9f9b31227c0))
* fix client with terrestris dependencies update ([984dc23](https://github.com/terrestris/shogun-gis-client/commit/984dc23b2b2b9f6398746c145f5f6a0b360827b1))
* geometry edit tools and styling ([#1762](https://github.com/terrestris/shogun-gis-client/issues/1762)) ([1b6b833](https://github.com/terrestris/shogun-gis-client/commit/1b6b8332fa09a5188c397e66d60fd102c395b878))
* layertree checkbox css ([c008409](https://github.com/terrestris/shogun-gis-client/commit/c0084092c5de192c0fad2ce2c00c20e4ccf2f100))
* layout and styling ([b8ee0df](https://github.com/terrestris/shogun-gis-client/commit/b8ee0dfce6822cea53b497c6ee2da8b9ce64d659))
* layout fixes ([3312620](https://github.com/terrestris/shogun-gis-client/commit/331262046e54883ec91761ea37d756effd40ee42))
* make gfi edit button work in all scenarios ([96560c6](https://github.com/terrestris/shogun-gis-client/commit/96560c6d2f5ebbcedc53d2f78d246e8473422236))
* make metadata configurable ([e8b5d3a](https://github.com/terrestris/shogun-gis-client/commit/e8b5d3a1d6c1cf892a421eca81960687528fb357))
* padding and extend link to the text ([038f251](https://github.com/terrestris/shogun-gis-client/commit/038f2510f67bf758131964fa7ac0731847696fc1))
* padding in header ([3ed6ee5](https://github.com/terrestris/shogun-gis-client/commit/3ed6ee5bca855aba6788134ced0d2075c832b5b9))
* prevent unnecessary rerenders of the Legend ([8219f57](https://github.com/terrestris/shogun-gis-client/commit/8219f57cf461acbda5da0f857209b17c44dbb7bd))
* reactivate drill down feature info requests ([0058b88](https://github.com/terrestris/shogun-gis-client/commit/0058b88aa37dab53ac93a2a823b5f5ab9a3930cc))
* readd support for a custom favicon path ([7bd4bf4](https://github.com/terrestris/shogun-gis-client/commit/7bd4bf455066af2ee95d84c8baf3838913fc61b5))
* reloadFeature ([703b34f](https://github.com/terrestris/shogun-gis-client/commit/703b34f8704a30288675548de31d6aeb5b6e0d1b))
* remove empty element and add check ([a06b8ee](https://github.com/terrestris/shogun-gis-client/commit/a06b8ee710f819cbb97d41d17f05e27f5dccbcc3))
* restore the initial value ([a73e05b](https://github.com/terrestris/shogun-gis-client/commit/a73e05b07967932118817f76dfebf96ecb2cde09))
* rewording of translation text ([f76cf95](https://github.com/terrestris/shogun-gis-client/commit/f76cf9580c18ec374fd6ef12ebd2786385c9ecae))
* set correct translation key ([f06f46b](https://github.com/terrestris/shogun-gis-client/commit/f06f46b14a733f2fd4d87710801b13d3d24ceee8))
* show legend for WMS layers only ([26dc9ee](https://github.com/terrestris/shogun-gis-client/commit/26dc9ee747266f632df975b0ffb3f93ed145973d))
* styling ([553d512](https://github.com/terrestris/shogun-gis-client/commit/553d51202a49124339fa0e76e022ce66446b607e))
* update feature info to changes in react-geo ([35e8ab1](https://github.com/terrestris/shogun-gis-client/commit/35e8ab18773416dc071f8e47ea89925e244043f7))
* white space ([080d582](https://github.com/terrestris/shogun-gis-client/commit/080d5827293cd25d9b0101bf7020eef076209e09))

## [9.0.0-next.6](https://github.com/terrestris/shogun-gis-client/compare/v9.0.0-next.5...v9.0.0-next.6) (2025-01-24)


### Dependencies

* add a watch:buildto npm script entry ([18d5500](https://github.com/terrestris/shogun-gis-client/commit/18d5500d3e710603f1a224301b71aa2ed38b1bf4))
* update dependencies ([7f91b84](https://github.com/terrestris/shogun-gis-client/commit/7f91b84a8b10584b493a394b14a0fdf3c92a8d4d))
* update dependencies ([74460e9](https://github.com/terrestris/shogun-gis-client/commit/74460e992b793b8545bdd37348aaf79821947d56))


### Features

* introduces the new api endpoint applicationName ([#1791](https://github.com/terrestris/shogun-gis-client/issues/1791)) ([3d07d57](https://github.com/terrestris/shogun-gis-client/commit/3d07d5703e863c496c13610d6b89e1ae93e74de2))


### Bugfixes

* add missing keys in list ([9719761](https://github.com/terrestris/shogun-gis-client/commit/97197618bffc3f0b694af914ccde69e34f6b2316))
* condition checks and css ([87a1114](https://github.com/terrestris/shogun-gis-client/commit/87a1114f8b7ba89e461b19010ce388b96e60859f))

## [9.0.0-next.5](https://github.com/terrestris/shogun-gis-client/compare/v9.0.0-next.4...v9.0.0-next.5) (2025-01-15)


### Dependencies

* latest updates especially shogun-util and module federation ([46a950a](https://github.com/terrestris/shogun-gis-client/commit/46a950a826c92cdeed642461de16b909477b7c58))
* **release:** 8.11.1 [skip ci] ([aaf88e9](https://github.com/terrestris/shogun-gis-client/commit/aaf88e9f7dbeb885981a17221c8fe0b472a8cbab))
* resolve merge conflicts ([e2e534d](https://github.com/terrestris/shogun-gis-client/commit/e2e534dd509ddf9ea5d24a4ead60561d4261e115))
* resolve merge conflicts for merge into main ([91e9bc2](https://github.com/terrestris/shogun-gis-client/commit/91e9bc28842f0b295a6efd6c6e3b56bca2803966))


### Changes in configuration

* define MULTI_LINES_TEXT ([f5ba097](https://github.com/terrestris/shogun-gis-client/commit/f5ba0970dbf93a6600b23914ec8bc2792c521d7f))
* ensure proper formatting ([8b89ca4](https://github.com/terrestris/shogun-gis-client/commit/8b89ca42e18c5c4d92b9ae8f3c4ab45fce62114f))
* fix end of file ([07e397f](https://github.com/terrestris/shogun-gis-client/commit/07e397fef0a4104b2757f8f34de9447e4fcaad35))
* fix multiline handling ([d6dc266](https://github.com/terrestris/shogun-gis-client/commit/d6dc266b223c605045a1238dfb0e70efcc9d9fb9))
* properly escape echo command ([4ef7c94](https://github.com/terrestris/shogun-gis-client/commit/4ef7c94fb6d3ec15a639e2f4a1206940f0bae384))
* store and pass multiple-files-input correctly ([9a7cb97](https://github.com/terrestris/shogun-gis-client/commit/9a7cb97ce769260dde5f3471c30a801c58303daa))


### Features

* adds Map Toolbar to the gis-client ([#1784](https://github.com/terrestris/shogun-gis-client/issues/1784)) ([6159ce8](https://github.com/terrestris/shogun-gis-client/commit/6159ce80c32df260f4d08202f1468517db3897bc))
* update react-geo ([d51a10b](https://github.com/terrestris/shogun-gis-client/commit/d51a10b0abec01f80c80551ec6a2b01596e3434b))


### Bugfixes

* coverage comment ([f43c290](https://github.com/terrestris/shogun-gis-client/commit/f43c2907b0212cf709719413e2ccde2869895eef))
* coverage comment (use printf) ([3c0cab7](https://github.com/terrestris/shogun-gis-client/commit/3c0cab76a4b45a2655c145651edb7509a080661e))

## [9.0.0-next.4](https://github.com/terrestris/shogun-gis-client/compare/v9.0.0-next.3...v9.0.0-next.4) (2025-01-09)


### Dependencies

* update dependencies ([e7fc751](https://github.com/terrestris/shogun-gis-client/commit/e7fc751ccf3ab4a3015ed20506ad4bde4174f6dd))


### Features

* adds tooltips to layertree icons ([#1785](https://github.com/terrestris/shogun-gis-client/issues/1785)) ([05cf7ea](https://github.com/terrestris/shogun-gis-client/commit/05cf7ea0deae93224e07438720c3d01d237eff33))


### Bugfixes

* layertree checkbox css ([c008409](https://github.com/terrestris/shogun-gis-client/commit/c0084092c5de192c0fad2ce2c00c20e4ccf2f100))
* prevent unnecessary rerenders of the Legend ([8219f57](https://github.com/terrestris/shogun-gis-client/commit/8219f57cf461acbda5da0f857209b17c44dbb7bd))
* reactivate drill down feature info requests ([0058b88](https://github.com/terrestris/shogun-gis-client/commit/0058b88aa37dab53ac93a2a823b5f5ab9a3930cc))
* show legend for WMS layers only ([26dc9ee](https://github.com/terrestris/shogun-gis-client/commit/26dc9ee747266f632df975b0ffb3f93ed145973d))

## [9.0.0-next.3](https://github.com/terrestris/shogun-gis-client/compare/v9.0.0-next.2...v9.0.0-next.3) (2024-12-18)


### Dependencies

* ignore test-results in subpaths ([6eb402c](https://github.com/terrestris/shogun-gis-client/commit/6eb402c6a3afd2da3fe36f4a135136580ba85f3a))
* merge branch 'next' into reloadFeatureFix ([810521e](https://github.com/terrestris/shogun-gis-client/commit/810521eb7157733ee05ec5306d2d542f92ddb3ce))
* update react-geo ([c278008](https://github.com/terrestris/shogun-gis-client/commit/c278008daa7854c0c1119ab94cbca06718a240d8))


### Features

* adds a configuration in the ToolConfig in order to customise display of layer-icons per app ([2f6538f](https://github.com/terrestris/shogun-gis-client/commit/2f6538f67796b079bd5a52d5dd8443293f8e0d98))
* adds icon to indicate searchable, hoverable and/or editable layer ([25ef26a](https://github.com/terrestris/shogun-gis-client/commit/25ef26ae78e0e03b5b09420ceaaa56f6051b2ea3))
* include wfs search and refactor MultiSearch ([ada52b2](https://github.com/terrestris/shogun-gis-client/commit/ada52b2e5f55b9303c5191b4dd5c690343ae6933))


### Bugfixes

* add missing fields due to dependency update ([d623c5a](https://github.com/terrestris/shogun-gis-client/commit/d623c5ab0e37993e40d0598f2a671e3df36f7ef4))
* check condition for icon display and styling ([bc33a7e](https://github.com/terrestris/shogun-gis-client/commit/bc33a7ebbd80eef550abf653843036302a416f2c))
* create deep clone from state value ([66dcc10](https://github.com/terrestris/shogun-gis-client/commit/66dcc10cb9f580e6128512b1631ca61112368354))
* drag and drop in nodeTitleRenderer ([a9264f2](https://github.com/terrestris/shogun-gis-client/commit/a9264f253ca88dd0d3e85d379695c9f9b31227c0))
* fix client with terrestris dependencies update ([984dc23](https://github.com/terrestris/shogun-gis-client/commit/984dc23b2b2b9f6398746c145f5f6a0b360827b1))
* layout fixes ([3312620](https://github.com/terrestris/shogun-gis-client/commit/331262046e54883ec91761ea37d756effd40ee42))
* make gfi edit button work in all scenarios ([96560c6](https://github.com/terrestris/shogun-gis-client/commit/96560c6d2f5ebbcedc53d2f78d246e8473422236))
* padding and extend link to the text ([038f251](https://github.com/terrestris/shogun-gis-client/commit/038f2510f67bf758131964fa7ac0731847696fc1))
* padding in header ([3ed6ee5](https://github.com/terrestris/shogun-gis-client/commit/3ed6ee5bca855aba6788134ced0d2075c832b5b9))
* readd support for a custom favicon path ([7bd4bf4](https://github.com/terrestris/shogun-gis-client/commit/7bd4bf455066af2ee95d84c8baf3838913fc61b5))
* reloadFeature ([703b34f](https://github.com/terrestris/shogun-gis-client/commit/703b34f8704a30288675548de31d6aeb5b6e0d1b))

## [9.0.0-next.2](https://github.com/terrestris/shogun-gis-client/compare/v9.0.0-next.1...v9.0.0-next.2) (2024-11-27)


### Features

* add XYZ and Stamen/Stadia serializers ([a0141cf](https://github.com/terrestris/shogun-gis-client/commit/a0141cf952325f360ddacebdb0942e57a4565625))
* adds reroute link from error page to login ([133c46c](https://github.com/terrestris/shogun-gis-client/commit/133c46c3489ba44e4eea85f7d556ba1ac892d0a2))
* init ImportDataModal (and fix minor styling issues) ([08b1016](https://github.com/terrestris/shogun-gis-client/commit/08b101692153ce3192b5cc30f3daf21eb0738e94))
* parse map interactions ([4525420](https://github.com/terrestris/shogun-gis-client/commit/4525420966f92aefdedc613c885f4015334e444f))
* remove static loading text, add loading indicator and minor css cleanup ([92b0ec7](https://github.com/terrestris/shogun-gis-client/commit/92b0ec7509a7fbdcbe0a0ecdd1efa3a8078b2a06))


### Bugfixes

* add layer to target group before adding it to the map ([4279c64](https://github.com/terrestris/shogun-gis-client/commit/4279c64d30b6a2215c0f1d6123209ae10989d3a9))
* cursor jumps on keystroke ([691fe6f](https://github.com/terrestris/shogun-gis-client/commit/691fe6f90535f710afbdc21bae9a645d5dd5bc5c))
* geometry edit tools and styling ([#1762](https://github.com/terrestris/shogun-gis-client/issues/1762)) ([1b6b833](https://github.com/terrestris/shogun-gis-client/commit/1b6b8332fa09a5188c397e66d60fd102c395b878))
* layout and styling ([b8ee0df](https://github.com/terrestris/shogun-gis-client/commit/b8ee0dfce6822cea53b497c6ee2da8b9ce64d659))
* make metadata configurable ([e8b5d3a](https://github.com/terrestris/shogun-gis-client/commit/e8b5d3a1d6c1cf892a421eca81960687528fb357))
* remove empty element and add check ([a06b8ee](https://github.com/terrestris/shogun-gis-client/commit/a06b8ee710f819cbb97d41d17f05e27f5dccbcc3))
* restore the initial value ([a73e05b](https://github.com/terrestris/shogun-gis-client/commit/a73e05b07967932118817f76dfebf96ecb2cde09))
* rewording of translation text ([f76cf95](https://github.com/terrestris/shogun-gis-client/commit/f76cf9580c18ec374fd6ef12ebd2786385c9ecae))
* styling ([553d512](https://github.com/terrestris/shogun-gis-client/commit/553d51202a49124339fa0e76e022ce66446b607e))
* update feature info to changes in react-geo ([35e8ab1](https://github.com/terrestris/shogun-gis-client/commit/35e8ab18773416dc071f8e47ea89925e244043f7))
* white space ([080d582](https://github.com/terrestris/shogun-gis-client/commit/080d5827293cd25d9b0101bf7020eef076209e09))

## [9.0.0-next.1](https://github.com/terrestris/shogun-gis-client/compare/v8.11.0...v9.0.0-next.1) (2024-10-18)


### ⚠ BREAKING CHANGES

* updates several major dependencies

The following major dependencies have been updated

- @terrestris/react-geo from version 23 to 25
- antd from 4 to 5
- react from version 17 to 18
- ol from version 7 to 10
- geostyler from 12 to 15

In addition webpack has been replaced by rspack.

### Dependencies

* **deps:** bump SonarSource/sonarqube-scan-action from 2.3.0 to 3.0.0 ([8cbb4e6](https://github.com/terrestris/shogun-gis-client/commit/8cbb4e60ca811f3d32800c4795729a7a58616297))


### Changes in configuration

* enable releases from next and 8.x branches ([069e941](https://github.com/terrestris/shogun-gis-client/commit/069e941aa01cedd23da7d48d939eb9885c3fd234))


### Features

* update all dependencies to their latest versions ([3cfe3b3](https://github.com/terrestris/shogun-gis-client/commit/3cfe3b334a84cfd668825f34ace637bb414ecbf2))


### Bugfixes

* :lipstick: ([050ef7e](https://github.com/terrestris/shogun-gis-client/commit/050ef7ec6616f4014bcecbc5f30814c2b979e413))
* fixes broken image symbol ([ef955f0](https://github.com/terrestris/shogun-gis-client/commit/ef955f0c3f4481efd0f12f27ee73fef9680857ee))
* fixes bug in case no appID is passed ([95e9a23](https://github.com/terrestris/shogun-gis-client/commit/95e9a23f6c58cf8b8699ee24a03c3a692f297a2e))

## [8.11.1](https://github.com/terrestris/shogun-gis-client/compare/v8.11.0...v8.11.1) (2024-10-18)


### Dependencies

* **deps:** bump SonarSource/sonarqube-scan-action from 2.3.0 to 3.0.0 ([8cbb4e6](https://github.com/terrestris/shogun-gis-client/commit/8cbb4e60ca811f3d32800c4795729a7a58616297))


### Changes in configuration

* enable releases from next and 8.x branches ([069e941](https://github.com/terrestris/shogun-gis-client/commit/069e941aa01cedd23da7d48d939eb9885c3fd234))


### Bugfixes

* :lipstick: ([050ef7e](https://github.com/terrestris/shogun-gis-client/commit/050ef7ec6616f4014bcecbc5f30814c2b979e413))
* fixes broken image symbol ([ef955f0](https://github.com/terrestris/shogun-gis-client/commit/ef955f0c3f4481efd0f12f27ee73fef9680857ee))
* fixes bug in case no appID is passed ([95e9a23](https://github.com/terrestris/shogun-gis-client/commit/95e9a23f6c58cf8b8699ee24a03c3a692f297a2e))

## [8.11.0](https://github.com/terrestris/shogun-gis-client/compare/v8.10.0...v8.11.0) (2024-09-17)


### Features

* introduces the urlDisplayValue ([fe933cb](https://github.com/terrestris/shogun-gis-client/commit/fe933cb25650faee849a479a6fcec7defcd9cc95))

## [8.10.0](https://github.com/terrestris/shogun-gis-client/compare/v8.9.0...v8.10.0) (2024-09-16)


### Features

* masks a link if present ([54aa536](https://github.com/terrestris/shogun-gis-client/commit/54aa5363a9a29e4210059000b0ebabeffcacc7ae))

## [8.9.0](https://github.com/terrestris/shogun-gis-client/compare/v8.8.0...v8.9.0) (2024-09-11)


### Dependencies

* **deps-dev:** bump @commitlint/cli from 19.3.0 to 19.4.0 ([46d98cc](https://github.com/terrestris/shogun-gis-client/commit/46d98ccbf436a2d5f4ade934eb39255a566004f2))
* **deps-dev:** bump @playwright/test from 1.45.3 to 1.46.0 ([6f3f6c9](https://github.com/terrestris/shogun-gis-client/commit/6f3f6c9250a9dd525e74ea3a8d22ca5df5d44358))
* **deps-dev:** bump @semantic-release/github from 10.1.3 to 10.1.5 ([b6286e0](https://github.com/terrestris/shogun-gis-client/commit/b6286e04e2dcefb1c4826a51e982d244a2462453))
* **deps-dev:** bump @types/node from 22.0.2 to 22.3.0 ([5c20ba6](https://github.com/terrestris/shogun-gis-client/commit/5c20ba6035e99f8c1a37389c8932ad159a06cee1))
* **deps-dev:** bump typescript from 5.5.3 to 5.5.4 ([0d32143](https://github.com/terrestris/shogun-gis-client/commit/0d321433a657d079919e1d83a3069c3155bb17f8))
* **deps:** bump i18next from 23.12.2 to 23.12.3 ([60b5ee6](https://github.com/terrestris/shogun-gis-client/commit/60b5ee67545ae9a20ddc43d284bf18915adaeb65))
* **deps:** bump i18next from 23.12.3 to 23.12.7 ([785e8e4](https://github.com/terrestris/shogun-gis-client/commit/785e8e44e88db1b5ce41481ec21cfd89b7b1ccba))
* **deps:** bump react-i18next from 15.0.0 to 15.0.1 ([5537b2c](https://github.com/terrestris/shogun-gis-client/commit/5537b2cb9801abacca4cc6bad7729693bd85bf35))


### Changes in configuration

* disable dependabot ([3ccf9f1](https://github.com/terrestris/shogun-gis-client/commit/3ccf9f1d683830e8612153de122afc7cf45da793))


### Features

* adds a config for documentation button ([805b234](https://github.com/terrestris/shogun-gis-client/commit/805b234c99c3c94a2a2483a4dcf6d417c2d4048b))
* Introduce docs button ([#1743](https://github.com/terrestris/shogun-gis-client/issues/1743)) ([c292538](https://github.com/terrestris/shogun-gis-client/commit/c292538e1415349d46f32525a92396e6fad38b09))
* introduces dataType and valueMap to Displayfield ([411a1e7](https://github.com/terrestris/shogun-gis-client/commit/411a1e7552108e80c2d55a12f546ec9b5dfb93b9))


### Bugfixes

* escape github action conditions ([d5f8474](https://github.com/terrestris/shogun-gis-client/commit/d5f847473752e765499ecf56537fa4e196417816))

## [8.8.0](https://github.com/terrestris/shogun-gis-client/compare/v8.7.0...v8.8.0) (2024-08-06)


### Dependencies

* **deps:** bump i18next from 23.11.5 to 23.12.2 ([e53644e](https://github.com/terrestris/shogun-gis-client/commit/e53644e1c33adf54b5730bcdb7998d26e5a9d655))


### Features

* set layer visible on search result click ([e4235b2](https://github.com/terrestris/shogun-gis-client/commit/e4235b27a918b62ebcfb1311d45fcec2e2edab34))

## [8.7.0](https://github.com/terrestris/shogun-gis-client/compare/v8.6.2...v8.7.0) (2024-08-05)


### Dependencies

* **deps-dev:** bump @babel/cli from 7.24.7 to 7.24.8 ([7b63152](https://github.com/terrestris/shogun-gis-client/commit/7b63152a98d93ca796b7e32c0d853c43e50a5459))
* **deps-dev:** bump @babel/core from 7.24.7 to 7.25.2 ([4d87cae](https://github.com/terrestris/shogun-gis-client/commit/4d87cae953bbe8eb7efbcfac83390fa1a16e565a))
* **deps-dev:** bump @babel/preset-env from 7.24.7 to 7.25.0 ([283eac2](https://github.com/terrestris/shogun-gis-client/commit/283eac23d5a350d50b13ba5a63a967ab0009953e))
* **deps-dev:** bump @babel/preset-env from 7.25.0 to 7.25.3 ([8ac4fcc](https://github.com/terrestris/shogun-gis-client/commit/8ac4fcc8d1db9a46c6de463eb8de149859ed4870))
* **deps-dev:** bump @babel/runtime from 7.24.7 to 7.25.0 ([c0fdf8b](https://github.com/terrestris/shogun-gis-client/commit/c0fdf8bc714c5255003683f0ad9385793335c19a))
* **deps-dev:** bump @playwright/test from 1.45.1 to 1.45.3 ([893fb40](https://github.com/terrestris/shogun-gis-client/commit/893fb407af18d88cf8ab38d4a0611bb94d3d22da))
* **deps-dev:** bump @semantic-release/github from 10.0.7 to 10.1.3 ([cf44134](https://github.com/terrestris/shogun-gis-client/commit/cf4413467fab3f1ef797e372e7d1a59c76b5023b))
* **deps-dev:** bump @types/node from 20.14.9 to 22.0.2 ([758f9c6](https://github.com/terrestris/shogun-gis-client/commit/758f9c6f7cb7afd9f20df7375a308447bcd18fd6))
* **deps-dev:** bump eslint-plugin-react from 7.34.3 to 7.35.0 ([697eb0a](https://github.com/terrestris/shogun-gis-client/commit/697eb0a728f4c90f48e494fc6fbc179b4ada167b))
* **deps-dev:** bump husky from 9.0.11 to 9.1.4 ([77c1894](https://github.com/terrestris/shogun-gis-client/commit/77c1894bf7048f6779e8967170c51c26d7da2f3f))
* **deps-dev:** bump webpack from 5.92.1 to 5.93.0 ([27cd7f6](https://github.com/terrestris/shogun-gis-client/commit/27cd7f64d3e1da2ea891b1eee040c70cb0093ddb))
* **deps:** bump @reduxjs/toolkit from 2.2.6 to 2.2.7 ([341b758](https://github.com/terrestris/shogun-gis-client/commit/341b758f4b3c038e9238024d565b6f664bdb807a))
* **deps:** bump JamesIves/github-pages-deploy-action ([53fd113](https://github.com/terrestris/shogun-gis-client/commit/53fd1135eeb0420e288c577d64ec018fb35a00e8))
* **deps:** bump keycloak-js from 25.0.1 to 25.0.2 ([706ca18](https://github.com/terrestris/shogun-gis-client/commit/706ca182c3d8a96ebcdafdcd9fe401f7a4f05943))
* **deps:** bump react-i18next from 14.1.2 to 15.0.0 ([87946e6](https://github.com/terrestris/shogun-gis-client/commit/87946e6a6050107fde9759f03d60191fa0f25129))
* update jest and jest-config ([db2ecab](https://github.com/terrestris/shogun-gis-client/commit/db2ecab7b58ca7584e936fabfe45824f1c3ec8a8))


### Changes in configuration

* add sonar host url ([5be37c7](https://github.com/terrestris/shogun-gis-client/commit/5be37c7913445a0144172fe04c8e871c1d91139a))
* change sonarqube scanner action ([c5a9ab5](https://github.com/terrestris/shogun-gis-client/commit/c5a9ab50d6bd5ab9abb431aa6097984d8be031a3))
* change sonarqube scanner action ([99fd352](https://github.com/terrestris/shogun-gis-client/commit/99fd352093b0ef2c69a0e405b10b86b5f4544a1c))
* checkout pr branch ([4186c86](https://github.com/terrestris/shogun-gis-client/commit/4186c869d40aa2ee941ab0461eb4ee511b1063bc))
* checkout pr merge branch ([fb8771a](https://github.com/terrestris/shogun-gis-client/commit/fb8771ae4185e5669e2ba5ca915c1a4a5195454c))
* create new local branch for tests ([4eb2e4b](https://github.com/terrestris/shogun-gis-client/commit/4eb2e4bfae51e4dee9b17226b493e5d03812997e))
* fetch branches for test run ([48a7e40](https://github.com/terrestris/shogun-gis-client/commit/48a7e40b55bff8edf86c0117d5c2f449fd3504c3))
* fetch only relevant branch ([032bd8f](https://github.com/terrestris/shogun-gis-client/commit/032bd8f8fb81d264093d5b0bb47dd15a5e124fdd))
* fix branch checkout ([02f195d](https://github.com/terrestris/shogun-gis-client/commit/02f195d7b5eb93c3e7c6df20268e5a3596ee424f))
* fix branch checkout ([87990ff](https://github.com/terrestris/shogun-gis-client/commit/87990ff1c7f89d22152e5cb9f8753c5f88e39a78))
* fix token and host url ([3adfa91](https://github.com/terrestris/shogun-gis-client/commit/3adfa91006e0215e53c9878fcbf46e6c0151e91f))
* handle special characters correctly ([69d2063](https://github.com/terrestris/shogun-gis-client/commit/69d2063d262aca5a2c94a66c1e7dc826e057fdcd))
* restore branch ([f8649df](https://github.com/terrestris/shogun-gis-client/commit/f8649dfb907acf6fb5abc37f91f7e9cfa4148837))
* revert changes to test on branch ([3416e71](https://github.com/terrestris/shogun-gis-client/commit/3416e718abb388c2406fcf2244cfb334cf14a745))
* set coverage report paths ([18cf6dc](https://github.com/terrestris/shogun-gis-client/commit/18cf6dc4d83b6babd33e5ffabdc3fa1470ada9ee))
* sort workflow steps ([3247512](https://github.com/terrestris/shogun-gis-client/commit/3247512eaa45f7bc59a8faf4ba0987477a16e3ff))
* test sonarqube-scan on branch ([689f718](https://github.com/terrestris/shogun-gis-client/commit/689f7188e9c46f0387ce285857069e9c81e41757))
* update jest test for changed files to use changedSince ([7fb8f90](https://github.com/terrestris/shogun-gis-client/commit/7fb8f90d6e155cb144e494d03f98cc6167060ed7))


### Features

* activate layer on search result click ([2cb8f27](https://github.com/terrestris/shogun-gis-client/commit/2cb8f27d7e840fb3b6c8f4f58eaee1aef9581a34))
* show legends per default ([a728d7b](https://github.com/terrestris/shogun-gis-client/commit/a728d7b2bb5644dde453912520e2531073cde544))


### Bugfixes

* add lcov to coverageReporters ([1a7a32c](https://github.com/terrestris/shogun-gis-client/commit/1a7a32c18a81e36f633de7fed5336a37f337389c))
* error handling ([4dd078f](https://github.com/terrestris/shogun-gis-client/commit/4dd078ff66643c0595bc2665ecaba7dfe7174ff0))
* resolve comments ([c068bc2](https://github.com/terrestris/shogun-gis-client/commit/c068bc2e63d05c0c5bdb94114dc3125e207bb22f))
* skip coverage jobs for dependabot PRs ([d0d62b4](https://github.com/terrestris/shogun-gis-client/commit/d0d62b42286cdee8bd03cc5b557b05bd9d555afd))
* spacing ([31528cc](https://github.com/terrestris/shogun-gis-client/commit/31528cc46ed767c3538676d0f4263f0f8047c618))
* use info icon for feature info ([db8cc81](https://github.com/terrestris/shogun-gis-client/commit/db8cc8198ac1cac4f0dc5a5fb002fd9a35e1aaaf))

## [8.6.2](https://github.com/terrestris/shogun-gis-client/compare/v8.6.1...v8.6.2) (2024-07-08)


### Bugfixes

* search result display overflow ([08a0b03](https://github.com/terrestris/shogun-gis-client/commit/08a0b03af3df5b3552305b9281526a22f14c1bb0))
* update semantic release version in CI ([5cc9692](https://github.com/terrestris/shogun-gis-client/commit/5cc9692f898d7ed44d85d90bc62b3d5c3791d678))

## [8.6.1](https://github.com/terrestris/shogun-gis-client/compare/v8.6.0...v8.6.1) (2024-07-05)


### Changes in configuration

* ajust paths for sonarqube scan ([9136b88](https://github.com/terrestris/shogun-gis-client/commit/9136b88e18dbf67098dadbf53988b8c3aef391fd))
* remove empty lines ([e89f493](https://github.com/terrestris/shogun-gis-client/commit/e89f4935fe12c6773d4b9bee8208d0e76f082e97))
* sonarqube-scan does not run when merging from dependabot ([fec465c](https://github.com/terrestris/shogun-gis-client/commit/fec465cddaeb6d612a8a188ce18b93ab6afdf416))


### Bugfixes

* simplify query for multiple feature types ([25b1625](https://github.com/terrestris/shogun-gis-client/commit/25b162502d7f3c61278ca164991c041279c910af))

## [8.6.0](https://github.com/terrestris/shogun-gis-client/compare/v8.5.0...v8.6.0) (2024-06-28)


### Dependencies

* add comments ([a7404db](https://github.com/terrestris/shogun-gis-client/commit/a7404db2bade748abab740f1f69b2a0cdb6111e6))
* **deps-dev:** bump @playwright/test from 1.44.1 to 1.45.0 ([57988bc](https://github.com/terrestris/shogun-gis-client/commit/57988bce1ab9de439926cdaf620b1323efb4f172))
* **deps-dev:** bump @semantic-release/release-notes-generator ([8d514c1](https://github.com/terrestris/shogun-gis-client/commit/8d514c1b41f6ef85599840f026ba43262b144c54))
* **deps-dev:** bump @types/node from 20.14.2 to 20.14.9 ([551a786](https://github.com/terrestris/shogun-gis-client/commit/551a7867933726acc0a57c8802b66b9379955929))
* **deps-dev:** bump eslint-plugin-react from 7.34.1 to 7.34.3 ([c822e9c](https://github.com/terrestris/shogun-gis-client/commit/c822e9c99e801ebe6b5ca8ee6d8d11e6feb68d69))
* **deps-dev:** bump typescript from 5.4.5 to 5.5.2 ([93cf21b](https://github.com/terrestris/shogun-gis-client/commit/93cf21b0d8dc51590123cbc90fdf3afb51d73789))
* **deps-dev:** bump webpack from 5.91.0 to 5.92.1 ([94b845f](https://github.com/terrestris/shogun-gis-client/commit/94b845f41a6e5e0bfaf00c7707d25fb2d790a7f0))
* **deps:** bump docker/build-push-action from 5 to 6 ([bd8bbc3](https://github.com/terrestris/shogun-gis-client/commit/bd8bbc3041ae295c5407dc637f4284cc54d1ace7))
* **deps:** bump keycloak-js from 24.0.3 to 25.0.1 ([d58655d](https://github.com/terrestris/shogun-gis-client/commit/d58655d65c92c351fc735110afff7744b6e18392))
* remove watch-build script ([540b500](https://github.com/terrestris/shogun-gis-client/commit/540b500cca4e94a77e3121bb9c71ffcd4eda5caf))


### Changes in configuration

* add comment if no tests were found ([4a7782f](https://github.com/terrestris/shogun-gis-client/commit/4a7782fc4a03c5bde8650a5799949a4e506f1e53))
* add icons ([d0915b2](https://github.com/terrestris/shogun-gis-client/commit/d0915b258a11778e831cf714742b2f5b5f087c35))
* add update comment action ([9a39976](https://github.com/terrestris/shogun-gis-client/commit/9a39976150c1715484ef8f2071c9bb51efe786a5))
* echo coverage comment id ([a4380ff](https://github.com/terrestris/shogun-gis-client/commit/a4380ff482f63d69d7de2464b549b5ae9999292b))
* echo coverage comment id ([1303984](https://github.com/terrestris/shogun-gis-client/commit/1303984b0e2399ea414aa7b3f595f55526d56e15))
* echo existing comment ([ac5337b](https://github.com/terrestris/shogun-gis-client/commit/ac5337b68db7ab9e0dc008708b6e6779e1a4581a))
* echo updated comment ([2b58d40](https://github.com/terrestris/shogun-gis-client/commit/2b58d4011d97fd2df49c50f72d6dabc8bbbef3d9))
* fix check for tests ([70c8c6a](https://github.com/terrestris/shogun-gis-client/commit/70c8c6af1dca6f4634472bd379f65c46910e1559))
* fix check for tests ([64e3fa5](https://github.com/terrestris/shogun-gis-client/commit/64e3fa535ada77b3254ed35f52f1bb9042cffaa0))
* fix check for tests ([b60ead3](https://github.com/terrestris/shogun-gis-client/commit/b60ead3d83e132b793f76803a9948147e9ce59a3))
* fix check for tests ([4bb57a5](https://github.com/terrestris/shogun-gis-client/commit/4bb57a591c1ddc1838e666264af4b6cba0e3cf1a))
* fix check for tests ([9228ea7](https://github.com/terrestris/shogun-gis-client/commit/9228ea77667c0054affb96e39979e544efbf1cb2))
* fiX coverage-comment for changed files ([301cb9b](https://github.com/terrestris/shogun-gis-client/commit/301cb9b76e4313c02d5168793ea8ef07d2a9142f))
* fix get pr-number ([375c467](https://github.com/terrestris/shogun-gis-client/commit/375c467bdcec8cff7fce24a74a2fcf7c62c8e7bf))
* fix parsing JSON error ([ce9fa22](https://github.com/terrestris/shogun-gis-client/commit/ce9fa22d176de32f46f2068f10eaaaf02a1bf196))
* fix typo ([98171ed](https://github.com/terrestris/shogun-gis-client/commit/98171edaf0213b46cbae7a5729ff0631f2ab698e))
* fix typo ([0eed855](https://github.com/terrestris/shogun-gis-client/commit/0eed855dcff65ef27144f076d792427cb79a483a))
* fix updated comment ([01aa47d](https://github.com/terrestris/shogun-gis-client/commit/01aa47d3e9915d4a15ef73642abb0ce879dd624c))
* make sure to get first comment ([df5b76b](https://github.com/terrestris/shogun-gis-client/commit/df5b76b108b9b5afaeaa5bb79769af15b41d7c36))
* minor fix ([166ad2c](https://github.com/terrestris/shogun-gis-client/commit/166ad2cda4c8c3787af02815d330db94e8d552d0))
* minor fix ([8558d1f](https://github.com/terrestris/shogun-gis-client/commit/8558d1f4c67b1cd663fa82a68d06c6e649cae6b3))
* minor fix ([e38264f](https://github.com/terrestris/shogun-gis-client/commit/e38264f840661a4fb30af50f69bf82b8972647b6))
* minor fix in string ([9189880](https://github.com/terrestris/shogun-gis-client/commit/91898804c4db7deea3689f23d615cb8eab85b887))
* remove line from comment when no tests are found ([945ff12](https://github.com/terrestris/shogun-gis-client/commit/945ff12cfc07f0d863cb47e3fd6dbb4398f2e1b7))
* remove unused backslash ([fb8ab01](https://github.com/terrestris/shogun-gis-client/commit/fb8ab014e168b708233b424020918036795351df))
* update existing comment instead of creating a new one ([0ef8731](https://github.com/terrestris/shogun-gis-client/commit/0ef873164f98646de64bd0dec37cf86eb59bcd58))


### Features

* allow to group search results by category or layer title ([f27d928](https://github.com/terrestris/shogun-gis-client/commit/f27d928c4348c5596054761ae808719835704bd0))


### Bugfixes

* adjust width in mobile version ([7de1d41](https://github.com/terrestris/shogun-gis-client/commit/7de1d41c6d9ac952471d29b3ccba5a3c52ee8eac))
* check if tests for changed files were run and comment if not ([77a4c54](https://github.com/terrestris/shogun-gis-client/commit/77a4c54415ac39f17eb4be3bb5e6edd2d5d25e14))
* install dependencies before testing ([87135f0](https://github.com/terrestris/shogun-gis-client/commit/87135f081a8b129502f496d97c9cd4307d5d5761))
* make upload options configurable ([8b4528c](https://github.com/terrestris/shogun-gis-client/commit/8b4528c8d9a2170678b2d62d1bf73a8abec14971))

## [8.5.0](https://github.com/terrestris/shogun-gis-client/compare/v8.4.0...v8.5.0) (2024-06-25)


### Dependencies

* **deps-dev:** bump @types/node from 20.12.12 to 20.14.2 ([e9edf5f](https://github.com/terrestris/shogun-gis-client/commit/e9edf5f95a37fae82e48a6163b2847b09ea61568))


### Changes in configuration

* fix sonarqube pipeline & add project version ([0ec85ee](https://github.com/terrestris/shogun-gis-client/commit/0ec85ee1374c4f391acbf72bc0ee386cc4bb4e26))
* update-coverage pipeline ([4953206](https://github.com/terrestris/shogun-gis-client/commit/49532069928fed515214824fba7bb320522ee312))


### Features

* adds documentation button ([18cac84](https://github.com/terrestris/shogun-gis-client/commit/18cac8498c3cea13080cdcdb9de3fa921fa7ed70))
* allow disabling plugins via appConfig ([e55e0fe](https://github.com/terrestris/shogun-gis-client/commit/e55e0fe94848d8d8b52e915ad8a4fb0ee56a8fa1))
* creates ability to select app specific MapFish print templates ([e73a71b](https://github.com/terrestris/shogun-gis-client/commit/e73a71b4273c6cfdc16c7ca0ffb9abafcefd43fd))
* rename print app and wrap in if condition ([000de3b](https://github.com/terrestris/shogun-gis-client/commit/000de3b35bb5e5b37d81f8c75be74e806c24cd42))
* rename print app variable ([2221ce2](https://github.com/terrestris/shogun-gis-client/commit/2221ce22c2bf2e0665efcc657eaf2b3912148da9))
* this change colors and  adds auto-adjustability of complementary color contrast in ToolMenu ([a6edc8a](https://github.com/terrestris/shogun-gis-client/commit/a6edc8ae27a19a8c59550e58e75c32721c290ef5))


### Bugfixes

* code styles and dependency array ([fb5e846](https://github.com/terrestris/shogun-gis-client/commit/fb5e846c3f914a6b9227317deab249cae55eb3e2))
* fixes the condition for the printApp ([178e29b](https://github.com/terrestris/shogun-gis-client/commit/178e29b6e88a5c70ba82bdb394796b17f082f3eb))
* indentation ([087fb07](https://github.com/terrestris/shogun-gis-client/commit/087fb072335a83a504f3d81497507431b265d6ee))
* make use of complementary color ([11a6423](https://github.com/terrestris/shogun-gis-client/commit/11a6423e92f62b8876303df9eeff2a452134c91b))
* potential override of the custom printApp ([12427ad](https://github.com/terrestris/shogun-gis-client/commit/12427ad77823e3c8149f0886478b01ca32559e9b))
* redirect to login after logout ([f9acf60](https://github.com/terrestris/shogun-gis-client/commit/f9acf605fa41f3767154eb9ba53b843c64d3d53f))
* remane variable and remove white spaces ([dc92c2f](https://github.com/terrestris/shogun-gis-client/commit/dc92c2fc4d2ccdb59b8f8e859a7fb874f6daca55))
* remove commented code ([b574f5f](https://github.com/terrestris/shogun-gis-client/commit/b574f5f6598e848d57d4e89e54af1d9a22efda6b))
* removes link creation to urls with local target ([8852ab7](https://github.com/terrestris/shogun-gis-client/commit/8852ab7c783404c1f311c26540edc8e7cb6fed9f))
* white spaces ([5c5c41e](https://github.com/terrestris/shogun-gis-client/commit/5c5c41e8f427adeca67f391038f51809a215543a))
* white spaces ([74dcfcc](https://github.com/terrestris/shogun-gis-client/commit/74dcfcc28c2af22c70c6f04b1a89d14a8d1ea4ed))
* white spaces ([b96720e](https://github.com/terrestris/shogun-gis-client/commit/b96720e20a88c856ed65617d41115f19992de3fe))

## [8.4.0](https://github.com/terrestris/shogun-gis-client/compare/v8.3.0...v8.4.0) (2024-05-31)


### Dependencies

* **deps-dev:** bump @babel/core from 7.24.0 to 7.24.5 ([bbf7ebc](https://github.com/terrestris/shogun-gis-client/commit/bbf7ebc2de4862408394e6d59a99a8bdb5ae02bc))
* **deps-dev:** bump @playwright/test from 1.42.1 to 1.44.1 ([9718ae5](https://github.com/terrestris/shogun-gis-client/commit/9718ae5265b8c4bd58d00443439d64f58699649d))
* **deps-dev:** bump @semantic-release/github from 10.0.4 to 10.0.5 ([cc003dc](https://github.com/terrestris/shogun-gis-client/commit/cc003dcacf5e0e4fa5ea1e90caf8507148582012))
* **deps-dev:** bump @semantic-release/npm from 11.0.2 to 12.0.1 ([0f9e413](https://github.com/terrestris/shogun-gis-client/commit/0f9e41385dd1f76047068109f0f2b1c296f80673))
* **deps-dev:** bump @types/node from 20.12.11 to 20.12.12 ([61fddcf](https://github.com/terrestris/shogun-gis-client/commit/61fddcf00a4c43ae4d79b362dfd3373cb89a9c0b))
* **deps-dev:** bump css-loader from 6.10.0 to 7.1.2 ([71d6a25](https://github.com/terrestris/shogun-gis-client/commit/71d6a25886f3380c153fadc928202eb56f37d569))
* **deps:** bump react-i18next from 14.1.1 to 14.1.2 ([36991e9](https://github.com/terrestris/shogun-gis-client/commit/36991e9f8163011f7599d48d49556a9793ed2c84))
* moves styling to .less file ([196f53e](https://github.com/terrestris/shogun-gis-client/commit/196f53e1670dc6cec370d43da68baeebdd88033d))


### Features

* create <a /> for links in DisplayField ([ead68e7](https://github.com/terrestris/shogun-gis-client/commit/ead68e7b981076a528504d14752664d2e2a83d0f))


### Bugfixes

* extracts further elements to .less and makes a slight styling change ([77406cf](https://github.com/terrestris/shogun-gis-client/commit/77406cf448706f7bdbbf0c6af3995ae1bc81cc82))
* fixes loading indicator and adjusts spacing ([0523e6f](https://github.com/terrestris/shogun-gis-client/commit/0523e6f5864738fe0e792f473fa0db521008b720))
* hide user chip in public applications ([813d9d2](https://github.com/terrestris/shogun-gis-client/commit/813d9d247d0a116f04f9fafd2d725ef8064a8f38))
* update check for UNC path ([959d914](https://github.com/terrestris/shogun-gis-client/commit/959d9147c4af174032c51c77ee7fac0e42182112))


### Changes in layout

* fix tree overflow ([711e527](https://github.com/terrestris/shogun-gis-client/commit/711e52771940b3865d9adb40199d2b3dec0985f7))

## [8.3.0](https://github.com/terrestris/shogun-gis-client/compare/v8.2.1...v8.3.0) (2024-05-21)


### Dependencies

* **deps-dev:** bump @babel/runtime from 7.24.0 to 7.24.5 ([13ec802](https://github.com/terrestris/shogun-gis-client/commit/13ec8029cc3254c82d20bb3d904c9d0c68a48a73))
* **deps-dev:** bump @semantic-release/github from 9.2.6 to 10.0.4 ([7a91022](https://github.com/terrestris/shogun-gis-client/commit/7a91022ca1a6414d328f2d2cfc9c3a4c6c6f4415))
* **deps-dev:** bump @semantic-release/release-notes-generator ([a923669](https://github.com/terrestris/shogun-gis-client/commit/a9236696cebba1be06069704117eba6a23eb1d6b))
* **deps-dev:** bump eslint-plugin-react from 7.34.0 to 7.34.1 ([3e78e6f](https://github.com/terrestris/shogun-gis-client/commit/3e78e6f5bcac9311281b8fd077f51e038a3f88ab))
* **deps-dev:** bump react-refresh from 0.14.0 to 0.14.2 ([53e8153](https://github.com/terrestris/shogun-gis-client/commit/53e81532c3d40d88baf3d6949db214900b55ca58))
* **deps-dev:** bump semantic-release from 23.0.2 to 23.1.1 ([9be13fa](https://github.com/terrestris/shogun-gis-client/commit/9be13fa462bd54e6fad7c234506b79460ad091e2))
* **deps-dev:** bump style-loader from 3.3.4 to 4.0.0 ([ddaea8b](https://github.com/terrestris/shogun-gis-client/commit/ddaea8b7a45a8934e9900cf2927fbfd2b0e2fe25))
* **deps-dev:** bump typescript from 5.3.3 to 5.4.5 ([cbb4af7](https://github.com/terrestris/shogun-gis-client/commit/cbb4af7d4ca458316a65436f2f31ecf8711da844))
* **deps:** bump @reduxjs/toolkit from 2.2.4 to 2.2.5 ([943c20c](https://github.com/terrestris/shogun-gis-client/commit/943c20cc406d7e6a67599e32eac6bf36f6517564))
* **deps:** bump i18next-browser-languagedetector from 7.2.0 to 8.0.0 ([91422ad](https://github.com/terrestris/shogun-gis-client/commit/91422adcb2b0ebc2d2a7e97518530a0cb7848337))
* **deps:** bump JamesIves/github-pages-deploy-action ([84fbade](https://github.com/terrestris/shogun-gis-client/commit/84fbade9edcb8099722f23331be88988a40345eb))
* **deps:** bump react-i18next from 14.0.5 to 14.1.1 ([d4f9448](https://github.com/terrestris/shogun-gis-client/commit/d4f9448ccc8ba79bcd241f9dbd4be53883bc6979))


### Features

* group solr queries by query fields ([65ef63e](https://github.com/terrestris/shogun-gis-client/commit/65ef63ec1a1eda627ec6ac991e694a31bcf61fdb))

## [8.2.1](https://github.com/terrestris/shogun-gis-client/compare/v8.2.0...v8.2.1) (2024-05-15)


### Dependencies

* **deps-dev:** bump @babel/cli from 7.23.9 to 7.24.5 ([26f7d13](https://github.com/terrestris/shogun-gis-client/commit/26f7d13823f53a3aa3d24800c3b8e6b7cfd10b0d))
* **deps-dev:** bump @babel/preset-env from 7.24.4 to 7.24.5 ([2e14522](https://github.com/terrestris/shogun-gis-client/commit/2e145220f2fb634d49546544c1fb199ff0234faf))
* **deps-dev:** bump @types/node from 20.12.7 to 20.12.11 ([9aff2ff](https://github.com/terrestris/shogun-gis-client/commit/9aff2ff3cf833ad8c10a851f65a300543ebf1f26))
* **deps-dev:** bump webpack-bundle-analyzer from 4.10.1 to 4.10.2 ([e2c9d25](https://github.com/terrestris/shogun-gis-client/commit/e2c9d25ce47ebd77936bc71044c287bb281828ae))
* **deps:** bump @reduxjs/toolkit from 2.2.3 to 2.2.4 ([c64e344](https://github.com/terrestris/shogun-gis-client/commit/c64e34475230e8fab61cf0a68ed8b5ee97aeb4fb))
* **deps:** bump @terrestris/base-util from 1.1.0 to 1.1.1 ([78c3b48](https://github.com/terrestris/shogun-gis-client/commit/78c3b48d481b1551f5e2f7b970c86fdb49a97dda))
* **deps:** update react-geo to latest version ([7629750](https://github.com/terrestris/shogun-gis-client/commit/7629750baa58431591ae69e6665e07345d4737a9))


### Bugfixes

* allow to search for numeric values ([9435b9f](https://github.com/terrestris/shogun-gis-client/commit/9435b9f3dec104fd443eab3725ba862a8b0aa127))
* fix e2e authentication ([a5bae5b](https://github.com/terrestris/shogun-gis-client/commit/a5bae5b2d51b23c8451d32f0b5c9b16945f0e22f))
* fix tests and optimize query ([62e0660](https://github.com/terrestris/shogun-gis-client/commit/62e06600615baad9c4e471cb1141c79eea23a093))
* fixes of dynamic width of toolbar ([e363437](https://github.com/terrestris/shogun-gis-client/commit/e36343753dcfcb66cd18c39813824b1c41a26f5d))


### Changes in layout

* reduce paddings to gain some space in FeatureInfo ([177cbf0](https://github.com/terrestris/shogun-gis-client/commit/177cbf03166f93174a5c3f74d18ca410a3133ea0))

## [8.2.0](https://github.com/terrestris/shogun-gis-client/compare/v8.1.0...v8.2.0) (2024-05-10)


### Features

* show error message for missing geometry ([8651d63](https://github.com/terrestris/shogun-gis-client/commit/8651d63b3429332d065e88ce8b14d487a2e6ccf3))


### Bugfixes

* move setting of initial values ([95f02fb](https://github.com/terrestris/shogun-gis-client/commit/95f02fb9e60d3be56096b4ec5e448f545280c9b7))

## [8.1.0](https://github.com/terrestris/shogun-gis-client/compare/v8.0.0...v8.1.0) (2024-05-08)


### Dependencies

* **deps-dev:** bump @babel/preset-env from 7.23.9 to 7.24.4 ([83e0abc](https://github.com/terrestris/shogun-gis-client/commit/83e0abc0f1bb8a5b0ec4d68a11de798253e33382))
* **deps-dev:** bump @commitlint/cli from 19.2.2 to 19.3.0 ([40333d7](https://github.com/terrestris/shogun-gis-client/commit/40333d7ce55f7a6055f4d6ee7d5d84e1e6f47d87))
* **deps-dev:** bump @pmmmwh/react-refresh-webpack-plugin ([00790f9](https://github.com/terrestris/shogun-gis-client/commit/00790f97a45d3e29f99494dc324e4c47892e91fd))
* **deps-dev:** bump @types/node from 20.11.26 to 20.12.7 ([cb65f8c](https://github.com/terrestris/shogun-gis-client/commit/cb65f8c5fc1b3008b24aaad33ac6a843ef40d0ac))
* **deps-dev:** bump mini-css-extract-plugin from 2.8.0 to 2.9.0 ([0ed1111](https://github.com/terrestris/shogun-gis-client/commit/0ed1111ac98f0dd2dd2acaa9bb644c6eb17a7b13))
* **deps-dev:** bump webpack from 5.90.3 to 5.91.0 ([4fd579f](https://github.com/terrestris/shogun-gis-client/commit/4fd579f2eca1f0cdab01a6ae9e365766e9456c7d))
* **deps:** bump actions/cache from 3 to 4 ([b58ba1a](https://github.com/terrestris/shogun-gis-client/commit/b58ba1a8885a2182662115b2e271bb2c57b64fd3))
* **deps:** bump docker/login-action from 1 to 3 ([883f4c3](https://github.com/terrestris/shogun-gis-client/commit/883f4c3eb77922c730b06bbfd9544fe07476e3b4))
* **deps:** bump JamesIves/github-pages-deploy-action ([04f229f](https://github.com/terrestris/shogun-gis-client/commit/04f229fe0b7e73084918af6c6892d0a5dc8ff77c))
* **deps:** bump keycloak-js from 23.0.7 to 24.0.3 ([eb2fe0a](https://github.com/terrestris/shogun-gis-client/commit/eb2fe0a144914d7903ca1ebca0ef675c4eaaa885))
* **deps:** bump kitabisa/sonarqube-action from 1.2.0 to 1.2.1 ([85e025b](https://github.com/terrestris/shogun-gis-client/commit/85e025b54756ddb2f2039ff9304483492a9e8d6b))
* **deps:** bump shapefile.js from 1.1.3 to 1.1.4 ([24f09ed](https://github.com/terrestris/shogun-gis-client/commit/24f09eddb5cf4aa3e1aa7bdc21d2edf992ba5cfb))
* incorporate review of [@dnlkoch](https://github.com/dnlkoch) ([4f4ce3d](https://github.com/terrestris/shogun-gis-client/commit/4f4ce3d7f51fff38937cf1aa577cb13d837a7f19))
* update shogun-util ([742f499](https://github.com/terrestris/shogun-gis-client/commit/742f499fd0268f9b1fcf796c61b12b06c9f83d6b))


### Changes in configuration

* add env variables for webpack ([f28c987](https://github.com/terrestris/shogun-gis-client/commit/f28c9874be3524948890639511efb4aa55c1aaa6))
* make use of project version ([fc7487f](https://github.com/terrestris/shogun-gis-client/commit/fc7487fa6c8c32185585a668dce4c28a5f56885d))
* use Version varable from env ([3df3503](https://github.com/terrestris/shogun-gis-client/commit/3df3503fccce4a332af7e51d3fbbbe85d8493568))


### Features

* add parsing of theme.faviconPath ([1d44259](https://github.com/terrestris/shogun-gis-client/commit/1d442592fb3b1b581a9e2307c0d4dd23f5300dde))
* adds dynamic width to menu toolbar ([9d12fb3](https://github.com/terrestris/shogun-gis-client/commit/9d12fb3bb7c0d73ce0258c81c97192a58797205c))
* adds user feedback for saving new properties in edit function ([60c74d7](https://github.com/terrestris/shogun-gis-client/commit/60c74d7a2797e62bcf4d09c94e202e0b0aee1e72))
* clicking the open color palette button also closes the drawer ([c434376](https://github.com/terrestris/shogun-gis-client/commit/c43437603e079cf57bc82cdbac1e47cf1e02f114))
* hides 'Apply' button when geometry is not selected ([54704a8](https://github.com/terrestris/shogun-gis-client/commit/54704a88b610a81170988d2a512b14b8c76792eb))
* make loading mask configurable ([afde530](https://github.com/terrestris/shogun-gis-client/commit/afde5309497612fa0c5012596c4ae30d8812d781))


### Bugfixes

* add comment for related to current changes and last commit ([2ad1676](https://github.com/terrestris/shogun-gis-client/commit/2ad1676258047462b1396ad835a8302d42db7e1d))
* add coverage path to npm run test ([842497c](https://github.com/terrestris/shogun-gis-client/commit/842497c8d222400fe113905fd8a8721d42e78c88))
* add github markdown emojis to workflow ([ce0db7f](https://github.com/terrestris/shogun-gis-client/commit/ce0db7f24841f1701c0b487d078f64c7273088fc))
* add linting ([c8d32bb](https://github.com/terrestris/shogun-gis-client/commit/c8d32bb4855fab63a4e95a3d75dbe6bc03482bf1))
* adds project version ([#1551](https://github.com/terrestris/shogun-gis-client/issues/1551)) ([2e30815](https://github.com/terrestris/shogun-gis-client/commit/2e3081534fbacc21277155f59589ef6aaf26ed20))
* adjust test to new variables ([aa7ea6e](https://github.com/terrestris/shogun-gis-client/commit/aa7ea6e2270df133146b1934dfa424a6c4fc78cd))
* change toolbar position to the middle ([870fad4](https://github.com/terrestris/shogun-gis-client/commit/870fad4cd985ff8d2ab6cb601a4747b3a16cd245))
* combine output for all tests and current commit in one comment ([586f88a](https://github.com/terrestris/shogun-gis-client/commit/586f88ab38c13a12b7150a702bd653091304f9c5))
* fixes for dynamic width ([f6fd40a](https://github.com/terrestris/shogun-gis-client/commit/f6fd40a2721c9c8c2d051da3dafbbf1573d191f5))
* fixes the drawer from not reseting when closed ([331d2e9](https://github.com/terrestris/shogun-gis-client/commit/331d2e9bec208c102edf8ba762bcd476a269c39e))
* fixing the height of the EditFeatureGeometryToolbar ([8f8c73c](https://github.com/terrestris/shogun-gis-client/commit/8f8c73c8a48f2d3e30e3462de40c2c473e01f7e2))
* make use of secondary color variable ([5da2f9d](https://github.com/terrestris/shogun-gis-client/commit/5da2f9d2bfeb2ab3ad9c08636ad4da47b9ce1865))
* minor fix in glob-pattern ([e79ae0a](https://github.com/terrestris/shogun-gis-client/commit/e79ae0acabf4d7931e51cfc31cced07c0c9943b2))
* move jest options to config file ([de9dbfa](https://github.com/terrestris/shogun-gis-client/commit/de9dbfa3697343662b1dc1e80f9e7cdd427329af))
* remove duplicated key in jest config ([dfd44be](https://github.com/terrestris/shogun-gis-client/commit/dfd44be857b75c4ec78beb7244ec9972b8efcc21))
* remove type intersection with {} at multiple places ([c77d183](https://github.com/terrestris/shogun-gis-client/commit/c77d18325bec2bcec0b2d7390bde7db19d5f0875))
* restrict files to be included in coverage ([2af9f34](https://github.com/terrestris/shogun-gis-client/commit/2af9f34471205de0cc7a5eb7a25b66c1c49286dd))
* run tests before commenting ([452c3be](https://github.com/terrestris/shogun-gis-client/commit/452c3be9026862f3cd7fa190fec2ee4076ae18e3))
* update actions version ([c7f42dd](https://github.com/terrestris/shogun-gis-client/commit/c7f42dd327109857f7ccfe6ae54c2a1cba0e7904))
* use [].forEach as suggested by SonarQube ([59f0d60](https://github.com/terrestris/shogun-gis-client/commit/59f0d60c3b101874c9884d263331404561dde8dd))

## [8.0.0](https://github.com/terrestris/shogun-gis-client/compare/v7.5.3...v8.0.0) (2024-04-22)


### ⚠ BREAKING CHANGES

* required @reduxjs/toolkit is now v2.2.3

### Dependencies

* bump @reduxjs/toolkit to v 2.2.3 ([6c4773f](https://github.com/terrestris/shogun-gis-client/commit/6c4773fbf5eff63b2374d46f8ac70f194f9a68ca))
* code style ([6d98add](https://github.com/terrestris/shogun-gis-client/commit/6d98addd60f61f936ca326dac8470eef27fbb092))


### Features

* allow addition of middlewares in plugin definition ([ec3654d](https://github.com/terrestris/shogun-gis-client/commit/ec3654d8d1df36e3a12a15a27f56dc96ee6a887d))
* allow static configurations without calling shogun ([889f489](https://github.com/terrestris/shogun-gis-client/commit/889f4890c56b621ae9d919b931a685d0b96f29f3))


### Bugfixes

* document configuration parameters ([3a85e5c](https://github.com/terrestris/shogun-gis-client/commit/3a85e5cc5e9ecb7b030660c2c502746f8f214ae8))
* remove debug message and use correct version of shogun-util ([9ba524a](https://github.com/terrestris/shogun-gis-client/commit/9ba524a5a71623c8c2660a633068bd6429075e9b))

## [7.5.3](https://github.com/terrestris/shogun-gis-client/compare/v7.5.2...v7.5.3) (2024-04-17)


### Dependencies

* update commitlint ([1b1f939](https://github.com/terrestris/shogun-gis-client/commit/1b1f939e9b5aa0f66ddf19acd079124666b61aaf))
* update commitlint config ([854d623](https://github.com/terrestris/shogun-gis-client/commit/854d6232bc1b69db989190a1051c5d975ec5fc1a))
* update package-lock ([65b1a1d](https://github.com/terrestris/shogun-gis-client/commit/65b1a1d681626986adbeebd1a0822a72b10d6150))


### Bugfixes

* update onDrawEnd to really replace the geometry ([8c031a7](https://github.com/terrestris/shogun-gis-client/commit/8c031a75fa059b3040258e78b631a1aea6c9d3f8))

## [7.5.2](https://github.com/terrestris/shogun-gis-client/compare/v7.5.1...v7.5.2) (2024-04-12)


### Bugfixes

* support Polish and Czech as default language ([b87e2ca](https://github.com/terrestris/shogun-gis-client/commit/b87e2cafad9210cb008db3f4fdc64431cc899b23))

## [7.5.1](https://github.com/terrestris/shogun-gis-client/compare/v7.5.0...v7.5.1) (2024-03-19)


### Bugfixes

* switch tooltip text for internal configuration ([4ae0e28](https://github.com/terrestris/shogun-gis-client/commit/4ae0e28042da291df8edade0c6aa5efbcc391c73))

## [7.5.0](https://github.com/terrestris/shogun-gis-client/compare/v7.4.0...v7.5.0) (2024-03-19)


### Dependencies

* **deps-dev:** bump @babel/core from 7.23.9 to 7.24.0 ([3e3e1af](https://github.com/terrestris/shogun-gis-client/commit/3e3e1af54676bc370a7da06fa991067fa4556756))
* **deps-dev:** bump @babel/runtime from 7.23.9 to 7.24.0 ([372e4e6](https://github.com/terrestris/shogun-gis-client/commit/372e4e64e916098eea01945b603fb1d9ed8d1516))
* **deps-dev:** bump @commitlint/config-conventional ([088fbf4](https://github.com/terrestris/shogun-gis-client/commit/088fbf4db0191bb161ce3b39c5ea0bfdf6e3c2cd))
* **deps-dev:** bump @commitlint/config-conventional ([2f2f937](https://github.com/terrestris/shogun-gis-client/commit/2f2f937e554ed1ec447da78d1a015a5ae3927d2d))
* **deps-dev:** bump @playwright/test from 1.41.2 to 1.42.0 ([8469a2c](https://github.com/terrestris/shogun-gis-client/commit/8469a2ca407fb0451a699c280c0fa754b47cacbb))
* **deps-dev:** bump @playwright/test from 1.42.0 to 1.42.1 ([29cfd08](https://github.com/terrestris/shogun-gis-client/commit/29cfd08dd08cd06dcc495d5236fed3246cd8cd84))
* **deps-dev:** bump @types/node from 20.11.19 to 20.11.24 ([88bdf54](https://github.com/terrestris/shogun-gis-client/commit/88bdf543f2280e0ab7e8679dd5620a5ae822fa96))
* **deps-dev:** bump @types/node from 20.11.24 to 20.11.26 ([8fcc5df](https://github.com/terrestris/shogun-gis-client/commit/8fcc5df682bd03324bb960981f222f0ada93d1f7))
* **deps-dev:** bump eslint from 8.56.0 to 8.57.0 ([ffd6f49](https://github.com/terrestris/shogun-gis-client/commit/ffd6f49efd944e3b8f4c40ae3188150f6040eb4d))
* **deps-dev:** bump eslint-plugin-react from 7.33.2 to 7.34.0 ([887b0b8](https://github.com/terrestris/shogun-gis-client/commit/887b0b8394bfbbee5690aa512c39867ea0f7fa40))
* **deps-dev:** bump husky from 9.0.10 to 9.0.11 ([94036cf](https://github.com/terrestris/shogun-gis-client/commit/94036cf75ba87e75777c4718b168fe49110bd457))
* **deps:** bump dotenv from 16.4.2 to 16.4.5 ([060bab2](https://github.com/terrestris/shogun-gis-client/commit/060bab2b8be9b165e3456e4800ace42eaca5bead))
* **deps:** bump i18next from 23.9.0 to 23.10.0 ([6005291](https://github.com/terrestris/shogun-gis-client/commit/6005291159bb8f2616410d4a9430a64fe700cefc))


### Features

* adds a brand new delete button ([740f2ab](https://github.com/terrestris/shogun-gis-client/commit/740f2abf78a11d4a2d2ff5ba753836a0291fe417))


### Bugfixes

* allow overflow for treenode-content ([51eb3f8](https://github.com/terrestris/shogun-gis-client/commit/51eb3f8ff0a099bccd298680c6cbb53fafe50fdd))
* fixes a check ([42fd280](https://github.com/terrestris/shogun-gis-client/commit/42fd2804736f899097cfe0cf59caaf8dc8e50dba))
* fixes application from crashing when properties is called ([d3264d9](https://github.com/terrestris/shogun-gis-client/commit/d3264d9540ed54f4db59e0f046970c29814639e0))
* reverses a change made by accident ([82b01fb](https://github.com/terrestris/shogun-gis-client/commit/82b01fb89908cca719f1251b3a19e40a9862a9e0))

## [7.4.0](https://github.com/terrestris/shogun-gis-client/compare/v7.3.1...v7.4.0) (2024-02-27)


### Dependencies

* :lipstick: ([7c6155d](https://github.com/terrestris/shogun-gis-client/commit/7c6155dbc97d2749d2e8088bac9f549baef37d88))
* **deps-dev:** bump @babel/cli from 7.23.4 to 7.23.9 ([6644e68](https://github.com/terrestris/shogun-gis-client/commit/6644e6894c33d177234abce96087c48e725aef11))
* **deps-dev:** bump @babel/core from 7.23.7 to 7.23.9 ([915391f](https://github.com/terrestris/shogun-gis-client/commit/915391f706649f7de2229820edf9c7de61a4d4ec))
* **deps-dev:** bump @babel/preset-env from 7.23.6 to 7.23.8 ([bd5767e](https://github.com/terrestris/shogun-gis-client/commit/bd5767e3b75e204af20c318349303f7d5b13bc72))
* **deps-dev:** bump @babel/preset-env from 7.23.8 to 7.23.9 ([f1c0b24](https://github.com/terrestris/shogun-gis-client/commit/f1c0b249496cca0a12b808b0f35f095fab5672e5))
* **deps-dev:** bump @babel/runtime from 7.23.8 to 7.23.9 ([7614c69](https://github.com/terrestris/shogun-gis-client/commit/7614c69b2d9601f3cfbe06825eb56f1bb2d85b69))
* **deps-dev:** bump @commitlint/cli from 18.4.3 to 18.4.4 ([f212e73](https://github.com/terrestris/shogun-gis-client/commit/f212e739eaabb0e71d3a63aa9533e867e4f90cfe))
* **deps-dev:** bump @commitlint/cli from 18.4.4 to 18.5.0 ([731bb84](https://github.com/terrestris/shogun-gis-client/commit/731bb848c1889d4be54d5f4b5ea4ae094f24fa91))
* **deps-dev:** bump @commitlint/cli from 18.5.0 to 18.6.0 ([fbab0ad](https://github.com/terrestris/shogun-gis-client/commit/fbab0adc53d10c2cb63e69c89beb44a082a54970))
* **deps-dev:** bump @commitlint/cli from 18.6.0 to 18.6.1 ([3338ffc](https://github.com/terrestris/shogun-gis-client/commit/3338ffcbfd684f148095585e051dcef43e015a9b))
* **deps-dev:** bump @commitlint/config-conventional ([75bd95b](https://github.com/terrestris/shogun-gis-client/commit/75bd95ba0d08d38e017660e1e52ee2e53704d444))
* **deps-dev:** bump @commitlint/config-conventional ([78c78e2](https://github.com/terrestris/shogun-gis-client/commit/78c78e20d691494a4975cd2b2f771d33889e5408))
* **deps-dev:** bump @playwright/test from 1.40.1 to 1.41.0 ([cc0e0be](https://github.com/terrestris/shogun-gis-client/commit/cc0e0be6ac13dff741d63b726c6dbe7c960524fc))
* **deps-dev:** bump @playwright/test from 1.41.0 to 1.41.1 ([12b2e12](https://github.com/terrestris/shogun-gis-client/commit/12b2e1262b5a54462eac4902de2dc76bbd12e6ed))
* **deps-dev:** bump @playwright/test from 1.41.1 to 1.41.2 ([1de3605](https://github.com/terrestris/shogun-gis-client/commit/1de3605ee66eaa0a9380869b35f856623f554408))
* **deps-dev:** bump @types/jest from 29.5.11 to 29.5.12 ([8fe87c1](https://github.com/terrestris/shogun-gis-client/commit/8fe87c1e00da1b2a5ef59c10e8baa04b9070e4b4))
* **deps-dev:** bump @types/node from 20.10.5 to 20.11.5 ([34a6081](https://github.com/terrestris/shogun-gis-client/commit/34a6081774eabdd19eef456471cfff03cbaa797f))
* **deps-dev:** bump @types/node from 20.11.13 to 20.11.16 ([e751876](https://github.com/terrestris/shogun-gis-client/commit/e7518767734799317d4333925e6b39a251391bb8))
* **deps-dev:** bump @types/node from 20.11.16 to 20.11.17 ([bc8a791](https://github.com/terrestris/shogun-gis-client/commit/bc8a791bfd72cac46bc0af19e2e9b324ccdc5ade))
* **deps-dev:** bump @types/node from 20.11.17 to 20.11.19 ([dcce359](https://github.com/terrestris/shogun-gis-client/commit/dcce3590ac5f3720cf5cb6e40c54765ad8cf2198))
* **deps-dev:** bump @types/node from 20.11.5 to 20.11.6 ([ce9033a](https://github.com/terrestris/shogun-gis-client/commit/ce9033a79dc1dd18faf45395dad99c752bdafa3c))
* **deps-dev:** bump @types/node from 20.11.6 to 20.11.13 ([72fc045](https://github.com/terrestris/shogun-gis-client/commit/72fc0452efa5c47adc14aab1dc21cb47418ffcce))
* **deps-dev:** bump @typescript-eslint/eslint-plugin ([0cbaaf7](https://github.com/terrestris/shogun-gis-client/commit/0cbaaf754b14da7441b420fc1e0ae8f8ab6de9aa))
* **deps-dev:** bump @typescript-eslint/eslint-plugin ([208142d](https://github.com/terrestris/shogun-gis-client/commit/208142de2ef8fdfd187c6730841b3267fe537a66))
* **deps-dev:** bump @typescript-eslint/eslint-plugin ([3802ce8](https://github.com/terrestris/shogun-gis-client/commit/3802ce87b698c8791680d1da02d9241e319940f9))
* **deps-dev:** bump @typescript-eslint/eslint-plugin ([0e0b7fb](https://github.com/terrestris/shogun-gis-client/commit/0e0b7fb4f1b793d51a6c1d76eba30848487397bc))
* **deps-dev:** bump @typescript-eslint/parser from 6.18.1 to 6.19.0 ([9d038b3](https://github.com/terrestris/shogun-gis-client/commit/9d038b333c761acdb5188c946471b802599fd9b6))
* **deps-dev:** bump @typescript-eslint/parser from 6.19.0 to 6.19.1 ([719f5a2](https://github.com/terrestris/shogun-gis-client/commit/719f5a2d6f1286f5d118a36ea6fdedff1a46b377))
* **deps-dev:** bump @typescript-eslint/parser from 6.19.1 to 6.20.0 ([8f2373d](https://github.com/terrestris/shogun-gis-client/commit/8f2373d26eed8ddef71d906035cc6558459f80cc))
* **deps-dev:** bump @typescript-eslint/parser from 6.20.0 to 6.21.0 ([023b2ed](https://github.com/terrestris/shogun-gis-client/commit/023b2edd05d604768964b8e6de23a79f92561669))
* **deps-dev:** bump copy-webpack-plugin from 12.0.1 to 12.0.2 ([02bf5cf](https://github.com/terrestris/shogun-gis-client/commit/02bf5cf81a1344bac698c4a684e06156261ff54b))
* **deps-dev:** bump css-loader from 6.9.0 to 6.9.1 ([9bc4d8c](https://github.com/terrestris/shogun-gis-client/commit/9bc4d8c6569c4af58da7a72ffcc20489ee0c42ae))
* **deps-dev:** bump css-loader from 6.9.1 to 6.10.0 ([8f65a83](https://github.com/terrestris/shogun-gis-client/commit/8f65a833e414f4e7f0839455d7079aeeb3938f8a))
* **deps-dev:** bump css-minimizer-webpack-plugin from 5.0.1 to 6.0.0 ([ae81a21](https://github.com/terrestris/shogun-gis-client/commit/ae81a2160801b3f2975827986c7a9d945c41c572))
* **deps-dev:** bump husky from 8.0.3 to 9.0.6 ([6e5b8e4](https://github.com/terrestris/shogun-gis-client/commit/6e5b8e4a369712a3a6e24f3c5fe5d9f2737ddb96))
* **deps-dev:** bump husky from 9.0.6 to 9.0.7 ([43e301f](https://github.com/terrestris/shogun-gis-client/commit/43e301f1140a1e49a6ad6897f87eb31a2066ea02))
* **deps-dev:** bump husky from 9.0.7 to 9.0.10 ([d0712f6](https://github.com/terrestris/shogun-gis-client/commit/d0712f615aaaee3c25cda39c82313b4daece898e))
* **deps-dev:** bump less-loader from 11.1.4 to 12.0.0 ([1ecc849](https://github.com/terrestris/shogun-gis-client/commit/1ecc84921ada98166e4e8999ecbca96d98c40227))
* **deps-dev:** bump less-loader from 12.0.0 to 12.1.0 ([f5bc663](https://github.com/terrestris/shogun-gis-client/commit/f5bc66376beeb0dd46d8a03f69f2bd43b1d56b94))
* **deps-dev:** bump less-loader from 12.1.0 to 12.2.0 ([6601434](https://github.com/terrestris/shogun-gis-client/commit/66014341347c682218c23af8c029edc6478744a9))
* **deps-dev:** bump mini-css-extract-plugin from 2.7.7 to 2.8.0 ([57c9257](https://github.com/terrestris/shogun-gis-client/commit/57c9257f4ce407487cf9bfd239dfa5d98ca0cbe7))
* **deps-dev:** bump semantic-release from 22.0.12 to 23.0.2 ([87c071a](https://github.com/terrestris/shogun-gis-client/commit/87c071ac8dd28993d244470bff2f3a8f1a46b8ed))
* **deps-dev:** bump webpack from 5.89.0 to 5.90.0 ([2807c0b](https://github.com/terrestris/shogun-gis-client/commit/2807c0b6e1929fd47da9e4b2a8a2efc45bf4e9fd))
* **deps-dev:** bump webpack from 5.90.0 to 5.90.1 ([6969b7b](https://github.com/terrestris/shogun-gis-client/commit/6969b7b53af8555b3167e890691769cead84cabf))
* **deps-dev:** bump webpack from 5.90.1 to 5.90.2 ([d6ed571](https://github.com/terrestris/shogun-gis-client/commit/d6ed5712a49381433cb8808bf4ab4f5dccf2c79b))
* **deps-dev:** bump webpack from 5.90.2 to 5.90.3 ([c292268](https://github.com/terrestris/shogun-gis-client/commit/c2922683e61397afebfb9872c97afe0ae32f4bd1))
* **deps:** bump dotenv from 16.3.1 to 16.4.0 ([0b82057](https://github.com/terrestris/shogun-gis-client/commit/0b8205746023e375ac2cf320e997d1d4141c48cc))
* **deps:** bump dotenv from 16.4.0 to 16.4.1 ([58887de](https://github.com/terrestris/shogun-gis-client/commit/58887de965e0ce1b8778e65296e370109afe9778))
* **deps:** bump dotenv from 16.4.1 to 16.4.2 ([1ef9bce](https://github.com/terrestris/shogun-gis-client/commit/1ef9bce9214b67b81a58087bd0d8050e45434732))
* **deps:** bump i18next from 23.7.11 to 23.7.16 ([c624e14](https://github.com/terrestris/shogun-gis-client/commit/c624e14fbe763d1562af962c2b71715c31d5545b))
* **deps:** bump i18next from 23.7.16 to 23.7.18 ([6f8f2b7](https://github.com/terrestris/shogun-gis-client/commit/6f8f2b70312a294986ca4624ee46932f9368123c))
* **deps:** bump i18next from 23.7.18 to 23.8.1 ([90a62bc](https://github.com/terrestris/shogun-gis-client/commit/90a62bcf4fc6e7c64966525bfef7c73add4154b2))
* **deps:** bump i18next from 23.8.1 to 23.8.2 ([8cc3c66](https://github.com/terrestris/shogun-gis-client/commit/8cc3c66a4bd8782cf6fdae056b85b82b3673a0f2))
* **deps:** bump i18next from 23.8.2 to 23.9.0 ([744f86b](https://github.com/terrestris/shogun-gis-client/commit/744f86bb7aea22163af304bb493be87aa7d03b62))
* **deps:** bump keycloak-js from 23.0.4 to 23.0.5 ([59bd4f1](https://github.com/terrestris/shogun-gis-client/commit/59bd4f135ebf3def44ce308746b3f5104313e974))
* **deps:** bump keycloak-js from 23.0.5 to 23.0.6 ([9b5b86f](https://github.com/terrestris/shogun-gis-client/commit/9b5b86f7e4333dc999321804de0f7e4eb5774a86))
* **deps:** bump keycloak-js from 23.0.6 to 23.0.7 ([95ac4c4](https://github.com/terrestris/shogun-gis-client/commit/95ac4c4cc8d2910f6bba52687642077d8d29458e))
* **deps:** bump react-i18next from 14.0.0 to 14.0.1 ([673b8c7](https://github.com/terrestris/shogun-gis-client/commit/673b8c7ca4b54abd3b2cc5c6b81a6f11034752c9))
* **deps:** bump react-i18next from 14.0.1 to 14.0.5 ([bac3915](https://github.com/terrestris/shogun-gis-client/commit/bac3915aa95ada72fac65c1e7d9948c0b6b7a7dc))
* set dev server protocol to http ([8747a6f](https://github.com/terrestris/shogun-gis-client/commit/8747a6f3b4f5e8b830ddefd9b756518f5e8a1f8f))


### Changes in configuration

* removes github api token varaible ([c92b7d5](https://github.com/terrestris/shogun-gis-client/commit/c92b7d50c5ca0fa8a7f4bed0bb97e941ed894389))
* update node version to 20 ([a6c4b62](https://github.com/terrestris/shogun-gis-client/commit/a6c4b62cf2c6588270088de59b6e31db3a4bea2c))
* use github token for release workflow ([bc18a04](https://github.com/terrestris/shogun-gis-client/commit/bc18a04e4180998a6110232127e4dece989456c3))


### Features

* adds a brand new delete button ([#1476](https://github.com/terrestris/shogun-gis-client/issues/1476)) ([148f074](https://github.com/terrestris/shogun-gis-client/commit/148f074126420f96bace3eadec07c5255ae3899c))


### Bugfixes

* adds error handling for non (Geo-)JSON files ([e6ab02a](https://github.com/terrestris/shogun-gis-client/commit/e6ab02af598add511898dc219ea055cf9793c9b3))
* allow empty array of copy tools ([ff43fcd](https://github.com/terrestris/shogun-gis-client/commit/ff43fcda32e728afa202decafc581db7ce837fb8))
* fixes a type error ([e84a24e](https://github.com/terrestris/shogun-gis-client/commit/e84a24e602068ea7b3c12383b48bd87cdd812625))
* prevents the application from crashing when a corrupt file is uploaded ([014e46b](https://github.com/terrestris/shogun-gis-client/commit/014e46baca56a6e6101e25041e5248412edcf06a))
* reset form fields before setting values ([e72b4e6](https://github.com/terrestris/shogun-gis-client/commit/e72b4e6d0a2adb49a07588b0b01ecda41868abef))

## [7.3.1](https://github.com/terrestris/shogun-gis-client/compare/v7.3.0...v7.3.1) (2024-01-16)


### Dependencies

* **deps-dev:** bump @babel/core from 7.23.6 to 7.23.7 ([b506068](https://github.com/terrestris/shogun-gis-client/commit/b5060686a61fdc1c08058b2ec313923616294cf1))
* **deps-dev:** bump @babel/runtime from 7.23.6 to 7.23.8 ([a3f393b](https://github.com/terrestris/shogun-gis-client/commit/a3f393bad8157cee37883089d757113dfb63faf4))
* **deps-dev:** bump @commitlint/config-conventional ([8ef85d1](https://github.com/terrestris/shogun-gis-client/commit/8ef85d1c10a1c8cb15375a754129bd2f5351efc7))
* **deps-dev:** bump @testing-library/user-event from 14.5.1 to 14.5.2 ([352fc5f](https://github.com/terrestris/shogun-gis-client/commit/352fc5f8da04fc9f3300b43e2a738b51f94eb926))
* **deps-dev:** bump @typescript-eslint/parser from 6.15.0 to 6.18.1 ([4ed0eaa](https://github.com/terrestris/shogun-gis-client/commit/4ed0eaa6f32618738af4c2efa7d1e3aff385d902))
* **deps-dev:** bump copy-webpack-plugin from 11.0.0 to 12.0.1 ([a089b02](https://github.com/terrestris/shogun-gis-client/commit/a089b02969abbc6deba992e8c6cffd54c5418201))
* **deps-dev:** bump css-loader from 6.8.1 to 6.9.0 ([646893b](https://github.com/terrestris/shogun-gis-client/commit/646893b6cedbcb60cbe3a1e8826eced3b3c3326d))
* **deps-dev:** bump less-loader from 11.1.3 to 11.1.4 ([3412f5b](https://github.com/terrestris/shogun-gis-client/commit/3412f5bfaf099494cb70fdc34cdee1de89bf4ecc))
* **deps-dev:** bump mini-css-extract-plugin from 2.7.6 to 2.7.7 ([fbd8b10](https://github.com/terrestris/shogun-gis-client/commit/fbd8b10d7e25cd5cbd6f6c1310a8e5c6fdca7a32))
* **deps-dev:** bump style-loader from 3.3.3 to 3.3.4 ([27db8cc](https://github.com/terrestris/shogun-gis-client/commit/27db8cc9ccd7d7eb4016c6be08c3d6e1f8c73841))
* **deps-dev:** bump terser-webpack-plugin from 5.3.9 to 5.3.10 ([f27be82](https://github.com/terrestris/shogun-gis-client/commit/f27be8234f4586fbbed571fc8dbfeb0d4b40ccef))
* **deps:** bump keycloak-js from 23.0.3 to 23.0.4 ([a6c0a36](https://github.com/terrestris/shogun-gis-client/commit/a6c0a3635fce96a90d5bd650413f12031c4d12fd))


### Bugfixes

* removes all competing actions in the map tools among each other ([4c0b320](https://github.com/terrestris/shogun-gis-client/commit/4c0b3208976341cd38a2458760a1b11202fa93ca))
* reset print form fields ([002c8d6](https://github.com/terrestris/shogun-gis-client/commit/002c8d69f5bcc280e959ac9684272a3a2609e128))

## [7.3.0](https://github.com/terrestris/shogun-gis-client/compare/v7.2.0...v7.3.0) (2024-01-11)


### Dependencies

* adjust import order for CookieBanner and EditFeatureDrawer ([b8d21db](https://github.com/terrestris/shogun-gis-client/commit/b8d21db1e988d2984b8f5986820853dd2efbf3a1))
* **deps-dev:** bump @semantic-release/github from 9.2.5 to 9.2.6 ([791b3b6](https://github.com/terrestris/shogun-gis-client/commit/791b3b600e6707ed81c6744e81fa3a21d2608363))
* **deps-dev:** bump @typescript-eslint/eslint-plugin ([bd01c3e](https://github.com/terrestris/shogun-gis-client/commit/bd01c3ea7c231109c35928b9cb6d74acb891ecb8))
* **deps:** bump react-i18next from 13.5.0 to 14.0.0 ([31d4b91](https://github.com/terrestris/shogun-gis-client/commit/31d4b91c79b6482837c70696d0163f86838a17ac))
* removes unnecessary div ([b16c9af](https://github.com/terrestris/shogun-gis-client/commit/b16c9af2a38bdf1508639e69c739d4e9ed4a03dc))
* removes unnecessary semicolon ([92811fc](https://github.com/terrestris/shogun-gis-client/commit/92811fcdd28e86cb5e3d90186c12173241655f5e))
* update @terrestris/react-geo to v23.3.0 ([02279ba](https://github.com/terrestris/shogun-gis-client/commit/02279ba1ca40ff7c3776df017e7577f051fe2194))
* update react-cookie-consent to ^v9.0.0 ([e65963d](https://github.com/terrestris/shogun-gis-client/commit/e65963d73240dc283f63108d7d65a1906dc98f78))


### Features

* adds cookie consent banner ([10317c1](https://github.com/terrestris/shogun-gis-client/commit/10317c1b92321d9261a114a8dee26a8dd111289f))
* adds search result zoom offset ([fd8b088](https://github.com/terrestris/shogun-gis-client/commit/fd8b0882a73f607e84e3b28a38e9865f052ddca7))


### Bugfixes

* code style ([7931aa4](https://github.com/terrestris/shogun-gis-client/commit/7931aa4dcffdb440e576b6a4ec4bb868e694d0aa))
* fixes a typecheck error ([49a05ba](https://github.com/terrestris/shogun-gis-client/commit/49a05badc1bb63cdb70b60030f611a8619ec996e))
* resets the dpi field when changing the layout ([096cbbc](https://github.com/terrestris/shogun-gis-client/commit/096cbbc0150d4231260fa3007e7f586308ca52cd))
* styling of cookie banner and consent text ([c1df9e5](https://github.com/terrestris/shogun-gis-client/commit/c1df9e55e4932c3d8d9b80c21e337d4e7985e93a))
* updates nominatim search to match current component requirements ([ad95590](https://github.com/terrestris/shogun-gis-client/commit/ad955904a76642178adda9071e8a8da7095d20ca))
* use ol fit padding to shift center view ([cc91a3a](https://github.com/terrestris/shogun-gis-client/commit/cc91a3adffff93534ee34e16263b29463d166afe))

## [7.2.0](https://github.com/terrestris/shogun-gis-client/compare/v7.1.1...v7.2.0) (2023-12-20)


### Dependencies

* **deps-dev:** bump @babel/core from 7.23.5 to 7.23.6 ([07e6276](https://github.com/terrestris/shogun-gis-client/commit/07e6276c2c013b60d79b009f6641fd5364cd5438))
* **deps-dev:** bump @babel/preset-env from 7.23.5 to 7.23.6 ([0694efc](https://github.com/terrestris/shogun-gis-client/commit/0694efcecc7b11240ed40c176c9f70bbc2e386ff))
* **deps-dev:** bump @babel/runtime from 7.23.5 to 7.23.6 ([16af82f](https://github.com/terrestris/shogun-gis-client/commit/16af82fa5b6795f7f69a1ccc5fbf4529026ef2e1))
* **deps-dev:** bump @semantic-release/github from 9.2.4 to 9.2.5 ([174779e](https://github.com/terrestris/shogun-gis-client/commit/174779e9cf5f492a17ab1374933de1b4bacc8c18))
* **deps-dev:** bump @semantic-release/npm from 11.0.1 to 11.0.2 ([677ffae](https://github.com/terrestris/shogun-gis-client/commit/677ffae5104493ebfddd70f81d508bf2d5f4cdf3))
* **deps-dev:** bump @types/jest from 29.5.10 to 29.5.11 ([441f197](https://github.com/terrestris/shogun-gis-client/commit/441f1975a5a6b5ff7819091897303d4dc242d77e))
* **deps-dev:** bump @types/node from 20.10.1 to 20.10.3 ([c13aafb](https://github.com/terrestris/shogun-gis-client/commit/c13aafb1825ed730a3d089de157a2f3ced780312))
* **deps-dev:** bump @types/node from 20.10.3 to 20.10.4 ([79e730b](https://github.com/terrestris/shogun-gis-client/commit/79e730baa4fa24eb086a1c46e934fc1059681fa3))
* **deps-dev:** bump @types/node from 20.10.4 to 20.10.5 ([a8e5c6e](https://github.com/terrestris/shogun-gis-client/commit/a8e5c6ea33032ebf97e1a9fcf04f124c560a06dc))
* **deps-dev:** bump @typescript-eslint/eslint-plugin ([c0da4e7](https://github.com/terrestris/shogun-gis-client/commit/c0da4e7bba546e6de05c6cbf040100a13d8f2266))
* **deps-dev:** bump @typescript-eslint/eslint-plugin ([631776b](https://github.com/terrestris/shogun-gis-client/commit/631776b781083ae8e22535d06d1a628fff1205ff))
* **deps-dev:** bump @typescript-eslint/eslint-plugin ([7b74025](https://github.com/terrestris/shogun-gis-client/commit/7b74025f652fc20d6eb583d818f610feafac0887))
* **deps-dev:** bump @typescript-eslint/parser from 6.13.1 to 6.13.2 ([fcd7d9e](https://github.com/terrestris/shogun-gis-client/commit/fcd7d9eb9dbc700d31e66f191d011c6d0b491448))
* **deps-dev:** bump @typescript-eslint/parser from 6.13.2 to 6.14.0 ([f6540f7](https://github.com/terrestris/shogun-gis-client/commit/f6540f7f0a47974b3c4f2863cc42df755776dc6d))
* **deps-dev:** bump @typescript-eslint/parser from 6.14.0 to 6.15.0 ([ef472e1](https://github.com/terrestris/shogun-gis-client/commit/ef472e117f7b3792726b5a9e94d6e3466a2b246d))
* **deps-dev:** bump eslint from 8.54.0 to 8.55.0 ([165f57e](https://github.com/terrestris/shogun-gis-client/commit/165f57e924e67bb130ff9d1b574304ca403832d4))
* **deps-dev:** bump eslint from 8.55.0 to 8.56.0 ([86993db](https://github.com/terrestris/shogun-gis-client/commit/86993db99b5dab6e6f4f1cf2e12c29d9b239373c))
* **deps-dev:** bump eslint-plugin-import from 2.29.0 to 2.29.1 ([7c9e315](https://github.com/terrestris/shogun-gis-client/commit/7c9e315cc7113aa97bb0eda2fd42e6926599d164))
* **deps-dev:** bump html-webpack-plugin from 5.5.3 to 5.5.4 ([a13450b](https://github.com/terrestris/shogun-gis-client/commit/a13450be980feebf574e8a4b4171702d10685e26))
* **deps-dev:** bump html-webpack-plugin from 5.5.4 to 5.6.0 ([b09012c](https://github.com/terrestris/shogun-gis-client/commit/b09012c6157cbfc9f582a036f97ff26a6d5b124f))
* **deps-dev:** bump semantic-release from 22.0.10 to 22.0.12 ([e8f4d56](https://github.com/terrestris/shogun-gis-client/commit/e8f4d56d038b292e3bb022acdac753f2076590d0))
* **deps-dev:** bump semantic-release from 22.0.8 to 22.0.10 ([d84dc38](https://github.com/terrestris/shogun-gis-client/commit/d84dc38112b1c6cf94fb565748e5d025d5571b0d))
* **deps-dev:** bump typescript from 5.3.2 to 5.3.3 ([fae2b01](https://github.com/terrestris/shogun-gis-client/commit/fae2b01d7a323857f9df68bf9ad67b5e2a465b4f))
* **deps:** bump i18next from 23.7.7 to 23.7.8 ([e2e9a15](https://github.com/terrestris/shogun-gis-client/commit/e2e9a15b2ee20f39618ef3096785e5678f836c1b))
* **deps:** bump i18next from 23.7.8 to 23.7.11 ([3ef8466](https://github.com/terrestris/shogun-gis-client/commit/3ef8466fa5f7d924a9f18265fe8c329fb3766d46))
* **deps:** bump keycloak-js from 23.0.1 to 23.0.3 ([e81b8fe](https://github.com/terrestris/shogun-gis-client/commit/e81b8fe8524a07ade5b9a75ea4e150a32a0e20f6))


### Features

* remove twitter from permalink ([#1301](https://github.com/terrestris/shogun-gis-client/issues/1301)) ([14f21fd](https://github.com/terrestris/shogun-gis-client/commit/14f21fd1d7d5f20f8cbb714d26b55525adf71b35))
* show permission denied message for applications that are not public ([4aa3b6b](https://github.com/terrestris/shogun-gis-client/commit/4aa3b6b50d7ea4cf99f57cd8c054a181614671b2))


### Bugfixes

* refactor loading animation ([#1309](https://github.com/terrestris/shogun-gis-client/issues/1309)) ([ddb4ae5](https://github.com/terrestris/shogun-gis-client/commit/ddb4ae572ec86584e8c2174aa71cf71f73911988))
* use proper typing for alert message type ([069174b](https://github.com/terrestris/shogun-gis-client/commit/069174bcfaf171b72264e858973e89f27c4b8976))

## [7.1.1](https://github.com/terrestris/shogun-gis-client/compare/v7.1.0...v7.1.1) (2023-12-01)


### Dependencies

* **deps-dev:** bump @babel/core from 7.23.3 to 7.23.5 ([afc8fc3](https://github.com/terrestris/shogun-gis-client/commit/afc8fc39e8049651a71a53a010d8f77322faae8c))
* **deps-dev:** bump @babel/preset-env from 7.23.3 to 7.23.5 ([dd6df2e](https://github.com/terrestris/shogun-gis-client/commit/dd6df2e507bac5ddf4a068a513b4cb2c50093959))
* **deps-dev:** bump @babel/runtime from 7.23.4 to 7.23.5 ([b5accad](https://github.com/terrestris/shogun-gis-client/commit/b5accad5fffb399264d349f4ab313461255cb231))
* **deps-dev:** bump @semantic-release/github from 9.2.3 to 9.2.4 ([1359825](https://github.com/terrestris/shogun-gis-client/commit/1359825429558cb4349dcb6cf0420f841ce3756c))
* **deps-dev:** bump @types/node from 20.10.0 to 20.10.1 ([df2525d](https://github.com/terrestris/shogun-gis-client/commit/df2525d499f34156f849be8b429c1125a6946ee3))
* **deps:** bump keycloak-js from 22.0.5 to 23.0.1 ([3d00fc0](https://github.com/terrestris/shogun-gis-client/commit/3d00fc0a284ee26419793725699576358e5d9968))


### Bugfixes

* convert image uploads to base64 and handle URLs ([c6fa18b](https://github.com/terrestris/shogun-gis-client/commit/c6fa18b0a511f2de9c921846954828cc529f147c))

## [7.1.0](https://github.com/terrestris/shogun-gis-client/compare/v7.0.0...v7.1.0) (2023-11-29)


### Dependencies

* update react-geo to version ^23.2.0 ([0b75d57](https://github.com/terrestris/shogun-gis-client/commit/0b75d57efbfdbf6cc86a0a1b33feb0b6f0daf546))


### Features

* release a version to include latest rect-geo ([b52c1d9](https://github.com/terrestris/shogun-gis-client/commit/b52c1d90bc5ad1e1f9870c521a3c0884ced94f2c))

## [7.0.0](https://github.com/terrestris/shogun-gis-client/compare/v6.13.3...v7.0.0) (2023-11-29)


### ⚠ BREAKING CHANGES

* **gfi:** introduce featureInfo slice handling enabled state

### Dependencies

* adds FileInfoList type definition ([8b01b4a](https://github.com/terrestris/shogun-gis-client/commit/8b01b4adeaafd2e71c0142c9a9b683a4660a19a1))
* adds lint:fix script ([854a3a4](https://github.com/terrestris/shogun-gis-client/commit/854a3a4790368a91d82f2af66d9c5d70d1cdaee8))
* **code:** use node 18 and adds .nvmrc file ([d88209b](https://github.com/terrestris/shogun-gis-client/commit/d88209b41c2da8f2feefbb7b870f4d7f9e2d7297))
* **deps-dev:** bump @babel/cli from 7.23.0 to 7.23.4 ([90042a7](https://github.com/terrestris/shogun-gis-client/commit/90042a776009190f3fac3b4b057aba8304b241f1))
* **deps-dev:** bump @babel/core from 7.23.2 to 7.23.3 ([089105a](https://github.com/terrestris/shogun-gis-client/commit/089105a29f53222691da03ee2f6d7fbca11acc63))
* **deps-dev:** bump @babel/preset-env from 7.23.2 to 7.23.3 ([3414c7b](https://github.com/terrestris/shogun-gis-client/commit/3414c7bc0fb09201a03513a5c2e07815c132ae22))
* **deps-dev:** bump @babel/preset-react from 7.22.15 to 7.23.3 ([d8b854f](https://github.com/terrestris/shogun-gis-client/commit/d8b854f4e732783d802291d6b6f3c254e43e0004))
* **deps-dev:** bump @babel/preset-typescript from 7.23.2 to 7.23.3 ([f875912](https://github.com/terrestris/shogun-gis-client/commit/f875912196b132f5d7a917659572041c9b6ce3a4))
* **deps-dev:** bump @babel/runtime from 7.23.2 to 7.23.4 ([4265bf0](https://github.com/terrestris/shogun-gis-client/commit/4265bf0242d27b99f0075a89429d77c332174f52))
* **deps-dev:** bump @commitlint/cli from 18.2.0 to 18.4.1 ([7a07410](https://github.com/terrestris/shogun-gis-client/commit/7a0741065d1fa5724af1a9591682dd0497312758))
* **deps-dev:** bump @commitlint/cli from 18.4.1 to 18.4.2 ([b083334](https://github.com/terrestris/shogun-gis-client/commit/b0833343d2d4c4ca84bdee46443412e93ca54682))
* **deps-dev:** bump @commitlint/cli from 18.4.2 to 18.4.3 ([c4f8707](https://github.com/terrestris/shogun-gis-client/commit/c4f87072b08448785514dce98d0ec22f3ff3dda6))
* **deps-dev:** bump @commitlint/config-conventional ([671d27a](https://github.com/terrestris/shogun-gis-client/commit/671d27ab0634117a8d3b8328afeaec26cbde2e3d))
* **deps-dev:** bump @commitlint/config-conventional ([c568c3a](https://github.com/terrestris/shogun-gis-client/commit/c568c3a4f4c139a744b030c265bf08b4fa1d1acc))
* **deps-dev:** bump @commitlint/config-conventional ([ea5cf9d](https://github.com/terrestris/shogun-gis-client/commit/ea5cf9da7e061cd60eb0d09dcf01fda6d1c7b139))
* **deps-dev:** bump @playwright/test from 1.39.0 to 1.40.0 ([19664b6](https://github.com/terrestris/shogun-gis-client/commit/19664b60d63a04ec56716d1c57d9cee4a70a3cc2))
* **deps-dev:** bump @playwright/test from 1.40.0 to 1.40.1 ([3b81526](https://github.com/terrestris/shogun-gis-client/commit/3b81526c5e950ba2945c98292ebd18509fa57624))
* **deps-dev:** bump @semantic-release/github from 9.2.1 to 9.2.3 ([642dc0c](https://github.com/terrestris/shogun-gis-client/commit/642dc0cab3bb8f82a0d6527ae5dacfee59995110))
* **deps-dev:** bump @semantic-release/npm from 11.0.0 to 11.0.1 ([b9bfa82](https://github.com/terrestris/shogun-gis-client/commit/b9bfa82f197ccde0affc9a4e530606ac618e1d0b))
* **deps-dev:** bump @semantic-release/release-notes-generator ([93f2c44](https://github.com/terrestris/shogun-gis-client/commit/93f2c44abc2e9a95858727dc70b8905920b768a7))
* **deps-dev:** bump @types/color from 3.0.5 to 3.0.6 ([403bf08](https://github.com/terrestris/shogun-gis-client/commit/403bf087ff9821dbb2820e12cbbbe603cb27d2f6))
* **deps-dev:** bump @types/jest from 29.5.7 to 29.5.8 ([dac699b](https://github.com/terrestris/shogun-gis-client/commit/dac699ba3262ca8718eb5d52159ae563e589701a))
* **deps-dev:** bump @types/jest from 29.5.8 to 29.5.9 ([2d4fb32](https://github.com/terrestris/shogun-gis-client/commit/2d4fb32960da01b34a19477e58717d54805600f6))
* **deps-dev:** bump @types/jest from 29.5.9 to 29.5.10 ([6188db1](https://github.com/terrestris/shogun-gis-client/commit/6188db19919fa9c153a88b11baa5966e7ed38809))
* **deps-dev:** bump @types/node from 20.8.10 to 20.9.0 ([e547038](https://github.com/terrestris/shogun-gis-client/commit/e5470380931e96ea4e3d24e02935c676b42e2c38))
* **deps-dev:** bump @types/node from 20.8.9 to 20.8.10 ([719afcc](https://github.com/terrestris/shogun-gis-client/commit/719afcc691e311f515e32cd37b5002f9d57f1b38))
* **deps-dev:** bump @types/node from 20.9.0 to 20.9.1 ([776103a](https://github.com/terrestris/shogun-gis-client/commit/776103a8ff00595c4eb0976d93d068c35b5e5599))
* **deps-dev:** bump @types/node from 20.9.1 to 20.9.2 ([0cf2830](https://github.com/terrestris/shogun-gis-client/commit/0cf28308e692a88d70a345078f212b19c5a2a4f7))
* **deps-dev:** bump @types/node from 20.9.2 to 20.9.3 ([3955137](https://github.com/terrestris/shogun-gis-client/commit/3955137cda634b34dad3ee248fac5e4538d6fe43))
* **deps-dev:** bump @types/node from 20.9.3 to 20.9.4 ([aeec7cb](https://github.com/terrestris/shogun-gis-client/commit/aeec7cbe102222ee257fa62b21e0bc8d27d74cb9))
* **deps-dev:** bump @types/node from 20.9.4 to 20.9.5 ([948a9fb](https://github.com/terrestris/shogun-gis-client/commit/948a9fb2dbbcd49d07b8b33442763824f910ecdd))
* **deps-dev:** bump @types/node from 20.9.5 to 20.10.0 ([dd37f32](https://github.com/terrestris/shogun-gis-client/commit/dd37f32e79501800e8480ccef437715c6c97cacb))
* **deps-dev:** bump @typescript-eslint/eslint-plugin ([6e6cea0](https://github.com/terrestris/shogun-gis-client/commit/6e6cea05ccbe5309eb80d85bf2dd45158ef954af))
* **deps-dev:** bump @typescript-eslint/eslint-plugin ([2aa90be](https://github.com/terrestris/shogun-gis-client/commit/2aa90be097d89224dde5e39e86a8cb66cd7a9bf8))
* **deps-dev:** bump @typescript-eslint/eslint-plugin ([91f8755](https://github.com/terrestris/shogun-gis-client/commit/91f87554b421322d5d493c5029a895c7f3cf4ce5))
* **deps-dev:** bump @typescript-eslint/eslint-plugin ([88cbab3](https://github.com/terrestris/shogun-gis-client/commit/88cbab3349da959a37635022843e29ed92230cda))
* **deps-dev:** bump @typescript-eslint/eslint-plugin ([acad500](https://github.com/terrestris/shogun-gis-client/commit/acad50038d15e8ef66a354846118675f8e708c59))
* **deps-dev:** bump @typescript-eslint/parser from 6.10.0 to 6.11.0 ([5c77144](https://github.com/terrestris/shogun-gis-client/commit/5c771448daedc3740ce43e7ee59d3c06aac7f15c))
* **deps-dev:** bump @typescript-eslint/parser from 6.11.0 to 6.12.0 ([77fb3f1](https://github.com/terrestris/shogun-gis-client/commit/77fb3f159fa56152a1dbd4fff05b9d37112a8cef))
* **deps-dev:** bump @typescript-eslint/parser from 6.12.0 to 6.13.0 ([a657568](https://github.com/terrestris/shogun-gis-client/commit/a6575688f2d0649f05d6036068a876e661959700))
* **deps-dev:** bump @typescript-eslint/parser from 6.13.0 to 6.13.1 ([333720e](https://github.com/terrestris/shogun-gis-client/commit/333720e952e73466566954e574fff3e1521e4afc))
* **deps-dev:** bump @typescript-eslint/parser from 6.9.1 to 6.10.0 ([308ede3](https://github.com/terrestris/shogun-gis-client/commit/308ede383f6f457ef88bb02339cc14b40a11466b))
* **deps-dev:** bump eslint from 8.52.0 to 8.53.0 ([faedbf0](https://github.com/terrestris/shogun-gis-client/commit/faedbf08ed95bcef6823c1c0a4ebb3ad6fc38953))
* **deps-dev:** bump eslint from 8.53.0 to 8.54.0 ([33e3cca](https://github.com/terrestris/shogun-gis-client/commit/33e3ccac009e8e9a96ca9b7d9a19286d11f8dd31))
* **deps-dev:** bump fs-extra from 11.1.1 to 11.2.0 ([1349b6a](https://github.com/terrestris/shogun-gis-client/commit/1349b6a6aeb8f1679589b2d2d852cd4c218729a2))
* **deps-dev:** bump semantic-release from 22.0.6 to 22.0.7 ([01c66ed](https://github.com/terrestris/shogun-gis-client/commit/01c66ed35f7427f225c380474ff070e75bea098e))
* **deps-dev:** bump semantic-release from 22.0.7 to 22.0.8 ([5085bcb](https://github.com/terrestris/shogun-gis-client/commit/5085bcb1975625a370ec0ca821e943faec05a509))
* **deps-dev:** bump typescript from 5.2.2 to 5.3.2 ([d2f7591](https://github.com/terrestris/shogun-gis-client/commit/d2f75913f2ef9cdd0854b538d2aa566426572274))
* **deps-dev:** bump webpack-bundle-analyzer from 4.9.1 to 4.10.1 ([da48d90](https://github.com/terrestris/shogun-gis-client/commit/da48d908d4861c0245a7444ae36bbfa93a5010d8))
* **deps:** bump antd from 4.24.14 to 4.24.15 ([0e35602](https://github.com/terrestris/shogun-gis-client/commit/0e35602a9f1d4bff2bef365df476c79d8bfab23f))
* **deps:** bump i18next from 23.6.0 to 23.7.6 ([8782da8](https://github.com/terrestris/shogun-gis-client/commit/8782da8c2e13bd57022aaf23e68fa2d4cccb1e1b))
* **deps:** bump i18next from 23.7.6 to 23.7.7 ([75331a6](https://github.com/terrestris/shogun-gis-client/commit/75331a629edfe01926949cdd311afb971d0ef963))
* **deps:** bump i18next-browser-languagedetector from 7.1.0 to 7.2.0 ([db2e3ae](https://github.com/terrestris/shogun-gis-client/commit/db2e3ae85534f628912966b3a3561635ae04ea42))
* **deps:** bump react-i18next from 13.3.1 to 13.4.0 ([01a802b](https://github.com/terrestris/shogun-gis-client/commit/01a802beb7bc06bd563ef50a0cb58ae3339deb2f))
* **deps:** bump react-i18next from 13.4.0 to 13.4.1 ([137938d](https://github.com/terrestris/shogun-gis-client/commit/137938d4be5fcb5b3e2bd5fc87221832529672d2))
* **deps:** bump react-i18next from 13.4.1 to 13.5.0 ([34de355](https://github.com/terrestris/shogun-gis-client/commit/34de3552c4434ce96dabf78416c92172883f7551))
* **gh-actions:** bump versions of github actions ([c01eb7f](https://github.com/terrestris/shogun-gis-client/commit/c01eb7f22d329fbe7b75c7111162b19463b4fdce))
* update react-geo to version ^23.1.3 ([ea6c10b](https://github.com/terrestris/shogun-gis-client/commit/ea6c10bca5e97bcfccce1090ee1a1266dabf3a82))


### Features

* add error handling for form validation ([ba9157c](https://github.com/terrestris/shogun-gis-client/commit/ba9157c7912a0c311edd3bd6f38f95ecd19fd4e3))
* **gfi:** make copy tools configurable via tool config in admin ([f00898e](https://github.com/terrestris/shogun-gis-client/commit/f00898e49feff74b56fc6690b1b8de6ecc5cb835))


### Bugfixes

* **featureinfo:** remove unused props ([817a984](https://github.com/terrestris/shogun-gis-client/commit/817a9841d0c1f5ba0803cfdad7b28d4700798803))
* fixes a file upload bug in EditReferenceTable component ([5ecef19](https://github.com/terrestris/shogun-gis-client/commit/5ecef19928e71f864c537c219c7e2baffa7c4ccd))
* update fetch options in FeatureInfo component ([1eddbab](https://github.com/terrestris/shogun-gis-client/commit/1eddbab6fa337ea8b20585559a702878bd4af116))


### Changes in layout

* adjust shadow ([8fe1973](https://github.com/terrestris/shogun-gis-client/commit/8fe197357ff3000fbc6097e18dcdcb6e12640631))
* adjust styling of active buttons ([2f1a9f9](https://github.com/terrestris/shogun-gis-client/commit/2f1a9f91fc4f4d2999fed5f4b86088262dd136b8))

## [6.13.3](https://github.com/terrestris/shogun-gis-client/compare/v6.13.2...v6.13.3) (2023-10-31)


### Dependencies

* **deps-dev:** bump @types/jest from 29.5.6 to 29.5.7 ([4267161](https://github.com/terrestris/shogun-gis-client/commit/426716182f01f30170f9df46b185a5b664e9b573))
* **deps-dev:** bump @typescript-eslint/eslint-plugin ([aae4222](https://github.com/terrestris/shogun-gis-client/commit/aae422205b492da494cfbf3fdb865555e33d3cf6))
* **deps-dev:** bump @typescript-eslint/parser from 6.9.0 to 6.9.1 ([2b37ee0](https://github.com/terrestris/shogun-gis-client/commit/2b37ee09cf637d1a254fd4f585c02ec17cef93ed))
* **deps-dev:** bump semantic-release from 22.0.5 to 22.0.6 ([021712e](https://github.com/terrestris/shogun-gis-client/commit/021712e8030f8445faaa9b833c4d2eef2cffad19))


### Bugfixes

* fix setting of attribution ([28e4c0a](https://github.com/terrestris/shogun-gis-client/commit/28e4c0a992a19742ad02c874da4ae1db15dfcb82))

## [6.13.2](https://github.com/terrestris/shogun-gis-client/compare/v6.13.1...v6.13.2) (2023-10-30)


### Bugfixes

* adds a check if layers is present and adjusts typing name ([67efb48](https://github.com/terrestris/shogun-gis-client/commit/67efb4806861198ae48fbe26518b55594f32f781))
* uses the first tab on FI ([612f4f5](https://github.com/terrestris/shogun-gis-client/commit/612f4f56bf0cfb9312a1e5d2e6788d785e94919d))

## [6.13.1](https://github.com/terrestris/shogun-gis-client/compare/v6.13.0...v6.13.1) (2023-10-30)


### Dependencies

* **deps-dev:** bump @commitlint/cli from 17.8.0 to 18.0.0 ([bff7bb2](https://github.com/terrestris/shogun-gis-client/commit/bff7bb25b4146960a1f59c2d68c12fe5a1e9fbd9))
* **deps-dev:** bump @commitlint/cli from 18.0.0 to 18.1.0 ([3164ffc](https://github.com/terrestris/shogun-gis-client/commit/3164ffc28ec5a685e23fba657897ae4c389229d8))
* **deps-dev:** bump @commitlint/cli from 18.1.0 to 18.2.0 ([a12c21d](https://github.com/terrestris/shogun-gis-client/commit/a12c21de66212c492c9a701fe06001b3d06752cb))
* **deps-dev:** bump @commitlint/config-conventional ([fa88bb7](https://github.com/terrestris/shogun-gis-client/commit/fa88bb7cf09f8d4454ef148e8e4cc201cbe2ce2a))
* **deps-dev:** bump @commitlint/config-conventional ([55d72c2](https://github.com/terrestris/shogun-gis-client/commit/55d72c2493509cedd4f28db4ef007b1bbaa70935))
* **deps-dev:** bump @types/jest from 29.5.5 to 29.5.6 ([f325563](https://github.com/terrestris/shogun-gis-client/commit/f3255637d40f56073457776256c0af3112fb6d30))
* **deps-dev:** bump @types/node from 20.8.6 to 20.8.7 ([326ac02](https://github.com/terrestris/shogun-gis-client/commit/326ac024fd352b935320f28c35577c57e7af65f9))
* **deps-dev:** bump @types/node from 20.8.7 to 20.8.8 ([15bd978](https://github.com/terrestris/shogun-gis-client/commit/15bd978bf61743077759b7919a0c06ae4ca47994))
* **deps-dev:** bump @types/node from 20.8.8 to 20.8.9 ([6ae76cd](https://github.com/terrestris/shogun-gis-client/commit/6ae76cde5860998127ed13cb1483d0d09e2ccafe))
* **deps-dev:** bump @typescript-eslint/eslint-plugin ([fd724c1](https://github.com/terrestris/shogun-gis-client/commit/fd724c12223a89110856e20529fb41004084df05))
* **deps-dev:** bump @typescript-eslint/parser from 6.8.0 to 6.9.0 ([99e2def](https://github.com/terrestris/shogun-gis-client/commit/99e2def543ca44cab8c735d9a1d1b85b600208a1))
* **deps-dev:** bump eslint from 8.51.0 to 8.52.0 ([e6ee2f8](https://github.com/terrestris/shogun-gis-client/commit/e6ee2f8b3b27590120457555316f5fed428f92e7))
* **deps-dev:** bump eslint-plugin-import from 2.28.1 to 2.29.0 ([4cf127a](https://github.com/terrestris/shogun-gis-client/commit/4cf127a830f070beeb90ec86b277c0e3fb3e3bcb))
* **deps:** bump @terrestris/base-util from 1.0.2 to 1.1.0 ([cb9b06e](https://github.com/terrestris/shogun-gis-client/commit/cb9b06e2813b7fa8dc91a9a08c90863507c71fd9))
* **deps:** bump i18next from 23.5.1 to 23.6.0 ([d8b2f86](https://github.com/terrestris/shogun-gis-client/commit/d8b2f86c2d287c40df790299d7b708d6ed7a5d96))
* **deps:** bump keycloak-js from 22.0.4 to 22.0.5 ([3952f17](https://github.com/terrestris/shogun-gis-client/commit/3952f17546a248a518129211ee1bb8120ea9659a))
* **deps:** bump react-i18next from 13.3.0 to 13.3.1 ([4987c60](https://github.com/terrestris/shogun-gis-client/commit/4987c60a3acf0811621ae762885e2ebdf4b1c3a2))


### Bugfixes

* uses first tab on feature info panel when a new feature info is triggered ([38be461](https://github.com/terrestris/shogun-gis-client/commit/38be461abe514c78a452d63e0765a81b93d09885))

## [6.13.0](https://github.com/terrestris/shogun-gis-client/compare/v6.12.0...v6.13.0) (2023-10-18)


### Dependencies

* **deps-dev:** bump @babel/cli from 7.22.15 to 7.23.0 ([62bc6f8](https://github.com/terrestris/shogun-gis-client/commit/62bc6f82648b7009b68a96536691bcfa0445d65a))
* **deps-dev:** bump @babel/core from 7.22.20 to 7.23.0 ([12a6ce1](https://github.com/terrestris/shogun-gis-client/commit/12a6ce1be37790ec5881095caeccc24d003a65db))
* **deps-dev:** bump @babel/core from 7.23.0 to 7.23.2 ([96ab56e](https://github.com/terrestris/shogun-gis-client/commit/96ab56e668a5b2cc51a64b1c548c5ee7a5fd9a15))
* **deps-dev:** bump @babel/preset-env from 7.22.20 to 7.23.2 ([5052e3f](https://github.com/terrestris/shogun-gis-client/commit/5052e3f8b4dbdee913e5b4a2a58cc346c3f1da2e))
* **deps-dev:** bump @babel/preset-typescript from 7.22.15 to 7.23.0 ([24e4417](https://github.com/terrestris/shogun-gis-client/commit/24e4417dc9cf049fa3a6d5e79d25dbf82d64a206))
* **deps-dev:** bump @babel/preset-typescript from 7.23.0 to 7.23.2 ([0b66a4c](https://github.com/terrestris/shogun-gis-client/commit/0b66a4c81238e99efb996d495a23b3ed0953d73c))
* **deps-dev:** bump @babel/runtime from 7.22.15 to 7.23.1 ([fe44ca7](https://github.com/terrestris/shogun-gis-client/commit/fe44ca7747e966a0dd7ff20bc945760ea918796c))
* **deps-dev:** bump @babel/runtime from 7.23.1 to 7.23.2 ([a75a21b](https://github.com/terrestris/shogun-gis-client/commit/a75a21b3b87d736071721ecb41c4022b7526742c))
* **deps-dev:** bump @casualbot/jest-sonar-reporter from 2.2.7 to 2.3.1 ([6ce9f93](https://github.com/terrestris/shogun-gis-client/commit/6ce9f932c603a442fd9493a32664c33ef25fe419))
* **deps-dev:** bump @commitlint/cli from 17.7.1 to 17.7.2 ([f7a40db](https://github.com/terrestris/shogun-gis-client/commit/f7a40db3c815789e3ea22568501247cfaabf897d))
* **deps-dev:** bump @commitlint/cli from 17.7.2 to 17.8.0 ([13b3c81](https://github.com/terrestris/shogun-gis-client/commit/13b3c81974ecfe47062113eb44c5066ef99ac041))
* **deps-dev:** bump @commitlint/config-conventional ([3d9707f](https://github.com/terrestris/shogun-gis-client/commit/3d9707f15f6aea9404b77a6e3d1154ea7595f271))
* **deps-dev:** bump @playwright/test from 1.38.1 to 1.39.0 ([98443cd](https://github.com/terrestris/shogun-gis-client/commit/98443cdc43575a50927fb20319fb8f260abd6bac))
* **deps-dev:** bump @semantic-release/github from 9.0.7 to 9.1.0 ([a596df9](https://github.com/terrestris/shogun-gis-client/commit/a596df9083a5cada2b02b105210f228ac27af18b))
* **deps-dev:** bump @semantic-release/github from 9.1.0 to 9.2.1 ([e21d808](https://github.com/terrestris/shogun-gis-client/commit/e21d808182f1a5beef5c1a435b4e01e6c2170494))
* **deps-dev:** bump @types/color from 3.0.4 to 3.0.5 ([719e833](https://github.com/terrestris/shogun-gis-client/commit/719e833978b384924815f33b973eb752e7b8bcfb))
* **deps-dev:** bump @types/node from 20.6.5 to 20.7.0 ([c4a3816](https://github.com/terrestris/shogun-gis-client/commit/c4a3816ae65073c4f9070e0b7f0b73cdca019686))
* **deps-dev:** bump @types/node from 20.7.0 to 20.7.1 ([5a48226](https://github.com/terrestris/shogun-gis-client/commit/5a48226254d8fef987f9fe70bd30511d33a93329))
* **deps-dev:** bump @types/node from 20.7.1 to 20.8.3 ([055729e](https://github.com/terrestris/shogun-gis-client/commit/055729e93f454269c0a0f97c0cad235e431f73cf))
* **deps-dev:** bump @types/node from 20.8.3 to 20.8.4 ([002cee4](https://github.com/terrestris/shogun-gis-client/commit/002cee4e5a3745ccecacc94f47f8487bc523143b))
* **deps-dev:** bump @types/node from 20.8.4 to 20.8.5 ([a05dfda](https://github.com/terrestris/shogun-gis-client/commit/a05dfdaf695be5ad8806c39845b08bc816d86064))
* **deps-dev:** bump @types/node from 20.8.5 to 20.8.6 ([25aea2a](https://github.com/terrestris/shogun-gis-client/commit/25aea2a6aa80891fb57a5120de231b1e1374a8ad))
* **deps-dev:** bump @typescript-eslint/eslint-plugin ([9c55348](https://github.com/terrestris/shogun-gis-client/commit/9c553485b21c0d22751b48f6068c916830de9edb))
* **deps-dev:** bump @typescript-eslint/eslint-plugin ([1a58227](https://github.com/terrestris/shogun-gis-client/commit/1a58227f02aa862c973b489c38d2d60a5e9c84e5))
* **deps-dev:** bump @typescript-eslint/eslint-plugin ([e6f0970](https://github.com/terrestris/shogun-gis-client/commit/e6f0970c0f166947207d64646fc3eabafe394760))
* **deps-dev:** bump @typescript-eslint/eslint-plugin ([0f3a93f](https://github.com/terrestris/shogun-gis-client/commit/0f3a93fefc8f8c0baecc2e065913e13c280e1970))
* **deps-dev:** bump @typescript-eslint/parser from 6.7.2 to 6.7.3 ([0cb941a](https://github.com/terrestris/shogun-gis-client/commit/0cb941a9405300c00d720586f8ce538e3b4dcda6))
* **deps-dev:** bump @typescript-eslint/parser from 6.7.3 to 6.7.4 ([1b01c4c](https://github.com/terrestris/shogun-gis-client/commit/1b01c4c2315339cfed3186d28e622ff031f92cc9))
* **deps-dev:** bump @typescript-eslint/parser from 6.7.4 to 6.7.5 ([b8c4b69](https://github.com/terrestris/shogun-gis-client/commit/b8c4b69e6dc5c8fbd1c84958556f22296a065277))
* **deps-dev:** bump @typescript-eslint/parser from 6.7.5 to 6.8.0 ([ab259a1](https://github.com/terrestris/shogun-gis-client/commit/ab259a1fbcca232627c06cdbf1641020874c6f39))
* **deps-dev:** bump eslint from 8.50.0 to 8.51.0 ([6b8b27b](https://github.com/terrestris/shogun-gis-client/commit/6b8b27bf13e307745db11c9640d10c0ba83f5088))
* **deps-dev:** bump webpack from 5.88.2 to 5.89.0 ([a4f4982](https://github.com/terrestris/shogun-gis-client/commit/a4f4982ed59a5c2014717b97ebcef67e1fbf4f97))
* **deps:** bump @monaco-editor/react from 4.5.2 to 4.6.0 ([e4d26a3](https://github.com/terrestris/shogun-gis-client/commit/e4d26a3edbc4915c263f0c1ab91c8c2b71e2b62c))
* **deps:** bump @reduxjs/toolkit from 1.9.6 to 1.9.7 ([cf7a816](https://github.com/terrestris/shogun-gis-client/commit/cf7a816a91ff53fbcfd9c06b3e333fc632ff9c78))
* **deps:** bump @terrestris/base-util from 1.0.1 to 1.0.2 ([fda87a4](https://github.com/terrestris/shogun-gis-client/commit/fda87a4ab867c5906e9f7618e0164b08e586e4c8))
* **deps:** bump @terrestris/mapfish-print-manager ([f551457](https://github.com/terrestris/shogun-gis-client/commit/f55145775a33cf0509837cb0ca6e3bbf12b9b2be))
* **deps:** bump @terrestris/react-geo from 23.1.0 to 23.1.2 ([55d4133](https://github.com/terrestris/shogun-gis-client/commit/55d4133676621e886c35de1634a4048766b36665))
* **deps:** bump @terrestris/shogun-util from 7.2.0 to 7.3.0 ([d8f567d](https://github.com/terrestris/shogun-gis-client/commit/d8f567d5ca5ad5f15d77cbf32c19a00ad7842636))
* **deps:** bump keycloak-js from 22.0.3 to 22.0.4 ([920cc57](https://github.com/terrestris/shogun-gis-client/commit/920cc574d9afd15e1f1ac89ac01a642b04600777))
* **deps:** bump react-i18next from 13.2.2 to 13.3.0 ([c14ec34](https://github.com/terrestris/shogun-gis-client/commit/c14ec34863a8d382e13771e7a9e9f6b3293a2812))
* **deps:** bump react-redux from 8.1.2 to 8.1.3 ([fc27ce2](https://github.com/terrestris/shogun-gis-client/commit/fc27ce20f51541b6a42be4858db4c89cacb75104))


### Features

* add layer attributions to print ([78eaab2](https://github.com/terrestris/shogun-gis-client/commit/78eaab27afead26005c80783b6b5b67386b454e4))
* adds attributions to the print params always ([8f737e8](https://github.com/terrestris/shogun-gis-client/commit/8f737e8f6e1b36b145db985c436b16b8a13a34d2))


### Bugfixes

* consider active language when formatting numbers ([c2b7662](https://github.com/terrestris/shogun-gis-client/commit/c2b766283583414b7b47b0d0031c21283e52c65d))
* disable grouping in DisplayField ([1b8738d](https://github.com/terrestris/shogun-gis-client/commit/1b8738d536a05a393c1c73e47ae8557a3030bd3e))
* imports ([d5565e4](https://github.com/terrestris/shogun-gis-client/commit/d5565e475c9f9f870c2557062e186d84841b00f8))

## [6.12.0](https://github.com/terrestris/shogun-gis-client/compare/v6.11.0...v6.12.0) (2023-09-25)


### Dependencies

* **deps-dev:** bump @playwright/test from 1.38.0 to 1.38.1 ([5b9c4ac](https://github.com/terrestris/shogun-gis-client/commit/5b9c4acd57ebab38a6aff58b2bcc85be1b742685))
* **deps-dev:** bump @semantic-release/github from 9.0.6 to 9.0.7 ([1f67370](https://github.com/terrestris/shogun-gis-client/commit/1f6737031815d7832acfbcd0d20f5e4631333d13))
* **deps-dev:** bump @types/node from 20.6.3 to 20.6.5 ([977bef5](https://github.com/terrestris/shogun-gis-client/commit/977bef593eea7f87fb798f586fa8f1d868624e5a))
* **deps-dev:** bump eslint from 8.49.0 to 8.50.0 ([1363b0c](https://github.com/terrestris/shogun-gis-client/commit/1363b0c99c0e2e9f240a78a411f75487028eaccc))
* **deps-dev:** bump semantic-release from 22.0.0 to 22.0.5 ([7d78329](https://github.com/terrestris/shogun-gis-client/commit/7d78329bf3867cc132d87620c26c18a5fc0f343f))
* **deps:** bump @reduxjs/toolkit from 1.9.5 to 1.9.6 ([cae059a](https://github.com/terrestris/shogun-gis-client/commit/cae059ab6ad21d02e7328791d713cd57b0356c49))
* **deps:** bump @terrestris/react-geo from 23.0.1 to 23.1.0 ([42bab4b](https://github.com/terrestris/shogun-gis-client/commit/42bab4b31c924f15a912954fe23ad01ab362e4d5))


### Features

* add checkbox for boolean values ([04e8ecd](https://github.com/terrestris/shogun-gis-client/commit/04e8ecdf6048622a06004a4ae4d37789ceb69431))

## [6.11.0](https://github.com/terrestris/shogun-gis-client/compare/v6.10.0...v6.11.0) (2023-09-20)


### Dependencies

* **deps-dev:** bump @playwright/test from 1.37.1 to 1.38.0 ([aa1e058](https://github.com/terrestris/shogun-gis-client/commit/aa1e058a2f3f3c23fba71341de15ff2b67a8b542))
* **deps-dev:** bump @semantic-release/github from 9.0.5 to 9.0.6 ([964e7a0](https://github.com/terrestris/shogun-gis-client/commit/964e7a0e409c8cb4a7c3d52f36809bf82a227b02))
* **deps-dev:** bump @semantic-release/npm from 10.0.6 to 11.0.0 ([fc872ed](https://github.com/terrestris/shogun-gis-client/commit/fc872ed9248821f5c4f090a75cf23e65ea3aab1e))
* **deps-dev:** bump @semantic-release/release-notes-generator ([8e64791](https://github.com/terrestris/shogun-gis-client/commit/8e64791ea12567bc4bd333aa58c2a627e8985db2))
* **deps-dev:** bump @types/node from 20.6.2 to 20.6.3 ([2a0e6af](https://github.com/terrestris/shogun-gis-client/commit/2a0e6af07593196ec283506a7a2545522ad4e6d2))
* **deps-dev:** bump @typescript-eslint/eslint-plugin ([d040ae8](https://github.com/terrestris/shogun-gis-client/commit/d040ae8093e0bd1f8c3251518cb84395ef2c6014))
* **deps-dev:** bump @typescript-eslint/parser from 6.7.0 to 6.7.2 ([744f069](https://github.com/terrestris/shogun-gis-client/commit/744f06976db6fc5a71a2314c06d0eaeaa92e87d9))
* **deps-dev:** bump semantic-release from 21.1.1 to 22.0.0 ([1d90c7d](https://github.com/terrestris/shogun-gis-client/commit/1d90c7d7192c17be942bab21e8bab18ed3a8f88f))
* **deps:** bump @terrestris/react-geo from 23.0.0 to 23.0.1 ([3cc9866](https://github.com/terrestris/shogun-gis-client/commit/3cc986699e21b0e17c71a360adcc453f6ee60a91))
* **deps:** bump @terrestris/react-util from 2.1.1 to 3.0.0 ([e4301b3](https://github.com/terrestris/shogun-gis-client/commit/e4301b3704930b41fc364f50845fc6ef6be14a6f))
* update react-geo ([805ea5d](https://github.com/terrestris/shogun-gis-client/commit/805ea5dd49618e78d502c303335e093083515c21))


### Features

* enable readonly Upload fields for GFI ([f05623f](https://github.com/terrestris/shogun-gis-client/commit/f05623f05a36e29737d062ecab3c8ed36aa084b3))
* sort GFI tabs by position in the layer tree ([bebabc9](https://github.com/terrestris/shogun-gis-client/commit/bebabc9b9778314022671dc398c341cb9f108821))


### Bugfixes

* don't clone the feature to keep the existing id intact ([6ed0e7a](https://github.com/terrestris/shogun-gis-client/commit/6ed0e7a864437185b876486193886161cfda3ce8))
* fix upload file paths ([144e261](https://github.com/terrestris/shogun-gis-client/commit/144e261ae399f6da1b3e193fbbfbbbcf3bb541a1))
* omit geom in WFS transaction ([98481c1](https://github.com/terrestris/shogun-gis-client/commit/98481c1ad5d111c6a2d5bee63d5ff3bd01c08db2))
* use thumbnail if available to save data ([929a9a6](https://github.com/terrestris/shogun-gis-client/commit/929a9a65fd4811802d4887fb1e7d507e46b5e858))

## [6.10.0](https://github.com/terrestris/shogun-gis-client/compare/v6.9.0...v6.10.0) (2023-09-18)


### Dependencies

* **deps-dev:** bump @babel/core from 7.22.19 to 7.22.20 ([1bf73ad](https://github.com/terrestris/shogun-gis-client/commit/1bf73ad98d569befe59a24c70197bbe2a692e2e7))
* **deps-dev:** bump @babel/preset-env from 7.22.15 to 7.22.20 ([8dd2ef5](https://github.com/terrestris/shogun-gis-client/commit/8dd2ef5865c93338621db876901701e25f5d3ce3))
* **deps-dev:** bump @testing-library/user-event from 14.5.0 to 14.5.1 ([7ef837d](https://github.com/terrestris/shogun-gis-client/commit/7ef837d693f6b7a0c775d043941fbdab1aa68957))
* **deps-dev:** bump @types/jest from 29.5.4 to 29.5.5 ([7c30552](https://github.com/terrestris/shogun-gis-client/commit/7c3055258e2b51401aa097a0ab16453c5517cd4f))
* **deps-dev:** bump @types/node from 20.6.0 to 20.6.2 ([246d1d2](https://github.com/terrestris/shogun-gis-client/commit/246d1d2888367ca21270402101ac1f37ca38af49))


### Features

* allow configurable (1:n) JSON fields in FeatureInfo and Edit forms ([db70646](https://github.com/terrestris/shogun-gis-client/commit/db7064624df857308462d512ae5973c60d9b2cc7))

## [6.9.0](https://github.com/terrestris/shogun-gis-client/compare/v6.8.1...v6.9.0) (2023-09-15)


### Dependencies

* adds guide for plugin develeopment ([ed5ccfe](https://github.com/terrestris/shogun-gis-client/commit/ed5ccfe999f2790f249b0bf4723d004e976b9bf8))
* **deps-dev:** bump @babel/cli from 7.22.10 to 7.22.15 ([ea8e6ba](https://github.com/terrestris/shogun-gis-client/commit/ea8e6ba9ba74be23eacc3e8f19e263c1d3a480ac))
* **deps-dev:** bump @babel/cli from 7.22.9 to 7.22.10 ([b787467](https://github.com/terrestris/shogun-gis-client/commit/b7874672a496ecf6f9103f96281519e5588bc08d))
* **deps-dev:** bump @babel/core from 7.22.10 to 7.22.11 ([34d022f](https://github.com/terrestris/shogun-gis-client/commit/34d022f0fe6c6c832a92bcc969a187d8efee0621))
* **deps-dev:** bump @babel/core from 7.22.11 to 7.22.15 ([f81df0f](https://github.com/terrestris/shogun-gis-client/commit/f81df0f517c1913cf42ee64b1e5e9239ed6b523a))
* **deps-dev:** bump @babel/core from 7.22.15 to 7.22.17 ([c681d8f](https://github.com/terrestris/shogun-gis-client/commit/c681d8fe785516afe10afdd34007a887485bd622))
* **deps-dev:** bump @babel/core from 7.22.17 to 7.22.19 ([#1165](https://github.com/terrestris/shogun-gis-client/issues/1165)) ([d0a4dcd](https://github.com/terrestris/shogun-gis-client/commit/d0a4dcda796e20bed15bdaf239d2145375f2b242))
* **deps-dev:** bump @babel/core from 7.22.9 to 7.22.10 ([a916871](https://github.com/terrestris/shogun-gis-client/commit/a91687153ee55dcc59ed7779ea147e1cad6741e1))
* **deps-dev:** bump @babel/preset-env from 7.22.10 to 7.22.14 ([47a04c2](https://github.com/terrestris/shogun-gis-client/commit/47a04c2da712ce1035c44d6bcc0031a021867c2a))
* **deps-dev:** bump @babel/preset-env from 7.22.14 to 7.22.15 ([4bfb9de](https://github.com/terrestris/shogun-gis-client/commit/4bfb9de178e21e01e999fa7f5dfe108721a494e7))
* **deps-dev:** bump @babel/preset-env from 7.22.9 to 7.22.10 ([0a659e0](https://github.com/terrestris/shogun-gis-client/commit/0a659e06dde051b06fa66e3af02e56e28026aa37))
* **deps-dev:** bump @babel/preset-react from 7.22.5 to 7.22.15 ([1c9a4eb](https://github.com/terrestris/shogun-gis-client/commit/1c9a4ebbeac58fe429062d3ebddde342f2aefc6e))
* **deps-dev:** bump @babel/preset-typescript from 7.22.11 to 7.22.15 ([9cefc92](https://github.com/terrestris/shogun-gis-client/commit/9cefc929e8f2d69b1873d53308e8de76e346de48))
* **deps-dev:** bump @babel/preset-typescript from 7.22.5 to 7.22.11 ([5516886](https://github.com/terrestris/shogun-gis-client/commit/5516886052eb0f521613b91287cbf26995aec815))
* **deps-dev:** bump @babel/runtime from 7.22.10 to 7.22.11 ([39e966b](https://github.com/terrestris/shogun-gis-client/commit/39e966b3e8d3e8973c2e3957863a8571728da1ef))
* **deps-dev:** bump @babel/runtime from 7.22.11 to 7.22.15 ([24e3308](https://github.com/terrestris/shogun-gis-client/commit/24e330817f85d770772541a1a7047852ac91c200))
* **deps-dev:** bump @babel/runtime from 7.22.6 to 7.22.10 ([88b5b31](https://github.com/terrestris/shogun-gis-client/commit/88b5b311a1eeeff2f4b24ee0eb581034dfcb3051))
* **deps-dev:** bump @commitlint/cli from 17.6.7 to 17.7.1 ([bf882e0](https://github.com/terrestris/shogun-gis-client/commit/bf882e0387d6a8974b64292c6b7ade26e9ca5fbc))
* **deps-dev:** bump @commitlint/config-conventional ([e7743c1](https://github.com/terrestris/shogun-gis-client/commit/e7743c1119ea04136d0e6055ccc9dbc8a966f270))
* **deps-dev:** bump @playwright/test from 1.36.2 to 1.37.0 ([2a9d0ac](https://github.com/terrestris/shogun-gis-client/commit/2a9d0acc6ea75513c9c9562feb82bdcf791b687d))
* **deps-dev:** bump @playwright/test from 1.37.0 to 1.37.1 ([a3c2e21](https://github.com/terrestris/shogun-gis-client/commit/a3c2e21c64cd4579b7c1f575129f144956de5c32))
* **deps-dev:** bump @playwright/test from 1.37.1 to 1.38.0 ([5ee0ef4](https://github.com/terrestris/shogun-gis-client/commit/5ee0ef4b200b77608c939ecc3b5e799737b97785))
* **deps-dev:** bump @pmmmwh/react-refresh-webpack-plugin ([96b330a](https://github.com/terrestris/shogun-gis-client/commit/96b330a4a58c8ddf62552fbfff41594eabbd2d89))
* **deps-dev:** bump @semantic-release/github from 9.0.4 to 9.0.5 ([7bb3f51](https://github.com/terrestris/shogun-gis-client/commit/7bb3f511e037968bfc4b76c20c55a4110c8d2651))
* **deps-dev:** bump @semantic-release/github from 9.0.5 to 9.0.6 ([bc0ff8c](https://github.com/terrestris/shogun-gis-client/commit/bc0ff8c2122f182ec5c36a7d08248282314c36cf))
* **deps-dev:** bump @semantic-release/npm from 10.0.4 to 10.0.5 ([b171823](https://github.com/terrestris/shogun-gis-client/commit/b171823dbc57ead4a03c9a646740ac55b5c5aed0))
* **deps-dev:** bump @semantic-release/npm from 10.0.5 to 10.0.6 ([6e9adf9](https://github.com/terrestris/shogun-gis-client/commit/6e9adf9976ff7140d151a76af635c673a446c9e6))
* **deps-dev:** bump @semantic-release/release-notes-generator ([6a8cab8](https://github.com/terrestris/shogun-gis-client/commit/6a8cab80cb3528e6330519ae6ad816e3d2d489b4))
* **deps-dev:** bump @testing-library/user-event from 14.4.3 to 14.5.0 ([54d266d](https://github.com/terrestris/shogun-gis-client/commit/54d266db2bb7055513be1d2256e05c7c63145053))
* **deps-dev:** bump @types/color from 3.0.3 to 3.0.4 ([d67caae](https://github.com/terrestris/shogun-gis-client/commit/d67caae746b5e2b3cfe48a0aba5775311f2caa67))
* **deps-dev:** bump @types/jest from 29.5.3 to 29.5.4 ([3ebb5fd](https://github.com/terrestris/shogun-gis-client/commit/3ebb5fd00a05b60cabcb513ddfd991382a8eef73))
* **deps-dev:** bump @types/node from 20.4.5 to 20.5.0 ([0854320](https://github.com/terrestris/shogun-gis-client/commit/0854320d1dba0140152f4d5e2dbb08bf274dac4e))
* **deps-dev:** bump @types/node from 20.5.0 to 20.5.1 ([12402ef](https://github.com/terrestris/shogun-gis-client/commit/12402ef4b3d6d46d36cf2d314b62d43d0e81011c))
* **deps-dev:** bump @types/node from 20.5.1 to 20.5.3 ([3526ee9](https://github.com/terrestris/shogun-gis-client/commit/3526ee91c4bba8b9fcff48d8f78c9f6dcdef93e4))
* **deps-dev:** bump @types/node from 20.5.3 to 20.5.4 ([79b7b11](https://github.com/terrestris/shogun-gis-client/commit/79b7b11ee1e6a5c03063223abb46a1e4ba4f9455))
* **deps-dev:** bump @types/node from 20.5.4 to 20.5.7 ([bb76c8c](https://github.com/terrestris/shogun-gis-client/commit/bb76c8cdc32ad9d393248a9b3b252f74a54845bc))
* **deps-dev:** bump @types/node from 20.5.7 to 20.5.9 ([2d32cee](https://github.com/terrestris/shogun-gis-client/commit/2d32cee3db53b473b860eac6e933e42b1bfbb6a2))
* **deps-dev:** bump @types/node from 20.5.9 to 20.6.0 ([d86e05e](https://github.com/terrestris/shogun-gis-client/commit/d86e05e38ac7143e78754bf36d414071158ba67b))
* **deps-dev:** bump @typescript-eslint/eslint-plugin ([f83985d](https://github.com/terrestris/shogun-gis-client/commit/f83985dd99d5508ef6a949e2e6e398f398125417))
* **deps-dev:** bump @typescript-eslint/eslint-plugin ([55101e2](https://github.com/terrestris/shogun-gis-client/commit/55101e2992c438ea9ed648e139c674799b7bc96f))
* **deps-dev:** bump @typescript-eslint/eslint-plugin ([9053e6a](https://github.com/terrestris/shogun-gis-client/commit/9053e6a2ccd16f77847bd4b2ce3535ddfd273b92))
* **deps-dev:** bump @typescript-eslint/eslint-plugin ([3ac90b6](https://github.com/terrestris/shogun-gis-client/commit/3ac90b6ee9557ebee65da063467441e6f3638055))
* **deps-dev:** bump @typescript-eslint/eslint-plugin ([e2a989c](https://github.com/terrestris/shogun-gis-client/commit/e2a989ca63d3ad07a05bc7290a868b80c5ac49a8))
* **deps-dev:** bump @typescript-eslint/eslint-plugin ([51acff2](https://github.com/terrestris/shogun-gis-client/commit/51acff2507a298440564ea6c4e00ec4f6411903d))
* **deps-dev:** bump @typescript-eslint/parser from 6.2.0 to 6.3.0 ([47e62a6](https://github.com/terrestris/shogun-gis-client/commit/47e62a66b1be91e72ad3cb5b561f5c38ad07891f))
* **deps-dev:** bump @typescript-eslint/parser from 6.3.0 to 6.4.0 ([70456cb](https://github.com/terrestris/shogun-gis-client/commit/70456cb9fd20f22d00cfd9fefbcb971b3c487451))
* **deps-dev:** bump @typescript-eslint/parser from 6.4.0 to 6.4.1 ([9e6f167](https://github.com/terrestris/shogun-gis-client/commit/9e6f1670b26f6738be11d8fb5aeff226e04f87db))
* **deps-dev:** bump @typescript-eslint/parser from 6.4.1 to 6.5.0 ([b0ef58e](https://github.com/terrestris/shogun-gis-client/commit/b0ef58ee9c8a4cd630eb99039540e719c37ff97e))
* **deps-dev:** bump @typescript-eslint/parser from 6.5.0 to 6.6.0 ([802c1c4](https://github.com/terrestris/shogun-gis-client/commit/802c1c4ed5f7079265e702a78e3f31da48d84c1e))
* **deps-dev:** bump @typescript-eslint/parser from 6.6.0 to 6.7.0 ([9439bad](https://github.com/terrestris/shogun-gis-client/commit/9439bad4e570904392fd55ee31dbf61529fb496f))
* **deps-dev:** bump babel-jest from 29.6.2 to 29.6.3 ([2b5ab01](https://github.com/terrestris/shogun-gis-client/commit/2b5ab010471d70b94c7aefaba6fba95315d4b9da))
* **deps-dev:** bump babel-jest from 29.6.3 to 29.6.4 ([bddfd89](https://github.com/terrestris/shogun-gis-client/commit/bddfd894cb808dee45ae79e29cc340aacff9ac74))
* **deps-dev:** bump babel-jest from 29.6.4 to 29.7.0 ([c7f3c93](https://github.com/terrestris/shogun-gis-client/commit/c7f3c939bbff0f2df20af2448e587310c731cb57))
* **deps-dev:** bump eslint from 8.45.0 to 8.47.0 ([ac618df](https://github.com/terrestris/shogun-gis-client/commit/ac618dfb780a038521fb2f5322cb6dea755f5edf))
* **deps-dev:** bump eslint from 8.47.0 to 8.48.0 ([ee1adfc](https://github.com/terrestris/shogun-gis-client/commit/ee1adfc77c44226456962e6608556d62e35c1c79))
* **deps-dev:** bump eslint from 8.48.0 to 8.49.0 ([3ff3e24](https://github.com/terrestris/shogun-gis-client/commit/3ff3e24e362f264049a1d885dca5f66d0bc7a714))
* **deps-dev:** bump eslint-plugin-import from 2.27.5 to 2.28.0 ([1d05a6b](https://github.com/terrestris/shogun-gis-client/commit/1d05a6b2123540e41c73ebff8486f6bd690623b5))
* **deps-dev:** bump eslint-plugin-import from 2.28.0 to 2.28.1 ([65b17e7](https://github.com/terrestris/shogun-gis-client/commit/65b17e7a89f6f44dcb1a69acc0f6290bf08a53c2))
* **deps-dev:** bump eslint-plugin-react from 7.33.0 to 7.33.1 ([41b80cf](https://github.com/terrestris/shogun-gis-client/commit/41b80cfd8434192cbb9180c63e87f6e7e7131924))
* **deps-dev:** bump eslint-plugin-react from 7.33.1 to 7.33.2 ([f0a73dc](https://github.com/terrestris/shogun-gis-client/commit/f0a73dccabdcb731aab00d69b234254df0b3fa3d))
* **deps-dev:** bump jest from 29.6.2 to 29.6.3 ([b7cd2a5](https://github.com/terrestris/shogun-gis-client/commit/b7cd2a5edbb55658d7f85cefaef4389f6f04a427))
* **deps-dev:** bump jest from 29.6.3 to 29.6.4 ([ab9f5d0](https://github.com/terrestris/shogun-gis-client/commit/ab9f5d0e57183555a86f24797a38ad8989496baa))
* **deps-dev:** bump jest from 29.6.4 to 29.7.0 ([6dbc228](https://github.com/terrestris/shogun-gis-client/commit/6dbc228e66428907a45c5e21b05d9966cbfad84b))
* **deps-dev:** bump jest-environment-jsdom from 29.6.2 to 29.6.3 ([5126d8a](https://github.com/terrestris/shogun-gis-client/commit/5126d8abfb858db9eed34bf24a8333a33f5bc3c6))
* **deps-dev:** bump jest-environment-jsdom from 29.6.3 to 29.6.4 ([d869f0f](https://github.com/terrestris/shogun-gis-client/commit/d869f0f7c7be081ef4fa82b89a9007eb05b735b9))
* **deps-dev:** bump jest-environment-jsdom from 29.6.4 to 29.7.0 ([9c81d5f](https://github.com/terrestris/shogun-gis-client/commit/9c81d5f759213bb0cffca80baf0d422b8fa18fee))
* **deps-dev:** bump less from 4.1.3 to 4.2.0 ([5f1bf0e](https://github.com/terrestris/shogun-gis-client/commit/5f1bf0eed41407e78418786a15311d2f4e9944e7))
* **deps-dev:** bump semantic-release from 21.0.7 to 21.0.9 ([ecc0c93](https://github.com/terrestris/shogun-gis-client/commit/ecc0c9323d6b56fdc97f764a5bb6afb6efd40e10))
* **deps-dev:** bump semantic-release from 21.0.9 to 21.1.0 ([be313c8](https://github.com/terrestris/shogun-gis-client/commit/be313c8d4ef9b97913b7785e8aee678ec61aa32e))
* **deps-dev:** bump semantic-release from 21.1.0 to 21.1.1 ([83a5af3](https://github.com/terrestris/shogun-gis-client/commit/83a5af3c4c60d100f1c59b3ee0958c9195df7f69))
* **deps-dev:** bump typescript from 5.1.6 to 5.2.2 ([1d448b1](https://github.com/terrestris/shogun-gis-client/commit/1d448b15394db114e7f8264512365c6bdc03b668))
* **deps-dev:** bump webpack-bundle-analyzer from 4.9.0 to 4.9.1 ([b9eeb5a](https://github.com/terrestris/shogun-gis-client/commit/b9eeb5a3630c9cc11f52e299efcaf23ce2585d48))
* **deps:** bump @monaco-editor/react from 4.5.1 to 4.5.2 ([005d306](https://github.com/terrestris/shogun-gis-client/commit/005d3061ccfb3447ed7a3707da9a78eed899f2b0))
* **deps:** bump @terrestris/ol-util from 11.1.0 to 12.0.1 ([2589dcc](https://github.com/terrestris/shogun-gis-client/commit/2589dcc6463fe5a2095e2c42e0da4c13b5fe7172))
* **deps:** bump @terrestris/react-geo from 22.4.2 to 23.0.0 ([#1163](https://github.com/terrestris/shogun-gis-client/issues/1163)) ([230ee3c](https://github.com/terrestris/shogun-gis-client/commit/230ee3c0744e78dd9cb0a3b43678861cf677c4e1))
* **deps:** bump @terrestris/shogun-e2e-tests from 1.0.7 to 1.0.8 ([994f0d3](https://github.com/terrestris/shogun-gis-client/commit/994f0d38f1926abd1ff1cf1b1c3604b75f6ca6f7))
* **deps:** bump antd from 4.24.12 to 4.24.13 ([ac5158d](https://github.com/terrestris/shogun-gis-client/commit/ac5158dc44626d63a68af89819ef89ddec620025))
* **deps:** bump antd from 4.24.13 to 4.24.14 ([98d5f0d](https://github.com/terrestris/shogun-gis-client/commit/98d5f0d312e9a623c38fcd071997117faa9cc66d))
* **deps:** bump geostyler-style from 7.3.1 to 7.4.0 ([4bc79cf](https://github.com/terrestris/shogun-gis-client/commit/4bc79cfb2164f9588533ade873c8812accd75bde))
* **deps:** bump i18next from 23.3.0 to 23.4.4 ([500c72c](https://github.com/terrestris/shogun-gis-client/commit/500c72c99ef9b025cf2e8011246b3cd1cc5af397))
* **deps:** bump i18next from 23.4.4 to 23.4.5 ([57378a4](https://github.com/terrestris/shogun-gis-client/commit/57378a428057c983099fd057970ebb4045a71d3c))
* **deps:** bump i18next from 23.4.5 to 23.4.6 ([719937f](https://github.com/terrestris/shogun-gis-client/commit/719937f700b0d883ef5e2f04087ae1414a802beb))
* **deps:** bump i18next from 23.4.6 to 23.5.1 ([d1fdc21](https://github.com/terrestris/shogun-gis-client/commit/d1fdc21120c37a9b1894f8b92de92df2b4bb9b51))
* **deps:** bump keycloak-js from 22.0.1 to 22.0.2 ([d9282fa](https://github.com/terrestris/shogun-gis-client/commit/d9282fa664debc64e02ee9bb28cc53e111dc92f6))
* **deps:** bump keycloak-js from 22.0.2 to 22.0.3 ([ae4eabb](https://github.com/terrestris/shogun-gis-client/commit/ae4eabb7be5f97771b7429bad89276ce43ccb9e1))
* **deps:** bump ol from 7.4.0 to 7.5.1 ([9dd8863](https://github.com/terrestris/shogun-gis-client/commit/9dd8863c79184613a7c7aae31685d583eec88a77))
* **deps:** bump ol from 7.5.1 to 7.5.2 ([c196c0b](https://github.com/terrestris/shogun-gis-client/commit/c196c0b717972a8c41154a95ae115fb9533ff0c2))
* **deps:** bump react-i18next from 13.0.2 to 13.1.2 ([6671095](https://github.com/terrestris/shogun-gis-client/commit/66710958a21b6adea4990412984f2d8a391a45f2))
* **deps:** bump react-i18next from 13.1.2 to 13.2.0 ([d109d72](https://github.com/terrestris/shogun-gis-client/commit/d109d724c21850992bc4abe15a3ec49788c8b699))
* **deps:** bump react-i18next from 13.2.0 to 13.2.1 ([9d742dd](https://github.com/terrestris/shogun-gis-client/commit/9d742dda360ae46f72dbb067cc628c045c97fded))
* **deps:** bump react-i18next from 13.2.1 to 13.2.2 ([2357364](https://github.com/terrestris/shogun-gis-client/commit/23573642c1129c78b1ccdc7f2c642b6d2c827e77))
* **deps:** bump react-redux from 8.1.1 to 8.1.2 ([005a720](https://github.com/terrestris/shogun-gis-client/commit/005a720a858ea46d688b8807c9b68bac52ce7705))


### Features

* add edit feature button to GFI ([cb4ca12](https://github.com/terrestris/shogun-gis-client/commit/cb4ca12fe4141345d17972582192bd46724df11a))
* add file download option with JWT ([c02510e](https://github.com/terrestris/shogun-gis-client/commit/c02510eab1b69a73600bd231bbda29ed831edd7d))
* also delete files server side ([1e452a1](https://github.com/terrestris/shogun-gis-client/commit/1e452a1fc07e552be7a9c1679b4ee0037f578690))
* disable edit button if layer is not editable ([7ff81d2](https://github.com/terrestris/shogun-gis-client/commit/7ff81d2d284f559005799aab4f0dda2e76c4605b))
* enable file upload ([ee273ef](https://github.com/terrestris/shogun-gis-client/commit/ee273efa735a817d1c1ea7f1bcbeb149fabd8b09))
* make search settings configurable ([833ad0a](https://github.com/terrestris/shogun-gis-client/commit/833ad0afb4d1530d17c9ddd256151df69af975aa))
* skip confirmation if form is not dirty ([2fda762](https://github.com/terrestris/shogun-gis-client/commit/2fda7623946d3758557a15195d696f1e16fd6b52))


### Bugfixes

* adds missing pre-check for fieldProps ([05b358e](https://github.com/terrestris/shogun-gis-client/commit/05b358e8d3ea381f5b7d2abc693dadb5597ff3aa))
* check permissions for edit button ([3a97c9d](https://github.com/terrestris/shogun-gis-client/commit/3a97c9de8fc3656c4baa946764cabb688b387f9b))
* fix pathing ([0bb2c02](https://github.com/terrestris/shogun-gis-client/commit/0bb2c02382b2bcc8e28159eca1292d1ad4b9abca))
* improve typings and docs ([6b8a78e](https://github.com/terrestris/shogun-gis-client/commit/6b8a78e154f0ed90531b6bb271c6bdcd5d81dc50))
* null check ([f035048](https://github.com/terrestris/shogun-gis-client/commit/f0350485c710b2a981441b67aa252ec1344e6b78))
* only enable formDirty if needed ([b81308b](https://github.com/terrestris/shogun-gis-client/commit/b81308b31d7b63a0603ffd3248cd000026cef4c2))
* remove double space ([4ea8cce](https://github.com/terrestris/shogun-gis-client/commit/4ea8cce2cefa94fda00a2783c87bc160eb9b915c))
* remove unsupported browsers & unneeded installation steps ([9c948a8](https://github.com/terrestris/shogun-gis-client/commit/9c948a84a5a0a5247819538d7d49b7efd664c016))
* remove unused code ([c327b1c](https://github.com/terrestris/shogun-gis-client/commit/c327b1cb284b833e6ff0b16d087bb73c059bb6be))
* remove unused imports and loggers ([d856632](https://github.com/terrestris/shogun-gis-client/commit/d856632781069cc7b5ca6b9c3d5247adf14f60b4))
* set formDirty when geometry is modified ([1884cc4](https://github.com/terrestris/shogun-gis-client/commit/1884cc4a376797b07bcf7678ef22836c9babe62e))
* simplify edit feature button ([1b7e495](https://github.com/terrestris/shogun-gis-client/commit/1b7e4953fd6babae8ca96075055ebae3a491dfb5))
* simplify map function ([2c19e9e](https://github.com/terrestris/shogun-gis-client/commit/2c19e9edde8a81fe10bb9f069e8a18f354df24ba))
* typo ([9f0522a](https://github.com/terrestris/shogun-gis-client/commit/9f0522a923a7efbfd52d8d8bc32c1e1e5c3942c9))
* updating test image ([9233ca6](https://github.com/terrestris/shogun-gis-client/commit/9233ca6afadc997afc059aeb8b2ed134d24af607))
* use basepath and fix hook ([0eb77f4](https://github.com/terrestris/shogun-gis-client/commit/0eb77f45889c0db137888cf2283c21787e7c9337))
* use file model from shogun-util ([552c7d0](https://github.com/terrestris/shogun-gis-client/commit/552c7d0271bf894675fc6a55dd6f9e22fb717242))

## [6.8.1](https://github.com/terrestris/shogun-gis-client/compare/v6.8.0...v6.8.1) (2023-07-28)


### Dependencies

* **deps-dev:** bump @types/node from 20.4.4 to 20.4.5 ([619b7c5](https://github.com/terrestris/shogun-gis-client/commit/619b7c5a287a5d7e47ece3002173e23897740b86))
* **deps-dev:** bump babel-jest from 29.6.1 to 29.6.2 ([7ef83fa](https://github.com/terrestris/shogun-gis-client/commit/7ef83fa71de5411aa6680fce58bf53bd73f672f2))
* **deps-dev:** bump jest from 29.6.1 to 29.6.2 ([b6226f6](https://github.com/terrestris/shogun-gis-client/commit/b6226f6c92d5fd492a230d2f1b64d87a64da2c29))
* **deps-dev:** bump jest-environment-jsdom from 29.6.1 to 29.6.2 ([f45b7e9](https://github.com/terrestris/shogun-gis-client/commit/f45b7e91e1e15f2f9b83beb59735df9efc88c1e8))
* **deps:** bump @terrestris/shogun-e2e-tests from 1.0.6 to 1.0.7 ([1e064d0](https://github.com/terrestris/shogun-gis-client/commit/1e064d0d9ef0f9a2bb8c478b6b143a82870de1f7))
* **deps:** bump i18next from 23.2.11 to 23.3.0 ([b59a29a](https://github.com/terrestris/shogun-gis-client/commit/b59a29a9d2d46a586ccce246f73f7513c5964993))


### Bugfixes

* fix pathing ([#1046](https://github.com/terrestris/shogun-gis-client/issues/1046)) ([dca3437](https://github.com/terrestris/shogun-gis-client/commit/dca343783362801c4f3bb51944b88962a2ded448))
* rename global.ts to make Dockerfile.e2e work ([#1042](https://github.com/terrestris/shogun-gis-client/issues/1042)) ([af3e963](https://github.com/terrestris/shogun-gis-client/commit/af3e9638f8494c9d9a6e24d6c5d88af720eab8be))

## [6.8.0](https://github.com/terrestris/shogun-gis-client/compare/v6.7.0...v6.8.0) (2023-07-25)


### Features

* init playwright ([#746](https://github.com/terrestris/shogun-gis-client/issues/746)) ([6af12e8](https://github.com/terrestris/shogun-gis-client/commit/6af12e887a54387993038de949c0e50aaf19497d))
* init the JsonModal component ([4841157](https://github.com/terrestris/shogun-gis-client/commit/4841157ae7c4cac5bebbeb56df5b0344f7fe364f))


### Dependencies

* **deps-dev:** bump @babel/cli from 7.22.5 to 7.22.6 ([6fa91f8](https://github.com/terrestris/shogun-gis-client/commit/6fa91f8ba6b5d172678591f09e67243d3acfb093))
* **deps-dev:** bump @babel/cli from 7.22.6 to 7.22.9 ([6d6882b](https://github.com/terrestris/shogun-gis-client/commit/6d6882ba8bd4389c7de6e33724e08806a83061d2))
* **deps-dev:** bump @babel/core from 7.22.5 to 7.22.6 ([e5bceee](https://github.com/terrestris/shogun-gis-client/commit/e5bceee46a13d851f97006e65df2dbc241090e0c))
* **deps-dev:** bump @babel/core from 7.22.6 to 7.22.8 ([2c37b7c](https://github.com/terrestris/shogun-gis-client/commit/2c37b7cd2808d963dbb32c99523721a0be5d2d6a))
* **deps-dev:** bump @babel/core from 7.22.8 to 7.22.9 ([1494fb0](https://github.com/terrestris/shogun-gis-client/commit/1494fb02862b2fe458ab5e9b769e03b2ad384904))
* **deps-dev:** bump @babel/preset-env from 7.22.5 to 7.22.6 ([a7e2d7f](https://github.com/terrestris/shogun-gis-client/commit/a7e2d7f8181a738a12bd8c3f83db245d6dc133a6))
* **deps-dev:** bump @babel/preset-env from 7.22.6 to 7.22.7 ([4e38812](https://github.com/terrestris/shogun-gis-client/commit/4e388127ce38faf115f0183da3ba875be70f4f01))
* **deps-dev:** bump @babel/preset-env from 7.22.7 to 7.22.9 ([8c7d916](https://github.com/terrestris/shogun-gis-client/commit/8c7d9161e5a69c03c3ee8d92ce909991143bfed1))
* **deps-dev:** bump @babel/runtime from 7.22.5 to 7.22.6 ([ce84412](https://github.com/terrestris/shogun-gis-client/commit/ce844127139ee8b24f9b54c66650ac451644bb86))
* **deps-dev:** bump @commitlint/cli from 17.6.6 to 17.6.7 ([6e8f996](https://github.com/terrestris/shogun-gis-client/commit/6e8f996b45a1e4ec7488f0122514c94d9e6bf553))
* **deps-dev:** bump @commitlint/config-conventional ([c394cff](https://github.com/terrestris/shogun-gis-client/commit/c394cff557a1264a834bc0ff1c749004fe14614a))
* **deps-dev:** bump @playwright/test from 1.35.1 to 1.36.1 ([b168f68](https://github.com/terrestris/shogun-gis-client/commit/b168f6863887f1a964d13b870f183173e9a9dbda))
* **deps-dev:** bump @semantic-release/github from 9.0.3 to 9.0.4 ([ff5b4c5](https://github.com/terrestris/shogun-gis-client/commit/ff5b4c5eefa71090bc657e8986ff54437b9e58a3))
* **deps-dev:** bump @semantic-release/release-notes-generator ([1dc7210](https://github.com/terrestris/shogun-gis-client/commit/1dc721039de10d52c66a25d07bb69017434855e8))
* **deps-dev:** bump @testing-library/jest-dom from 5.16.5 to 5.17.0 ([7db7b46](https://github.com/terrestris/shogun-gis-client/commit/7db7b46cad2535e75cc0e07ecd27ba8e57bb7c73))
* **deps-dev:** bump @types/jest from 29.5.2 to 29.5.3 ([7030e98](https://github.com/terrestris/shogun-gis-client/commit/7030e987c71a93ff2fb80164bd2d3ffe5bd76ca2))
* **deps-dev:** bump @types/node from 20.4.2 to 20.4.4 ([d0a6b2e](https://github.com/terrestris/shogun-gis-client/commit/d0a6b2e76fd56c040a1705fcff78fb5c24a665b8))
* **deps-dev:** bump @typescript-eslint/eslint-plugin ([8455882](https://github.com/terrestris/shogun-gis-client/commit/8455882fce86db3873e73dd86547cec6f39e8bdc))
* **deps-dev:** bump @typescript-eslint/parser from 5.61.0 to 5.62.0 ([181158b](https://github.com/terrestris/shogun-gis-client/commit/181158b3c58ea684c839c0f3b4d895ce988d8b70))
* **deps-dev:** bump @typescript-eslint/parser from 6.1.0 to 6.2.0 ([3070210](https://github.com/terrestris/shogun-gis-client/commit/3070210fe82d140a62e5f7649c260a49fc711f8a))
* **deps-dev:** bump babel-jest from 29.5.0 to 29.6.0 ([a3d26ba](https://github.com/terrestris/shogun-gis-client/commit/a3d26bae863b0d7ea8b610adb6bd54bf49d9956a))
* **deps-dev:** bump babel-jest from 29.6.0 to 29.6.1 ([8e8c344](https://github.com/terrestris/shogun-gis-client/commit/8e8c3449713d7047c1b261be03e3301e5ea9f4c8))
* **deps-dev:** bump babel-loader from 9.1.2 to 9.1.3 ([319e7b6](https://github.com/terrestris/shogun-gis-client/commit/319e7b6d7b18f4863e2714bdee88824f49912c53))
* **deps-dev:** bump eslint from 8.44.0 to 8.45.0 ([abcedf1](https://github.com/terrestris/shogun-gis-client/commit/abcedf19908bfa0224aa33dae9c7fb0905aa1198))
* **deps-dev:** bump eslint-plugin-react from 7.32.2 to 7.33.0 ([b810aa5](https://github.com/terrestris/shogun-gis-client/commit/b810aa58419afe0a931f40b20b47eb7ae48a3b68))
* **deps-dev:** bump jest from 29.5.0 to 29.6.0 ([2249e88](https://github.com/terrestris/shogun-gis-client/commit/2249e8837e92b6fdf56fc9a46f222d204fabde76))
* **deps-dev:** bump jest from 29.6.0 to 29.6.1 ([105639f](https://github.com/terrestris/shogun-gis-client/commit/105639f273794dae4f1ac70d7f9a2350eab70a0f))
* **deps-dev:** bump jest-environment-jsdom from 29.5.0 to 29.6.0 ([74af304](https://github.com/terrestris/shogun-gis-client/commit/74af304df80110f019ff1acf3539fc051a6c613b))
* **deps-dev:** bump jest-environment-jsdom from 29.6.0 to 29.6.1 ([95b8d4c](https://github.com/terrestris/shogun-gis-client/commit/95b8d4cadcdb1078149669beed3a580fc5a2980a))
* **deps-dev:** bump semantic-release from 21.0.6 to 21.0.7 ([4e39d94](https://github.com/terrestris/shogun-gis-client/commit/4e39d946c1127ae13f111b20596da7088ea24e2a))
* **deps-dev:** bump webpack from 5.88.1 to 5.88.2 ([3af121a](https://github.com/terrestris/shogun-gis-client/commit/3af121acd41b44d5505647c4f4da982e3f72d4c1))
* **deps:** bump @terrestris/react-geo from 22.4.1 to 22.4.2 ([9b0f270](https://github.com/terrestris/shogun-gis-client/commit/9b0f270cc2378282c7e49e17927e9986ee104239))
* **deps:** bump @terrestris/shogun-util from 5.6.2 to 6.0.0 ([c25b13a](https://github.com/terrestris/shogun-gis-client/commit/c25b13ad2693ffdd972420a608f3e60df20ebd48))
* **deps:** bump i18next from 23.2.6 to 23.2.7 ([b1f8874](https://github.com/terrestris/shogun-gis-client/commit/b1f88741e7eeed7d0bb0c365eefa74df1ab22c22))
* **deps:** bump i18next from 23.2.7 to 23.2.8 ([b46d033](https://github.com/terrestris/shogun-gis-client/commit/b46d03323a9555def9c3a6894f3a871434b31a76))
* **deps:** bump i18next from 23.2.8 to 23.2.9 ([52ee963](https://github.com/terrestris/shogun-gis-client/commit/52ee963abcdb8259380ef67f2045445b1906e76b))
* **deps:** bump i18next from 23.2.9 to 23.2.11 ([d63cc35](https://github.com/terrestris/shogun-gis-client/commit/d63cc357590566f5d964adff7a7ffb902164f330))
* **deps:** bump react-i18next from 13.0.1 to 13.0.2 ([2466322](https://github.com/terrestris/shogun-gis-client/commit/24663221ff9ec60ca824478e910b3bac7fab7aae))
* make use of node v18 ([8ab58b5](https://github.com/terrestris/shogun-gis-client/commit/8ab58b56eb2ae5c186add35cd5c860996a3e1244))
* update dependencies ([213aa42](https://github.com/terrestris/shogun-gis-client/commit/213aa425ca889ae01f5509f2b7ea1c5d87f51c75))


### Changes in layout

* remove extra whitespace ([d5cc6c0](https://github.com/terrestris/shogun-gis-client/commit/d5cc6c0198ecb52f8f87b6dcb439cc4330fe58cf))


### Bugfixes

* parse bbox correctly ([04c197b](https://github.com/terrestris/shogun-gis-client/commit/04c197b978c70e27b582f36319f517ddf941e33e))
* remove unneded comment ([a2f866a](https://github.com/terrestris/shogun-gis-client/commit/a2f866a500393458bfe44dd3c0260d882d525697))

## [6.7.0](https://github.com/terrestris/shogun-gis-client/compare/v6.6.3...v6.7.0) (2023-07-04)


### Features

* add animated feedback icon ([4fd57c8](https://github.com/terrestris/shogun-gis-client/commit/4fd57c8b8f669f3133c9062b1656277c4eb5e946))
* add new geometry edit role ([db506fe](https://github.com/terrestris/shogun-gis-client/commit/db506fe6dc73b28b2de1eaf4d703e4c7da08c712))
* configurable search result display ([3c88561](https://github.com/terrestris/shogun-gis-client/commit/3c885615cf05dc303c2c0aca681860954158ce22))
* first attempt of displaying feature info ([968d963](https://github.com/terrestris/shogun-gis-client/commit/968d9637cb79bcd4d3596e194a7210ce35becff7))
* hide edit button in multisearch temporarily ([b1d192b](https://github.com/terrestris/shogun-gis-client/commit/b1d192bdacb64e2581f44b0ec3f4f61e0d58438b))
* make loading of the fallback application config configurable ([db9019c](https://github.com/terrestris/shogun-gis-client/commit/db9019c2ec3d27f55960b49572ae657d51462361))
* only enable save button if form is dirty ([cd84a76](https://github.com/terrestris/shogun-gis-client/commit/cd84a76dd5dff22ff132d86b54e8ec6a98e7082d))
* remove configuration ([2f4e086](https://github.com/terrestris/shogun-gis-client/commit/2f4e086cbea33bfaecfcc226bbf3bbe547e10b5b))
* show selected feature on map ([40d2597](https://github.com/terrestris/shogun-gis-client/commit/40d25976030bc7ebb22657ec8876b45423e12f2d))


### Dependencies

* add missing env ([c8bec17](https://github.com/terrestris/shogun-gis-client/commit/c8bec17e16450db9b16a44b10da5d59dc19e113e))
* build image for current state of the main branch ([148b95a](https://github.com/terrestris/shogun-gis-client/commit/148b95aa579015309cc2a46dd749d5cbb439441d))
* **deps-dev:** bump @typescript-eslint/eslint-plugin ([5e22f96](https://github.com/terrestris/shogun-gis-client/commit/5e22f967c2f1cd3fd00160426631a404fe36bfe4))
* **deps-dev:** bump @typescript-eslint/parser from 5.60.1 to 5.61.0 ([6c14719](https://github.com/terrestris/shogun-gis-client/commit/6c14719d583356ea857c8aac4ef3df123a10205c))
* **deps-dev:** bump eslint from 8.43.0 to 8.44.0 ([af819b1](https://github.com/terrestris/shogun-gis-client/commit/af819b1b971f56e92b923e831dec16e775b19e90))
* **deps-dev:** bump semantic-release from 21.0.5 to 21.0.6 ([229d05b](https://github.com/terrestris/shogun-gis-client/commit/229d05b1a3d17ecb1abac47ca8d30405118ad809))
* **deps-dev:** bump typescript from 5.1.3 to 5.1.5 ([056d064](https://github.com/terrestris/shogun-gis-client/commit/056d06439dd979ba46cc0160f4d62cfeedc856db))
* **deps-dev:** bump typescript from 5.1.5 to 5.1.6 ([89f12e2](https://github.com/terrestris/shogun-gis-client/commit/89f12e28f217c9eecc6f13499c0ea5829827119a))
* **deps-dev:** bump webpack from 5.88.0 to 5.88.1 ([947b588](https://github.com/terrestris/shogun-gis-client/commit/947b58874aa23512428db55920855fa0eef2ab5e))
* **deps:** bump antd from 4.24.10 to 4.24.11 ([a60336d](https://github.com/terrestris/shogun-gis-client/commit/a60336de2bc6d8fe5b61e866da5b7e98de136e5d))
* **deps:** bump antd from 4.24.11 to 4.24.12 ([6d88892](https://github.com/terrestris/shogun-gis-client/commit/6d88892a39e85846cfe8311be099ce5dbe54c247))
* **deps:** bump i18next from 23.2.3 to 23.2.6 ([a204bb1](https://github.com/terrestris/shogun-gis-client/commit/a204bb1b60bc7cee199a3e7c3926970770f1acaf))
* **deps:** bump i18next-browser-languagedetector from 7.0.2 to 7.1.0 ([f86e6b1](https://github.com/terrestris/shogun-gis-client/commit/f86e6b195a181c3c06d4b91d4f60a44a86bb670d))
* **deps:** bump keycloak-js from 21.1.1 to 21.1.2 ([eb4a614](https://github.com/terrestris/shogun-gis-client/commit/eb4a6144f03ad7377e681953b49213e316af3fde))
* enable test ([9c35b09](https://github.com/terrestris/shogun-gis-client/commit/9c35b09cd54187deb3c47c40bdb0a60f22b10353))
* remove unused imports ([1cd2aa4](https://github.com/terrestris/shogun-gis-client/commit/1cd2aa432e13e183aef93ad917ac6ca0b957b4da))


### Bugfixes

* add check for page number ([5b12a04](https://github.com/terrestris/shogun-gis-client/commit/5b12a0482440f0c4dbb4a2a4b936a1c527a65b91))
* detect geometry columns automatically ([04fb477](https://github.com/terrestris/shogun-gis-client/commit/04fb4774edd89eeddcb4ede9737c9be97c33664d))
* fallback if highlight result is empty ([b34e698](https://github.com/terrestris/shogun-gis-client/commit/b34e69838047ce13b55cad1f883f5418e1b90643))
* fix solr query generator tests ([e7027ce](https://github.com/terrestris/shogun-gis-client/commit/e7027ce486e726a7af77d26bf57118344509d2fc))
* get feature info working while switching tabs ([5e13077](https://github.com/terrestris/shogun-gis-client/commit/5e130771bf91553cc3e4da94c355bab692b53936))
* improve error handling ([9576a5a](https://github.com/terrestris/shogun-gis-client/commit/9576a5a3a658590e307030390eae9f343bf7bf53))
* prevent error if highlighting is disabled ([b4a7214](https://github.com/terrestris/shogun-gis-client/commit/b4a72146808001f8a866d695a60d843c93e73625))
* prevent overlapping property labels ([94b5888](https://github.com/terrestris/shogun-gis-client/commit/94b588826ec5209028066a15ae65008ea2b02744))
* prevent overlapping property labels ([c2cf731](https://github.com/terrestris/shogun-gis-client/commit/c2cf7310004d2dc3989bc9e0c9e4946ddfdff434))
* remove unneeded newlines ([3e31061](https://github.com/terrestris/shogun-gis-client/commit/3e310611d8d77a98d6f0bb343bf41aa2a312d294))
* render the FeatureInfoPropertyGrid as default ([03d0040](https://github.com/terrestris/shogun-gis-client/commit/03d0040b31b8bdb99a3144f5b510c2c4fdccfa77))
* revert geometry check ([f513683](https://github.com/terrestris/shogun-gis-client/commit/f513683885de8856f369f4762bc32ea489f9da98))
* save button loading animation ([5d103ed](https://github.com/terrestris/shogun-gis-client/commit/5d103ed27efd34a41b667e2e5172fc18c3ef0b1f))
* styling ([ae650b5](https://github.com/terrestris/shogun-gis-client/commit/ae650b5e56bd0506cf03be73455ab989df3bf8be))
* use edismax query parser to specify fields ([698e344](https://github.com/terrestris/shogun-gis-client/commit/698e34470c7b29edcce5fd7814d222ec0190fa62))

## [6.6.3](https://github.com/terrestris/shogun-gis-client/compare/v6.6.2...v6.6.3) (2023-06-27)


### Dependencies

* **deps-dev:** bump @commitlint/cli from 17.6.5 to 17.6.6 ([64a04d5](https://github.com/terrestris/shogun-gis-client/commit/64a04d58629ef4ae05b4a2d251c77f3189cb52ab))
* **deps-dev:** bump @commitlint/config-conventional ([f1fb4de](https://github.com/terrestris/shogun-gis-client/commit/f1fb4de6eac8de5e2caccfff4d48d0a7534147be))
* **deps-dev:** bump @typescript-eslint/eslint-plugin ([7b281b3](https://github.com/terrestris/shogun-gis-client/commit/7b281b340cf5d260eda15a2748115edce6643e14))
* **deps-dev:** bump @typescript-eslint/parser from 5.60.0 to 5.60.1 ([2aec453](https://github.com/terrestris/shogun-gis-client/commit/2aec4538398dce87c597a63dfda8d63acf03f7e4))
* **deps:** bump i18next from 23.2.2 to 23.2.3 ([07342dc](https://github.com/terrestris/shogun-gis-client/commit/07342dcdb7c4921ae5ea03a1b6f81445bf045280))
* **deps:** bump react-i18next from 13.0.0 to 13.0.1 ([b720738](https://github.com/terrestris/shogun-gis-client/commit/b72073819a87720530503ed28e6364acc6593eaf))
* update [@terrestris](https://github.com/terrestris) packages ([194b44a](https://github.com/terrestris/shogun-gis-client/commit/194b44a49eed7ad93250c5f604277ab323fada87))


### Bugfixes

* also check for the file ending ([0803a59](https://github.com/terrestris/shogun-gis-client/commit/0803a59221574134d61f4803a62b1a810da9f577))
* apply missing key props ([3ceb133](https://github.com/terrestris/shogun-gis-client/commit/3ceb1337a4f8c61719a1798b4b936084d22de39a))
* fix translation key ([ff46bf6](https://github.com/terrestris/shogun-gis-client/commit/ff46bf6ca6062b2a7f67e07298b8e6f64666c3c8))
* remove obsolete prop check ([3a4aff7](https://github.com/terrestris/shogun-gis-client/commit/3a4aff78030aad891e3c19042000545a1e145ddb))
* searching over multiple attributes ([443b1b3](https://github.com/terrestris/shogun-gis-client/commit/443b1b301d764857453379a909c9d5ea7c8c9e15))
* show app title on tablets as well ([063f6d8](https://github.com/terrestris/shogun-gis-client/commit/063f6d8fdfcf76808a46cea6c677e9ecd80e8506))

## [6.6.2](https://github.com/terrestris/shogun-gis-client/compare/v6.6.1...v6.6.2) (2023-06-22)


### Dependencies

* **deps-dev:** bump webpack from 5.87.0 to 5.88.0 ([54459e3](https://github.com/terrestris/shogun-gis-client/commit/54459e3286944e4c746d0c60db52b460ec69fdb4))
* **deps:** bump i18next from 23.2.1 to 23.2.2 ([b7ce89a](https://github.com/terrestris/shogun-gis-client/commit/b7ce89a7a57b978405eeac12535f3a6e4b62f417))


### Bugfixes

* adjusting to new wmst properties ([1bdd483](https://github.com/terrestris/shogun-gis-client/commit/1bdd48380d44aada61814acbf42356ab3096187e))

## [6.6.1](https://github.com/terrestris/shogun-gis-client/compare/v6.6.0...v6.6.1) (2023-06-21)


### Bugfixes

* duplication of external layers ([6a30781](https://github.com/terrestris/shogun-gis-client/commit/6a3078158df70b541bb46082bc14e7e3d7899bde))
* fix layer group creation ([b55294a](https://github.com/terrestris/shogun-gis-client/commit/b55294a289d061106688c161d4b5c4a451854a76))


### Dependencies

* **deps:** bump i18next from 23.2.0 to 23.2.1 ([b701727](https://github.com/terrestris/shogun-gis-client/commit/b7017276baec9261471478d0f7a4132518961213))
* **deps:** bump react-redux from 8.1.0 to 8.1.1 ([fe85dfd](https://github.com/terrestris/shogun-gis-client/commit/fe85dfd8930208781d8231905886ae6c1cc49794))
* update shogun-util to 5.6.1 ([7f42a72](https://github.com/terrestris/shogun-gis-client/commit/7f42a722202dc45f67a35caf29834fe9951885f4))

## [6.6.0](https://github.com/terrestris/shogun-gis-client/compare/v6.5.0...v6.6.0) (2023-06-20)


### Features

* add button for copying of shown attributes as kvp without geometry, add missing translations ([fd65dc7](https://github.com/terrestris/shogun-gis-client/commit/fd65dc7efdc241e526286a20da0d874e9b8f65e1))
* use custom print scale from map scales ([a12134f](https://github.com/terrestris/shogun-gis-client/commit/a12134f2ebb4e045437f1c90daac54b3945e391b))


### Bugfixes

* adds missing unit detection for print scales ([22bd8d1](https://github.com/terrestris/shogun-gis-client/commit/22bd8d13db1c9586654bbea98dc15b7b61d15e5f))
* avoid cropped labels on long attribute values ([20870ab](https://github.com/terrestris/shogun-gis-client/commit/20870ab715c60a5f75b586cd3522f8db76a9ff24))
* filter possible geom field candidates from property grid ([54d1517](https://github.com/terrestris/shogun-gis-client/commit/54d15177f4430a0a44664d73549fc5023d9619a4))
* fix setting and propagation of custom params ([9f8982f](https://github.com/terrestris/shogun-gis-client/commit/9f8982fedbe9c54fd8a3ac38140956006c089d25))
* prevent breaking of footer labels ([3d18b96](https://github.com/terrestris/shogun-gis-client/commit/3d18b9679693a154fdba9f442c1ce22cfe7890b2))
* replace pulsating shogun logo with shogun spinner ([05b1bfd](https://github.com/terrestris/shogun-gis-client/commit/05b1bfd9fdf570558cccfed0cbe42175b790ed01))
* reset capabilities ([927c35b](https://github.com/terrestris/shogun-gis-client/commit/927c35b2cff24baf80b713d8629fc5c0a9c86b05))
* set minimal width of scale combo ([6c0c293](https://github.com/terrestris/shogun-gis-client/commit/6c0c293f5ca70765f9c530b7bad425acfba13684))


### Dependencies

* bump ol-util v10.3.1 ([b9f2ee3](https://github.com/terrestris/shogun-gis-client/commit/b9f2ee35934298800db317fbe2dd547c237e9312))
* **deps-dev:** bump @babel/cli from 7.21.5 to 7.22.5 ([389cd35](https://github.com/terrestris/shogun-gis-client/commit/389cd35ecf83f68b2d60b19987d181bf1a9d9e3a))
* **deps-dev:** bump @babel/core from 7.22.1 to 7.22.5 ([945935b](https://github.com/terrestris/shogun-gis-client/commit/945935b300ed5494913add0404bc4d32b572c717))
* **deps-dev:** bump @babel/preset-env from 7.22.4 to 7.22.5 ([36e60d8](https://github.com/terrestris/shogun-gis-client/commit/36e60d8aefd4d0097bbeed77db097f55fac8d690))
* **deps-dev:** bump @babel/preset-react from 7.22.3 to 7.22.5 ([d5f60f9](https://github.com/terrestris/shogun-gis-client/commit/d5f60f9220071dd56e3cd2a22fff8dfd61a1eb39))
* **deps-dev:** bump @babel/preset-typescript from 7.21.5 to 7.22.5 ([2c8f85a](https://github.com/terrestris/shogun-gis-client/commit/2c8f85ac130d4eb258b95a994b1c2136d14d554d))
* **deps-dev:** bump @babel/runtime from 7.22.3 to 7.22.5 ([db04cfb](https://github.com/terrestris/shogun-gis-client/commit/db04cfb9f662373a378c2b401980e5bd0e7f2267))
* **deps-dev:** bump @playwright/test from 1.34.3 to 1.35.0 ([c825dac](https://github.com/terrestris/shogun-gis-client/commit/c825dac9b58e02fbe3811c97140bba484e0e253e))
* **deps-dev:** bump @playwright/test from 1.35.0 to 1.35.1 ([6752d0e](https://github.com/terrestris/shogun-gis-client/commit/6752d0e8b6d64129b03820557a4590a05240a788))
* **deps-dev:** bump @semantic-release/github from 9.0.2 to 9.0.3 ([bc94db5](https://github.com/terrestris/shogun-gis-client/commit/bc94db53ec757ad958de08106d4bb611b949a58a))
* **deps-dev:** bump @semantic-release/npm from 10.0.3 to 10.0.4 ([5e00b65](https://github.com/terrestris/shogun-gis-client/commit/5e00b6513bd1bd4ef07bc85f79ebbf4272983b04))
* **deps-dev:** bump @semantic-release/release-notes-generator ([e463f75](https://github.com/terrestris/shogun-gis-client/commit/e463f75053ab5863e22bf6fb13d4b7d6b18940ae))
* **deps-dev:** bump @typescript-eslint/eslint-plugin ([16f72dc](https://github.com/terrestris/shogun-gis-client/commit/16f72dcc9cb83bc7e8a0dd1bc3947b8eaac9b9eb))
* **deps-dev:** bump @typescript-eslint/eslint-plugin ([dc6ace5](https://github.com/terrestris/shogun-gis-client/commit/dc6ace59816bb6231b9c6feae8cbeabe76ee5dd5))
* **deps-dev:** bump @typescript-eslint/parser from 5.59.11 to 5.60.0 ([48cef5c](https://github.com/terrestris/shogun-gis-client/commit/48cef5cb100349186b2fd3712fc9bc73f4776804))
* **deps-dev:** bump @typescript-eslint/parser from 5.59.9 to 5.59.11 ([946c64f](https://github.com/terrestris/shogun-gis-client/commit/946c64f31aed08141dbd045ad6f5a40139fb84df))
* **deps-dev:** bump css-minimizer-webpack-plugin from 5.0.0 to 5.0.1 ([3bb9595](https://github.com/terrestris/shogun-gis-client/commit/3bb95955618a5c1af2ecd81b5c61654e02ec6569))
* **deps-dev:** bump eslint from 8.42.0 to 8.43.0 ([87206c2](https://github.com/terrestris/shogun-gis-client/commit/87206c23e7823f0c74baa23a58104a3a89d25201))
* **deps-dev:** bump html-webpack-plugin from 5.5.1 to 5.5.3 ([13aa533](https://github.com/terrestris/shogun-gis-client/commit/13aa533d1ec68bac48151011b9facd370e85ad47))
* **deps-dev:** bump less-loader from 11.1.2 to 11.1.3 ([59fce62](https://github.com/terrestris/shogun-gis-client/commit/59fce62271b71203559c78092bc57344d6a3f7a5))
* **deps-dev:** bump semantic-release from 21.0.3 to 21.0.5 ([21a0079](https://github.com/terrestris/shogun-gis-client/commit/21a0079b87e83e1e75f95ab20fec4d7cc008537a))
* **deps-dev:** bump webpack from 5.85.1 to 5.86.0 ([4b21470](https://github.com/terrestris/shogun-gis-client/commit/4b21470ba24fea4c0440d0055508e170dd698594))
* **deps-dev:** bump webpack from 5.86.0 to 5.87.0 ([d0cb9fa](https://github.com/terrestris/shogun-gis-client/commit/d0cb9fa6bd01713d55d7859b471a2fb0be97a690))
* **deps-dev:** bump webpack-cli from 5.1.3 to 5.1.4 ([4ce3c60](https://github.com/terrestris/shogun-gis-client/commit/4ce3c60e510800b7ad57352611a8bcfb0301140b))
* **deps-dev:** bump webpack-dev-server from 4.15.0 to 4.15.1 ([bb8ecb2](https://github.com/terrestris/shogun-gis-client/commit/bb8ecb29d4a1c5dece711cab010f82506d118148))
* **deps:** bump @terrestris/shogun-util from 5.5.0 to 5.6.0 ([ecb7337](https://github.com/terrestris/shogun-gis-client/commit/ecb7337a2ede44dca152972ca41483851a540ccd))
* **deps:** bump i18next from 22.5.1 to 23.0.2 ([aa1b1e1](https://github.com/terrestris/shogun-gis-client/commit/aa1b1e121f0389d82f57cce5e465b711e7076983))
* **deps:** bump i18next from 23.0.2 to 23.1.0 ([02c462a](https://github.com/terrestris/shogun-gis-client/commit/02c462a87f35ef82cd42342344c4e956582f9381))
* **deps:** bump i18next from 23.1.0 to 23.2.0 ([898dd14](https://github.com/terrestris/shogun-gis-client/commit/898dd145b97dbdadc336bd980488f5ea0715682e))
* **deps:** bump react-i18next from 12.3.1 to 13.0.0 ([7846e5e](https://github.com/terrestris/shogun-gis-client/commit/7846e5e7b61b37a8da5a59b64eafe60349f9b2f3))
* **deps:** bump react-redux from 8.0.7 to 8.1.0 ([c7de282](https://github.com/terrestris/shogun-gis-client/commit/c7de282eb9b95b39e245b8f284912c91d601dcd4))

## [6.5.0](https://github.com/terrestris/shogun-gis-client/compare/v6.4.0...v6.5.0) (2023-06-07)


### Features

* make WFS LockFeature during editing configurable ([e74a114](https://github.com/terrestris/shogun-gis-client/commit/e74a114c58c928c9f368e8473a2956812e0dedd1))


### Dependencies

* **deps:** bump i18next from 22.5.0 to 22.5.1 ([9f652b8](https://github.com/terrestris/shogun-gis-client/commit/9f652b8e73d1837b83ae1a3d7de912074443e73e))
* update README ([ee06c6a](https://github.com/terrestris/shogun-gis-client/commit/ee06c6a9d47fe6706a86247ff60616183a7d0b6d))


### Bugfixes

* add missing defaults ([0e1b1b9](https://github.com/terrestris/shogun-gis-client/commit/0e1b1b9b6e32be007e8234271cea6d7152152b97))
* error handling if editFormConfig is undefined ([0503fe6](https://github.com/terrestris/shogun-gis-client/commit/0503fe68440ca7e573ae2fbb23ea155326f909bd))
* fix solr query tests ([5d46d0f](https://github.com/terrestris/shogun-gis-client/commit/5d46d0f5466b50504f52a1c49e303326f4e16c26))
* use featureType as layer filter ([3883484](https://github.com/terrestris/shogun-gis-client/commit/3883484c5cd988f9eca8fa3edd2e1186a24d7aa5))

## [6.4.0](https://github.com/terrestris/shogun-gis-client/compare/v6.3.0...v6.4.0) (2023-06-06)


### Features

* add delete feature button ([4cc7a1c](https://github.com/terrestris/shogun-gis-client/commit/4cc7a1cb754378d775544829afaae08d7007b775))
* add reset and save button, support readOnly ([a6bebe8](https://github.com/terrestris/shogun-gis-client/commit/a6bebe85e4541464bb4734c110acb63ae491c7fc))
* allow insert, update and delete via WFS-T ([e4532f7](https://github.com/terrestris/shogun-gis-client/commit/e4532f79f0d6826f51d8d412ad93e4a1a1e5cdf3))
* call edit feature drawer from search result list ([85aba8d](https://github.com/terrestris/shogun-gis-client/commit/85aba8da405e02e0995a85f9044bad524745419b))
* disable delete button if no id is available ([0f6bac2](https://github.com/terrestris/shogun-gis-client/commit/0f6bac27f4f0b51c4e85c96f2f769c83f12c4fb8))
* edit or add features on layer ([fe38dd1](https://github.com/terrestris/shogun-gis-client/commit/fe38dd10f5f02034c04dc6eefe6bdcae9ca00349))
* feature edit switch ([7c3b053](https://github.com/terrestris/shogun-gis-client/commit/7c3b0533500baf0208f4f0153622b118e706ad3c))
* first steps towards EditFeatureForm ([12e8f59](https://github.com/terrestris/shogun-gis-client/commit/12e8f597c60a29cf69efaf25ab8fecdca763d20d))
* further edit feature improvements ([7f41920](https://github.com/terrestris/shogun-gis-client/commit/7f41920775f791931e5bd5e6e3ec8ccc148092ca))
* generate solr query based on search config ([82299d4](https://github.com/terrestris/shogun-gis-client/commit/82299d4c2707a1149f57a35a9686a13c721817e6))
* implement feature creation ([1a20eac](https://github.com/terrestris/shogun-gis-client/commit/1a20eac38e6129dc0ee707bd8862a57b73b71db6))
* implement WFS LockFeature (and some component refactoring) ([dc0f7b7](https://github.com/terrestris/shogun-gis-client/commit/dc0f7b763baf531d8f97e75beedec21394326628))
* init MapDrawer and EditFeatureDrawer ([3b75d47](https://github.com/terrestris/shogun-gis-client/commit/3b75d4707afd482ff09da9fb8b0a6757a1017bfb))
* introduce geometry edit toolbar ([8608f5b](https://github.com/terrestris/shogun-gis-client/commit/8608f5bf032c1229490c89051e1eb37af9830773))
* introduce layer details modal ([d329cf5](https://github.com/terrestris/shogun-gis-client/commit/d329cf5b7d33abd2464be2cd2a5ee16edf509fca))
* load feature after creating entity ([61e1306](https://github.com/terrestris/shogun-gis-client/commit/61e13064c649b4b9cfd4646c1732a608ad1d7c69))
* progress on parser, support more fields ([142618c](https://github.com/terrestris/shogun-gis-client/commit/142618c906f5356ca436626b42590cf37e800ea5))
* reset any potential feature id and set layer id ([31932ba](https://github.com/terrestris/shogun-gis-client/commit/31932ba6381d61b1924a493ee1eeac5cb03a429b))
* simplify entrypoint for editing, refactoring ([54d6b98](https://github.com/terrestris/shogun-gis-client/commit/54d6b988cf18cfbce1cbb2d8704e4ccd8148ef81))
* store layer in state, show layer title in header, show alert on not found layer ([7781a41](https://github.com/terrestris/shogun-gis-client/commit/7781a419f501a24637afebd472927999bff1e9c9))
* use gis-client-config for feature edit limitations ([6c0cc59](https://github.com/terrestris/shogun-gis-client/commit/6c0cc59967b487d5a25fbb5fa84922eb336a8f3d))


### Dependencies

* **deps-dev:** bump @babel/core from 7.21.8 to 7.22.1 ([12f4e2e](https://github.com/terrestris/shogun-gis-client/commit/12f4e2e45a345d737d75973d10b9447b5e39f49f))
* **deps-dev:** bump @babel/preset-env from 7.21.5 to 7.22.4 ([b3e7daf](https://github.com/terrestris/shogun-gis-client/commit/b3e7dafabc3c49089623060460efbf480704d4df))
* **deps-dev:** bump @babel/preset-react from 7.18.6 to 7.22.3 ([8206989](https://github.com/terrestris/shogun-gis-client/commit/82069890b1d31a59abb69feb340c086261a13a5a))
* **deps-dev:** bump @babel/runtime from 7.21.5 to 7.22.3 ([0ef1152](https://github.com/terrestris/shogun-gis-client/commit/0ef1152987b6fc5551f8897dc0fb0b0c7041eeb8))
* **deps-dev:** bump @commitlint/cli from 17.6.3 to 17.6.5 ([8a4aff5](https://github.com/terrestris/shogun-gis-client/commit/8a4aff508115bb4cd73718992299411a58f178bf))
* **deps-dev:** bump @commitlint/config-conventional ([1c628f5](https://github.com/terrestris/shogun-gis-client/commit/1c628f51bc3db48a20eda9ab57f34c87a70ad5dd))
* **deps-dev:** bump @playwright/test from 1.34.2 to 1.34.3 ([eeb9755](https://github.com/terrestris/shogun-gis-client/commit/eeb9755198abc5ad81997bf4ea075fd80626dc59))
* **deps-dev:** bump @semantic-release/github from 8.0.7 to 8.1.0 ([baa259f](https://github.com/terrestris/shogun-gis-client/commit/baa259f8e2247e92541c4298bffa3dc25bcee1f6))
* **deps-dev:** bump @semantic-release/github from 8.1.0 to 9.0.2 ([3ca56ad](https://github.com/terrestris/shogun-gis-client/commit/3ca56adf9788c3c91760f27ac26fe856e27b5dee))
* **deps-dev:** bump @semantic-release/release-notes-generator ([a74f02b](https://github.com/terrestris/shogun-gis-client/commit/a74f02bb326bcbf8e9e8b2bc31ad49cfa184b239))
* **deps-dev:** bump @types/jest from 29.5.1 to 29.5.2 ([abd7529](https://github.com/terrestris/shogun-gis-client/commit/abd752999aa9e9ef6d0afcea4f58250a731eb4bb))
* **deps-dev:** bump @typescript-eslint/eslint-plugin ([51c4b9a](https://github.com/terrestris/shogun-gis-client/commit/51c4b9ab99d20bfe18909b129516157ffbf13ebf))
* **deps-dev:** bump @typescript-eslint/eslint-plugin ([f1eb381](https://github.com/terrestris/shogun-gis-client/commit/f1eb38175e8cf831fd243adabfdd0d8f240f9705))
* **deps-dev:** bump @typescript-eslint/parser from 5.59.7 to 5.59.8 ([cc0cccc](https://github.com/terrestris/shogun-gis-client/commit/cc0cccccf5f01d12238a3009c04efcbb19bf5d07))
* **deps-dev:** bump @typescript-eslint/parser from 5.59.8 to 5.59.9 ([caa952e](https://github.com/terrestris/shogun-gis-client/commit/caa952e44c92d60be32b3541aebda3e367c77530))
* **deps-dev:** bump css-loader from 6.7.4 to 6.8.1 ([458f78c](https://github.com/terrestris/shogun-gis-client/commit/458f78c621bd5a0a526391075859ed9a79b6c8d2))
* **deps-dev:** bump eslint from 8.41.0 to 8.42.0 ([3ea6303](https://github.com/terrestris/shogun-gis-client/commit/3ea6303842d220a49e0e9158cb5bddc58bb03fa8))
* **deps-dev:** bump less-loader from 11.1.0 to 11.1.1 ([615812c](https://github.com/terrestris/shogun-gis-client/commit/615812c674bd872cb85bbaca1e83c57f536095e8))
* **deps-dev:** bump less-loader from 11.1.1 to 11.1.2 ([fdb6fab](https://github.com/terrestris/shogun-gis-client/commit/fdb6faba96abd19a13075231363c990d43583f5b))
* **deps-dev:** bump semantic-release from 21.0.2 to 21.0.3 ([1188ad6](https://github.com/terrestris/shogun-gis-client/commit/1188ad63ca47ddc9926c9ec270d2d0389a68d908))
* **deps-dev:** bump typescript from 5.0.4 to 5.1.3 ([330ccdb](https://github.com/terrestris/shogun-gis-client/commit/330ccdb00c9e68d96354d763f34288f17429eb31))
* **deps-dev:** bump webpack from 5.83.1 to 5.84.0 ([40b84df](https://github.com/terrestris/shogun-gis-client/commit/40b84dfc19c1ca632fa91465a7120c8a7d611341))
* **deps-dev:** bump webpack from 5.84.0 to 5.84.1 ([023ac90](https://github.com/terrestris/shogun-gis-client/commit/023ac90bb3dbbbf5ff0d2c3eba3562c258b3c1ff))
* **deps-dev:** bump webpack from 5.84.1 to 5.85.0 ([53ffd59](https://github.com/terrestris/shogun-gis-client/commit/53ffd5960fc07b553bff5756a77f476d522f4a46))
* **deps-dev:** bump webpack from 5.85.0 to 5.85.1 ([a666cb0](https://github.com/terrestris/shogun-gis-client/commit/a666cb0dba81eb2bfe8d37ea8ec0b96cce735f66))
* **deps-dev:** bump webpack-bundle-analyzer from 4.8.0 to 4.9.0 ([8eafdff](https://github.com/terrestris/shogun-gis-client/commit/8eafdff69b04151492e0f1389ffb7092d8e7340c))
* **deps-dev:** bump webpack-cli from 5.1.1 to 5.1.3 ([4be5148](https://github.com/terrestris/shogun-gis-client/commit/4be5148474644351ccd71390a7d51bb3dd68b106))
* **deps:** bump geostyler from 12.0.1 to 12.0.2 ([36a2760](https://github.com/terrestris/shogun-gis-client/commit/36a27601919de954cd27899d5b52db2506316974))
* **deps:** bump geostyler-style from 7.3.0 to 7.3.1 ([4c52c6c](https://github.com/terrestris/shogun-gis-client/commit/4c52c6cd832928771cfb3789bffa9b776184223d))
* **deps:** bump i18next-browser-languagedetector from 7.0.1 to 7.0.2 ([b0a628e](https://github.com/terrestris/shogun-gis-client/commit/b0a628e0a5271cc31e90518bedc61d90959596af))
* **deps:** bump ol from 7.3.0 to 7.4.0 ([76532b4](https://github.com/terrestris/shogun-gis-client/commit/76532b4ec1312a947f69b40ef4c42d13ff12b450))
* **deps:** bump react-redux from 8.0.5 to 8.0.7 ([ba982b7](https://github.com/terrestris/shogun-gis-client/commit/ba982b7c974cbbbae6404867e3749a5d85d1788f))
* fix lint ([a9cbba2](https://github.com/terrestris/shogun-gis-client/commit/a9cbba299653f51fa977d4c976f22f5aff3f3619))
* fix typo ([6952e0b](https://github.com/terrestris/shogun-gis-client/commit/6952e0b7ac161d2b6293ac43dc60b9bfa67c947f))
* update shogun util to newest version ([510a0de](https://github.com/terrestris/shogun-gis-client/commit/510a0de03ab451c061205bca7a90a7c1d3dc1f79))
* update shogun-util ([289ae4c](https://github.com/terrestris/shogun-gis-client/commit/289ae4c47673d91aadd595a1e94ebf7736fc6eb7))
* update shogun-util ([27876b8](https://github.com/terrestris/shogun-gis-client/commit/27876b824712c03d2bc0a7755621d252ed06f564))


### Bugfixes

* add warn logger ([b6eb459](https://github.com/terrestris/shogun-gis-client/commit/b6eb459cdce507e6067f2a8707bfb348cc81fc52))
* cleanup overallUpdateMode ([acda9d3](https://github.com/terrestris/shogun-gis-client/commit/acda9d3da8ec9b5050f5fcaa00694a9cacb8cfa4))
* correct signature ([5e2b5fb](https://github.com/terrestris/shogun-gis-client/commit/5e2b5fba751d9eac5ef3bf5726c50b7811ed7c82))
* correctly set geometryName for wfs ([e0f6b5c](https://github.com/terrestris/shogun-gis-client/commit/e0f6b5c754759a05c0e8c7c47871e0f4187219c7))
* disable support to UPLOAD (for now) ([5023544](https://github.com/terrestris/shogun-gis-client/commit/50235443329860a806091feff67eb73e03baa227))
* export component and add test ([d1f1881](https://github.com/terrestris/shogun-gis-client/commit/d1f1881eb938aae496caf411f2a824a20d9ac3e2))
* fix imports ([0a01643](https://github.com/terrestris/shogun-gis-client/commit/0a016436a3a23be7586a12e5589fea6f61d2dd73))
* fixes incremental request for features ([99363c6](https://github.com/terrestris/shogun-gis-client/commit/99363c6bdfab40553a6749f0e5b749414825e417))
* fixing intendentions and removing empty lines ([f74704d](https://github.com/terrestris/shogun-gis-client/commit/f74704d0ce378393a3e3ce3c2dcf3f34653852fd))
* format imports ([ed39cfa](https://github.com/terrestris/shogun-gis-client/commit/ed39cfa7ab2895bdc78dc67fabe9b123662168c3))
* makes the footer extendable via plugins ([5838120](https://github.com/terrestris/shogun-gis-client/commit/5838120290da3e5cf70edfc90c10f9483bbeaaf9))
* only create feature in update mode ([7fac839](https://github.com/terrestris/shogun-gis-client/commit/7fac839821f55d69eb3043632412217bd3e4c92e))
* only enable lock if features are updated ([9f65d7b](https://github.com/terrestris/shogun-gis-client/commit/9f65d7bfc192e576b97ce5f497e3b537983d75e4))
* pass filter object instead featureId ([d2ea593](https://github.com/terrestris/shogun-gis-client/commit/d2ea593d69b09dca06827e0de674cbc172eaa9f1))
* progress on feature select and create ([7024a21](https://github.com/terrestris/shogun-gis-client/commit/7024a217dc609d50b22e715055688bfa199c18a6))
* remove duplicated dispatch ([a24c0bb](https://github.com/terrestris/shogun-gis-client/commit/a24c0bbc0b26341bf335767315fb8c7011ae62ea))
* remove empty line ([b136061](https://github.com/terrestris/shogun-gis-client/commit/b1360617d37417ce1c932ff449cfd7bb74b2e652))
* remove hardcoded values ([0707560](https://github.com/terrestris/shogun-gis-client/commit/0707560ef7ac651edeabb2b89db85d533cb9bc04))
* removes unnecessary check ([1c2b890](https://github.com/terrestris/shogun-gis-client/commit/1c2b890c32b463aa339f8bdef36814fdc01fae5b))
* search via http POST ([65790eb](https://github.com/terrestris/shogun-gis-client/commit/65790ebe5e838842fc28ec850388417f6d83e0fa))
* set indentation ([12858ce](https://github.com/terrestris/shogun-gis-client/commit/12858ce4a26c9006c0f9ec6d0860af61981a29dc))
* simplify generateSolrQuery test setup ([ea79b16](https://github.com/terrestris/shogun-gis-client/commit/ea79b16c10954e10f71f9f840bfca1b0319073d0))
* typos in translations ([a2e2216](https://github.com/terrestris/shogun-gis-client/commit/a2e221603f2bf0573b64881519776d7f06b1813f))
* typos in translations ([de68b83](https://github.com/terrestris/shogun-gis-client/commit/de68b8366e984e79f5349a607bf8b6c8cd229bd2))
* uses detailed permissions for a user of a specific role ([fc03cd7](https://github.com/terrestris/shogun-gis-client/commit/fc03cd7ac9c7d4b3dd61c3e8509246a2c128504c))

## [6.3.0](https://github.com/terrestris/shogun-gis-client/compare/v6.2.0...v6.3.0) (2023-05-24)


### Features

* introduce multi search component ([4140d57](https://github.com/terrestris/shogun-gis-client/commit/4140d57a7e1911c77facf65a6f40d21e40fe2342))


### Bugfixes

* disable checking login status in iframe ([b860361](https://github.com/terrestris/shogun-gis-client/commit/b860361e04bcbea1e4f2631688848683a9eb5503))


### Dependencies

* **deps-dev:** bump @playwright/test from 1.33.0 to 1.34.0 ([d3f9db0](https://github.com/terrestris/shogun-gis-client/commit/d3f9db0aa7724447bc5d00d182f640fc66fcc78c))
* **deps-dev:** bump @playwright/test from 1.34.0 to 1.34.1 ([501c3df](https://github.com/terrestris/shogun-gis-client/commit/501c3df6d313b84f747439a2aa22865c47c1b309))
* **deps-dev:** bump @playwright/test from 1.34.1 to 1.34.2 ([3f41280](https://github.com/terrestris/shogun-gis-client/commit/3f41280e3c689fe4465fa31ecd252418986cb30d))
* **deps-dev:** bump @typescript-eslint/eslint-plugin ([02b8a7a](https://github.com/terrestris/shogun-gis-client/commit/02b8a7ad06222dd394c65134f3fd2c282aadc22f))
* **deps-dev:** bump @typescript-eslint/parser from 5.59.6 to 5.59.7 ([7b85526](https://github.com/terrestris/shogun-gis-client/commit/7b855265e367bd94f2b01125a717e72e93cbae05))
* **deps-dev:** bump css-loader from 6.7.3 to 6.7.4 ([8205777](https://github.com/terrestris/shogun-gis-client/commit/8205777749adfe22912fe364bae00ca4ba7eb36b))
* **deps-dev:** bump eslint from 8.40.0 to 8.41.0 ([a468320](https://github.com/terrestris/shogun-gis-client/commit/a468320bb1af904c96e2e1650f6246419562b85d))
* **deps-dev:** bump mini-css-extract-plugin from 2.7.5 to 2.7.6 ([919d2aa](https://github.com/terrestris/shogun-gis-client/commit/919d2aa44837601f8b4a61f2f5a026b8b8c90646))
* **deps-dev:** bump style-loader from 3.3.2 to 3.3.3 ([e5dbbe4](https://github.com/terrestris/shogun-gis-client/commit/e5dbbe473e89e0950475d4fab1db9975c91a310d))
* **deps-dev:** bump terser-webpack-plugin from 5.3.8 to 5.3.9 ([84bd42f](https://github.com/terrestris/shogun-gis-client/commit/84bd42fa708612418bb1ecdadbdc62a2ee2eb39a))
* **deps-dev:** bump webpack from 5.82.1 to 5.83.1 ([92d61e0](https://github.com/terrestris/shogun-gis-client/commit/92d61e02e60d082161868a4f3e4e1c6bde0fe698))
* **deps:** bump geostyler from 12.0.0 to 12.0.1 ([a66d40b](https://github.com/terrestris/shogun-gis-client/commit/a66d40b416ead3117c4a76ed9e8290b1b7410592))
* **deps:** bump geostyler-style from 7.2.0 to 7.3.0 ([764a9a9](https://github.com/terrestris/shogun-gis-client/commit/764a9a9df960ce3b9fa93d3bf96b30649822c311))
* **deps:** bump i18next from 22.4.15 to 22.5.0 ([cdfc2fc](https://github.com/terrestris/shogun-gis-client/commit/cdfc2fc16fe411a3a848ba200b7b55a486fdc97f))
* **deps:** bump react-i18next from 12.2.2 to 12.3.1 ([dad102b](https://github.com/terrestris/shogun-gis-client/commit/dad102b457ab38d796baedada2f7bba994a3c3be))

## [6.2.0](https://github.com/terrestris/shogun-gis-client/compare/v6.1.1...v6.2.0) (2023-05-16)


### Features

* compose user menu dynamically ([d9c7499](https://github.com/terrestris/shogun-gis-client/commit/d9c7499e6dcbf968ffb3fb05572810764815a6b3))


### Dependencies

* **deps-dev:** bump @commitlint/cli from 17.6.1 to 17.6.3 ([2c9893e](https://github.com/terrestris/shogun-gis-client/commit/2c9893e5597784fd225bed8b7e04b98698d45b4f))
* **deps-dev:** bump @commitlint/config-conventional ([8a82462](https://github.com/terrestris/shogun-gis-client/commit/8a82462018a7c4142edee5dc0d570968d484f8e1))
* **deps-dev:** bump @typescript-eslint/eslint-plugin ([41f7a2b](https://github.com/terrestris/shogun-gis-client/commit/41f7a2bed7860515df39375625a73b2de0f42038))
* **deps-dev:** bump @typescript-eslint/eslint-plugin ([51e8d7e](https://github.com/terrestris/shogun-gis-client/commit/51e8d7e196e8b259fa4b8d5977eeb58a36a0afa9))
* **deps-dev:** bump @typescript-eslint/parser from 5.59.2 to 5.59.5 ([aa4e68c](https://github.com/terrestris/shogun-gis-client/commit/aa4e68ceb1b9d865f5e1a175ff9e3b47b412c1e5))
* **deps-dev:** bump @typescript-eslint/parser from 5.59.5 to 5.59.6 ([7847ed8](https://github.com/terrestris/shogun-gis-client/commit/7847ed89810dab68dbc70dda8438c974037ca2d5))
* **deps-dev:** bump eslint from 8.39.0 to 8.40.0 ([f433e6a](https://github.com/terrestris/shogun-gis-client/commit/f433e6af9063f5efdc6f39355196abe0af40c079))
* **deps-dev:** bump terser-webpack-plugin from 5.3.7 to 5.3.8 ([4889d92](https://github.com/terrestris/shogun-gis-client/commit/4889d92cdd74e130e37b496bafaa84b4047b0eb1))
* **deps-dev:** bump webpack from 5.82.0 to 5.82.1 ([799cf67](https://github.com/terrestris/shogun-gis-client/commit/799cf675adcb9daad3ea4de9f4dc1b25e427e2bd))
* **deps-dev:** bump webpack-cli from 5.0.2 to 5.1.0 ([94124c7](https://github.com/terrestris/shogun-gis-client/commit/94124c7e0c8835870af1b36e6745170278ac8110))
* **deps-dev:** bump webpack-cli from 5.1.0 to 5.1.1 ([10252b3](https://github.com/terrestris/shogun-gis-client/commit/10252b3a1139e9329e6ab38f7b2f972d1ed0eeaa))
* **deps-dev:** bump webpack-dev-server from 4.13.3 to 4.15.0 ([020673c](https://github.com/terrestris/shogun-gis-client/commit/020673c4fcb37dc6d91f6e59ad055d43ee314c86))
* **deps:** bump @terrestris/ol-util from 10.2.4 to 10.3.0 ([3fed0d4](https://github.com/terrestris/shogun-gis-client/commit/3fed0d42dcbf5d49cbf8bf15a65607bb43704ac2))
* **deps:** bump @terrestris/shogun-util from 5.3.1 to 5.3.2 ([38677cd](https://github.com/terrestris/shogun-gis-client/commit/38677cd22fa232df9826f7bbf696bcec17fcfa04))

## [6.1.1](https://github.com/terrestris/shogun-gis-client/compare/v6.1.0...v6.1.1) (2023-05-04)


### Bugfixes

* remove unneeded await for getprintapps ([f286134](https://github.com/terrestris/shogun-gis-client/commit/f286134bdd2d6af1663dcccc24a71bb8013b31f9))


### Dependencies

* **deps-dev:** bump webpack from 5.81.0 to 5.82.0 ([4c818b5](https://github.com/terrestris/shogun-gis-client/commit/4c818b59c4f081a6bd8b64a0ad98383f661e2b77))
* **deps:** bump @terrestris/shogun-util from 5.3.0 to 5.3.1 ([6dd3090](https://github.com/terrestris/shogun-gis-client/commit/6dd30908835fa627680acf9f9affd41a19a4e9ce))
* **deps:** bump antd from 4.24.9 to 4.24.10 ([9295906](https://github.com/terrestris/shogun-gis-client/commit/9295906c15bf2207213adf06e80af1d5b6624c5d))
* update mapfish print manager ([cffd6cc](https://github.com/terrestris/shogun-gis-client/commit/cffd6cc72d06d174c22afd67cd2a481a4107879f))

## [6.1.0](https://github.com/terrestris/shogun-gis-client/compare/v6.0.0...v6.1.0) (2023-05-03)


### Features

* readme ([628ec2f](https://github.com/terrestris/shogun-gis-client/commit/628ec2f5de906d3552258f2766d7d33754e77957))
* use print app of current language code ([d8926d7](https://github.com/terrestris/shogun-gis-client/commit/d8926d7a9801254083925a5bb26383a5fe722bc5))


### Bugfixes

* await setPrintApp ([0f6c0ca](https://github.com/terrestris/shogun-gis-client/commit/0f6c0ca45c4e4ea75084a6f8903e8b223378f497))
* rebase ([b9893ce](https://github.com/terrestris/shogun-gis-client/commit/b9893ce96139c3f0c741f5053866d0a41d83c8be))

## [6.0.0](https://github.com/terrestris/shogun-gis-client/compare/v5.2.1...v6.0.0) (2023-05-03)


### ⚠ BREAKING CHANGES

* Print form does not require map anymore

### Features

* make custom (map) parameters configurable in print state ([fcaeb97](https://github.com/terrestris/shogun-gis-client/commit/fcaeb97cfe2a428d22607a8885cec8e221f5aa36))


### Dependencies

* bump mapfishprintmanager to v9 ([691584d](https://github.com/terrestris/shogun-gis-client/commit/691584d5c4038c56d7674e49dac3391e23d63307))
* code cleanup :lipstick: ([6b41a0a](https://github.com/terrestris/shogun-gis-client/commit/6b41a0a9cb124a104e3762219756d4f61ab53c04))
* **deps-dev:** bump @babel/cli from 7.21.0 to 7.21.5 ([f803e18](https://github.com/terrestris/shogun-gis-client/commit/f803e18b7623185d3e17e60e43c53530d55b33b2))
* **deps-dev:** bump @babel/core from 7.21.4 to 7.21.5 ([75b0384](https://github.com/terrestris/shogun-gis-client/commit/75b0384f43e26c34ecce17c499ce691948de836a))
* **deps-dev:** bump @babel/core from 7.21.5 to 7.21.8 ([a2eab22](https://github.com/terrestris/shogun-gis-client/commit/a2eab22732d482a3fc77a23cdf2e4b276fa6868a))
* **deps-dev:** bump @babel/preset-env from 7.21.4 to 7.21.5 ([6347852](https://github.com/terrestris/shogun-gis-client/commit/6347852a93246b1b9e2bb9521caa59b22f6395e9))
* **deps-dev:** bump @babel/preset-typescript from 7.21.4 to 7.21.5 ([953836c](https://github.com/terrestris/shogun-gis-client/commit/953836c4a44c01e00e332f68aaaa0faf1d118deb))
* **deps-dev:** bump @babel/runtime from 7.21.0 to 7.21.5 ([e83397c](https://github.com/terrestris/shogun-gis-client/commit/e83397c58ed199b3a6df6fc2706f6a12d24f3cb0))
* **deps-dev:** bump @semantic-release/release-notes-generator ([cb7a45c](https://github.com/terrestris/shogun-gis-client/commit/cb7a45c16649d31bbecdb0d7fa9f719a45fbf7cb))
* **deps-dev:** bump @typescript-eslint/eslint-plugin ([ecfdd77](https://github.com/terrestris/shogun-gis-client/commit/ecfdd7712012de297a920a92616e56306d38604a))
* **deps-dev:** bump @typescript-eslint/parser from 5.59.1 to 5.59.2 ([1cd95e6](https://github.com/terrestris/shogun-gis-client/commit/1cd95e69b67cc3de4273ba7e13e86b500584f2a3))
* **deps-dev:** bump semantic-release from 21.0.1 to 21.0.2 ([10c2745](https://github.com/terrestris/shogun-gis-client/commit/10c27452abf7eaeb3f3839f8a2a12793f33cd8ef))
* ignore IntelliJ iml files ([e070e1d](https://github.com/terrestris/shogun-gis-client/commit/e070e1d3c446e9b30611140612c538f4d4bb4362))


### Bugfixes

* use redux wrapper in test ([3058743](https://github.com/terrestris/shogun-gis-client/commit/3058743568dc95737c05cb6ddf7a61730b9d7a84))

## [5.2.1](https://github.com/terrestris/shogun-gis-client/compare/v5.2.0...v5.2.1) (2023-04-28)


### Bugfixes

* adapt clientPlugin type ([28a18a3](https://github.com/terrestris/shogun-gis-client/commit/28a18a394e810dd2ce1da1f74e10e69f24706a2a))
* correct i18n init ([7ecbfbe](https://github.com/terrestris/shogun-gis-client/commit/7ecbfbee274345712d436512332e634e775c8aa5))
* remove unsupported languages ([c5b28b1](https://github.com/terrestris/shogun-gis-client/commit/c5b28b11c70fa23b9f51e31465f1944a6d122757))

## [5.2.0](https://github.com/terrestris/shogun-gis-client/compare/v5.1.3...v5.2.0) (2023-04-28)


### Features

* allow shape and geotiff upload ([b35e740](https://github.com/terrestris/shogun-gis-client/commit/b35e740d486b228a420e5ec0f4ed9d4e65b21ef3))
* handle defaultLanguage config ([#813](https://github.com/terrestris/shogun-gis-client/issues/813)) ([17ac1e7](https://github.com/terrestris/shogun-gis-client/commit/17ac1e7f047a2305641c741bf65e9fba2acbf407))


### Bugfixes

* keep the icon width regardless of the overall menu width ([d127ffb](https://github.com/terrestris/shogun-gis-client/commit/d127ffb8b16619e41bd9e56d8df7133a9c1136a6))
* make the layout of the form more responsive ([403811d](https://github.com/terrestris/shogun-gis-client/commit/403811d6090a15f990b15fa9625cbed87e0fbd3e))
* typo in translation ([e00591b](https://github.com/terrestris/shogun-gis-client/commit/e00591bd3e92fb6948bd431873b77fa54f5d32b8))


### Dependencies

* **deps-dev:** bump @babel/core from 7.21.3 to 7.21.4 ([05d08fa](https://github.com/terrestris/shogun-gis-client/commit/05d08fad2942625dbe2f8403f2cf8c2da8600d5d))
* **deps-dev:** bump @babel/preset-env from 7.20.2 to 7.21.4 ([59096e8](https://github.com/terrestris/shogun-gis-client/commit/59096e8131124ba3adc2589fc720614532557e36))
* **deps-dev:** bump @babel/preset-typescript from 7.21.0 to 7.21.4 ([b7d02e7](https://github.com/terrestris/shogun-gis-client/commit/b7d02e7e865ae5a3b4383c244d9ef526b49cebfe))
* **deps-dev:** bump @commitlint/cli from 17.5.0 to 17.5.1 ([5b7be7e](https://github.com/terrestris/shogun-gis-client/commit/5b7be7e011236dd63dd75b84bcc936b9b4a30a08))
* **deps-dev:** bump @commitlint/cli from 17.5.1 to 17.6.0 ([666683d](https://github.com/terrestris/shogun-gis-client/commit/666683d5d58871879ff8a250120dc635ea042871))
* **deps-dev:** bump @commitlint/cli from 17.6.0 to 17.6.1 ([d7a9235](https://github.com/terrestris/shogun-gis-client/commit/d7a92352dad908b06326dfe404d55a00bf073d43))
* **deps-dev:** bump @commitlint/config-conventional ([94e5f6c](https://github.com/terrestris/shogun-gis-client/commit/94e5f6cb8df1b5bd642ca360b016b8021574b6c2))
* **deps-dev:** bump @commitlint/config-conventional ([ffa79f1](https://github.com/terrestris/shogun-gis-client/commit/ffa79f19efd822f47600a1845d12e27cb103e34f))
* **deps-dev:** bump @playwright/test from 1.31.2 to 1.32.1 ([110fdd7](https://github.com/terrestris/shogun-gis-client/commit/110fdd7094180c1932f8c20f77e6fd48b521d8ee))
* **deps-dev:** bump @playwright/test from 1.32.1 to 1.32.2 ([e38e87c](https://github.com/terrestris/shogun-gis-client/commit/e38e87cc7da50bcc3ba5fa9cf4cf68d7bc3cce63))
* **deps-dev:** bump @playwright/test from 1.32.2 to 1.32.3 ([b83cd61](https://github.com/terrestris/shogun-gis-client/commit/b83cd618b107c4c40ffaa97af7bcde45d8aa2a7b))
* **deps-dev:** bump @playwright/test from 1.32.3 to 1.33.0 ([3cb3895](https://github.com/terrestris/shogun-gis-client/commit/3cb38958f1e4427ce3edd0298a5e7d04d2974efd))
* **deps-dev:** bump @semantic-release/npm from 10.0.2 to 10.0.3 ([b755da9](https://github.com/terrestris/shogun-gis-client/commit/b755da92c704ce36f4226a6fdb5a7a27d154b670))
* **deps-dev:** bump @semantic-release/npm from 9.0.2 to 10.0.2 ([db54c1f](https://github.com/terrestris/shogun-gis-client/commit/db54c1f97ec1c91fc206dd49b01f244b5a944456))
* **deps-dev:** bump @types/jest from 29.5.0 to 29.5.1 ([2460502](https://github.com/terrestris/shogun-gis-client/commit/2460502319b969c5c22a852104bc9a12f16dc581))
* **deps-dev:** bump @typescript-eslint/eslint-plugin ([7ad792b](https://github.com/terrestris/shogun-gis-client/commit/7ad792b2138be3f8b566e08b704a396321c82aef))
* **deps-dev:** bump @typescript-eslint/eslint-plugin ([cc1a0a2](https://github.com/terrestris/shogun-gis-client/commit/cc1a0a2206ba4a5c9e317b71752682efc613ccc2))
* **deps-dev:** bump @typescript-eslint/eslint-plugin ([b25b1d9](https://github.com/terrestris/shogun-gis-client/commit/b25b1d92a39eecab8be233f7f096f8aa5537210b))
* **deps-dev:** bump @typescript-eslint/eslint-plugin ([946063a](https://github.com/terrestris/shogun-gis-client/commit/946063a75bb40897cc8afb68cd6d69b7bc5fe052))
* **deps-dev:** bump @typescript-eslint/parser from 5.57.0 to 5.57.1 ([14d497d](https://github.com/terrestris/shogun-gis-client/commit/14d497d460d0096963c5821172dc871066334d60))
* **deps-dev:** bump @typescript-eslint/parser from 5.57.1 to 5.58.0 ([9fde812](https://github.com/terrestris/shogun-gis-client/commit/9fde812ddb713b353694319ce02ac283e9c5f774))
* **deps-dev:** bump @typescript-eslint/parser from 5.58.0 to 5.59.0 ([624f32f](https://github.com/terrestris/shogun-gis-client/commit/624f32f6ee18580e56c422eb0c062e70779ae4fb))
* **deps-dev:** bump @typescript-eslint/parser from 5.59.0 to 5.59.1 ([a2ead1e](https://github.com/terrestris/shogun-gis-client/commit/a2ead1eca30bcfca8122b8a35fa0361215f6fd18))
* **deps-dev:** bump css-minimizer-webpack-plugin from 4.2.2 to 5.0.0 ([d77eb55](https://github.com/terrestris/shogun-gis-client/commit/d77eb55b6933556304bee50811b5acd5ac84bf1c))
* **deps-dev:** bump eslint from 8.36.0 to 8.37.0 ([040879d](https://github.com/terrestris/shogun-gis-client/commit/040879dad7d601a0228256a0ebe56787f709cb4e))
* **deps-dev:** bump eslint from 8.37.0 to 8.38.0 ([1b4dffc](https://github.com/terrestris/shogun-gis-client/commit/1b4dffcb733558aa4ec827a94b9d8f228cc0d3a3))
* **deps-dev:** bump eslint from 8.38.0 to 8.39.0 ([434e69d](https://github.com/terrestris/shogun-gis-client/commit/434e69d365f561cfcf5bb73aa2f0ed32bebfe2d6))
* **deps-dev:** bump html-webpack-plugin from 5.5.0 to 5.5.1 ([c634bd2](https://github.com/terrestris/shogun-gis-client/commit/c634bd2fe4f5f785f395635cc809623d379b948a))
* **deps-dev:** bump semantic-release from 21.0.0 to 21.0.1 ([dce4941](https://github.com/terrestris/shogun-gis-client/commit/dce4941dc9b6ffd3b58caa77a40dcf3bc769918d))
* **deps-dev:** bump typescript from 4.9.5 to 5.0.3 ([7b34acd](https://github.com/terrestris/shogun-gis-client/commit/7b34acdb216b322f8bb19bc9cbb876f2cd6b82b7))
* **deps-dev:** bump typescript from 5.0.3 to 5.0.4 ([a9e7032](https://github.com/terrestris/shogun-gis-client/commit/a9e70321af56ad6b33d9fbaa58e5aaa15514f25b))
* **deps-dev:** bump webpack from 5.76.3 to 5.77.0 ([a283579](https://github.com/terrestris/shogun-gis-client/commit/a283579ec5e1ea5961257467ba07291e309d0b7c))
* **deps-dev:** bump webpack from 5.77.0 to 5.78.0 ([ff0033a](https://github.com/terrestris/shogun-gis-client/commit/ff0033a92fe57ee4bc010867b873cb3243c4bbec))
* **deps-dev:** bump webpack from 5.78.0 to 5.79.0 ([559eaf1](https://github.com/terrestris/shogun-gis-client/commit/559eaf14fa606edd43a7f656ce38dcb4cfd3d2b1))
* **deps-dev:** bump webpack from 5.79.0 to 5.80.0 ([74d8e58](https://github.com/terrestris/shogun-gis-client/commit/74d8e5850acbcfa59c3a074c0c803f8dd1ff12ea))
* **deps-dev:** bump webpack from 5.80.0 to 5.81.0 ([7c5cccc](https://github.com/terrestris/shogun-gis-client/commit/7c5cccc3f31da6994475abfc6fe1dfc8842e2a9e))
* **deps-dev:** bump webpack-cli from 5.0.1 to 5.0.2 ([01d8b95](https://github.com/terrestris/shogun-gis-client/commit/01d8b95bfde4fa24b06b3f64941971a77c6b5102))
* **deps-dev:** bump webpack-dev-server from 4.11.1 to 4.13.1 ([8e391cf](https://github.com/terrestris/shogun-gis-client/commit/8e391cf3072e5971dc913763d535db4d5de86584))
* **deps-dev:** bump webpack-dev-server from 4.13.1 to 4.13.2 ([e6d3b2f](https://github.com/terrestris/shogun-gis-client/commit/e6d3b2f47e57449e5ce2f74bc1fe0ea739b4ba76))
* **deps-dev:** bump webpack-dev-server from 4.13.2 to 4.13.3 ([2679ccc](https://github.com/terrestris/shogun-gis-client/commit/2679ccc930b94f9aa36dcc8b6429b6b0c948d880))
* **deps:** bump @reduxjs/toolkit from 1.9.3 to 1.9.4 ([5ad17eb](https://github.com/terrestris/shogun-gis-client/commit/5ad17eb725972981ba18b299dc7b8b66d5bc33fb))
* **deps:** bump @reduxjs/toolkit from 1.9.4 to 1.9.5 ([b622f67](https://github.com/terrestris/shogun-gis-client/commit/b622f671fd7c20d24be9511998143f11869784ef))
* **deps:** bump @terrestris/shogun-util from 5.1.0 to 5.2.0 ([cdaa7c1](https://github.com/terrestris/shogun-gis-client/commit/cdaa7c1c7ce05b291b72ed94b69ee5db2aff54d7))
* **deps:** bump antd from 4.24.8 to 4.24.9 ([952e055](https://github.com/terrestris/shogun-gis-client/commit/952e055ad1bca091f813d257308f508db8455ba0))
* **deps:** bump geostyler from 11.1.1 to 12.0.0 ([b0fda24](https://github.com/terrestris/shogun-gis-client/commit/b0fda24e5d2fa9169c36cc4e86bfd36c92ef6147))
* **deps:** bump geostyler-openlayers-parser from 4.1.0 to 4.1.2 ([ddd0d12](https://github.com/terrestris/shogun-gis-client/commit/ddd0d12a7ed03da967f78dfb4ba74de4e901d144))
* **deps:** bump i18next from 22.4.13 to 22.4.14 ([d65a63f](https://github.com/terrestris/shogun-gis-client/commit/d65a63f2c2ebbadd681494fa1582971e963fa760))
* **deps:** bump i18next from 22.4.14 to 22.4.15 ([05d4e0c](https://github.com/terrestris/shogun-gis-client/commit/05d4e0cb4f0da8f2ec3bd6eee71a0b68dfd1af1b))
* **deps:** bump keycloak-js from 21.0.1 to 21.0.2 ([6b7afcb](https://github.com/terrestris/shogun-gis-client/commit/6b7afcb5f3204be74d277b108fdb89ec239ac771))
* **deps:** bump keycloak-js from 21.0.2 to 21.1.1 ([5010803](https://github.com/terrestris/shogun-gis-client/commit/5010803a659024cf144a6aaeffa743ce1adab840))
* **deps:** bump react-i18next from 12.2.0 to 12.2.2 ([adc022b](https://github.com/terrestris/shogun-gis-client/commit/adc022b385e018c77fc62b94afcc0c42759813d6))
* fix typo in README ([14a3543](https://github.com/terrestris/shogun-gis-client/commit/14a3543cc303a214c53da0d798f7a6c9d00a33d7))


### Changes in configuration

* update semantic-release action ([139450f](https://github.com/terrestris/shogun-gis-client/commit/139450f1de1eb00a419ab792172c5336857757ad))

## [5.1.3](https://github.com/terrestris/shogun-gis-client/compare/v5.1.2...v5.1.3) (2023-03-28)


### Bugfixes

* use more robust check for layer visibility change ([129f0e9](https://github.com/terrestris/shogun-gis-client/commit/129f0e9601f0a12c144ef594c4a7631b6e368457))


### Dependencies

* **deps-dev:** bump @babel/core from 7.21.0 to 7.21.3 ([ec8eec9](https://github.com/terrestris/shogun-gis-client/commit/ec8eec954ccefa893c3cafc9e49af5a388bc09a3))
* **deps-dev:** bump @commitlint/cli from 17.4.4 to 17.5.0 ([cc16e7d](https://github.com/terrestris/shogun-gis-client/commit/cc16e7d8887ca2a1e9081cf983ba9cacb139255a))
* **deps-dev:** bump @semantic-release/changelog from 6.0.2 to 6.0.3 ([0b2835f](https://github.com/terrestris/shogun-gis-client/commit/0b2835f6209226aca8a8930759dafbdd9ddffc62))
* **deps-dev:** bump @typescript-eslint/eslint-plugin ([000a6fb](https://github.com/terrestris/shogun-gis-client/commit/000a6fbcf5a67116c10db063da2d2e8831bbcb85))
* **deps-dev:** bump @typescript-eslint/parser from 5.56.0 to 5.57.0 ([e7f3322](https://github.com/terrestris/shogun-gis-client/commit/e7f33223460d20a293aa7c425e103c318216849f))
* **deps-dev:** bump fs-extra from 11.1.0 to 11.1.1 ([fb34fd7](https://github.com/terrestris/shogun-gis-client/commit/fb34fd798004fe357abf04e3e37c06e37219f193))
* **deps-dev:** bump semantic-release from 20.1.1 to 21.0.0 ([cd1aa74](https://github.com/terrestris/shogun-gis-client/commit/cd1aa7424cb80bb035fd05957dd9de8a4a257bc0))
* **deps:** bump i18next from 22.4.11 to 22.4.13 ([26aefab](https://github.com/terrestris/shogun-gis-client/commit/26aefab932237a6f55c8b7e4afec3a21613e02db))

## [5.1.2](https://github.com/terrestris/shogun-gis-client/compare/v5.1.1...v5.1.2) (2023-03-27)


### Dependencies

* **deps-dev:** bump @types/jest from 29.4.0 to 29.5.0 ([eaba31f](https://github.com/terrestris/shogun-gis-client/commit/eaba31fb4013930a683edc1a627678620189ae7c))
* **deps-dev:** bump @typescript-eslint/eslint-plugin ([ce69000](https://github.com/terrestris/shogun-gis-client/commit/ce690008e6c3b26487004a1f2249d7e252ac86c7))
* **deps-dev:** bump @typescript-eslint/parser from 5.54.1 to 5.56.0 ([fa02f22](https://github.com/terrestris/shogun-gis-client/commit/fa02f22a273388d50bd5260f2dd05c6d65c52d44))
* **deps-dev:** bump eslint from 8.35.0 to 8.36.0 ([df9120e](https://github.com/terrestris/shogun-gis-client/commit/df9120e4174f66eb1d95c34a1212fe841709dce3))
* **deps-dev:** bump mini-css-extract-plugin from 2.7.2 to 2.7.5 ([dcb27bf](https://github.com/terrestris/shogun-gis-client/commit/dcb27bfce5fb9770e8b3d5011f0d7d17f83cf35f))
* **deps-dev:** bump style-loader from 3.3.1 to 3.3.2 ([0fd782b](https://github.com/terrestris/shogun-gis-client/commit/0fd782b11b9ff00bf86b82cf49c6658a2a9807c0))
* **deps-dev:** bump terser-webpack-plugin from 5.3.6 to 5.3.7 ([00def3a](https://github.com/terrestris/shogun-gis-client/commit/00def3aa9210e081c5176c980572d27903cf9cf7))
* **deps-dev:** bump webpack from 5.75.0 to 5.76.3 ([4c6d77a](https://github.com/terrestris/shogun-gis-client/commit/4c6d77a1a2d756a0f320283be68b503300c04278))
* **deps:** bump @terrestris/ol-util from 10.2.3 to 10.2.4 ([eae5dff](https://github.com/terrestris/shogun-gis-client/commit/eae5dff09996f5ed24728373fb500988ba613a19))
* **deps:** bump @terrestris/react-geo from 22.3.2 to 22.4.0 ([f8267c1](https://github.com/terrestris/shogun-gis-client/commit/f8267c1875e1d9c40e2955e04779d5d2d1c8f1db))


### Bugfixes

* fixing playwright workflow ([90bae59](https://github.com/terrestris/shogun-gis-client/commit/90bae596c0a3befd34b1df0616749072497eb996))
* remove e2e-tests from check script ([ea650b2](https://github.com/terrestris/shogun-gis-client/commit/ea650b2e0265de74d310fab73f048f826da5c411))
* remove unnecessary visibility check ([bc75d6c](https://github.com/terrestris/shogun-gis-client/commit/bc75d6cfa823ebbf74602b01a6f361a176b476e0))

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
