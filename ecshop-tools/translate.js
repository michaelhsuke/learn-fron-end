const PYTool = require('../lib/ChinesePY')
const readline = require('readline')
const fs = require('fs')
const inFile = './files/file.txt'
const outFile = './output/mobile.php'
const outFile2 = './output/langmap.js'
let result = []  // 处理结果
let result2 = {}  // 保存键值对

const r1 = readline.createInterface({
  input: fs.createReadStream(inFile),
})

// 处理一行
function handleOneLine(line) {
  let [ key, value ] = line.split('|')
  key = key.trim()  // 键
  value = value.trim()  // 值
  const jp = PYTool.GetJP(key)
  result.push(`$_LANG['e2door_${jp}'] = "${value}";`)
  result2[key] = `{$lang.e2door_${jp}}`
}

// 处理结果
function handleResult() {
  let content = `
    <?php
      ${result.join('\r\n')}
  `
  // fs.writeFile(outFile, content, (err, data) => {
  //   if (err) {
  //     throw err
  //   }
  // })

  fs.writeFile(outFile2, `module.exports = ${JSON.stringify(result2)}`, (err, data) => {
    if (err) {
      console.log(err)
    }
  })
}

// 读取事件
r1.on('line', handleOneLine)

// 关闭事件
r1.on('close', handleResult)




