'use strict'

/*Implement the function countWordApperances(txt) which returns an object map.

The object keys will be the words in the string.
The values will be the number of times each of these words appears in the string.
For example:

countWordApperances ('puki ben david and muki ben david')

will return:

{ puki: 1, ben: 2, david: 2, and: 1, muki: 1 }*/

var str = 'puki ben david and muki ben david'

// countWordApperances(str)
function countWordApperances(txt) {
  txt = txt.split(' ')
  var words = new Map()
  for (let i = 0; i < txt.length; i++) {
    var currWord = txt[i]
    var counter = 0
    for (let j = 0; j < txt.length; j++) {
      var curr = txt[j]
      if (currWord === curr) counter++
    }
    words.set(currWord, counter)
  }
  console.log(words)
}

countWordApperances(str)
function countWordApperances(txt) {
  txt = txt.split(' ')
  var words = {}
  for (let i = 0; i < txt.length; i++) {
    var currWord = txt[i]
    var counter = 0

    for (let j = 0; j < txt.length; j++) {
      var curr = txt[j]
      if (currWord === curr) counter++
    }
    console.log((words = { [currWord]: counter }))
  }
}
