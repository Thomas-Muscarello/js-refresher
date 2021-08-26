let usernames = ["tommy","jimmy","craig"]

console.log(usernames.indexOf("tommy"))

//Write a function that accepts an array and a value
//Loop through the array and check if the current array element is equal to the value
//if it is, return index at which the element is found.

function linearSearch(array,value){
   for(let i=0; i<array.length; i++){
      if(array[i]===value){ return i;
      }
   }
   return -1
}

linearSearch([31,3,4,5,2], 4)