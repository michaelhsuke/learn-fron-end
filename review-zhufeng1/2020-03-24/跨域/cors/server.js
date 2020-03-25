const express = require('express')
const session = require('express-session')
app = express()

app.listen(9000, () => {
  console.log('port is 9000')
})

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:8000')
  // res.header('Access-Control-Allow-Credentials', true)
  // res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length,Authorization,Accept,X-Requested-With')
  res.header('Access-Control-Allow-Methods', "PUT,GET,DELETE,HEAD,OPTIONS")

  // if (req.method === 'OPTIONS') {
  //   res.send('OK!')
  //   return
  // }
  next()
})

app.use(session({
  secret: 'ZFPX',
  saveUninitialized: false,
  resave: false,
  cookie: { maxAge: 1000 * 60 * 60 * 24 * 3 }
}))

app.post('/queryInfo', (req, res) => {
  req.session.ID = 0
  res.send({
    code: 0,
    msg: 'my name is zhufeng'
  })
})
