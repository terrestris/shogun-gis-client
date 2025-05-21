/**
 * This plugin rewrite all OpenLayers import paths by removing the '.js'
 * extension from the import paths (e.g. 'ol/Map.js' to 'ol/Map').
 * This is necessary because usually the import paths are written without the '.js'
 * extension and having the '.js' extension in the import paths can cause issues
 * with module federation since it would share both modules (with and without the
 * extension) thus resulting in sharing the modules twice.
 */
class OlImportRewritePlugin {
  apply(compiler) {
    compiler.hooks.normalModuleFactory.tap('OlImportRewritePlugin', nmf => {
      nmf.hooks.beforeResolve.tap('OlImportRewritePlugin', resolveData => {
        if (resolveData &&
          typeof resolveData.request === 'string' &&
          resolveData.request.startsWith('ol/') &&
          resolveData.request.endsWith('.js')) {
            const newRequest = resolveData.request.slice(0, -3);
            resolveData.request = newRequest;
        }
      });
    });
  }
}

module.exports = OlImportRewritePlugin;
