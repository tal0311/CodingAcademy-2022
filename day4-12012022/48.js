'use strict'

/*Exercise 48 - sortNums()
Implement the function sortNums(nums). This function returns a sorted version of the original nums array. It works by looping through the array, finding the minimum, splicing it out, and adding it to a new array.

Read about how to sort an array yourself, by using the bubble sort algorithm. Google it, copy it, adjust it to match our coding conventions and use it.*/

var nums = [2, 7, 8, 3, 4, 1, 0, 2, 9, 6]

sortNums(nums)
function sortNums(nums) {
  var sorted = [0]

  for (let i = 0; i < nums.length; i++) {
    console.log(sorted[i] < nums[i])

    console.log(sorted)
  }
}
