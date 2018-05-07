# lib-factories

Factory helper functions

```js
const { define, build } = require('lib-factories');

define("myObject", () => ({
  id: "d302cbd3-83e9-4e11-b5e2-9b48f587caf2",
  items: []
}))

define("myChildObject", () => ({
  id: "d302cbd3-83e9-4e11-b5e2-9b48f587caf2",
  price: 9.50
}))

build("myObject", {
  items: [
    build("myChildObject", {
      price: 12.50
    })
  ]
})

module.exports = { build }
```

## Running tests

```
yarn test
```

## Release

Use `npm` to patch, minor or whatever version:

```
npm version patch -m "release version %s"
git push && git push --tags
```

https://docs.npmjs.com/cli/version
