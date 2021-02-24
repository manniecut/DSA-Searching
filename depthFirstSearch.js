const Queue = require("./queue");

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

    bfs(tree, values = []) {    //bfs function taking in tree, and values - default empty

        const queue = new Queue();  // create a queue
        const node = tree.root;     // start with root node
        queue.enqueue(node);    // add current node to queue

        while (queue.length) {      // as long as there is a queue
            const node = queue.dequeue();   // take node from queue
            values.push(node.value);    // add value to the array

                // after that is done, the same node's childs if any, are added to queue, triggering the queue loop to continue
            if (node.left) {    // add left child to queue
                queue.enqueue(node.left);
            }
            if (node.right) {   // add right child to queue
                queue.enqueue(node.right);
            }
        }


        // when the queue is empty, and all of the children have been added to array, return result
        return values;
    }

}

