const http = require('http')
const url = require('url')
const querystring = require('querystring')
const query = querystring.parse(url.parse(req.url).query)

var handlers = {
  index: {
    index: function (req, res, foo, bar) {
      // console.log('args===', this.arguments)
      // var args = Array.from(this.arguments).slice(2)
      
      res.writeHead(200)
      res.end(foo)
    }
  }
}


http.createServer(function (req, res) {
  if (req.url === '/favicon.ico') {
    res.writeHead(500, {
      'Content-Type': 'text/html; charset=utf-8'
    })
    res.end(null)
    return
  }
  var pathname = url.parse(req.url).pathname
  var paths = pathname.split('/')
  var controller = paths[1] || 'index'
  var action = paths[2] || 'index'
  var args = paths.slice(3)
  var handle = handlers[controller] && handlers[controller][action]
  if (!!handle) {
    handle.apply(null, [req, res].concat(args))
  } else {
    res.writeHead(500, {
      'Content-Type': 'text/html; charset=utf-8'
    })
    res.end('找不到响应控制器')
  }
}).listen(1337, '127.0.0.1')
console.log('Server running at http://127.0.0.1:1337')