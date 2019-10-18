const traceur = require('traceur')
const fs = require('fs')

var contents = fs.readFileSync('index.js').toString()
var result = traceur.compile(contents, {
  filename: 'output.js',
  sourceMap: true,
  modules: 'commonjs'
})