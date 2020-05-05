var p1 = new Promise((resolve) => {
  setTimeout(() => {
    console.log('11111')
    resolve()
  }, 10)
})

var p2 = new Promise((resolve) => {
  setTimeout(() => {
    console.log('22222')
    resolve()
  }, 20)
})
var p3 = Promise.reject(3)

Promise.race([p1, p2, p3]).then(res => {
  console.log(res)
}).catch(err => {
  alert(err)
})


// function test() {
//   this.val = 'ok'
//   var that = this
//   function aaa() {
//     const hello = () => {
//       console.log(this)
//     }
//     hello.bind(that)()
//   }
 
//   aaa()
// }

// new test()