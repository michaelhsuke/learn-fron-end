const fs = require('fs')

const cwd = process.cwd()
const appDirectory = fs.realpathSync(cwd)

console.log(cwd)
console.log(appDirectory)