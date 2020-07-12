const yParser = require('yargs-parser')

const args = yParser(process.argv.slice(2))
console.log(args)