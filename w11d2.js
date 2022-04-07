class Node
{
	constructor(value)
	{
		this.next=undefined;
		this.value=value;
	}
};

class List
{
	constructor()
	{
		this.head=undefined;
	}

	IsEmpty()
    {
        /* Your Code Here */
        if (this.head != undefined){
            return false
        }
        else{
            return true
        }
    }

    /* Insert a node with the given value to the end of the list */
    PushBack(value)
    {
        /* Your Code Here */
        let new_node = new Node(value)
        if (this.IsEmpty() == true){
            this.head = new_node;
            return new_node
        }
        else{
            let runner = this.head;
            while(runner.next != undefined){
                runner = runner.next;
            }
            runner.next = new_node;
        }
        return this
    }

    /* Insert an array of nodes with the given values to the end of the list. */
    PushBackN(arr)
    {
        /* Your Code Here */
        for (let i = 0; i<arr.length; i++){
            this.PushBack(arr[i]);
        }
        return this
    }
	Iterate(fn)
	{
		for(let node=this.head;node;node=node.next){fn(node.value);}
	}

	/* Insert a node with the given value to the front of the list */
	PushFront(value)
	{
		/* Your Code Here */
		let new_node = new Node(value);
		if (this.IsEmpty() == true){
            this.head = new_node;
            return new_node
        }
        else{
            new_node.next = this.head;
            this.head = new_node;
        }
        return this
	}

	/* Remove and return the first node in the list, */
	/* but also set the head to be the next node */
	PopFront()
	{
        /* Your Code Here */
		if (this.IsEmpty() == true){
            return this
        } 
        else {
            let oldhead = this.head;
            this.head = this.head.next;
            oldhead.next = null;
            return oldhead;
        }
        
	}

	/* Calculate and return the average of all the node values in the list. */
	Average()
	{
		/* Your Code Here */
        let runner = this.head;
        let sum = 0;
        let count = 0;
        while (runner != null){
            sum += runner.value;
            count ++;
            runner = runner.next;
        }
        if (count==0){
            return ("empty node")
        }else{
            return Math.floor(sum/count)
        }
	}
};

let test_data1=123;
let test_data2=234;
let test_data3=345;
let test_data4=456;
let test_data5=567;
let test_data6=678;

/* Create our list */
let list=new List();

/* Inserts a few nodes at the beginning of the list: */
list.PushFront(test_data1);
list.PushFront(test_data2);
list.PushFront(test_data3);

/* Removes and returns the head of list, but updates the list's head */
let old_head=list.PopFront();

/* Inserts a few more nodes at the beginning of the list */
list.PushFront(test_data4);
list.PushFront(test_data5);
list.PushFront(test_data6);

/* Iterates our list, so we can see our node values */
list.Iterate(value=>console.log(value));

/* Expected Output: */
/*
	678
	567
	456
	234
	123
*/

console.log(list.Average()); /* Expected: 411 */
console.log(list)
console.log(list.head)