//Prompt: 
//Write a function that takes in a string and returns the count of each character in the string

 charCount("aaaa"); //{a:4}
 charCount("hello"); // {h:1,e:1,l:2,o:1}

//What would happen if we wanted to add a string with spaces, uppercase, numbers...?

function charCount(str){
    str = str.toLowerCase();
    let f  = {};
    for(let i =0;i<str.length;i++)
    {
        if(str[i] !== " ")
        {
            f[str[i]] = f[str[i]] + 1 || 1 
        }
    }
  return(f);   
}

console.log(charCount("my name is Tom"))