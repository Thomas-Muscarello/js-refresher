//Given a sorted array of integers, write a function called seaarch that accepts a value and returns the index where the value passed to the function is located. If the value is not found, return -1

//naive approaching
function search(arr,val){
    for (let i=0, i < arr.length; i++){
        if (arr[i] === val){
            return i;
        }
    } 
    return -1;
}

// Refactored with Divide and Conquer
//check the middle, see if it is greater or less than the given value. If it isnt equal, it moves to either the left or right deoending on >/<

function search(array,val){
    let min = 0
    let max = array.length -1;

    while (min<=max){
        let middle = Math.floor((min+max)/2);
        let currentElement = array[middle];

        if (array[middle]<val){
            min = middle +1;
        }
        else if (array[middle]>val){
            max = middle -1;
        }
        else {
            return middle;
        }
    }
    return -1;
}