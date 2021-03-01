const semver = require('semver')
const kPluginMeta = Symbol.for('smallify.plugin.meta')

module.exports = function wrapper (fn, opts = {}) {
  if (typeof fn !== 'function') {
    throw new TypeError(
      `smallify-plugin expects a function, instead got a '${typeof fn}'`
    )
  }

  const bVer = require('smallify/package.json').version
  const dVer = '>=1.0.1'
  if (!semver.satisfies(bVer, dVer)) {
    throw new Error(
      `smallify-plugin: expected '${dVer}' smallify version, '${bVer}' is installed`
    )
  }

  fn[kPluginMeta] = opts
  return fn
}
