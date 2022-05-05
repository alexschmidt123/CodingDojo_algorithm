class BSTNode
{
    constructor(value)
    {
        this.left=undefined;
        this.right=undefined;
        this.value=value;
    }
};

class BST
{
    constructor()
    {
        this.root=undefined;
    }

    /* Worst Time Complexity O(N) <- Only happens if you have an unbalanced tree.  */
    /* Average Time Complexity: O(log n) */
    /* Best Time Complexity: O(1) <- Only happens if the list is empty */
    /* Description: Inserts the given node into the tree based on its value */
    Insert(value)
    {
        /* Your Code Here */
        var newNode = new BSTNode(value);
        var node = this.root;
        var temp = null;
        while(node != null) {
            temp = node;
            if(node.value > value) {
                node = node.left;
            }
            else {
                node = node.right;
            }
        }
        if(temp == null)
            temp = newNode;
        else if(value < temp.value)
            temp.left = newNode;
        else 
            temp.right = newNode;
    }

    /* Worst Time Complexity O(N) <- Only happens if you have an unbalanced tree.  */
    /* Average Time Complexity: O(log n) */
    /* Best Time Complexity: O(1) <- Only happens if the list is empty */
    /* Description: Inserts the given node into the tree RECURSIVELY based on its value */
    InsertRecursive(node,value)
    {
        /* Your Code Here */
        /* CALL ME RECURSIVELY! */
        if(value < node.value) {
            if(node.left == null) {
                var newNode = new BSTNode(value);
                node.left = newNode;
                // return node.left;
            }
            else this.InsertRecursive(node.left, value);
        }
        else
            if(node.right == null) {
                var newNode = new BSTNode(value);
                node.right = newNode;
                // return node.right;
            } 
            else this.InsertRecursive(node.right, newNode);
    }

    /* I'm just here to print your BST In-Order. */
    Log(node,fmt="")
    {
        if(!node) return fmt;
        fmt=this.Log(node.left,fmt);
        fmt+=node.value+"->";
        fmt=this.Log(node.right,fmt);
        return fmt;
    }
};
/*****************************************************************************/
/* Code Tests Below */
/*****************************************************************************/
let bst=new BST();

bst.root=new BSTNode(100);
bst.root.left=new BSTNode(50);
bst.root.right=new BSTNode(150);

bst.root.left.left=new BSTNode(25);
bst.root.left.right=new BSTNode(75);

bst.root.right.left=new BSTNode(125);
bst.root.right.right=new BSTNode(175);

bst.Insert(44);
console.log(bst.Log(bst.root));     /* Expected: 25->44->50->75->100->125->150->175-> */
bst.InsertRecursive(bst.root,22);
console.log(bst.Log(bst.root));        /* Expected: 22->25->44->50->75->100->125->150->175-> */