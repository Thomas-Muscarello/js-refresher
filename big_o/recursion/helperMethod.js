//Common design for recurssion functions - Typically donw when you need to iterate over an array


//outer function
function outer(input){
    let outerScopedVariable = []

    //Recurssive Function
    function helper(helperInput){
        //modify the outerScopedVariable
        helper(helperInput--)
    }

    helper(input)
    return outerScopedVariable;
}