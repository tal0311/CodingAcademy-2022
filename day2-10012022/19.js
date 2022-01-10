'use strict'
/*Exercise 19 - Even and Odd Numbers
Read 10 numbers from the user. Check each number and print it along with a short message indicating whether it is even or odd.*/

// isOdd()
function isOdd() {
  var number = prompt('print number')
  var count = 0

  while (count < 10) {
    if (number % 2 === 0) console.log(number + ' is even')
    else console.log(number + ' is odd')
    number = prompt('print new number')
    count++
  }

  console.log('done!')
}
