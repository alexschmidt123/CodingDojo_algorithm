/*
rotateString(str,num)
Given a string and a number, rotate the string by that number amount and return the rotated string

input: "good morning", 3
output: "inggood morn"


input: "abcde", 5
output: "abcde"


*/





/*
isRotation(str1,str2)
Given 2 strings, return true if they are rotations of one another, false if they are not

input: "good morning", "rninggood mo"
output: true


input: "abcde", "abccde"
output: false


*/

// function encode(str) {
//     let strResult = ""
//     let count = 0
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] == str[i + 1]) {
//             count++
//         } else {
//             count++
//             strResult = strResult + str[i] + count
//             count = 0
//         }

//     }
//     return strResult
// }


console.log(encode("aaabbbbcdd")) //"a3b4c1d2"
console.log(encode("awabbbbbbcccdddda")) //a1w1a1b6c3b4a1





function encode(str){
    let output = ""
    let obj ={};
    for (let x = 0; x<str.length; x++){
        if (str[x] in obj){
            obj[str[x]] += 1;
        }else{
            obj[str[x]] = 1;
        }
    }
    for (const key in obj){
        console.log(`${key}: ${obj[key]}`);
        output += key + obj[key];
    }
    return output;
}