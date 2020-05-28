const fetch = require('node-fetch')

function sendRequest(urls, max, callback) {
  var runQueue = [];
  var waitQueue = urls;
  var result = {
    // url { maxCount: 0, status, result, reason }
  };
  console.log(waitQueue.length)
  var curRequestCount = 0;
  while (waitQueue.length) {
    if (curRequestCount < max) {
      var pickOne = waitQueue.splice(0, 1);
      console.log(pickOne)
      if (pickOne) {
        curRequestCount++;
        fetch(pickOne)
          .then((res) => {
            console.log(res)
            result[url] = {
              status: "ok",
              result: res,
            };
            curRequestCount--;
          })
          .catch((reason) => {
            console.log(reason)
            result[url] = result[url] || {};
            const { status, requestCount } = result;
            if (status === "fail") {
              if (requestCount <= 3) {
                result[url]["requestCount"]++;
                waitQueue.push(url); // 放到队列继续请求
              } else {
                curRequestCount--;
              }
            }
          });
      }
    }
  }
  console.log(result)
  callback()
}

var urls = [
  'http://t8.baidu.com/it/u=3571592872,3353494284&fm=79&app=86&f=JPEG?w=1200&h=1290',
  'http://t7.baidu.com/it/u=3616242789,1098670747&fm=79&app=86&f=JPEG?w=900&h=1350',
  'http://t8.baidu.com/it/u=1484500186,1503043093&fm=79&app=86&f=JPEG?w=1280&h=853',
]

sendRequest(urls, 2, () => {
  console.log('请求完毕')
})


// fetch(urls[0]).then(res => {
//   console.log('aaa')
//   console.log(res)
// }).catch(err => {
//   console.log('bbb')
// })