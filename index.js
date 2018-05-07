const isArray = require('lodash.isarray')
const isFunction = require('lodash.isfunction')
const mergeWith = require('lodash.mergewith')

const factories = {}

function customizer(objValue, srcValue) {
  if (isArray(objValue)) {
    return srcValue;
  }
}

function build(name, toMerge) {
  if (factories[name]) {
    return mergeWith({}, factories[name](), toMerge, customizer)
  }
  throw new Error(`Missing factory "${name}"`)
}

function define(name, factory) {
  if (!isFunction(factory)) {
    throw new Error(`Factory for "${name}" must be a function`)
  }
  factories[name] = factory
  return true
}

module.exports = {
  build,
  define
}
