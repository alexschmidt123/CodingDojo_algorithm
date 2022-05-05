var a = [-1, 2.5, 7.2, 0, 200, 150, 45,-9, 100];

function max_min_average(arr){
    
    //get average value
    var sum = 0;
    for (var i = 0; i < arr.length; i ++){
        sum += arr[i];
    }
    var average = sum / arr.length;

    // get max and min value
    arr.sort(function(a,b){
        return a-b;
    });
    max = arr[arr.length-1];
    min = arr[0];
    return [max,  min,  average];
}

console.log(max_min_average(a));