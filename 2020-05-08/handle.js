const fs = require('fs')
const path = require('path')
const iconv = require('iconv-lite')
const dir = '/Users/xuke/Downloads/dien'




function handleFile(dir, callback) {
  var entries = fs.readdirSync(dir)
  for (var entry of entries) {
    var realPath = path.join(dir, entry)
    var statInfo = fs.statSync(realPath)
    if (statInfo.isDirectory()) {
      handleFile(realPath, callback)
    } else if (statInfo.isFile()) {
      callback(realPath)
    }
  }
}

function getExt(filepath) {
  var arr = filepath.split('.')
  return arr[arr.length - 1]

}

var fileExts = new Set()
var okExts = ['css', 'php', 'htm', 'xml', 'js']

handleFile(dir, function (filepath) {
  var ext = getExt(filepath)
  fs.readFile(filepath, (err, data) => {
    if (err) {
      return 
    }
    data = iconv.decode(data, 'GBK')
    fs.writeFileSync(filepath, data)
  })
  // fs.readFile(filepath, (err, data) => {
  //   var content = iconv.decode(data, 'GBK')
  //   console.log(content)
  //   fs.writeFileSync()
  // })
  // var ext = getExt(filepath)
  // fileExts.add(ext)
})

console.log(fileExts)