class BinarySearchTree {
    constructor(key = null, value = null, parent = null) {
        this.key = key;
        this.value = value;
        this.parent = parent;
        this.left = null;
        this.right = null;
    }

    dfs(values=[]) {    // dfs function taking in values array - default empty
        
        if(this.left) { // if there is a node (left/lowest goes first), 
            values = this.left.dfs(values); // recursive function on node
        }
        values.push(this.value); // when there are no more nodes, add value to array

        if (this.right) {  // if there is a right node, 
            values = this.right.dfs(values);    // recursive function on node
        }   // this makes sense because if left populates first, 
            // going right should dead end with left leaf nodes
            
        return values
    }

}

