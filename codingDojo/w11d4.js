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
    Iterate(fn)
    {
        for(let node=this.head;node;node=node.next){fn(node.value);}
    }

    /* Return the second to last node's value in the list */
    SecondToLast()
    {
        /* Your Code Here */
        if (this.IsEmpty()) {
            return ("empty list!!!")
        } else {
            let runner = this.head;
            while (runner.next.next != null){
                runner = runner.next;
            }
            return runner.value
        }
    }


    // SecondToLast1()
    // {
    //     if (this.IsEmpty()) {
    //         return ("empty list!!!")
    //     } 
    //     else {
    //         for (var node = this.head; node.next.next != null; node = node.next){
    //             return node.value
    //         }
    //     }
    // }
    /* Remove a node whose value matches the given value */
    /* ( You will need to fix .next pointers too! ) */

    RemoveValue(value){
        let runner = this.head;
        if (runner == null){
            return ("not found")
        }
        if (runner.next.value != value){
            runner = runner.next;
        }else{
            console.log("found")
            runner.next = runner.next.next
        }
    }

    // RemoveValue(value)
    // {
    //     if(this.head == null){
    //         console.log("this list is empty")
    //         return this
    //     }
    //     let runner = this.head;
    //     while(runner.next != null){
    //         if(runner.next.value == value){
    //             runner.next = runner.next.next
    //         }
    //         runner = runner.next
    //     }
    // }
    /* Inserts a new node before a node whose value is the search_value. */
    /* Example: */
    /*
        Before:
        10
        30
        40
        Prepend(20,30)
        After:
        10
        20
        30
        40
    */
    Prepend(new_value,search_value)
    {
        /* Your Code Here */
    }


    // prepend(search, value) {
    //     if (this.head == null) {
    //         this.PushFront(value);
    //         return this
    //     }
    //     var runner = this.head;
    //     if (runner.value == search) {
    //         list.PushFront(value);
    //         return this;
    //     }
    //     var newNode = new Node(value);
    //     while (runner.next.value != search) {
    //         runner = runner.next;
    //         if (runner.next == null) {
    //             console.log('Search value not found in list');
    //             return this
    //         }
    //     }
    //     var temp = runner.next;
    //     newNode.next = temp;

    //     runner.next = newNode;
    //     return this;
    // }
};
/*****************************************************************************/
/* Code Tests Below */
/*****************************************************************************/

/* Creates our list */
let list=new List();

/* ( Use your solution from day 1 for this to work! ) */
/* Remember, it just shoves all of these into our list! */
list.PushBackN([111,222,333,444,555,666]);

console.log(list.SecondToLast()) /* Expected: 555 */

list.RemoveValue(333); /* No Output */

/* I'm a freebie, don't delete me! */
list.Iterate(value=>console.log(value));
/*
    Expected Output after RemoveValue(333):
    111
    222
        <-- this was 333
    444
    555
    666
*/

list.Prepend(333,444);

/* I'm a freebie, don't delete me! */
list.Iterate(value=>console.log(value));
/*
    Expected Output after Prepend(333,444):
    111
    222
    333 <- 333 should be back
    444
    555
    666
*/