'use strict'

/*Exercise 25 - getRandomInt()
Write A function named getRandomInt(min, max). The function should generate a random integer between min and up to, but not including, max.

Tip: use Math.Random() and Math.Floor().

After you've worked it out, read this page and look at the implementation of the getRandomInt() function.*/

console.log(getRandomINt(100, 200))

function getRandomINt(min, max) {
  var randomNUmber = Math.floor(Math.random() * (max - min) + min)
  return randomNUmber
}
