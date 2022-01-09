/*Exercise 18 - Age Check
Write a function named isAbove18 which receives a name and an age.

The function should check if the age is above eighteen and use alert to show a message :

If the user is younger than eighteen, the message will be     -  'You are too young.'

otherwise, the message will be     -  'You are over 18!'

Use the user's name within the alerts.
The function should also return a boolean value - print it to the console.*/

var ageFromUser = prompt('what is your age?')

var checkAge = isAbove18(ageFromUser)
console.log('checkAge:', checkAge)
function isAbove18(age) {
  if (age >= 18) {
    console.log('you are over 18')
    return true
  } else {
    console.log('You are too young')
    return false
  }
}
