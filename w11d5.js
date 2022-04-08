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

    Iterate()
    {
        let str="";
        for(let node=this.head;node;node=node.next)
        {
            str+=node.value+"->";
        }
        console.log(str);
    }

    /* Add all nodes of the supplied list to this list */
    Concat(other_list)
    {
        /* Your Code Here */
        if(this.head == null){
            return this;
        }
        let runner  = this.head;
        while(runner.next != null){
            runner = runner.next;
        }
        runner.next = other_list.head;
        return this;
    }

    /* Finds the node with the smallest value and moves it to the front. */
    MinToFront()
    {
        /* Your Code Here */
        if(this.head == null){
            return this;
        }
        var runner = this.head;
        var min = runner;
        while (runner != null) {
            if(runner.value < min.value){
                min = runner;
            }
            runner = runner.next
        }
        if(min != this.head){
            var prev = this.head;
            while(prev.next != min){
                prev = prev.next;
            }
            prev.next = min.next;
            min.next = this.head;
            this.head = min;
        }
    return this
    }

    /* Split our list into two lists, where the second list starts with the node */
    /* that has the given value */
    Split(value)
    {
        /* Your Code Here */
        if(this.head == null){
            return this;
        }
        var runner = this.head;
        var prev = null;
        while (runner.next != null) {
            if(runner.value == value){
                var newList = new List();
                newList.head = prev.next;
                prev.next = null;
                return newList;
            }
            prev = runner;
            runner = runner.next
        }
    }
};
/*****************************************************************************/
/* Code Tests Below */
/*****************************************************************************/

/* Creates our list */
let list1=new List();
let list2=new List();

/* ( Use your solution from day 1 for this to work! ) */
/* Remember, it just shoves all of these into our list! */
list1.PushBackN([765,234,545,112]);
list2.PushBackN([65,567,433,656]);


list1.Iterate();
list2.Iterate();
let list = list1.Concat(list2)
list.Iterate();
/*
    Expected:765->234->545->112->65->567->433->656
*/
// list.MinToFront();
// list.Iterate();
/*
    Expected:65->765->234->545->112->567->433->656
*/
// let split_list=list.Split(545);
// list.Iterate();
// split_list.Iterate();
/*
    Expected:65->765->234->
    Expected:545->112->567->433->656
*/