function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

let result = _interopRequireDefault({
  __esModule: true,
  foo: 'bar'
})

let result2 = _interopRequireDefault({
  foo: 'bar'
})

console.log(result)
console.log(result2)