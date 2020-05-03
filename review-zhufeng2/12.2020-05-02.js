function isOk(s) {
  s = s + ''
  for (var i = 0, len = s.length; i < len; i++) {
      if (s.indexOf(s.charAt(i), i+1) > -1) {
          return false
      }
  }

  return true
}

var lengthOfLongestSubstring = function(s) {
  for (var len = s.length; len >= 1; len--) {
      for (var i = 0; i <= s.length - len; i++) {
          var newStr = s.substr(i, len)
          if (isOk(newStr)) {
              return len 
          }
      }
  }
  return 0
};

// console.log(lengthOfLongestSubstring("pwwkew"))


var twoSum = function(nums, target) {
  var rec = {}
  nums.forEach((key, index) => { rec[key] = index })
  console.log(rec)
  for (var i = 0, n = target / 2; i <= n; i++) {
      var key1 = i
      var key2 = target - key1
      console.log(key1, key2)
      if (rec[key1] !== undefined && rec[key2] !== undefined) {
          return [rec[key1], rec[key2]]
      }
  }
};

// console.log(twoSum([2, 7, 11, 15], 9))


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function parseNum(head) {
  var result = []
  while(head) {
      result.push(head.val)
      head = head.next
  }
  return Number(result.reverse().join(''))
}

var addTwoNumbers = function(l1, l2) {
  var num1 = parseNum(l1)
  var num2 = parseNum(l2)
  var res = num1 + num2 + ''
  res =  res.split('').reverse()
  var head = null
  var prev = null
  for (var i = 0; i < res.length; i++) {
      var newNode = new ListNode(Number(res[i]))
      if (head === null) {
          head = newNode
      } else {
          prev.next = newNode
      }
      prev = newNode
  }

  return head

};


var nextGreaterElement = function(n) {
  var arr = []
  while(n) {
      arr.push(n % 10)
      n = Math.floor(n / 10)
      console.log(n)
  }
  console.log(arr)
  var found = false
  for (var i = 0, len = arr.length; i < len - 1; i++) {
      if (arr[i] > arr[i+1]) {
          var tmp = arr[i]
          arr[i] = arr[i + 1]
          arr[i + 1] = tmp
          found = true
          break
      }
  }

  if (!found) {
      return -1
  }

  console.log(arr)

  var ans = 0
  for (var i = len - 1; i >= 0; i--) {
      ans = ans * 10 + arr[i]
  }
  return ans 
};

console.log(nextGreaterElement(12))