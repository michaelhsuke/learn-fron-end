var a = { name: "hello" }, b = { name: "hi" }
function exchange(a, b) {
  var c = b; b = a; a = c;
  a.name = a.name + "1";
  b.name = b.name + "2";
  console.info(a.name, b.name);
}
exchange(a, b); 
console.info(a.name, b.name);