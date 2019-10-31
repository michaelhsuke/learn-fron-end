var str1 = `<div class="aa"><div class="manual-head">一、家用网络设备状态检查</div><div class="manual-subhead">1.光猫状态检查：2222</div><div class="manual-content">正常情况下，光猫上POWER灯长亮，PON灯常亮，LAN灯闪，LOS的步伐熄灭</div></div>`
var str2 = `<div class="aa"><div class="manual-head">一、家用网络设备状态检查</div><div class="manual-subhead">1.光猫状态检查：2222</div><div 
class="manual-content">正常情况下，光猫上POWER灯长亮，PON灯常亮，LAN灯闪，LOS的步伐熄灭</div></div>`
// console.log(str1.length)
// console.log(str2.length)
// for (let i of str1) {
//   console.log(i)
// }
let len = str1.length > str2.length ? str1.length : str2.length
for (let i = 0; i < len; i++) {
  if (str1[i] !== str2[i]) {
    console.log(i, str1[i], str2[i])
    break
  }
}

console.log(str1.charCodeAt(20))
console.log(str2.charCodeAt(20))