myArray = [1,2,3,4,5,6]
/* Array Methods and their Big O:
.push - O(1) - adds to the end of an array
.pop - O(1) - removes the last item from array
.shift - O(N) - add to the front of an array
.unshift - O(N) - removes first item in an array
.concat - O(N) - takes multiple arrays and merges them
.slice - O(N) - returns a copy
.splice - O(N) - add or remove new elements
.sort - O(n*logN)
.forEach/map/filter/reduce/etc - O(N)
*/

let pushMyArray = myArray.push(7)
let popMyArray = myArray.pop()
let shiftMyArray = myArray.shift(0)
let unshiftMyArray = myArray.unshift()
let concatMyArray = myArray.concat()
let sliceMyArray = myArray.slice()
let spliceMyArrat = myArray.splice(1,0,1.5)
// insert at 1st index posistion
//expect the readout to be [1,1.5,2,3,4,5,6]
let spliceMyArrat = myArray.splice(5,1,7)
//replaces 1 element at the 5th index
//expect the readout to be [1,1.5,2,3,4,5,6,7]

