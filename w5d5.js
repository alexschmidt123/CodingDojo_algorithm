class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SLL {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    addToHead(value) {
        let new_node = new ListNode(value);

        if (this.head == null && this.tail == null) {
            this.head = new_node;
            this.tail = new_node;
        }

        else {
            new_node.next = this.head;
            this.head = new_node;
        }
    }
    addToTail(value) {
        let new_node = new ListNode(value);

        if (this.head == null && this.tail == null) {
            this.head = new_node;
            this.tail = new_node;
        }

        else {
            this.tail.next = new_node;
            this.tail = new_node;
        }
    }


    display() {

        var output = '';
        var runner = this.head;

        if (this.head == null) {
            return 'empty';
        }

        while (runner != null) {
            if (runner == this.tail) {
                var output = output + runner.value;
                return output; // we could also return output outside the while loop
            }
            var output = output + runner.value + ' - '
            runner = runner.next;
        }
    }

    contains(target) {
        var runner = this.head;
        while (runner != null) {
            if (runner.value == target) {
                return true;
            }
            runner = runner.next;
        }

        return false;
    }


    removeFront() {
        // your code here
        if (this.head == null) {
            console.log("No head to remove")
        }
        else {
            let oldhead = this.head;
            this.head = this.head.next;
            oldhead.next = null;
            oldhead = null;
        }
    }

    removeBack() {
        // your code here
        if (this.tail == null) {
            console.log("No head to remove")
            return null;
        }
        if (this.head == this.tail) {
            this.head = null;
            this.tail = null;
        }
        var runner = this.head;
        while (runner.next != this.tail) {
            runner = runner.next;
        }
        this.tail = runner;
        this.tail.next = null;
    }
}

var new_sll = new SLL();

new_sll.addToHead(8);
new_sll.addToHead(3);
new_sll.addToHead(6);
new_sll.addToHead(4);
new_sll.addToHead(7);
new_sll.addToTail(10);
console.log(new_sll.display()); // 7 - 4 - 6 - 3 - 8 - 10

new_sll.removeFront();
console.log(new_sll.display());
// what method could you run to test if the front has been removed?

new_sll.removeBack();
console.log(new_sll.display());

// what method could you run to test if the front has been removed?