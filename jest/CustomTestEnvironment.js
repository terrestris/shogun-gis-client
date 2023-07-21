import JSDOMEnvironment from 'jest-environment-jsdom';

module.exports = class CustomTestEnvironment extends JSDOMEnvironment {
  async setup() {
    await super.setup();

    // https://github.com/jsdom/jsdom/issues/3363
    this.global.structuredClone = structuredClone;
  }
};
