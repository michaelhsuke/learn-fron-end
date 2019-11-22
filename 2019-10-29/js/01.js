
const glob = require('glob')
const path = require('path')
const fs = require('fs')

function getFiles(globPath, prefix = '', host = '') {
  globPath = path.resolve(globPath)
  let files = glob.sync(globPath)
  console.log(prefix)
  if (prefix) {
    files = files.map(item => {
      item = `${host}${item.replace(prefix, '')}`
      return item
    })
  }
  
  return files
}

const globPath = `D:/xuke/js-unicom-projects/woService/woService-www/src/site/**/*.html`
const dir = 'D:/xuke/js-unicom-projects/woService/woService-www/src/site/'
const host = 'https://weixin.10010js.com/'
let files = getFiles(globPath, dir, host)
let targetFilepath = './woService.txt'
files.forEach(item => {
  fs.writeFileSync(targetFilepath, `${item}\r\n`, { flag: 'a' })
})
// fs.close()
console.log(files)