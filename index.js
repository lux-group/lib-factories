const isArray = require("lodash.isarray");
const isFunction = require("lodash.isfunction");
const mergeWith = require("lodash.mergewith");
const counter = require("./src/counter");
const uuid = require("./src/uuid");

function utils() {
  return {
    counter: counter(),
    uuid
  };
}

const factories = {};

function customizer(objValue, srcValue) {
  if (isArray(objValue)) {
    return srcValue;
  }
}

function build(name, toMerge) {
  const [factory, utils] = factories[name];
  if (factory) {
    return mergeWith({}, factory(utils), toMerge, customizer);
  }
  throw new Error(`Missing factory "${name}"`);
}

function define(name, factory) {
  if (!isFunction(factory)) {
    throw new Error(`Factory for "${name}" must be a function`);
  }
  factories[name] = [factory, utils()];
  return true;
}

module.exports = {
  build,
  define
};
