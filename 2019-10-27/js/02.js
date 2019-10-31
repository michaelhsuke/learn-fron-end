// url: https://www.jianshu.com/p/a2f02f5e0cc2

// target url: https://c.tb.cn/h.eJdw9a3?sm=6baab

const https = require('https')
const fs = require('fs')
const path = require('path')
const iconv = require('iconv-lite')

let url = 'https://m.tb.cn//assets/scan.js?t=201705231430'

https.get(url, res => {
  let chunks = [], size = 0
  res.on('data', chunk => {
    // console.log(chunk)
    chunks.push(chunk)
    size += chunk.length
  })
  res.on('end', () => {
    console.log('数据包传输完毕')
    let data = iconv.decode(Buffer.concat(chunks, size), 'GBK')
    console.log(data)
    let html = data.toString()
    console.log(html)
    createFile(html, 'js')

  })
})

const createFile = (data, ext = 'html') => {
  let filepath = path.resolve(`${__dirname}/${Date.now()}.${ext}`)
  fs.writeFile(filepath, data, (err) => {
    if (!err) {
      console.log('file created')
    }
  })
}



// python url regexp: 
// http[s]?://(?:[a-zA-Z]|[0-9]|[$-_@.&+]|[!*\(\),]|(?:%[0-9a-fA-F][0-9a-fA-F]))+
