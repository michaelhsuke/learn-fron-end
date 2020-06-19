// import { getFiles } from '../utils/readdir'
const readdir = require('../utils/readdir')
const path = `/Users/xuke/projects/self/ecshop/mobile/resources/views`
const fs = require('fs')
const exts = new Set()
const reg = /[\u4e00-\u9fa5]{2,}/g
let result = new Set()

readdir.getFiles(path, (filepath) => {
  let content = fs.readFileSync(filepath, { encoding: 'utf-8' })
  // console.log(content)
  content.replace(reg, function(a, b) {
    result.add(a)
  })
  

})

fs.writeFileSync('result.txt', Array.from(result).join('\r\n'))

// console.log('exts====', exts)