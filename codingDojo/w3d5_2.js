// swapPairs(arr)
// consider every item in the array to be grouped into pairs, i.e.
// the array [3, 7, 2, 9, 1, 5] is made up of three pairs:
// 3 and 7 / 2 and 9 / 1 and 5
// swap each pair in the array in-place; for the above array, we want
// to end up with:
// [7, 3, 9, 2, 5, 1]
// if there's an odd item left over at the end, it's not part of a pair
// so we don't swap it

function swapPairs(a) {
    for (var i = 0; i<a.length-1; i+=2){
        if (a[i+1]!=undefined){
        var temp = a[i];
        a[i] = a[i+1];
        a[i+1] = temp;
        }
    }
}

function swapPairs1(a) {
    for (var i = 0; i<a.length-1; i+=2){
        if (i+1!=a.length){
        var temp = a[i];
        a[i] = a[i+1];
        a[i+1] = temp;
        }
    }
}


let test_one = [0, 1, 2, 3, 4, 5];
swapPairs(test_one);
console.log(test_one); // should display [1, 0, 3, 2, 5, 4]

let test_two = ['Aleks', 'Brittani', 'Charlie', 'Diana', 'Elon'];
swapPairs(test_two);
console.log(test_two); // should display ['Brittani', 'Aleks', 'Diana', 'Charlie', 'Elon']

let test_two_1 = ['Aleks', 'Brittani', 'Charlie', 'Diana', 'Elon'];
swapPairs1(test_two_1);
console.log(test_two_1);

let test_two_2 = ['Aleks', 'Brittani', 'Charlie', 'Diana', 'Elon'];
test_two_2[3]=undefined
console.log(test_two_2);