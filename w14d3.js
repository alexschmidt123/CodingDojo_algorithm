class Node
{
    constructor(value)
    {
        this.value=value;
        this.next=undefined;
        this.previous=undefined;
    }
};
class Queue
{
    constructor()
    {
        this.head=undefined;
        this.tail=undefined;
        this.length=0;
    }
    Enqueue(){}
    Log()
    {
        let str="";
        for(var node=this.head;node;node=node.next)
        {
            str+=node.value+"->";
        }
        console.log(str);
    }
};
class Stack
{
    constructor()
    {
        this.top=undefined;
    }
    Push(value)
    {
        if(!this.top)
        {
            this.top=new Node(value);
            return;
        }
        let top=this.top;
        this.top=new Node(value);
        this.top.next=top;
    }
    Pop()
    {
        if(!this.top) return;
        let topVal=this.top.value;
        this.top=this.top.next;
        return topVal;
    }
    IsEmpty()
    {
        return this.top==null;
    }
};
class TwoStackQueue
{
    constructor()
    {
        this.stack1=new Stack();
        this.stack2=new Stack();
    }
    Enqueue(value)
    {
        /* Your Code Here */
        this.stack1.Push(value);
    }
    Dequeue()
    {
        while(!this.stack1.IsEmpty())
        {
            let top=this.stack1.Pop();
            this.stack2.Push(top);
        }
        return this.stack2.Pop();
        /* Your Code Here */
    }
};
let items1=[10,20,30,10,30,20];
let items2=[60,70,80,90,100,110];
let twoStackQueue=new TwoStackQueue();
for(let i=0;i<items1.length;i++)
{
    twoStackQueue.Enqueue(items1[i]);
}
console.log(twoStackQueue.Dequeue());
console.log(twoStackQueue.Dequeue());
console.log(twoStackQueue.Dequeue());
console.log(twoStackQueue.Dequeue());
console.log(twoStackQueue.Dequeue());
console.log(twoStackQueue.Dequeue());