var flowMeal = [
  {
    "resourceUse": "0",
    "resourceType": "01",
    "itemName": "国内流量包结转流量",
    "resourceTotal": "0",
    "resourceLeft": "0.0",
    "productId": "33001201",
    "productName": "叠加包转结流量",
    "elemType": "3"
  },
  {
    "itemName": "5元1GB国内闲时流量月包-后付费",
    "resourceType": "20",
    "resourceTotal": "1024.0",
    "resourceUse": "1024.0",
    "elemType": "3",
    "productId": "99132266",
    "resourceLeft": "0.0",
    "productName": "5元1GB国内闲时流量月包"
  },
  {
    "resourceType": "01",
    "itemName": "5元100MB国内流量月包-后付费 ",
    "resourceTotal": "100.0",
    "productName": "5元100MB国内流量月包-后付费 ",
    "elemType": "3",
    "resourceLeft": "100.0",
    "resourceUse": "0.0",
    "productId": "99132293"
  },
  {
    "resourceTotal": "40960.0",
    "productId": "57030424",
    "resourceType": "13",
    "resourceUse": "5128.08",
    "itemName": "畅视0元",
    "elemType": "3",
    "productName": "畅视0元",
    "resourceLeft": "35831.92"
  },
  {
    "itemName": "畅越冰激凌套餐198元:国内流量",
    "resourceLeft": "9518384.77",
    "resourceTotal": "9536743.16",
    "elemType": "3",
    "resourceType": "01",
    "productId": "57000149",
    "productName": "畅越冰激凌套餐198元",
    "resourceUse": "18358.39"
  }
]


function isZero(val) {
  return val == 0
}


function isAllZero(item) {
  let flag = true
  const keys = ['resourceLeft', 'resourceTotal', 'resourceUse']
  for (let i = 0, len = keys.length; i < len; i++) {
    let curKey = keys[i]
    if (!isZero(item[curKey])) {
      flag = false
      break
    }
  }

  return flag
}

let result = []


flowMeal = flowMeal.filter(item => {
  return !isAllZero(item)
})

console.log(flowMeal)