const fs = require('fs')
const paths = fs.readdirSync(process.cwd())
// console.log(paths)
paths.forEach(name => {
  if (/^\d+$/.test(name)) {
    // console.log(name)

    const newName = [name.slice(0, 4), name.slice(4, 6), name.slice(6, 8)].join('-')
    // console.log(newName)
    try {
      fs.renameSync(name, newName)
    } catch (e) {
      console.log(e)
    }
    
  }
})