//create a helper function that takes 2 already sorted array, and combines them into one sorted array and returns that new sorted array

const combineSortedArrays = (arr1, arr2) => {
    //result array that will contain values from both the input arrays
    let result = []
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            result.push(arr1[i]);
            i++;
        }
        else {
            result.push(arr2[j]);
            j++;
        }
    }
    while (i < arr1.length) {
        result.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        result.push(arr2[j]);
        j++;
    }
    //at the end
    return result
}
console.log(combineSortedArrays([1, 3, 5, 5, 6], [2, 3, 4, 9])) //[1,2,3,3,4,5,5,6,9]



//https://www.hackerearth.com/practice/algorithms/sorting/merge-sort/visualize/


const combineSortedArrays1 = (arr1, arr2) => {
    let merge = [];
    let x, y = 0;
    for (let i = 0; i < (arr1.length + arr2.length); i++) {
        if (y >= arr2.length || arr1[x] < arr2[y]) {
            merge.push(arr1[x]);
            x++;
        }
        else {
            merge.push(arr2[y]);
            y++;
        }
    }
    return merge
}


const mergeSort = (arr) =>{
    if (arr.length<=1){
        return arr;
    }
    let mid = Math.floor(arr.length/2);
    let leftHalf = arr.slice(0,mid);
    console.log("leftHalf --> ", leftHalf);
    let rightHalf = arr.slice(mid);
    console.log("rightHalf --> ", rightHalf);
    return combineSortedArrays(mergeSort(leftHalf),mergeSort(rightHalf));
}

console.log(mergeSort([5,4,0,9,2,3,1]))