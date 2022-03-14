/*

create a function that accepts a string as an input and outputs an array with each word from the string


input: "  hello hey how   you   doing?   "
output: ["hello", "hey", "how", "you", "doing?"]

*/

const StringToArray =(str)=>{
    let arr = []
    for(let i = 0;i < str.length;i++){
        let temp = ""
        if(str[i] != " "){
            while (str[i] != " "){
            temp = temp + str[i]
            i++
            }
            arr.push(temp)
        }
    }
    return arr
}

console.log (StringToArray("  hello hey how   you   doing?   "))