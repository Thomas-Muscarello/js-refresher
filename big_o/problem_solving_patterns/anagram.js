function validAnagram(first,second){
    // lengths have to be the same
    if(first.length !== second.length){
        return false;
    }

    const lookup = {}

    //Loop through the first string that is a breakdown of the first string.
    //Checks to see if a letter exists in the empty lookup object as key values
    for (let i = 0; i< first.length; i++){
        let letter = first[1];
        //if letter exists, increment.. otherwise set to 1
        lookup[letter] ? lookup[letter]+= 1 : lookup[letter]=1;
    }

    //Now loop over second and compare each character to our
    for (let i = 0; i<second.length; i++){
        let letter = second[i];
        //can't find letter or letter is zero then its not an anagram
        if (!lookup[letter]){
            return false;
        } else {
            //If it does find it in the object, it will subtract the value by 1
            lookup[letter] -=1;
        }
    }

    return true
}