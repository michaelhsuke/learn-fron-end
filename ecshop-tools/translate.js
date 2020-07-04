const PYTool = require('../lib/ChinesePY')
const readline = require('readline')
const fs = require('fs')
const inFile = './files/file.txt'
const outFile = './output/mobile.php'
let result = []  // 处理结果

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
}

// 处理结果
function handleResult() {
  let content = `
    <?php
      ${result.join('\r\n')}
  `
  fs.writeFile(outFile, content, (err, data) => {
    if (err) {
      throw err
    }
  })
}

// 读取事件
r1.on('line', handleOneLine)

// 关闭事件
r1.on('close', handleResult)




