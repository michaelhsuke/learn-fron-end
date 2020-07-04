/**
 * 按行读取文本，并处理
 */
const fs = require('fs')
const readline = require('readline')
const inputFile = './files/dsc_order_info.csv'  // 输入
const outputFile = './output/update_sql_20200704.txt'  // 输出
const r1 = readline.createInterface({
  input: fs.createReadStream(inputFile),
})

var result = []
function readOneLine(line) {
  let [ address, lat, lng ] = line.split(',') || []
  let oneItem = { address, lat, lng }
  result.push(oneItem)
}

function endLines() {
  result = result.map(item => {
    return `
      UPDATE dsc_order_info
      SET lat = ${item.lat}, lng = ${item.lng}
      WHERE address = ${item.address}\r\n
    `
  })

  fs.writeFileSync(outputFile, result.join(''))
}

r1.on('line', readOneLine)
r1.on('close', endLines)