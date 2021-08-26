let letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]


//function accepts a sorted array and a value
//create a left pointer at the start of the array, and a right pointer at the end of the array
// While the left pointer comes b4 the right pointer:
    //Create a pointer in the middle
    //if you find the value you want, return the index
    //if value too small, move the left pointer up
    //if value too large move the right pointer down
//if no value....return -1
function binarySearch(sorrtedArr,value){
    //Set start at the beginning of an array
    let start = 0
    //Set end at the end of array
    let end = sorrtedArr.length -1;
    //Set middle to the average of the two
    //Use Math.floor to avoid decimal averages
    let middle = Math.floor((start + end) / 2);
    //Check to see if the middle is right, or if you need to move left or right
    while(sorrtedArr[middle]!==value && start <=end){
        if(value < sorrtedArr[middle]){
            end = middle -1;
        }else{
            start = middle + 1
        }
        middle = Math.floor((start + end) / 2);
    }
    if(sorrtedArr[middle]===value){
        return middle
    }
    return -1;

}

binarySearch([1,2,3,4,5,6,7,8,9,10],7)