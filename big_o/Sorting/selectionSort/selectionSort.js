//Store first element as the smallest value youve seen so far.
//COmpare this item to the next item in the array until you find a smaller number
//If a smaller number is found, designate that smaller number to be the new minimum and continue until the end of the array
//If minimum is not the value(index) you started with, swap the two values
//repeat until array is sorted



function swapping(arr,indx1,indx2){
    let temp = arr[indx1];
    arr[indx1]=arr[indx2];
    arr[indx2]=temp;