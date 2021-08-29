//Function takes in 2 strings
//Loop over a long string
//loop over the shorter string
//If characters dont match, break out of inner loop
//If do match, keep going
// if complete the match add counter
//return counter

function naiveSearch(long,short){
    counter = 0
    //loop through every charatcter
    for(let i= 0; i< long.length; i++){
        for(let j=0; j<short.length; j++){
            //add i and j if there is a match so that you can look ahead to the next index number in the string you are searching through
            //If i and j match keep going
           if(short[j] !== long[i+j]){
               //otherwise break
               break;
           }
           //if j === to the end of the short string
           if(j=== short.length-1){
               //Add one
               counter++;
           }
        }
    }
    return counter
}

naiveSearch("lorie loled","lol")