class MinHeap{
    constructor(){
        this.heap = [null]
    }

    insert(value){
        this.heap.push(value);
        let curr = this.heap.length-1;
        let parent = Math.floor(curr/2);
        while (this.heap[curr]< this.heap[parent]){
            [this.heap[curr], this.heap[parent]]=[ this.heap[parent],this.heap[curr]];
            curr = parent;
            parent = Math.floor(curr/2);
        }
        return this.heap;
    }
}




class Heap
{
    constructor()
    {
        this.data=[null];
    }

    insert(value)
    {
        this.data.push(value);
        for(let child=this.data.length-1,parent=child>>1;this.data[child]<this.data[parent];child=parent,parent>>=1)
        {
            [this.data[child],this.data[parent]]=[this.data[parent],this.data[child]];
        }
    }
}


let heap1 = new MinHeap();
heap1.insert(23);
heap1.insert(35);
heap1.insert(60);
heap1.insert(12);
heap1.insert(9);

console.log(heap1)
console.log(heap1[2])
