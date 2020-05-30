console.log('home');
import 'bootstrap'

console.log(DEV)

class Log {
  constructor() {
    console.log('出错了')
  }
}

var log = new Log()

var xhr = new XMLHttpRequest()
xhr.open('GET', '/user', true)
xhr.onload = function () {
  console.log(xhr.response)
}
xhr.send()

