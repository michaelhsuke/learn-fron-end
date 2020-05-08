// var dom = new Proxy({}, {
//   get(target, prop) {
//     return function (attrs = {}, ...children) {
//       console.log('prop====', prop)
//       var el = document.createElement(prop)
//       for (var item of Object.keys(attrs)) {
//         el.setAttribute(item, attrs[item])
//       }

//       for (var child of children) {
//         if (child) {
//           if (typeof child === 'string') {
//             child = document.createTextNode(child)
//           }
//           el.appendChild(child)
//         }
//       }
//       return el
//     }
//   }
// })

// const el = dom.div({},
//   'Hello, my name is ',
//   dom.a({ href: '//example.com' }, 'Mark'),
//   '. I like:',
//   dom.ul({},
//     dom.li({}, 'The web'),
//     dom.li({}, 'Food'),
//     dom.li({}, '…actually that\'s it')
//   )
// );
// document.body.appendChild(el)

// const target = Object.defineProperties({}, {
//   foo: {
//     value: 123,
//     writable: false,
//     configurable: true
//   }
// })

// const handler = {
//   get(target, propKey) {
//     return 'abc'
//   }
// }

// var proxy = new Proxy(target, handler)
// // console.log(proxy.foo)

// delete proxy.foo

var obj = {}
Object.defineProperty(obj, 'a', {
  value: 123,
  configurable: false,
  enumerable: true
})

console.log(obj)
delete obj.a
console.log(obj)


