const rawArgs = process.argv.slice(2)
const args = {}
rawArgs.forEach(item => {
  const itemArr = item.split('=')
  args[itemArr[0].trim()] = (itemArr[1] + '').trim()
})

const path = '/Users/xuke/projects/js-unicom/vue-wo-activity/src'

const fs = require('fs')
const join = require('path').join

function getFiles(path, callback) {
  let files = fs.readdirSync(path)
  files.forEach(file => {
    let oneFilePath = join(path, file)
    let stat = fs.statSync(oneFilePath)
    if (stat.isDirectory()) {
      getFiles(oneFilePath, callback)
    }

    if (stat.isFile()) {
      typeof callback === 'function' && callback(oneFilePath)
    }
  })
}

function getExt(filepath) {
  let result = ''
  filepath = filepath + ''
  const lastDotIndex = filepath.lastIndexOf('.')
  if (lastDotIndex >= 0) {
    result = filepath.slice(lastDotIndex + 1)
  }

  return result
}

// var count = 0
// var exts = new Set()
// var okExts = ['vue', 'less', 'js', 'json']
// getFiles(path, function (filepath) {
//   const ext = getExt(filepath)
//   if (okExts.includes(ext)) {
//     handleFile(filepath)
//   }
// })

function handleFile(filepath) {
  try {
    let content = fs.readFileSync(filepath)
    

  } catch (e) {

  }
}
// console.log('total file count: ' + count, Array.from(exts))

module.exports = {
  getFiles,
  getExt
}



