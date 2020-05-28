const loader = require('less-loader')
let source = ` body { background: #f00; } `
console.log(loader(source))