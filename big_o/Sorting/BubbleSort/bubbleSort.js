//Start looping fromm the end of tto the beggining with a variable called i at the end of the array towards the beginning
// start an inner loop with a variable called j from the begginning until i-1
//If arr[j] is greater than arr[j+1], swap those two values
//return sorted array

function bubbleSort(arr){
    for(let i = arr.length; i>0; i--){
        for(let j = 0; j<i-1; j++){
           if(arr[j]>arr[j+1]){
               //SWAP
            let temp = arr[j];
            arr[j]=arr[j+1];
            arr[j+1]=temp;
            }
        }
    }
    return arr
}

bubbleSort([1,12,4,32,4,2])

//or ES6 Version

function bubbleSorting(arr){
    const swap=(arr,indx1,indx2)=>{
        [arr[indx1],arr[indx2]]=[arr[indx2],arr[indx1]]
    };

    for(let i = arr.length; i>0; i--){
        for(let j=0; j<i-1;j++){
            if(arr[j]>arr[j+1]){
                swap(arr,j,j+1);
            }
        }
    }
    return arr;
}