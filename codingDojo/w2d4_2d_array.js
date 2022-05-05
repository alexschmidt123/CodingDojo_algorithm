var arr2d2 = [
    [2, 5, 8,8],
    [3, 6, 1],
    [5, 7, 7]
];


console.log(arr2d2.length);
console.log(arr2d2[0].length);
// We can console.log the `8` in this array if we
console.log(arr2d2[0][2]);
// the first index `0` will select the `[2, 5, 8]` sub-array
// the second index `2` will select the `8` out of that sub-array

var myArr = [1,2,3,4,5];
myArr.pop();
console.log(myArr);



// ispresent2d
var arr2d2 = [
    [2, 5, 8],
    [3, 6, 1],
    [5, 7, 7],
    ['a','b','c']
];

function isPreent2d(arr2d, value){
    var result = true;
    for (var i = 0; i<arr2d.length;i++){
        if (arr2d[i] == num){
            return true;
        }
        else{
            for (var j=0; j<arr2d[i].length; j++){
                if (arr2d[i][j] == num){
                    return true;
                }
                else {
                    result = false;
                }
            }
        }
    }
    return result;
}

var num ='a';
var answer = isPreent2d(arr2d2,num);
console.log(answer)
//end


// complete the following function
function flatten(arr2d) {
    var flat = [];
    // your code here
    for (var i = 0; i<arr2d.length;i++){
        for (var j=0; j<arr2d[i].length; j++){
            flat.push(arr2d[i][j]);
        }
    }
    return flat;
}
    
var result = flatten( [ [2, 5, 8], [3, 6, 1], [5, 7, 7] ] );
console.log(result); 
// we expect to get back [2, 5, 8, 3, 6, 1, 5, 7, 7]

