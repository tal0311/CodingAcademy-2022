'use strict'

/*Exercise 33 - Vowels (a, e, i, o, u)
Write the following functions:

printVowelsCount(str)- which receives a string and prints how many times each vowel appears.
flipCase- which gets a string and changes the vowels to lowercase letters, and the rest to uppercase letters (i.e. Upset uPSeT).
doubleVowels- which gets a string and doubles all the vowels in it.
Test the functions using these inputs: 'aeiouAEIOU' & 'TelAvivBeach'*/

var str = 'Loremipsum'

// printVowelsCount(str)
function printVowelsCount(str) {
  var a = 0
  var e = 0
  var i = 0
  var o = 0
  var u = 0
  for (let j = 0; j < str.length; j++) {
    if (str.charAt(j) === 'a') a++
    if (str.charAt(j) === 'e') e++
    if (str.charAt(j) === 'i') i++
    if (str.charAt(j) === 'o') o++
    if (str.charAt(j) === 'u') u++
  }

  console.log('u:', u)
  console.log('a:', a)
  console.log('o:', o)
  console.log('e:', e)
  console.log('i:', i)
}

// flipCase(str)
function flipCase(str) {
  var modified = ''
  for (let j = 0; j < str.length; j++) {
    if (
      str.charAt(j) === 'a' ||
      str.charAt(j) === 'e' ||
      str.charAt(j) === 'i' ||
      str.charAt(j) === 'o' ||
      str.charAt(j) === 'u'
    ) {
      var toUpper = str.charAt(j).toUpperCase()
      // console.log(toUpper)
      modified += toUpper
    } else {
      var toLower = str.charAt(j).toLowerCase()
      modified += toLower
    }
  }
  console.log(modified)
}
// 3.
doubleVowels(str)
function doubleVowels(str) {
  var modified = ''
  for (let i = 0; i < str.length; i++) {
    if (findVowels(str.charAt(i))) {
      var doubled = findVowels(str.charAt(i)) + findVowels(str.charAt(i))
      modified += doubled
    } else {
      modified += str.charAt(i)
    }
  }
  console.log(modified)
}

// helper
// var res = findVowels(str)
function findVowels(str) {
  // console.log(str)
  for (let j = 0; j < str.length; j++) {
    if (str.charAt(j) === 'a') return str.charAt(j)
    if (str.charAt(j) === 'e') return str.charAt(j)
    if (str.charAt(j) === 'i') return str.charAt(j)
    if (str.charAt(j) === 'o') return str.charAt(j)
    if (str.charAt(j) === 'u') return str.charAt(j)
  }
}
