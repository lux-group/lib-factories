const factories = require('./');

factories.define('foo', () => ({ key: 'a' }))
factories.define('bar', () => ({ key: 'b' }))

const result = factories.build('foo', {
  key: 'c',
  otherKey: 'd',
  bar: factories.build('bar')
})

if (result.key !== 'c') {
  console.error('test failed')
  process.exit(1)
}

if (result.otherKey !== 'd') {
  console.error('test failed')
  process.exit(1)
}

if (result.bar.key !== 'b') {
  console.error('test failed')
  process.exit(1)
}

console.log('test passed')
process.exit(0)
