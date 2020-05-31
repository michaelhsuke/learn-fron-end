var urls = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const limit = 5;

// 主函数
function sendRequest(urls, limit, callback) {
  function _send(urls) {
    return fetch(urls.shift())
      .finally(() => {
        if (urls.length) {
          return _send(urls)
        }
      })
  }
  let asyncList = [];
  while (limit--) {
    asyncList.push(_send(urls));
  }
  return Promise.all(asyncList).then(callback);
}

sendRequest(urls, limit, function () {
  console.log('finish')
});