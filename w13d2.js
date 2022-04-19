class MinHeap {
    constructor() {
        this.data = [null, 10, 40, 20, 60, 50, 30, 70];
    }

    /* Description: Extracts the min number in the heap and reorders it */
    /* so the next min is ready for extraction */
    /* Time: O(log n) */
    /* Space: O(1) */
    /*
        Instructions:
        1. Save the min.
        2. Pop last num and set it as the first index.
        3. Iteratively swap the old last node that is now at idx1 with it's
        smallest child IF the smallest child is smaller than it.
    */
    leftChild(index) {
        return index * 2;
    }

    rightChild(index) {
        return (index * 2) + 1;
    }
    Extract() {
        /* Your Code Here */
        let min = this.data[1];

        this.data[1] = this.data[this.data.length - 1];
        this.data.pop();

        let i = 1;

        while (this.data[i] > this.data[leftChild(i)] || this.data[i] > this.data[rightChild(i)]) {

            if (this.data[leftChild(i)] > this.data[rightChild(i)]) {

                let temp = this.data[rightChild(i)];

                this.data[rightChild(i)] = this.data[i];
                this.data[i] = temp;

                i = rightChild(i);

            }
            else {
                let temp = this.data[leftChild(i)];

                this.data[leftChild(i)] = this.data[i];
                this.data[i] = temp;

                i = leftChild(i);
            }

        }

        return min;
    }
    Log() {
        let fmt = "";
        for (let i = 1; i < this.data.length; i++) {
            fmt += this.data[i] + ",";
        }
        fmt = fmt.substring(0, fmt.length - 1);
        console.log(fmt);
    }
};

let heap = new MinHeap();
console.log(heap.Extract()) /* Expected: 10 */
heap.Log(); /* Expected: 20,40,30,60,50,70 */