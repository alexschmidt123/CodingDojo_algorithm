//https://www.rapidtables.com/convert/number/decimal-to-binary.html


const dec2binary = (num) => {
    let result = "";
    while(num !== 0){
        let x = num % 2;
        num = Math.floor(num/2);
        result = x + result;
    }return result;
}


console.log(dec2binary(23)) //10111



btod=(b)=>
{
    let d=0;
    for(let i=0,j=1;i<b.length;i++,j<<=1)
    {
        d+=j*(b[b.length-1-i]);
    }
    return d;
}
/* 2 + 4 + 16 + 128 */
console.log(btod("10010110"));

dtob=(d)=>
{
    let b="";
    for(let bit=1;d;d>>=1,bit<<=1)
    {
        b=(d&bit!=0)+b;
    }
    return "0b"+b;
}
/* 111 1011 */
console.log(dtob(123));