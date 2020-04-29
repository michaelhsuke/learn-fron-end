// 对象与其他类型的比较
var obj = { a: 1 }
var arr = [1, 2, 3]
// 数字
// console.log(obj == 1)
// console.log(obj == 0)
// console.log(obj == null)
// console.log(isNaN(obj))
// console.log(null == 0)

// console.log(obj == true)
// console.log(obj == false)
// console.log(Number(obj))

// console.log(Number(undefined))
// console.log(Number(null))
// console.log(null == undefined)

// console.log(Boolean(0))
// console.log(Boolean(undefined))
// console.log(Boolean(null))
// console.log(Boolean(NaN))
// console.log(Boolean(''))

// 字符串比较
// console.log('1' == 1)
// console.log('aaaa' == true)
// console.log(1 == true)
// console.log(100 == true)
// console.log(NaN == false)

// var arr = []
// arr.push()  // 入栈
// arr.pop()  // 出栈
// arr.shift()  // 出队列
// arr.unshift()  // 入队首
// arr.reverse()  // 逆序
// arr.sort()  // 排序
// arr.splice()  // 移除

var str = 'hello world'
// console.log(str.length)
// str[str.length - 1] = '!'
// str.concat('ok')
// console.log(str)
// console.log(str.reverse(), str)
// str[0] = 'H'
// console.log(str)

// console.log(str.slice(0, 2))
// console.log(str.substr(1, 2))
// console.log(str.substring(1, 3));
// console.log(str.slice(-2, -1));
// console.log(str)

// console.log(str.split(/\b/g, 2))

var b = '1234567890'
var reg = /\d{1,3}(?=(\d{3})+$)/g
// console.log(b.replace(reg, '$&,'))

// console.log(b.match(reg))
// console.log(b.charAt(0));
// console.log(b.charCodeAt(2));
// console.log(String.fromCharCode(36));

// var str = 'abc'
// console.log(str.toUpperCase())

var template = ''
var now = '2020-04-29 21:45:36'
// now.replace(/\d+/g, function(...args) {
//   console.log(args)
// })
var template = '{0}年{1}月{2}日 {3}时{4}分{5}秒'
String.prototype.formatDate = function (template) {
  template = template || '{0}年{1}月{2}日 {3}时{4}分{5}秒'
  var numArgs = this.match(/\d+/g)
  return template.replace(/\{(\d+)\}/g, function (a, b) {
    b = parseInt(b.trim()) 
    var num = parseInt(numArgs[b]) || 0
    return num < 10 ? '0' + num : num
  })
}

console.log(now.formatDate())

var url = 'https://rm.api.weibo.com/2/remind/push_count.json?trim_null=1&with_dm_group=true&with_settings=1&exclude_attitude=1&with_common_cmt=1&with_comment_attitude=1&with_common_attitude=1&with_moments=1&with_dm_unread=1&msgbox=true&with_page_group=1&with_chat_group=1&with_chat_group_notice=1&_pid=1&count=1&source=351354573&status_type=0&callback=STK_15881686430787'

var reg = /([^?&=]+)(?:=([^?&=]*)?)/g
var params = {}
url.replace(reg, (a, b, c) => {
  params[b] = c
})
console.log(params)

var reg = /\d{1,3}(?=(\d{3})+$)/g
var numStr = '12345678912311'
console.log(numStr.replace(reg, '$&,'))


