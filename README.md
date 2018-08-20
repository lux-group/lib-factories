# lib-factories

Create a `factories.js`:

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

module.exports = { build }
```

Then require in tests:

```js
const { build } = require('./factories');

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
```

Generates:

```json
[
  {
    "id": "fe37c324-589b-42e3-a231-da7f66faa114",
    "counter": 1,
    "items": [
      {
        "id": "3947b9ec-e375-443a-8bd9-c3c7a9fd51db",
        "price": 12.5
      }
    ]
  },
  {
    "id": "77b64f00-0f1f-4383-9d8a-2e206f857dc4",
    "counter": 2,
    "items": [
      {
        "id": "5dedf786-eeee-44a4-b250-5ed6a4d668b5",
        "price": 10
      }
    ]
  }
]
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
