function collectOddValues(arr){
    //define the new array outside of the recurrsive function
    let result = []

    //recurrsive function
    function helper(helperInput){
        //if length is 0 return
        if(helperInput.length === 0){
            return;
        }

        //if it is odd, push to result array
        if(helperInput[0]%2 !==0){
            result.push(helperInput[0])
        }

        //slice out the first item in array to look at next value 
        helper(helperUnput.slice(1))
    }
    
    //call the helper
    helper(arr)

    //return the array
    return result;
}