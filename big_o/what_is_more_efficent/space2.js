function double (arr){
    let newArr = [];
    // makes a new array
    for (let i = 0;
        i < arr.length;
        i++){
            newArr.push(2*arr[i]);
            // The new array gets longer based off off input -> O(n) space
        }
        return newArr;
}