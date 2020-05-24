// var a = {}, b = '123', c = 123;
// a[b] = 'b';
// a[c] = 'c';
// console.log(a[b]);

// var a = {}, b = Symbol('123'), c = Symbol('123');
// a[b] = 'b';
// a[c] = 'c';
// console.log(a);

// 'abc' --> {value: 'abc'}
// '[abc[bcd[def]]]' --> {value: 'abc', children: {value: 'bcd', children: {value: 'def'}}

function normalize(text) {
  var result = {}
  var str = ''
  var p = result
  if (text[0] === '[' && text[text.length - 1] === ']') {
    text = text.slice(1, text.length - 1)
  }
  for (let i of text) {
    console.log(str)
    switch (i) {
      case '[':
        p['value'] = str
        p.children = {}
        p = p.children
        str = ''
        break;
      case ']':
        break;
      default:
        str += i
    }
  }
  if (str) {
    p['value'] = str
  }
  return result
}

// console.log(normalize('abc'))
console.log(JSON.stringify(normalize('[abc[bcd[def[aaaa]]]]')))