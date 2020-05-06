var p1 = Promise.resolve(1)
var p2 = Promise.reject(2)
var p3 = Promise.resolve(3)

// Promise.all([p1, p2, p3]).then(res => {
//   console.log(`res = ${res}`)
// }).catch(err => {
//   console.log( `err = ${err}`)
// })

Promise.all([p1, p2, p3].map(p => p.catch(e => { console.log(`pe=${e}`); return 100 })))
  .then(res => {
    console.log(`map res=${res}`);
    for (let i = 0; i < res.length; ++i) {
      if (res[i]) {
        console.log(`map res[${i}]=${res[i]}`);
      }
    }
  })
  .catch(err => { console.log(`map err=${err}`) });