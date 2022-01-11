'use strict'
/*Exercise 34 - myIndexOf()
Implement a function named myIndexOf(str, searchStr) which receives two strings.

The function returns the index of the second string within the first, or -1 if it wasn’t found (do not use the built-in indexOf()function… ).*/

var str1 = 'first string' //return index of this
var str2 = 'h'

var res = myIndexOf(str1, str2)
console.log('res:', res)

function myIndexOf(str, searchStr) {
  console.log(str, searchStr)
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < searchStr.length; j++) {
      if (searchStr.charAt(j) === str.charAt(i)) {
        return i
      } else return -1
    }
  }
}
