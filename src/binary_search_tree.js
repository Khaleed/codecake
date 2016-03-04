"use strict";

/* Task:
 Implement a Binary Search Tree
 */

// Node constructor
function Node(value, left, right) {
    this.value = value;
    this.left = left;
    this.right = right;
}

Node.prototype.print = function() {
    return this.value;
};

// Binary Search Tree Class
function BST() {
    // root node
    this.root = undefined;
}

// func to add new nodes
BST.prototype.addNewNode = function(value) {
    // create Node object
    const node = new Node(value, undefined, undefined);
    // check if BST has a root node
    if (this.root === undefined) {
        // set root node
        this.root = node;
    } else {
        // traverse the BST to find the correct node insertion point
        // start from the current node and keep moving from level to level in BST
        let currentNode = this.root;
        // define the parent node
        let parent;
        // set up a loop that breaks once the correct insertion point is determined
        while (true) {
            parent = currentNode;
            // check if value is less than node key value
            if (value < currentNode.value) {
                // point node to the left of the currentNode
                currentNode = currentNode.left;
                // check if the left of the currentNode is empty
                if (currentNode === undefined) {
                    parent.left = node;
                    break;
                }
            } else {
                // point node to the right of the current node
                currentNode = currentNode.right;
                // check if the right of the currentNode is empty
                if (currentNode === undefined) {
                    parent.right = node;
                    break;
                }
            }
        }
    }
};

// function to traverse BST in ascending order of node values
BST.prototype.inOrder = (node) => {
    // traverse the BST in order
    if (node !== undefined) {
        // visit left side of the node
        this.inOrder(node.left);
        console.log(node.print)
        // visit right side of the node
        this.inOrder(node.right);
    }
};

// Test BST
let tree = new BST();

module.exports = {
    BST: BST,
    Node: Node
};
