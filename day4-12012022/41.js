'use strict'

/*Exercise 41 - Digits to Words
Write a function named sayNum(num) which prints each digit in words
For example:
123  => One Two Three.
7294 => Seven Two Nine Four.
Tip: You may use switch inside a loop or an array named digitNames. (Or maybe… just try them both!)*/

var digitsNames = [
  'zero',
  'one',
  'tow',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
]

console.log('sayNum:', sayNum(1675467))

function sayNum(num) {
  num = num + ''
  console.log(num)
  var numStr = ''
  for (let i = 0; i < num.length; i++) {
    numStr += digitsNames[+num[i]] + ' '
  }
  return numStr
}
