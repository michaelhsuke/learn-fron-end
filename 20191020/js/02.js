console.log(a, b, c);//
var a = 10,
    b = 10,
    c = 10;

function fn(a) {
    console.log(a, b, c);
    var b = a = c = 100;
    console.log(a, b, c);
}

fn(10, 20);
console.log(a, b, c);