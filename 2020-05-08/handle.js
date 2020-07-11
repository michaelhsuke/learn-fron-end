const fs = require('fs')
const path = require('path')
// const iconv = require('iconv-lite')
const dir = '/Users/xuke/projects/js-unicom/vue-wo-activity/src/views/2020/weeklyLottery'




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
var okExts = ['css', 'php', 'htm', 'xml', 'js', 'html', 'vue', 'less']

handleFile(dir, function (filepath) {
  var ext = getExt(filepath)
  if (okExts.includes(ext)) {
    var content = fs.readFileSync(filepath, { encoding: 'utf-8' })
    // console.log(content)
    var reg = /(\d{1,})px/g
    content = content.replace(reg, function (a, b) {
      var c = (b / 37.5).toFixed(4)
      console.log(c)
      return c + 'rem'
    })
    fs.writeFileSync(filepath, content)
  }

})

console.log(fileExts)