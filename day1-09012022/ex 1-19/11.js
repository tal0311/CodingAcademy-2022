/*Exercise 11 - Bank System
Initialize a variable named currBalance with the value: 1000
Initialize a constant named PIN with the value: '0796'
Prompt the user to enter a secret pin code.
If the user entered the correct pin code, ask him how much he would like to withdraw. Print a nice message with the new balance.
If the pin code was wrong, alert the user with a different message, and don’t allow him make a withdrawal.
Add a feature: don’t let the user withdraw more than he has in his account.*/

var currentBalance = 1000
const PIN = '0796'
// F2 to change all occurrence
var enteredPin = prompt('Enter your pin number')

if (enteredPin === PIN) {
  var withdrawAmount = +prompt('how much you would like to withdraw')
  if (withdrawAmount < currentBalance) {
    currentBalance -= withdrawAmount
    console.log('your new balance is:', currentBalance)
  } else {
    console.log('you dont have that amount in your account')
  }
} else {
  console.log('please enter correct pin code')
}
