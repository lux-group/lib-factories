const { define, build } = require("../");

define("myObject", ({ counter, uuid }) => ({
  id: uuid(),
  counter: counter(),
  items: []
}));

define("myChildObject", ({ uuid }) => ({
  id: uuid(),
  price: 9.5
}));

module.exports = { build };
