'use strict'

/*Exercise 27 - Asterisks!
Implement the function getAsterisks(length) which returns a string of asterisks. The number of asterisks in the string is determined by length.
For example: when the requested length is 4, it returns '****'

Implement the function getTriangle(height) which returns a triangle. For example, getTriangle(4) , will return a string which will look like this when printed to the console:*/

var shapeToPrint = '*'

function getAsterisks(length) {
  var i = 0
  var print = '  '
  while (i < length) {
    print += ' * '
    i++
  }
  return (print += '\n')
}

// getTriangle(5)
function getTriangle(height) {
  var i = 0
  while (i < height) {
    console.log(getAsterisks(i))

    i++
  }

  while (i > 0) {
    console.log(getAsterisks(i))

    i--
  }
}

// getMusicEqualizer(5)
function getMusicEqualizer(rowCount) {
  var i = 0
  while (i < rowCount) {
    console.log(getAsterisks(Math.floor(Math.random() * (10 - 1) + 1)))
    i++
  }
}

// getBlock(5, 5)
function getBlock(rows, cols) {
  var i = 1
  var print = '\n'
  while (i < rows) {
    print += getAsterisks(cols)

    i++
  }
  console.log(print)
}
