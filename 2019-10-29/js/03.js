var MongoClient = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/'
const fs = require('fs')


MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
  if (err) {
    throw err
  }

  var dbo = db.db('taobao')
  dbo.collection('my_products').find({}).toArray(function (err, result) {
    if (err) {
      throw err
    }
    fs.writeFileSync('./02.txt', JSON.stringify(result))
    console.log(result)
    db.close()
  })

})