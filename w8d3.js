/*
given a string with repeated consecutive characters, return the amount of each character as such:


input: "aaabbbbcdd"

output: "a3b4c1d2"



*/

function encode(str){
    let strResult = ""
    let count = 0
for(let i = 0;i < str.length;i++){
    if (str[i] == str[i+1]){
        count++
    }else{
        count++
        strResult = strResult + str[i] + count
        count = 0
    }

}
return strResult
}


console.log(encode("aaabbbbcdd")) //"a3b4c1d2"
console.log(encode("awabbbbbbcccdddda")) //a1w1a1b6c3b4a1
