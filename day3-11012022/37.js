'use strict'

/*Exercise 37 - Generate Password
Implement a function named generatePass(passLength) which generates a password of the specified length. The password is made out of random digits and letters.*/

// helper
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

var res = generatePass(10)
console.log('res:', res)
function generatePass(passLength) {
  var passWord = ''
  for (let i = 0; i < passLength; i++) {
    if (i % 2 === 0) var char = getRandomLower()
    else char = getRandomNumber()

    passWord += char
  }
  return passWord
}
