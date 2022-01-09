// Exercise 5 - Number from Digits
// Read 3 digits from the user, join them to one number and print it.

// For example: if the user enters the digits 3, 2 and 6, we should store them in a variable holding the value '326' and then print that variable to the console.

// BONUS: In this case, working with strings is easier. try solving the task while using numeric variables.

// WITH STRINGS
// var digit1 = prompt('log first digit')
// var digit2 = prompt('log second digit')
// var digit3 = prompt('log third digit')

// var combined = digit1 + digit2 + digit3
// console.log('combined:', combined)

var num1 = +prompt('log first digit')
var num2 = +prompt('log second digit')
var num3 = +prompt('log third digit')

var numCombined = num1.toString() + num2 + num3
console.log('numCombined:', numCombined)
