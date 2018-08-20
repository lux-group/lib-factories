# lib-factories

Factory helper functions

```js
const { define, build } = require('lib-factories');

define("myObject", ({ counter, uuid }) => ({
  id: uuid(),
  counter: counter(),
  items: []
}))

define("myChildObject", ({ uuid }) => ({
  id: uuid(),
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
