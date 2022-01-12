'use strict'
/*Write the function printNumsCount(nums). The parameter nums, is an array of integers in the range 0 - 3 like this one:

3202203
The function prints how many times each of these numbers appears in the array.

For example: for this input array [3,2,0,2,2,0,3]

the output will look like this:[2,0,3,2]

Tip: the fact that the values are in a specific range allows us to use a second array, in which the index, is actually the number itself. The values of this second array, will store the occurrences of the numbers in nums.*/

var nums = [3, 2, 0, 2, 2, 0, 3]

// printNumsCount(nums)

printNumsCount(nums)
function printNumsCount(nums) {
  var arr = []

  for (let i = 0; i < 4; i++) {
    console.log('i:', 0)
    var count = 0
    for (let j = 0; j < nums.length; j++) {
      console.log('j:', nums[j])
      if (i === nums[j]) {
        count++
      }
    }
    arr.push(count)
  }
  console.log(arr)
}
