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

    /* I'm just here to print your BST In-Order. */
    Log(node,fmt="")
    {
        if(!node) return fmt;
        fmt=this.Log(node.left,fmt);
        fmt+=node.value+"->";
        fmt=this.Log(node.right,fmt);
        return fmt;
    }

    /* Ordering: Node, Left, Right */
    /* Description: Traverse / Iterate the tree Pre-Order. */
    PreOrder(node, fmt="")
    {
        if(!node) return fmt;
        fmt += node.value+"->";
        fmt = this.PreOrder(node.left,fmt);
        fmt = this.PreOrder(node.right,fmt);
        return fmt;
        /* Call me recursively */
        /* Call me recursively */
    }

    /* Ordering: Left, Node, Right */    
    /* Description: Traverse / Iterate the tree In-Order. */
    /* console.log(node.value) each node's value */
    InOrder(node, fmt="")
    {
        if(!node) return fmt;
        fmt = this.InOrder(node.left,fmt);
        fmt += node.value+"->";
        fmt = this.InOrder(node.right,fmt);
        return fmt;
        /* Call me recursively */
        /* Call me recursively */
    }

    /* Left, Right, Node */
    /* Description: Traverse / Iterate the tree Post-Order. */
    /* console.log(node.value) each node's value */
    PostOrder(node, fmt="")
    {
        if(!node) return fmt;
        fmt = this.PostOrder(node.left,fmt);
        fmt = this.PostOrder(node.right,fmt);
        fmt += node.value+"->";
        return fmt;
        /* Call me recursively */
        /* Call me recursively */
    }
};
/*****************************************************************************/
/* Code Tests Below */
/*****************************************************************************/
let bst=new BST();
bst.root=new BSTNode(100);
bst.root.left=new BSTNode(50);
bst.root.left.left=new BSTNode(25);
bst.root.left.right=new BSTNode(75);
bst.root.right=new BSTNode(150);
bst.root.right.left=new BSTNode(125);
bst.root.right.right=new BSTNode(175);
console.log(bst.Log(bst.root));
console.log(bst.PreOrder(bst.root));     /* Expected: 100 50 25 75 150 125 175 */
console.log(bst.InOrder(bst.root));     /* Expected: 25 50 75 100 125 150 175 */
console.log(bst.PostOrder(bst.root));   /* Expected: 25 75 50 125 175 150 100 */


