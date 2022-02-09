//bubble sort

function bubbleSort1(arr) {
    let ops = 0
    for (var i = 0; i < arr.length - 1; i++) {
        ops++
        for (var j = 0; j < arr.length - 1 - i; j++) {
            ops++
            if (arr[j] > arr[j + 1]) {
                ops++
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    console.log("Function1's operation times: "+ops)
    return arr
}


function bubbleSort2(arr) {
    let ops = 0;
    for (var i = 0; i < arr.length; i++) {
        ops++
        for (var j = 0; j < arr.length; j++) {
            ops++
            if (arr[j] > arr[j + 1]) {
                ops++
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    console.log("Function2's operation times: "+ops)
    return arr
}

function bubbleSort3(arr) {
    let ops = 0
    
    for (var i = 0; i < arr.length - 1; i++) {
        ops++
        let swapped = false;
        for (var j = 0; j < arr.length - 1 - i; j++) {
            ops++
            if (arr[j] > arr[j + 1]) {
                ops++
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = true;
            }              
        } 
        if (swapped == false){
            console.log("Function3's operation times: "+ops)
            return arr
        }     
    }

}



console.log("Test1:")
let test_a1 = [8, 1, 4, 5, 9, 2, 7, 6, 3]
console.log(bubbleSort1(test_a1))
let test_a2 = [8, 1, 4, 5, 9, 2, 7, 6, 3]
console.log(bubbleSort2(test_a2))
let test_a3 = [8, 1, 4, 5, 9, 2, 7, 6, 3]
console.log(bubbleSort3(test_a3))


console.log("")
console.log("Test2:")
let test_b1 = [1, 3, 2, 3, 6, 3, 3, 3, 3, 3, 3, 5, 9, 3]
console.log(bubbleSort1(test_b1))
let test_b2 = [1, 3, 2, 3, 6, 3, 3, 3, 3, 3, 3, 5, 9, 3]
console.log(bubbleSort2(test_b2))
let test_b3 = [1, 3, 2, 3, 6, 3, 3, 3, 3, 3, 3, 5, 9, 3]
console.log(bubbleSort3(test_b3))

// console.log("")
// console.log("Test3:")
// let test_c = []
// console.log(bubbleSort1(test_c))
// console.log(bubbleSort2(test_c))
// console.log(bubbleSort3(test_b))

// console.log("")
// console.log("Test4:")
// let test_d = [1]
// console.log(bubbleSort1(test_d))
// console.log(bubbleSort2(test_d))
// console.log(bubbleSort3(test_b))