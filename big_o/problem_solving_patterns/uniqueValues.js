//count unique values in an array

function uniqueValue(arr){
    //start at first number of array
    let i = 0

    //set j to second item in array and then iterate
    for (let j = 1; j < arr.length; j++){
        //Compare i to j
        if (arr[i] !==arr[j]){
            //If i doesnt equal j, move i up
            i++;
            //set i new value to what j was
            arr[i] = arr[j]
        }
    }
    return i+1;
}