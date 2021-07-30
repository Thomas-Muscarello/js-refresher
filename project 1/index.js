// First... there are two ways to comment within your code via JS
    // One is my using the double "//"
    // The other, for multi line comments, you can use /* ---insert text here--- */

/* Data types:
        undefined: Somthing that hasn't been defined
        null: Nothing
        boolean: True or False
        string: Any sort of text
        symbol: An immutable value that is unique
        number: A number
        object: Stores Key:Value Pair
*/

// Declaring a Variable:
var my_name = "Thomas";
    //Can be used within the whole program
let tom = "tom";
    //Is seen witin its scope, and can change
const tommy = "tommy";
    // Valuse can never change

//Decalre vs Assign
let a; // Just declaring
let b = 2; //Declaring and assigning a value

//Interpolate
//To innterpolate information into a string you use backticks rather than quotes
let saying = "Hello"
`Thomas said ${saying}`

//Hash objects with key value pair
//Hashs can be nested
let somehash = {
    Title: "Some Hash",
    nestedNames:{
        name_a = "Thomas",
        name_n = "Casey"
    }
}
//To get information from them:
somehash.nestedNames.name_a
// You can use dot notation

//Everything that isn't a primative value is an object in Javascript.

//That allows them to have object behavior