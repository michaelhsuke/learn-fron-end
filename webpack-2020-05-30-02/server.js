const express = require('express')
const app = express()

app.get('/api/user', (req, res) => {
  res.json({ name: 'xuke1028' })
})

app.listen(3000, () => {
  console.log('liste at port 3000')
})