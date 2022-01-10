'use strict'

/*Exercise 24 - myAbs()
Try playing around with the function Math.abs() and read its documentation on MDN. Implement a function called myAbs(), which mimics the behavior of Math.abs().*/

var num1 = 12
var num2 = 8

var res = myAbs(num1, num2)
console.log('res:', res)
function myAbs(num1, num2) {
  var abs = num1 - num2
  return abs > 0 ? abs : -abs
}
