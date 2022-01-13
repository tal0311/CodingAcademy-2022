## Arrays

array are mutable.

### array methods

sort() sort string array by a-z mutates array
shift() - will remove item from idx 0 array
unshift() - will insert item at idx 0
pop() - will remove item from idx last
push() - will insert item at idx last // array = [... array, item]
splice(startIdx, count to delete) - mutates array. remove item
splice(startIdx, 0) = remove 0 items
splice(startIdx, 0, item to insert [as many as you like]) = insert items at location
splice will return the modified array
split() - split the string
join() - will join the array  
slice() - will copy the array || part of the array
includes() boolean is item exist in array
indexOf() will return an isx for item

### reference vs values

reference will point to the same place in memory
pointer === reference
array is only a pointer to a place at memory
