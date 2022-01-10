'use strict'

/*Exercise 26 - Ascending Random Numbers
Write a program which generates 10 ascending random numbers (each number is greater than the previously generated number).

The first number n , should be in the range 0 – 1000,

and each subsequent number, should be in the range (n+1) – (n+1000)*/

var res = getRandomAscending()
console.log('res:', res)
function getRandomAscending() {
  var count = 0
  var startNumber = 1000
  var randomNum = 0
  while (count < 10) {
    randomNum = Math.floor(Math.random() * startNumber)
    console.log('randomNum:', randomNum)
    startNumber += randomNum + 1
    count++
  }
  return randomNum
}
