function sum (arr){
    let total = 0;
    // this is one number ^
    for (
        let i = 0; 
        //This is another number ^
         i< arr.length; i++
    ){
        total += arr[i];
    }
    return total
    //There is an exact amount of variables. We arent adding too. This is Constant SPace.. O(1) space
}