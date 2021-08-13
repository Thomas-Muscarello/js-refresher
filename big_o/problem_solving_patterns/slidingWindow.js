//Function called maxSubarraySum that accepts an array of integers and a number called n. the function should calculate the maximum sum of n consecutive elements in the array

//Naive Function
function maxSubarraySum(arr,num){
    //num = number of didgets we are trying to add together
    if(num> arr.length){
        return null;
    }
    let max = -Infinity;
    for (let i = 0; i< arr.length - num +1; i++){
        temp = 0;
        for (let j = 0; j < num; j++){
            temp += arr[i+j];
        }
        if (temp>max){
            max = temp;
        }
    }
    return max;
}


//Sliding Window
function maxSubarraySum1(arr,num){
    //get the first variable, and then rather than re-add numbers, we would move the window up by subtracting the first number of the array and adding the next
    let maxSum = 0;
    let tempSum= 0;
    if (arr.length<num) return null;
    //add first numbers
    for (let i = 0; i<num; i++){
        maxSum += arr[i];
    }
    tempSum = maxSum;
    for (let i = num; i< arr.length;i++){
        //subtract then add array values
        tempSum = tempSum - arr[i-num] + arr[i];
        maxSum = Math.max(maxSum,tempSum);
    }
    return maxSum
}