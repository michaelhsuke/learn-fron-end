const dirname = '/Users/xuke/wfdsoft_luminia_160922/DIY(GBK)'
const fs = require('fs')
const path = require('path')
const iconv = require('iconv-lite')

let rec = new Set()

function getExt(filepath) {
  filepath = filepath + ''
  var index = filepath.lastIndexOf('.')
  return filepath.slice(index + 1)
}

function readDir(dirname, callback) {
  const entries = fs.readdirSync(dirname)
  // console.log(entries)
  entries.forEach(entry => {
    let absPath = path.join(dirname, entry)
    let stat = fs.statSync(absPath)
    if (stat.isDirectory()) {
      readDir(absPath, callback)
    } else if (stat.isFile(absPath)) {
      (typeof callback === 'function') && callback(absPath)
    }
  })
}

// var isLoaded = false
readDir(dirname, function (filepath) {
  let ext = getExt(filepath)
  if (['css', 'php', 'htm', 'xml', 'js'].includes(ext)) {  // 合法扩展名
    fs.readFile(filepath, function (err, content) {
      if (err) {
        console.log("error: " + filepath)
      }
      content = iconv.decode(content, 'gbk')
      fs.writeFileSync(filepath, content)
    })
  }
})


// new Promise(resolve => {
//   let filepath = path.join(dirname, 'discuz_style_wfdsoft_luminia_160922.xml')
//   let content = fs.readFile(filepath, function (err, content) {
//     // console.log(content)
//     content = iconv.decode(content, 'gbk')
//     console.log(content)
//     resolve()
//     isLoaded = true
//   })
// }) 


