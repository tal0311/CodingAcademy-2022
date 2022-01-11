'use strict'
/*Exercise 30 - Print the Longer String
Read two names from the user and print the longer one.*/

var str1 = 'jhgfafesdjghaSFD'
var str2 = 'jhgfafjghaSFDhjkgdslfkhekdlswhAS'

var res = compareStrLength(str1, str2)
console.log('res:', res)
function compareStrLength(str1, str2) {
  return strLength(str1) > strLength(str2) ? str1 : str2
}

// helper function
function strLength(str) {
  var length = 0
  for (let i = 0; i < str.length; i++) {
    length++
  }
  return length
}
