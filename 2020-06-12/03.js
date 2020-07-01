function cacheTool() {
  var _cache = {}

  return {
    set(key, value) {
      _cache[key] = value
    },
    get(key) {
      if (cacheTool.has(key)) {
        return _cache[key]
      }
      
      return null
    },
    has(key) {
      return _cache.hasOwnProperty(key)
    }
  }
}

function validateUserInfo(data, userId) {
  return data && data.id && data.id == userId 
}

const CACHE_PREFIX = '__USER__'
const url = '/api/user'

function getUserById(userId) {
  var key = `${CACHE_PREFIX}${userId}`
  if (cacheTool.has(key)) {
    return cacheTool.get(key)
  }

  fetch(url).then(res => res.json()).then(userData => {
    if (validateUserInfo(userData, userId)) {
      cacheTool.set(key, userData)
    }
  })
}