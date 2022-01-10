'use strict'

/*Exercise 23 - Factorial!
Write the function getFactorial which receives a number and returns n! (Google ‘factorial’ if you are not sure what the mathematical definition of it is).*/

var num = 6

getFactorial()
function getFactorial() {
  var count = 1
  var fact = 1
  while (count <= num) {
    console.log((fact *= count))
    count++
  }
}
