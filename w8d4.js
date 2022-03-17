/*
create a function called strDecode() that does the following: 

input: "a3b4c1d2"
output: "aaabbbbcdd"


*/

const strDecode = (str) => {
    let currChar = str[0];
    let output = "";
    for (let i=0; i<str.length; i++){
        console.log(str[i]);
        if (!isNaN(str[i])){
            output += currChar.repeat(str[i]);
        }else{
            currChar = str[i];
        }
    }
    return output
}

console.log(strDecode("a3b4c1d2"))