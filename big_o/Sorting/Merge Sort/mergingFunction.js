//Assume Arrays are sorted
//Merge two sorted arrays will all elements sorted
//Should run in O(n+m) time and O(n+m) space should not modify parameters passed in
//Two Counters start at zero
//use while loops
//Start with comparing the frist two elements, add the smaller number to a new array... one at a time

export function merge(arr1,arr2){
    let results = []
    let i = 0
    let j = 0
    while(i < arr1.length && j < arr2.length){
        if(arr2[j]>arr1[i]){
            results.push(arr1[i]);
            i++
        } else {
            results.push(arr2[j])
            j++
        }
    }
    //Add remaining items if the arrays aren't the same length
    while(i<arr1.length){
        results.push(arr1[i])
        i++
    }
    while(j<arr2.length){
        results.push(arr1[j])
        j++
    }
    return results;
}

merge([1,10,50],[2,14,99,100])