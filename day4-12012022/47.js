'use strict'

/*Implement your own version of the built-in javaScript split function - mySplit(str, sep).

Test it with different types of strings and separators:

You can try – 'Japan,Russia,Sweden' or '1-800-652-0198'

You can assume that the separator (delimiter) is a single character.

BONUS: don’t assume that, e.g: 'A|||B|||C'*/

var str = 'Japan,Russia,Sweden'
// console.log(str.substring(6, str.indexOf(6, ',')))

var sep = ','

console.log(mySplit(str, sep))
function mySplit(str, sep) {
  str += sep

  var sepIdx = 0
  var arr = []
  for (let i = 0; i < str.length; i++) {
    var char = str[i]

    if (char === sep) {
      var word = str.substring(i, sepIdx)
      arr.push(word)
      sepIdx = i + 1
    }
  }

  return arr
}
