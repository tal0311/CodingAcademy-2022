/*Exercise 17 - Get the Bigger Num
Write a function named getBigger which receives two numbers and returns the bigger one.*/

var num1 = prompt('log a number')
var num2 = prompt('log second number')

var biggerNum = getBiggerNumber(num1, num2)
console.log('biggerNum:', biggerNum)
function getBiggerNumber(num1, num2) {
  if (num1 > num2) {
    return num1 + ' is bigger then ' + num2
  } else {
    return num2 + ' is bigger then ' + num1
  }
}
