const recast = require('recast')
const { variableDeclaration, variableDeclarator, functionExpression } = recast.types.builders
// console.log(recast)
const code = `
  function add(a, b) {
    return a + b
  }
`

const ast = recast.parse(code)
const add = ast.program.body[0]

ast.program.body[0] = variableDeclaration("const", [
  variableDeclarator(add.id, functionExpression(
    null, // Anonymize the function expression.
    add.params,
    add.body
  ))
]);

const output = recast.print(ast).code;
console.log(output)

// console.log(add.params)