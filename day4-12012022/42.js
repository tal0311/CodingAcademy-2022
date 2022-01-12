'use strict'

/*Exercise 42 - Starts with...
Write a function named startsWithS , which receives an array of names and returns a new array, containing only those names which begin with S.

Now, refactor your function to work on any letter by adding a letter parameter. Rename the function to reflect its new functionality.*/

var names = ['sharon', 'suzi', 'sandra', 'tal', 'dor', 'inbar']

console.log('ststrswith:', startsWithS('s'))
function startsWithS(letter) {
  // toLowerCase
  console.log(letter)
  var startsWith = []
  for (let i = 0; i < names.length; i++) {
    var firstChar = names[i][0]
    if (firstChar === letter) startsWith.push(names[i])
  }
  return startsWith
}
