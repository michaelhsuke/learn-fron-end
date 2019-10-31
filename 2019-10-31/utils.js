const fs = require('fs')
const path = require('path')

const writeFile = (filepath, data) => {
  fs.writeFile(filepath, data, function (err) {
    if (!err) {
      console.log('写入成功')
    }
  }) 
}

const mkdirSync = dirname => {
  if (fs.existsSync(dirname)) {
    return true
  } else {
    if (mkdirSync(path.dirname(dirname))) {
      console.log('mkdirSync = ' + dirname)
      fs.mkdirSync(dirname)
      return true
    }
  }
}

const copyAll = (src, dist) => {
  const paths = fs.readdirSync(src)
  paths.forEach(function (p) {
    let _src = `${src}/${p}`
    let _dist = `${dist}/${p}`
    let stat = fs.statSync(_src)
    if (stat.isFile()) {
      fs.writeFileSync(_dist, fs.readFileSync(_src))
    } else if (stat.isDirectory()) {
      copyDir(_src, _dist)
    }
  })
}

const copyDir = (src, dist) => {
  let b = fs.existsSync(dist)
  console.log('dist = ' + dist)
  if (!b) {
    console.log(`mk dist = `, dist)
    mkdirSync(dist)
  }
  console.log('copyAll start')
  copyAll(src, dist)
}

const createDocs = (src, dist, callback) => {
  console.log('createDocs...')
  copyDir(src, dist)
  console.log('copyDir finish exec callback')
  if (callback) {
    callback
  }
}

module.exports = {
  createDocs
}