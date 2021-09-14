//Most Merge use Recurssion
//Take 2 sorted arrays
//Keep breaking it up into halfs.... use array.slice
//Keep going recurrsivly until our base case is arr.length<+1
//Once all are sigle, merge those arrays with the other sorted arrays until you are back to the full length
//Then return sorted merged array

function mergeSort(arr){
    if(arr.length <= 1) return arr;
    let midpoint = Math.floor(arr.length/2)
    let left = mergeSort(arr.slice(0,midpoint))
    let right = mergeSort(arr.slice(midpoint))
    return merge(left,right)
}