//https://www.hackerearth.com/practice/algorithms/sorting/bubble-sort/visualize/

function bubbleSort(arr) {
    for (let j = 0; j < arr.length - 1; j++) {
        for (let i = 0; i < arr.length - j; i++) {
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
            }
        }
    }
    return arr
}




console.log(bubbleSort([5, 23, 0, 12, 8, 6])) //[0,5,6,8,12,23]