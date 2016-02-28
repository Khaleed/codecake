/* Implement a tree data structure
   start with a function that creates a node
   each node holds data and has a parent or children
 */

let Node = data => {
    this.data = data;
    this.parent = null;
    this.children = [];
};

/* function that makes a tree
   start with a new instance of Node
   assign the Node as the root Node
 */
let Tree = data => {
    let node = new Node(data);
    this.root = node;
};

// test
