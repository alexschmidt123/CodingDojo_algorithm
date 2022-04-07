class Node {
    constructor(value) {
        this.next = undefined;
        this.value = value;
    }
};

class List 
{
    constructor() 
    {
        this.head = undefined;
    }

    IsEmpty() 
    {
        if (this.head != undefined) {
            return false
        }
        else {
            return true
        }
    }


    PushBack(value) 
    {
        let new_node = new Node(value)
        if (this.IsEmpty() == true) {
            this.head = new_node;
            return new_node
        }
        else {
            let runner = this.head;
            while (runner.next != undefined) {
                runner = runner.next;
            }
            runner.next = new_node;
        }
        return this
    }

    PushBackN(arr) 
    {
        for (let i = 0; i < arr.length; i++) {
            this.PushBack(arr[i]);
        }
        return this
    }
    Iterate(fn) {
        for (let node = this.head; node; node = node.next) { fn(node.value); }
    }

    PushFront(value) 
    {
        let new_node = new Node(value);
        if (this.IsEmpty() == true) {
            this.head = new_node;
            return new_node
        }
        else {
            new_node.next = this.head;
            this.head = new_node;
        }
        return this
    }


    PopFront() 
    {
        if (this.IsEmpty() == true) {
            return this
        }
        else {
            let oldhead = this.head;
            this.head = this.head.next;
            oldhead.next = null;
            return oldhead;
        }

    }

    Average() 
    {
        let runner = this.head;
        let sum = 0;
        let count = 0;
        while (runner != null) {
            sum += runner.value;
            count++;
            runner = runner.next;
        }
        if (count == 0) {
            return ("empty node")
        } else {
            return Math.floor(sum / count)
        }
    }

    Iterate(fn) 
    {
        for (let node = this.head; node; node = node.next) 
        { 
            fn(node.value); 
        }
    }

    /* Determines whether the given value was found within the list */
    /* ( Returns a bool, true or false ) */
    Contains(value) 
    {
        if (this.IsEmpty()) {
            return ("empty list!!!")
        } else {
            let runner = this.head;
            while (runner.value != value) {
                runner = runner.next;
                if (runner == null){
                    return false;
                }
            }
            return true;
        }
    }

    /* Recursively determines whether the given value was found within the list. */
    /* ( Returns a bool, true or false ) */
    ContainsR(node,value)
    {   
        if (node == null){
            return false;
        }
        if (node.value == value) {
            return true;
        }
        node = node.next;
        return this.ContainsR(node, value)
    }

    // /* Removes and returns the last value in the list. */
    // /* Treat me like array.pop() would */
    PopBack()
    {
        /* Your Code Here */
        if (this.IsEmpty()) {
            return ("empty list!!!")
        } else {
            let runner = this.head;
            while (runner.next.next != null) {
                runner = runner.next;
            }
            let result = runner.next.value;
            runner.next = null;
            return result;
        }
    }

    // /* EXTRA / OPTIONAL */
    // /* Recursively finds and returns the largest number in the list. */
    MaxR(node)
    {
        if (this.head == null){
            return this;
        }
        var temp = node.value; 
        if (node.next){
            temp = this.MaxR(node.next)
        }
        if (temp > node.value){
            return temp
        }
        return node.value;
    }
};

/* Create our list */
let list = new List();

/* ( Use your solution from day 1 for this to work! ) */
/* Remember, it just shoves all of these into our list! */
list.PushBackN([123, 234, 345, 456, 567, 678]);

console.log(list.Contains(456)); /* Expected Output: true */
console.log(list.Contains(45));
console.log(list.ContainsR(list.head,345)); 
console.log(list.ContainsR(list.head,45));/* Expected Output: true */
console.log(list.PopBack()); /* Expected Output: 678 */
console.log(list.PopBack()); /* Expected Output: 567 */
console.log(list.MaxR(list.head)); /* Expected Output: false */
// /* Iterates our list, so we can see our node values */
// /* I'm a freebie, don't change me. */
console.log("--------------------------------")
list.Iterate(value=>console.log(value));
/*
    Expected Output:
    123
    234
    345
    456
*/