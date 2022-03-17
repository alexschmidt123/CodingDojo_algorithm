/*
create a function called strDecode() that does the following: 

input: "a3b4c1d2"
output: "aaabbbbcdd"


*/

const strDecode = (str) => {
    let currChar = str[0];
    let output = "";
    let currNum = "";
    for (let i=0; i<str.length; i++){
        console.log(str[i]);
        if (!isNaN(str[i])){
            currNum += str[i];
        }else{
            output += currChar.repeat(currNum);
            currChar = str[i];
            currNum = "";
        }
    }
    output += currChar.repeat(currNum);
    return output
}

console.log(strDecode("a13b4c1d12"))