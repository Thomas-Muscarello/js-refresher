//Prompt: 
//Write a function that takes in a string and returns the count of each character in the string

 charCount("aaaa"); //{a:4}
 charCount("hello"); // {h:1,e:1,l:2,o:1}

//What would happen if we wanted to add a string with spaces, uppercase, numbers...?

function charCount(str){
    //We want it to do somthing
    //We want it to return an object
}


function charCount(str){
    //We need to make an object to return
    //Loop over the string, and for each character:
        //If the charcater is a number/letter AND is a key in object, add 1
        //If chara
        //if the char is a number/letter AND not in object, add it and set value to 1
        //If character is else -> Dont do anything
    //return object
}

function charCount(str){
    //We need to make an object to return
    let result = {};

    //Loop over the string for each character...
    for(let i = 0; i < str.length; i++){
        
        let char = str[i].toLowerCase()
         //If the charcater is a number/letter AND is a key in object, add 1
        if(result(char)>0){
            result[char]++;
        }
        
        //if the char is a number/letter AND not in object, add it and set value to 1
        else{
            result[char]=1;
        };
    }
    //return object
    return result
}

function charCount1(str){
    let obj ={};
    for(let i = 0; i<str.length; i++){
        let char = str[i].toLowerCase();
        if (/[a-z0-9]/.test(char)){
            if (obj[char] > 0){
                obj[char]++;
            } else{
                obj[char]= 1;
            }
        }
    }
    return obj
}
//Refactored
function charCount2(str){
    let obj ={};
    for(let char of str){
        char = char.toLowerCase();
        if (/[a-z0-9]/.test(char)){
           obj[char]= ++obj[char]||1;
        }
    }
    return obj
}

console.log(charCount("my name is Tom"))