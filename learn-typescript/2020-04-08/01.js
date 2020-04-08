// interface initA {
//   inita: number
// }
// const str: any = "aaa" | "bbbb" | "cccc";
var data = {
    a: 3,
    hello: "world"
};
function get(o, name) {
    console.log(o[name]);
    return o[name];
}
get(data, "a");
