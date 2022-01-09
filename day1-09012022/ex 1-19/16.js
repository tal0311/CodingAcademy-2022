/*Exercise 16 - Even and Odd
Write a function named isEven(num) which receives a number, and returns trueif the number is even, and falseif it is odd.*/

var userInputNumber = +prompt('log a number')

var isEven = isEven(userInputNumber)
console.log('isEven:', isEven)
function isEven(number) {
  if (number % 2 === 0) {
    return true
  } else {
    return false
  }
}
