'use strict'

/*Exercise 21 - Divisible by 3
Read numbers from the user, until the number 999 is entered. For each number:

Print if it is divisible by 3.
If it is bigger by more than 10 from the previous number, print a suitable message.*/

// divBy3()
function divBy3() {
  var userNumber = +prompt('log number')
  var prevNumber = userNumber
  while (userNumber !== 999) {
    if (userNumber % 3 === 0) console.log(userNumber, 'is divisible  by', 3)
    else console.log(userNumber, 'is not divisible by', 3)
    userNumber = +prompt('log an other number')
    if (userNumber > prevNumber + 10) prevNumber = userNumber

    console.log('prev number:', prevNumber)
    if (userNumber === 999) return
  }
}
