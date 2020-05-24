function foo(a) {
  var b = 2;
  function c() {}
  var d = function() {};

  b = 3;

}

foo(1);

var AO = {
  arguments: {
    a: 1,
    length: 1
  },
  a: 1,
  b: undefined,
  c: () => {},
  d: undefined

}