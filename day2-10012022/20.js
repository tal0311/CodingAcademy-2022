'use strict'

/*Read 10 numbers from the user and print:

The maximum number.
The minimum number.
The average.*/

// var res = checkNumber()
console.log('res:', res)
function checkNumber() {
  var max = -Infinity
  var min = Infinity
  var count = 0
  var sum = 0
  var userInputNumber = +prompt('log number')
  while (count < 10) {
    if (userInputNumber > max) max = userInputNumber
    else if (userInputNumber < min) min = userInputNumber
    userInputNumber = +prompt('log another number')

    sum += userInputNumber
    count++
  }
  var avg = sum / 10
  console.log('max:', max, 'min:', min, 'avg:', avg)
}
