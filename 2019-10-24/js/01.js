const fs = require('fs')
const path = 'D:\\xuke\\360desktop\\bk_image'
let files = fs.readdirSync(path)
// console.log(Object.prototype.toString.call(files))
for(let filename of files) {
  // console.log(filename)
  let newFilename = filename.replace(/\.dat$/g, '.jpg')
  console.log(newFilename)
  let oldFilePath = `${path}\\${filename}`
  let newFilePath = `${path}\\${newFilename}`
  fs.rename(oldFilePath, newFilePath, function (err) {
    console.log(err)
  })
}
// fs.close()