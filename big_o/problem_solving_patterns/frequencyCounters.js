//Frequency Counters
    //Accepts 2 arrays and return true if every value in the array has a corresponding value squared in the second array

function same(arr1,arr2){
    if (arr1.length !== arr2.length){
        return false;
    }

    //create object to count frequency of each item in array
    let frequencyCounter1={}
    let frequencyCounter2={}

    //loop over add 1 or initaialize with 1
    for (let value of arr2){
        frequencyCounter2[value]=(frequencyCounter2[value] || 0)+1
    }

    //Loop over first object make sure there is the right amount of numbers and match
    for(let key in frequencyCounter1){
        if(!(key**2 in frequencyCounter2)){
            return false
        }
        if(frequencyCounter2[key**2]!== frequencyCounter1[key]){
            return false
        }
    }
    return true
}
