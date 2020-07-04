// const fs = require('fs')
// // console.log(fs)
// const input = fs.createReadStream('file.txt')
// // console.log(input)
// let remainings = ''
// input.on('data', data => {
//   // console.log(data)

// })
const PYTool = require('../lib/ChinesePY')
const readline = require('readline')
const fs = require('fs')

const r1 = readline.createInterface({
  input: fs.createReadStream('file.txt'),
})



let i = 0
let result = []  // 保存结果
// 读取事件
r1.on('line', line => {
  let [key, value] = line.split('|')
  key = key.trim()  // 键
  value = value.trim()  // 值
  const jp = PYTool.GetJP(key)
  result.push(`$_LANG['${jp}'] = "${value}";`)
})

// 关闭事件
r1.on('close', () => {
  console.log(result.length)

  let content = `
    <?php
      ${result.join('\r\n')}
  `
  fs.writeFile('./mobile.php', content, (err, data) => {
    if (err) {
      throw err
    }
  })
})




