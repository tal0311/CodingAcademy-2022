'use strict'

/*Exercise 49 - getNthLargest()
Write the function getNthLargest(nums, nthNum) to get the nth largest element from an array of unique numbers.

For example: getNthLargest([ 7, 56, 88, 92, 99, 89, 11], 3)

will return: 89

Tip: This can be done more easily by first sorting the array.

BONUS: Try writing the algorithm without sorting the array.*/

var nums = [7, 56, 88, 92, 99, 89, 11]

// console.log(sortNums(nums, 3))
// function sortNums(nums, nthNum) {
//   var sorted = []
//   while (nums.length !== 0) {
//     sorted = [...sorted, ...findSmallNum()]
//   }
//   return sorted[nthNum + 1]
// }

// // helper function
// function findSmallNum() {
//   var minIndex = 0
//   var minNum = Infinity
//   for (let i = 0; i < nums.length; i++) {
//     var currNum = nums[i]

//     if (currNum < minNum) {
//       minNum = currNum
//       minIndex = nums.indexOf(currNum)
//     }
//   }
//   return nums.splice(minIndex, 1)
// }

console.log(sortNums(nums, 3))
function sortNums(nums, nthNum) {
  var numsCopy = nums.slice()

  for (let i = 0; i < numsCopy.length; i++) {
    for (let j = 1; j < numsCopy.length - 1; j++) {
      if (numsCopy[j] < numsCopy[j - 1]) {
        var temp = numsCopy[j]
        numsCopy[j] = numsCopy[j - 1]
        numsCopy[j - 1] = temp
      }
    }
  }
  return numsCopy[nthNum]
}
