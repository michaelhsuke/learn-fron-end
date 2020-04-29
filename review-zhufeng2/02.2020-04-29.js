// console.log(1 == true) 
// console.log(0 == true) 

console.log(null == undefined)
console.log(null === undefined)
console.log(1 == null)
console.log(Number([]))
console.log(Number(![]))
console.log([] == true)
console.log(![] == true)

function renderAuthorize(Authorized) {
  return function (currentAuthority) {
    if (currentAuthority) {
      if (typeof currentAuthority === 'function') {
      
      }
    }
  }
}