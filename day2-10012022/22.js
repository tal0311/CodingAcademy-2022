'use strict'
/*Exercise 22 - myPow()
Write a function named myPow() which receives 2 parameters: a base (n), and an exponent (exp) and returns nexp

Sample unit testing:

INPUT: 2, 3

EXPECTED: 8

ACTUAL: 8*/

var res = myPow(2, 2)
console.log('res:', res)

function myPow(base, exp) {
  var expCount = 2

  var pow = base
  if (exp > 1) {
    while (expCount < base) {
      pow *= exp
      expCount++
    }
  }
  return pow
}
