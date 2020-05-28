const loader = require('babel-loader')
const source = `
  console.log('hello')
`

console.log(loader(source))
