var path = require('path');
var fs = require('fs');

// Make sure any symlinks in the project folder are resolved:
// https://github.com/facebookincubator/create-react-app/issues/637
var appDirectory = fs.realpathSync(process.cwd());
function resolveApp(relativePath) {
  return path.resolve(appDirectory, relativePath);
}

// We support resolving modules according to `NODE_PATH`.
// This lets you use absolute paths in imports inside large monorepos:
// https://github.com/facebookincubator/create-react-app/issues/253.

// It works similar to `NODE_PATH` in Node itself:
// https://nodejs.org/api/modules.html#modules_loading_from_the_global_folders

// We will export `nodePaths` as an array of absolute paths.
// It will then be used by Webpack configs.
// Jest doesn’t need this because it already handles `NODE_PATH` out of the box.

var nodePaths = (process.env.NODE_PATH || '')
  .split(process.platform === 'win32' ? ';' : ':')
  .filter(Boolean)
  .map(resolveApp);


// config after eject: we're in ./config/
module.exports = {
  appBuild: resolveApp('screen/build'),
  appPublic: resolveApp('screen/public'),
  appHtml: resolveApp('screen/public/index.html'),
  appIndexJs: resolveApp('screen/src/index.js'),
  appPackageJson: resolveApp('package.json'),
  appSrc: resolveApp('screen/src'),
  testsSetup: resolveApp('screen/src/setupTests.js'),
  appNodeModules: resolveApp('node_modules'),
  ownNodeModules: resolveApp('node_modules'),
  commonSrc: resolveApp('common'),
  nodePaths: nodePaths
};
