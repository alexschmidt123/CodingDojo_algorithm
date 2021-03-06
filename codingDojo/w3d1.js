// Rotate Array
// two arguments - an array to rotate (arr) and the number of units right
// to rotate it by (shiftBy)
// ([1, 2, 3, 4, 5], 1) results in [5, 1, 2, 3, 4]
// ([1, 2, 3, 4, 5], 2) results in [4, 5, 1, 2, 3]
// ([1, 2, 3, 4, 5], 6) results in [5, 1, 2, 3, 4]

// .pop(), .shift(), .splice() - don't use these

// FIRST: discuss the problem and make sure the group understands what
// you're expecting - write some psuedocode, diagram it out
// THEN: write out and test your function; come up with your own test cases
// FINALLY: can your function handle a negative shiftBy argument?
// what if you give it a shiftBy in the millions?
// is your code clear and easily readable? is it formatted well?

function rotateArr(arr, shiftBy) {
    // your code here
    shiftBy = shiftBy % arr.length;
    for (var i = arr.length - 1; i >= 0; i--) {
        arr[i + shiftBy] = arr[i];
    }
    for (var j = 0; j < shiftBy; j++) {
        arr[j] = arr[arr.length - shiftBy + j];
    }
    arr.length -= shiftBy;
    return arr;
}

console.log(rotateArr(['hello', 'good morning', 'hey', 'how goes it', 'Guten Tag'], 7))
// should print out ['how goes it', 'Guten Tag', 'hello', 'good morning', 'hey']