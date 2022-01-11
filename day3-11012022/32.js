'use strict'

/*Exercise 32 - Reverse a String
Read a string from the user and print it backwards using a loop.*/

var str = 'revers this'
console.log('str:', str.charAt(length))

reversStr(str)
function reversStr(str) {
  var length = str.length
  var reversed = 'rev'
  for (let i = length; length > 0; length--) {
    var char = str.charAt(length)
    reversed += char
  }
  console.log(reversed)
}
