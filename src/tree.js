"use strict";

/* Implement a tree data structure start with a function that creates a node each node holds data and has a parent or children */

function Node(data) {
    this.data = data;
    this.parent = null;
    this.children = [];
};

/* function that makes a tree
 start with a new instance of Node
 assign the Node as the root Node
 */

console.log(new Node('CEO'));
function Tree(data)  {
    let node = new Node(data);
    this.root = node;
};

// test
let CEO = new Tree("CEO");
console.log(CEO);
