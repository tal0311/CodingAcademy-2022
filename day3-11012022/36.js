'use strict'

/*Exercise 36 - Longest and Shortest Names
Implement a function which receives a string of comma separated names, for example: 'Igal,Moshe,Haim',and prints the longest and shortest names.

Tip: use the function indexOf. note that the function accepts two parameters.*/

var str = 'Igal,Moshe,Haim,' // added comma to end of string

printLongest(str)
function printLongest(str) {
  var splitStart = 0
  var commaIdx = 0
  var longestName = ''
  var shortestName = str

  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === ',') {
      commaIdx = i
      var name = str.substring(splitStart, ++commaIdx)
      name = name.substring(0, name.length - 1)
      splitStart = commaIdx
      if (name.length > longestName.length) longestName = name
      if (name.length < shortestName.length) shortestName = name
    }
  }
  console.log('longest:', longestName, 'shortest:', shortestName)
}
