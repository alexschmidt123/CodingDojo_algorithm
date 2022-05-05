// addToFront and removeFront
// as before, no use of .push(), .pop(), .splice(), etc.
// there's also no need for these functions to return anything
// (they can, but they don't need to - why?)
// addToFront(arr, value) - adds value to the start of arr, at index 0
// removeFront(arr) - removes the first item at the start of the array

function addToFront(arr, value) {
    // your code here
    for (var i = arr.length; i > 0; i--) {
        arr[i] = arr[i - 1]
    }
    arr[0] = value
}

function removeFront(arr) {
    // also, your code here
    for (var i = 0; i < arr.length - 1; i++) {
        arr[i] = arr[i + 1]
    }
    arr.length = arr.length - 1;
}

function addMultipleToFront(arr, value) {
    for (var i = value.length - 1; i >= 0; i--) {
        addToFront(test_2, value[i])
    }
}

//better solution
function addMultipleToFront1(arr, value) {
    for (var i = value.length - 1; i >= 0; i--) {
        arr[i + value.length] = arr[i];
    }
    for (var i = 0; i < value.length; i++) {
        arr[i] = value[i];
    }
}


function removeMultipleFront(arr, count) {
    for (var i = 0; i < count; i++) {
        removeFront(test_2)
    }
}

//better solution
function removeMultipleFront1(arr, count) {
    for (var i = 0; i <= arr.length - 1 - count; i++) {
        arr[i] = arr[i + count]
    }
    arr.length = arr.length - count
}

let test_1 = [1, 2, 3, 4, 5];
addToFront(test_1, 6);
console.log(test_1); // should show [6, 1, 2, 3, 4, 5]
console.log(test_1.length); // should show 6
removeFront(test_1);
console.log(test_1); // should show [1, 2, 3, 4, 5]
console.log(test_1.length); // should show 5
test_2 = [1, 2, 3];
addMultipleToFront1(test_2, [4, 5, 6])
console.log(test_2)
removeMultipleFront1(test_2, 2)
console.log(test_2)

// bonus: can you make another version of these?
// addMultipleToFront(arr, values) - accepts an array of values, each of which
// is added to the front of the array
// addMultipleToFront([1, 2, 3], [4, 5, 6]) should result in [4, 5, 6, 1, 2, 3]
// removeMultipleFront(arr, count) - removes the first n items from the array,
// based on the value of count
// removeMultipleFront([4, 5, 6, 1, 2, 3], 2) should result in [6, 1, 2, 3]