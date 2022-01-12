'use strict'
/*Exercise 38 - Bigger than 100
Implement a function named biggerThan100. It receives an array of numbers and returns a new array containing only the numbers which are greater than 100.*/

var arr = [9, 8, 7, 90, 80, 1000, 876, 34, 789]

var res = biggerThan100()
console.log('res:', res)
function biggerThan100() {
  var biggerThenNums = []

  for (let i = 0; i < arr.length; i++) {
    var num = arr[i]
    if (num >= 100) biggerThenNums.push(num)
  }
  return biggerThenNums
}
