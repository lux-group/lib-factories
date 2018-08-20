const { build } = require("./factories");

const collection = [
  build("myObject", {
    items: [
      build("myChildObject", {
        price: 12.5
      })
    ]
  }),
  build("myObject", {
    items: [
      build("myChildObject", {
        price: 10
      })
    ]
  })
];

console.log(JSON.stringify(collection, null, 2));
