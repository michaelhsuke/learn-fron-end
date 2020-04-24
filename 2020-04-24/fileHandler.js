// const path = '/Users/xuke/projects/js-unicom/woService/woService-www/src/site'
const paths = ['/Users/xuke/projects/js-unicom/woService/woService-www/src/site', '/Users/xuke/projects/js-unicom/wo-activity/src/actPage', '/Users/xuke/projects/js-unicom/vue-wo-activity/src']
var fs = require('fs');
var join = require('path').join;
var reg = /\/actPage\/activity\/index.*\.html\??#([a-zA-Z0-9_\-\%\/\?\#\&]*)([\,\;\'\"\s]*)/g
var count = 0


function handleFile(filepath) {
  let pos = filepath.lastIndexOf('.')
  let ext = filepath.slice(pos)

  if (['.gif', '.png', '.jpg', '.jpeg', '.mp4', '.java'].includes(ext)) {
    return
  }
  try {
    let content = fs.readFileSync(filepath, 'utf8')
    content = content.replace(reg, function (a, b, c) {
      console.log(++count)
      recordMap(b)
      let d = b.replace(/\?/g, '&')
      return `/service/act.html?routeId=${d}${c}`
    })

    fs.writeFileSync(filepath, content)

    return content
  } catch (e) { }
}

function recordMap(route) {
  let key = route.split('?')[0]
  let value = `https://weixin.10010js.com/actPage/activity/index3.html#${key}`
  let path = './file.json'
  try {
    let content = fs.readFileSync(path, 'utf8')
    let obj
    try {
      obj = JSON.parse(content)
    } catch (e) {
      obj = {}
    }

    obj[key] = value
    console.log(value)
    fs.writeFileSync(path, JSON.stringify(obj))
  } catch (e) {

  }

}

let isShow = true
function getJsonFiles(jsonPath) {
  let jsonFiles = [];
  function findJsonFile(path) {
    let files = fs.readdirSync(path);
    files.forEach(function (item, index) {
      let fPath = join(path, item);
      let stat = fs.statSync(fPath);
      if (stat.isDirectory() === true) {
        findJsonFile(fPath);
      }
      if (stat.isFile() === true) {
        jsonFiles.push(fPath);
        handleFile(fPath)
        // console.log(handleFile(fPath))
      }
    });
  }
  findJsonFile(jsonPath);
  let pathArr = jsonPath.split('/')
  fs.writeFileSync(pathArr[pathArr.length - 1], JSON.stringify(jsonFiles))
  console.log(jsonFiles);
}
paths.forEach(path => {
  getJsonFiles(path)
})

// getJsonFiles('/Users/xuke/projects/js-unicom/wo-activity/src/actPage/js/MGM/')
// getJsonFiles('/Users/xuke/projects/js-unicom/wo-activity/src/actPage/js/MGM')


// recordMap('./aaa.txt', 'name', 'xuke')
// recordMap('./aaa.txt', 'age', '222')