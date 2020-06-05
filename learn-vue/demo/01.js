const VueTemplateCompiler = require('vue-template-compiler')
// console.log(VueTemplateCompiler)
const r = VueTemplateCompiler.compile(`<div v-show="true"></div>`)
console.log(r)