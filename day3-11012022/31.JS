'use strict'
/*Exercise 31 - Basic String Manipulation
Read a string from the user and print:

Its length.
Its first and last characters.
The string in all uppercase and then, in all lowercase letters.*/

var str1 = 'this is string1'
var str2 = 'this is string2'

strManipulation(str1)
function strManipulation(str) {
  var length = strLength(str)
  var strUpper = str.toUpperCase()
  var strLower = str.toLowerCase()
  var firstChar = str.charAt(0)
  var lastChar = str.charAt(-1)
  console.log(
    'str length is:',
    length,
    'toUpper:',
    strUpper,
    'toLower:',
    strLower,
    'first Char is:',
    firstChar,
    'lastChar is:',
    lastChar
  )
}

// helper function
function strLength(str) {
  var length = 0
  for (let i = 0; i < str.length; i++) {
    length++
  }
  return length
}
