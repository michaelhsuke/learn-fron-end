const $DB = {
  init() {
    let req = indexedDB.open('hb_geocode')
    req.onupgradeneeded = e => {
      let db = req.result
      // 创建表，表名为geo，key为索引的primary key
      let obStore = db.createObjectStore('geo', {
        keyPath: "latlng"
      })
      obStore.createIndex("address", "address", {
        unique: false
      })
      obStore.createIndex("province", "province", {
        unique: false
      })
      obStore.createIndex("district", "district", {
        unique: false
      })
      obStore.createIndex("street", "street", {
        unique: false
      })
      db.close()
    }

    return req
  },
  add(payload) {
    return new Promise((resolve, reject) => {
      let db = indexedDB.open('hb_geocode')
      db.onsuccess = () => {
        db.result.transaction('geo', 'readwrite')
          .objectStore('geo')
          .add(payload)
        db.result.close()
        resolve()
      }

      db.onerror = e => reject(e)
    })
  },
  get(key) {
    return new Promise((resolve, reject) => {
      let db = indexedDB.open("hb_geocode")
      db.onsuccess = () => {
        let req = db.result.transaction('geo', 'readonly').objectStore('geo').get(key)
        db.result.close()

        req.onsuccess = e => {
          resolve(e.target.result)
        }

        req.onerror = err => {
          reject(err)
        }
      }

      db.onerror = e => {
        reject(e)
      }
    })
  }
}