const express = require('express')
app = express()

app.listen(9000, () => {
  console.log('port is 9000')
})

app.use(express.static('./static'))

app.get('/queryInfo', (req, res) => {
  const fn = req.query.cb
  data = {
    code: 0,
    msg: 'my name is zhufeng'
  }
  res.send(`${fn}(${JSON.stringify(data)})`)
})
