const readdir = require('../utils/readdir')
// const path = `/Users/xuke/projects/self/ecshop/mobile/resources/views`
const path = `/Users/xuke/my-projects/ecshop/mobile/resources/views/category`
const fs = require('fs')
const exts = new Set()
const reg = /[\u4e00-\u9fa5]{1,}/g
let result = new Set()
const langmap = require('./output/langmap.js')
Object.keys(langmap).forEach(key => {
  console.log(langmap[key])

})

readdir.getFiles(path, (filepath) => {
  let content = fs.readFileSync(filepath, { encoding: 'utf-8' })
  Object.keys(langmap).forEach(key => {
    let reg = new RegExp(key, 'gi')
    content = content.replace(reg, function(a, b) {
      return langmap[key]
    })
  })
  fs.writeFileSync(filepath, content, { encoding: 'utf-8' })
  
})

// fs.writeFileSync('result.txt', Array.from(result).join('\r\n'))