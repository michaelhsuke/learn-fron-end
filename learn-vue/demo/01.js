const VueTemplateCompiler = require('vue-template-compiler')
// console.log(VueTemplateCompiler)
// const r = VueTemplateCompiler.compile(`<div v-x="true"></div>`)
// var r1 = VueTemplateCompiler.compile(`<input v-model="msg"></input>`)
// var r2 = VueTemplateCompiler.compile(`<input type="checkbox" v-model="msg"></input>`) 
// const r = VueTemplateCompiler.compile(`<div v-model="true" @click="onClick" @click.native="nativeClick"></div>`)
// console.log(r1.render)
// console.log(r2.render)

// with (this) {
//   return _c('input',
//     {
//       directives: [{ name: "model", rawName: "v-model", value: (msg), expression: "msg" }],
//       domProps: { "value": (msg) },
//       on: { "input": function ($event) { if ($event.target.composing) return; msg = $event.target.value } }
//     })
// }

const tpl = `<father @change.native="onChange"><div slot="aaaaa">ttttt</div></father>`
const r1 = VueTemplateCompiler.compile(tpl)
console.log(r1.render)

// with (this) {
//   return _c('father',
//     [_c('div',
//       { attrs: { "slot": "aaaaa" }, slot: "aaaaa" },
//       [_v("ttttt")]
//     )])
// }

with (this) {
  return _c('father',
    { nativeOn: { "change": function ($event) { return onChange($event) } } },
    [_c('div', { attrs: { "slot": "aaaaa" }, slot: "aaaaa" }, [_v("ttttt")])])
}