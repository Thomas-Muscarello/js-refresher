function collectOddValues(arr){
    //define the new array eveery time through
    let newArr= [];
    //check if array inout is empty 
    if(arr.length === 0){
        return newArr;
    }

    //If odd, push
    if(arr[0]%2 !==0){
        newArr.push(arr[0])
    }
    
    //Continues to concat untill you hit the base state.
    newArr = newArr.concat(collectOddValues(arr.slice(1)))
    
    return newArr;
    
}