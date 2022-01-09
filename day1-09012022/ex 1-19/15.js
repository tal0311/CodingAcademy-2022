/*Exercise 15 - Sum of two Numbers
Write a function which receives two numbers and returns their sum*/

var num1 = +prompt('log first number')
var num2 = +prompt('log second number')

var sum = sum(num1, num2)
console.log('sum:', sum)

function sum(num1, num2) {
  sum = num1 + num2
  return sum
}
