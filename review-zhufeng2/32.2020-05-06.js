var num = '0xC460'
num = num.slice(2).split('').reverse()
var base = 1
var sum = 0
var map = new Map([['A', 10], ['B', 11], ['C', 12], ['D', 13], ['E', 14] , ['F', 15]])
for (var i = 0; i < num.length; i++) {
 var val = num[i]
 if (['A', 'B', 'C', 'D', 'E'].includes(val)) {
     val = map.get(val)
 }

 val = Number(val)
 sum = sum + val * base
 base = base * 16
}
console.log(sum)