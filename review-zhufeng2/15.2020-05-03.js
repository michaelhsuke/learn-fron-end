var longestPalindrome = function (s) {
  if (!s || !s.length) {
    return ''
  }
  var origin = s
  var reversed = s.split('').reverse().join('')
  var n = s.length
  var a = []
  var maxLen = 0
  var maxEnd = null

  console.log(origin, reversed)

  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      if (origin[i] == reversed[j]) {
        if (i == 0 || j == 0) {
          a[i] = a[i] || []
          a[i][j] = 1
        } else {
          a[i] = a[i] || []
          a[i][j] = a[i - 1][j - 1] + 1
        }
        if (a[i][j] > maxLen && (i - a[i][j] + 1 == n - j - 1)) {
          maxLen = a[i][j]
          maxEnd = i
        }
      } else {
        a[i] = a[i] || []
        a[i][j] = 0
      }
    }
  }

  console.log(a)

  return s.substr(maxEnd - maxLen + 1, maxLen)

};

console.log(longestPalindrome('babad'))