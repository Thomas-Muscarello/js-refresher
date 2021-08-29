
function numberCompare(num1,num2){
    return num1 -num2;
}

[6,4,15,10].sort(numberCompare)

function compareByLength(str1, str2){
    return str2.length - str1.length;
}
["Bed", "Steele", "Apple", "Pig"].sort(compareByLength)