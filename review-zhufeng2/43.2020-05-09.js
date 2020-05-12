const fs = require('fs')
const fetch = require('node-fetch')
// var data = ["https://m.jf.10010.com/cms/jf-res/mobile/images/fourth/person_item_01.png", "https://m.jf.10010.com/cms/jf-res/mobile/images/fourth/person_item_02.png", "https://m.jf.10010.com/cms/jf-res/mobile/images/fourth/person_item_03.png", "https://m.jf.10010.com/cms/jf-res/mobile/images/fourth/person_item_04.png", "https://m.jf.10010.com/cms/jf-res/mobile/images/fourth/person_item_05.png", "https://m.jf.10010.com/cms/jf-res/mobile/images/fourth/person_item_06.png", "https://m.jf.10010.com/cms/jf-res/mobile/images/fourth/person_item_07.png", "https://m.jf.10010.com/cms/jf-res/mobile/images/fourth/person_item_08.png", "https://m.jf.10010.com/cms/jf-res/mobile/images/fourth/person_item_09.png"]
var data = ["https://m.jf.10010.com/cms/jf-res/mobile/images/fourth/enter_01.png?resVer=20200429183902", "https://m.jf.10010.com/cms/jf-res/mobile/images/fourth/enter_02.png?resVer=20200429183902", "https://m.jf.10010.com/cms/jf-res/mobile/images/fourth/enter_03.png?resVer=20200429183902", "https://m.jf.10010.com/cms/jf-res/mobile/images/fourth/enter_04.png?resVer=20200429183902", "https://m.jf.10010.com/cms/jf-res/mobile/images/fourth/enter_05.png?resVer=20200429183902", "https://m.jf.10010.com/cms/jf-res/mobile/images/fourth/enter_06.png?resVer=20200429183902", "https://m.jf.10010.com/cms/jf-res/mobile/images/fourth/enter_07.png?resVer=20200429183902", "https://m.jf.10010.com/cms/jf-res/mobile/images/fourth/enter_08.png?resVer=20200429183902"]
data = data.map(item => {
  return item.split('?')[0]
})

function getFileName(filepath) {
  var arr = filepath.split('/')
  return arr[arr.length - 1]
}

var promiseArr = []

async function handle() {
  for (var item of data) {
    var filename = getFileName(item)
    promiseArr.push(fetch(item))
    await fetch(item).then(res => {
      const dest = fs.createWriteStream(`./file/${filename}`)
      res.body.pipe(dest)
    })
  }
}

handle()

