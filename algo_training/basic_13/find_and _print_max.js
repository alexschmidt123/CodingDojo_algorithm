var a = [-1, 2.5, 7.2, 0, -9, 100];

function find_and_print_max(arr){
    var max=0;
    for (i=0; i<=arr.length-1;i++){
        if (arr[i]>=arr[i+1]){
            var temp = arr[i+1];
            arr[i+1] = arr[i];
            arr[i] = temp;
        }
        max=arr[arr.length-1];
    }
    return max;
}

console.log("The max number in the array is " +find_and_print_max(a));