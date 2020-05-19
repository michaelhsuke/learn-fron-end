var str = 'aa'
var strArr = str.split('')
var chars = []  // 记录已经统计到的去重的字符
var stat = []  // 记录对应的个数
var index = -1  // 添加指针标记当前统计字符位置
var pre = null
for (var cur of strArr) {
  if (pre && pre === cur) {  // 上一个字符与该字符相同
    stat[index] += 1
  } else { 
    chars[++index] = cur
    stat[index] = 1
    pre = cur
  }
}
console.log(chars)
console.log(stat)

// 宽度固定 高度不同 按钮 
