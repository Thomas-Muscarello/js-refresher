//Write a function called sumZero which accepts a sorted array pf integers. This function should find the first pair where the sum is zero. Return an array that includes both values that sum to zero or undefiined if a pair doesnt exist

// Naive- Works, but has loop in loop
function sumZero(arr){
    for(let i=0; i<arr.length; i++){
        for(let j= i+1; j<arr.length; j++){
            if(arr[i] + arr[j] === 0){
                return [arr[i], arr[j]];
            }
        }
    }
}

//Reforstred and Better using pointers
function sumZeroNew(arr){
    let left = 0
    let right = arr.length - 1;
    while(left<right){
        let sum = arr.left + arr[right];
        if (sum === 0){
            return [arr[left], arr[right]];
        } else if (sum>0){
            right--;
        } else {
            left++
        }
    }
    
}