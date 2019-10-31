// url: https://www.jianshu.com/p/a2f02f5e0cc2

// target url: https://c.tb.cn/h.eJdw9a3?sm=6baab
// http://www.taokouling.com/api/tkljm/
// https://cuiqingcai.com/5657.html
// https://github.com/shengqiangzhang/examples-of-web-crawlers

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
    // console.log(data)
    let html = data.toString()
    // console.log(html)
    // createFile(html)
    let res = parseRealUrl(html)
    if (res.result) {
      fetchPage(res.url)
    }
  })
})

function fetchPage(url) {
  https.get(url, res => {
    let chunks = [], size = 0
    res.on('data', chunk => {
      chunks.push(chunk)
      size += chunk.length
    })
    res.on('end', () => {
      console.log('数据包传输完毕')
      let data = Buffer.concat(chunks, size)
      let html = data.toString()
      createFile(html)
    })
  })
}

const createFile = (data) => {
  let filepath = path.resolve(`${__dirname}/${Date.now()}.html`)
  fs.writeFile(filepath, data, (err) => {
    if (!err) {
      console.log('file created')
    }
  })
}

// var realUrlExp = /var%s*url%s*=(.+)?/g

const parseRealUrl = (html) => {
  let index = html.indexOf('var')
  while(html && index > -1) {
    html = html.slice(index + 3)
    const { result, url, data } = isTargetVar(html, 'url')
    if (result) {
      return { result, url }

    } else {
      html = data
      index = html.indexOf('var')
    }
  }
  return { result: false }
}

function isOkLetter(char) {
  return /\w/.test(char)
}

function isTargetVar(data, varName) {
  let index = 0, url
  while(!/\w/.test(data[index])) {
    index++
  }
  data = data.slice(index)
  // console.log(data)
  let dataArr = data.split('=')
  if (dataArr.length) {
    let oneVarName = dataArr.shift().trim()
    if (oneVarName == varName) {  
      let url = findRealUrl(dataArr.join('='))
      return { result: true, url }
    } else {
      
      data = dataArr.join('=')
      return { result: false, data}
    }
  }

  return { result: false }
}

function findRealUrl(data) {
  let index = 0
  let result = ''
  while(!isOkLetter(data[index])) {
    index++
  }

  console.log('aaaa', data[index])
  while(/[a-zA-Z0-9\:\&\%\#\?\/\.\=\@\_]/.test(data[index])) {
    result += data[index++]
  }
  return result
}





// python url regexp: 
// http[s]?://(?:[a-zA-Z]|[0-9]|[$-_@.&+]|[!*\(\),]|(?:%[0-9a-fA-F][0-9a-fA-F]))+
