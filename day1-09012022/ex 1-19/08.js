/*Exercise 8 - The Smallest of Three Numbers
Read three numbers from the user and print the smallest one.*/

console.log('ok')

var num1 = +prompt('first number?')
var num2 = +prompt('second number?')
var num3 = +prompt('third number?')

var smallest
if (num1 > num3 && num2 > num3) {
  smallest = num3
  console.log('smallest number is:', smallest)
} else if (num2 > num1 && num3 > num2) {
  smallest = num1
  console.log('smallest number is:', smallest)
} else {
  smallest = num2
  console.log('smallest number is:', smallest)
}
