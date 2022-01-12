'use strict'

/*Exercise 46 - Multiply Nums
Write the function: multBy(nums, multiplier) which modifies the nums array so that each of its items, is multiplied by multiplier.

The function returns the modified array.

Add another parameter to this function named isImmutable.

When this parameter is true, use array.slice()to perform the function’s calculation on a copy of the array, and leave the original array unchanged.

The function should return the modified array.*/

var nums = [5, 4, 5, 2, 1, 2, 4]

console.log(nums)

console.log(multBy(nums, 5, false))

function multBy(nums, multiplier, isMutable) {
  if (!isMutable) {
    var arr = []
    for (let i = 0; i < nums.length; i++) {
      arr.push(nums[i] * multiplier)
    }
    return arr
  }
}
