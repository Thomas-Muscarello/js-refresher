function swapping(arr,indx1,indx2){
    let temp = arr[indx1];
    arr[indx1]=arr[indx2];
    arr[indx2]=temp;
}
//-OR-
const swap = (arr, indx1, indx2) =>{
    [arr[indx1], arr[indx2]]= [arr[indx2], arr[indx1]];
}