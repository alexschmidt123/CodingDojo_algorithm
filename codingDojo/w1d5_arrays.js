var fruit1 = "apples";
var fruit2 = "oranges";
    
fruit2 = fruit1;
    
console.log(fruit2 + " and " + fruit1);





var fruit1 = "apples";
var fruit2 = "oranges";
    
var temp = fruit1; // temp is a common name for this
fruit1 = fruit2;
fruit2 = temp;
    
console.log(fruit2 + " and " + fruit1);





var start = 0;
var end = 12;
    
while(start < end) {
    console.log("start: " + start + ", end: " + end);
    start += 2;
    end -= 2;
}

//Rule of thumb ---- for loops are for when you know when a loop should end, while loops are for when youare not sure.,



// Write a function reverse( arr ) to reverse an array


function reverse_array(arr) {
    for (var i=0; i< arr.length/2;i++){
        [arr[i], arr[arr.length-i-1]]=[arr[arr.length-i-1],arr[i]];
    }
    return arr;
}
arr1=['a','b','c','d','e'];
console.log(reverse_array(arr1));
