var ans = ''
var indexs = []
var minimumLengthEncoding = function (words) {
  if (!words.length) {
    return 0
  }
  ans += words[0]
  indexs[0] = 0

  for (var i = 1, curWord; curWord = words[i]; i++) {
    ans = compareTwoWords(ans, curWord, i)
  }
  console.log(ans)
  return ans.length
};

function compareTwoWords(ans, curWord, idx) {
  var arr = ans.split('#')
  var lastWord = arr[arr.length - 1]
  var i = 0
  var j = 0

  while (i < lastWord.length) {
    while (i < lastWord.length && lastWord[i] != curWord[0]) {
      i++
    }
    var mark = i
    while (i < lastWord.length && j < curWord.length && lastWord[i] == curWord[j]) {
      i++; j++;
    }

    if (i >= lastWord.length) {
      indexs[idx] = mark
      ans = ans + curWord.slice(lastWord.length - 1 - mark) + '#'
      return ans
    }
  }

  if (i >= lastWord.length) {
    indexs[idx] = ans.length + 1
    ans[ans.length - 1] === '#' ? null : ans += '#'
    ans = ans + curWord
    return ans
  }

}

var words = ['time', 'me', 'bell']
console.log(minimumLengthEncoding(words))