const express = require('express')
const app = express()
app.use(express.static(__dirname))
app.listen(3000, () => {
  console.log('%c server started at 3000', 'color: #f00;')
})