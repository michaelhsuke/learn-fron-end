// const fetch = require('node-fetch')

// function sendRequest(urls, max, callback) {
//   const len = urls.length;
//   let idx = 0;
//   let counter = 0;

//   function _request() {
//     while (idx < len && max > 0) {
//       fetch(urls[idx++]).finally(() => {
//         console.log('aaaaa')
//         max++;
//         counter++;
//         if (counter === len) {
//           return callback();
//         } else {
//           _request();
//         }
//       });
//     }
//   }
//   _request();
// }

// const urls = [
//   'https://weixin.10010js.com/actPage/images/jsUnicomMiniProgram/default.png',
//   'https://weixin.10010js.com/actPage/images/jsUnicomMiniProgram/market-ele_titleBg.png',
//   'https://weixin.10010js.com/actPage/images/jsUnicomMiniProgram/avatar.png',
//   'https://weixin.10010js.com/actPage/images/jsUnicomMiniProgram/vip.png',
//   'https://weixin.10010js.com/actPage/images/jsUnicomMiniProgram/gift.png',
//   'https://weixin.10010js.com/actPage/images/jsUnicomMiniProgram/payBill.png',
//   'https://weixin.10010js.com/actPage/images/jsUnicomMiniProgram/checkOrder.png',
//   'https://weixin.10010js.com/actPage/images/jsUnicomMiniProgram/arrow_up.png',
//   'https://weixin.10010js.com/actPage/images/jsUnicomMiniProgram/arrow_down.png',

// ]

// sendRequest(urls, 3, () => {
//   console.log('请求完成')
// })

var urls = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const limit = 6;

function sendRequest(urls, limit, callback) {
  function _send(urls) {
    const url = urls.shift();
    if (url) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log(`当前发送：${url}`);
          resolve(url);
        }, 1000)
      })
        .finally(() => {
          if (urls.length > 0) {
            return _send(urls)
          }
        })
    }

  }
  let asyncList = [];
  while (limit--) {
    asyncList.push(_send(urls));
  }
  return Promise.all(asyncList).then(callback);
}

sendRequest(urls, limit, function () {
  console.log('all urls sended!')
});