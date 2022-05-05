//https://www.hackerearth.com/practice/algorithms/sorting/selection-sort/visualize/

const selectionSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let bigIndex = 0;
        let end = arr.length - 1 - i;
        for (let j = 0; j < end; j++) {
            if (arr[j] > arr[bigIndex]) {
                bigIndex = j;
            }
        }
        console.log(bigIndex);
        [arr[bigIndex], arr[end]] = [arr[end], arr[bigIndex]]; //destructure swap
    }
    return arr
}


console.log(selectionSort([4, 8, 5, 2, 1, 0, 9, 7]))