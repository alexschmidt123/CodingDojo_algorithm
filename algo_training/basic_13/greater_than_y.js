var a = [-1, 2.5, 7.2, 0, 200, 150, 45,-9, 100];
var ya = 50;

function greater_than_y(arr, Y){
    var result=[];
    for(i=0;i<=arr.length-1; i++){
        if(arr[i]>Y){
            result.push(arr[i]);
        }
    }
    return result;
}

console.log(greater_than_y(a,ya));