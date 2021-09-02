//Store first element as the smallest value youve seen so far.
//COmpare this item to the next item in the array until you find a smaller number
//If a smaller number is found, designate that smaller number to be the new minimum and continue until the end of the array
//If minimum is not the value(index) you started with, swap the two values
//repeat until array is sorted

function selectionSOrt(arr){
    for(let i = 0; i<arr.length;i++){
        //Start at i and set to lowest
        let lowest = i;
        //make a second variable to compare
        for(let j = i+1; j<arr.length; j++){
            //If the second variable is less than i, set the lowest to new low
            if(arr[j]< arr[lowest]){
                lowest=j
            }
        }
        //if i isnt the lowest
        if(i!== lowest){
            //swap
            let temp = arr[i]
            arr[i]=arr[lowest];
            arr[lowest]=temp
        }
    }
    return arr
}
