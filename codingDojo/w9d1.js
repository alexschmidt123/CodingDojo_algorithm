// 1. Intersect Sorted Arrays
// Given two sorted arrays, return a new array containing all the numbers they have in common
// This includes duplicates too! The intersection of [2,2] and [2,2,2] would be [2,2]

//Ex: given [2,4,7,9,10] and [2,3,5,7,9,10], return [2,7,9,10]
//Ex: given [1,1,4,5,8] and [1,1,1,5,6,8] return [1,1,5,8]
//Ex: given [1,3,5,7,9] and [2,4,6,8,10] return []
const intersectSortedArrray = (arr1, arr2) =>{
    let result = [];
    let i= 0
    let j= 0;
    while (i< arr1.length && j< arr2.length){
        if (arr1[i]<arr2[j]){
            i++;
        }
        else if (arr1[i]>arr2[j]){
            j++;
        }
        else if (arr1[i]===arr2[j]){
            result[result.length] = arr1[i];
            i++;
            j++;
        }
    }
    return result;
}
let arr1 = [2,4,7,9,10];
let arr2 = [2,3,5,7,9,10];
console.log(intersectSortedArrray(arr1,arr2));



// 2. Union Sorted Arrays
// Efficiently combine two pre-sorted arrays into a new sorted array
// no built in functions!!!

// Ex: given [2,4,7,9,10] and [2,3,5,7,9,10], return [2,3,4,5,7,9,10]
// Ex: given [1,2,2,2,7] and [2,2,6,6,7] return [1,2,2,2,6,6,7]
// Ex: given [1,5,9] and [2,6,10] return [1,2,5,6,9,10]
const UnionSortedArrray = (arr1, arr2) =>{
    let result = [];
    let x = 0;
    while(x <arr1.length || x < arr2.length){

        if (arr1[x] < arr2[x]){
            result.push(arr1[x]);
            result.push(arr2[x]);
            x++;
        } else if (arr2[x] < arr1[x]){
            result.push(arr2[x]);
            result.push(arr1[x]);
            x++;
        } else{
            result.push(arr1[x]);
            x++;
        }
    }
}


const union = (arrLeft, arrRight) => {
    let iLeft = 0;
    let iRight = 0;
    let newArr = [];

    while(iLeft < arrLeft.length && iRight < arrRight.length){
        if(arrLeft[iLeft] == arrRight[iRight]){
            newArr.push(arrLeft[iLeft]);
            ++iLeft;
            ++iRight;
        }
        else if(arrLeft[iLeft] < arrRight[iRight]){
            newArr.push(arrLeft[iLeft]);
            ++iLeft;
        }
        else{
            newArr.push(arrRight[iRight]);
            ++iRight;
        }
    }

    if(iLeft < arrLeft.length || iRight < arrRight.length)
        newArr.push(iLeft >= arrLeft.length ? arrRight[iRight] : arrLeft[iLeft]);

    return newArr;
}

