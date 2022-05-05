let arr = [12,34,78,99,986,345];
let sum = 0;
for (var i=0;i<arr.length;i++){
    sum+=arr[i];
}
console.log(sum/(arr.length+1));