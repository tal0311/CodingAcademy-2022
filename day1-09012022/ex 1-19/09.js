/*Exercise 9 - Absolute Value
Read two positive numbers from the user.

Calculate the difference between them (the absolute value).

First, check that the input values are numbers (try googling something like ‘javascript check if number’)
Print the inputs and the absolute difference between them to the console.
If the difference is smaller than both input values, print a message to the console saying that those numbers are relatively close.
It should look something like this –

num1 = 5, num2 = 9, diff = 4 (numbers are relatively close!)

num1 = 15, num2 = 89, diff = 74*/

var num1 = +prompt('log your first number')
var num2 = +prompt('log your second number')
var diff
if (
  !isNaN(num1) &&
  typeof num1 === 'number' &&
  !isNaN(num2) &&
  typeof num2 === 'number'
) {
  if (num1 > num2) {
    diff = num1 - num2
  } else {
    diff = num2 - num1
  }

  console.log(diff > num1)
  if (diff < num1 && diff < num2) {
    console.log('numbers are relatively close')
  } else {
    console.log('numbers are relatively far')
  }
} else {
  console.log('please use numbers only')
}





