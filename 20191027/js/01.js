// url: https://www.jianshu.com/p/a2f02f5e0cc2

// target url: https://c.tb.cn/h.eJdw9a3?sm=6baab

const https = require('https')
const fs = require('fs')
const path = require('path')
const iconv = require('iconv-lite')

let goodsLink = `【儿童三轮车折叠 轻便婴儿手推车1-3-4岁宝宝脚踏车自行车溜娃车】https://c.tb.cn/h.eJdw9a3?sm=6baabf 嚸↑↓擊鏈バ接，再选择瀏覽●噐○咑ぺ鐦；或復zんíゞ这句话₤bcCqYIeVV67₤后咑閞👉綯℡寳👈`
let urlReg = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/g
let result = urlReg.exec(goodsLink)
let goodsUrl
if (result.length) {
  goodsUrl = result[0]
}
console.log(goodsUrl)

https.get(goodsUrl, res => {
  let chunks = [], size = 0
  res.on('data', chunk => {
    // console.log(chunk)
    chunks.push(chunk)
    size += chunk.length
  })
  res.on('end', () => {
    console.log('数据包传输完毕')
    let data = Buffer.concat(chunks, size)
    console.log(data)
    let html = data.toString()
    // console.log(html)
    // createFile(html)
    parseRealUrl(html)

  })
})

const createFile = (data) => {
  let filepath = path.resolve(`${__dirname}/${Date.now()}.html`)
  fs.writeFile(filepath, data, (err) => {
    if (!err) {
      console.log('file created')
    }
  })
}

const parseRealUrl = (html) => {
  let res = urlReg.exec(html)
  console.log(res)
}



// python url regexp: 
// http[s]?://(?:[a-zA-Z]|[0-9]|[$-_@.&+]|[!*\(\),]|(?:%[0-9a-fA-F][0-9a-fA-F]))+
