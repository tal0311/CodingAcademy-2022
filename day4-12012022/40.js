'use strict'

/*Exercise 40 - Lorem Ipsum
Implement a function named getLoremIpsum(wordsCount) which return a sentence with random dummy text (google: lorem ipsum...)

Here are the steps you may use to solve this:

Create a string or an array of all the characters in the English alphabet.
Write a function named getWord() which returns a single word made of 3 - 5 random letters. The length of the word will be generated randomly.
Call this function in a loop to create a sentence.*/

var az = 'abcdefghijklmnopkrstuvwxys'
var azArr = az.split('')
// console.log('azArr:', azArr)

console.log(getLoremIpsum(20))

function getLoremIpsum(wordsCount) {
  var lorem = ''
  for (let i = 0; i < wordsCount; i++) {
    lorem += getWord()
  }
  return lorem
}

function getWord() {
  var word = ''
  for (let j = 0; j < getRandomArbitrary(3, 5); j++) {
    var char = azArr[Math.floor(Math.random() * 26)]
    word += char
  }
  return word + ' '
}

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max + 1 - min) + min)
}
