const traceur = require('traceur')
const fs = require('fs')

var contents = fs.readFileSync('index.js').toString()
var result = traceur.compile(contents, {
  filename: 'index.js',
  sourceMap: true,
  modules: 'commonjs'
})

if (result.error) {
  throw result.error
}

fs.writeFileSync('out.js', result.js)
fs.writeFileSync('out.js.map', result.sourceMap)