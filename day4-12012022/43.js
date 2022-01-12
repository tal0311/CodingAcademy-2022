'use strict'

/*Exercise 43 - Sum Arrays
Write the function sumArrays which receives two arrays and returns their sum.

For example: [1, 4, 3] & [2, 5, 1, 9] => [3, 9, 4, 9]

Tip: this can be done in a single loop by first identifying the shorter or longer array of the two.

Now, read these arrays from the user (until the number 999 is entered)

Tip: write the function: getArrayFromUser and call it twice*/

function getArray() {
  var nums = []
  var userNum = +prompt('log number or "999" to quit')
  while (userNum !== 999) {
    userNum = +prompt('log number or "999" to quit')
    if (userNum !== 999) nums.push(userNum)
  }

  return nums
}

var arr1 = getArray()
var arr2 = getArray()

console.log('sums:', sumArrays(arr1, arr2))
function sumArrays() {
  var sums = []
  for (let i = 0; i < checkLength(arr1, arr2).length; i++) {
    var sum = arr1[i] + arr2[i] || checkLength(arr1, arr2)[i]
    sums.push(sum)
  }
  return sums
}

// console.log(checkLength(arr1, arr2))
function checkLength(arr1, arr2) {
  return arr1.length > arr2.length ? arr1 : arr2
}
