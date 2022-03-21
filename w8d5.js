/*

input: "sweet potato"

output: "swet poa"

*/

function dedupeString(str){
    //create an object
    let obj ={}
    let newStr= ""
    //loopthrough and access each character in the string
    for(let x=0; x < str.length; x++){
        // console.log(str[x])
        obj[str[x]] = true
    } 
    // console.log(Object.keys(obj))
    for(const key in obj){
        // console.log(key)
        newStr += key
    }
    return newStr
} 


// console.log(dedupeString("sweet potato")) //"swet poa"
console.log(dedupeString("good morning")) 