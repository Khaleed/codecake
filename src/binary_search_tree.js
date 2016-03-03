"use strict";

// Task: Implement a Binary Search Tree
// Node constructor
function Node(value, left, right) {
    this.value = value;
    this.left = left;
    this.right = right;
}

Node.prototype.printData = () => {
    return this.value;
};

// Binary Search Tree Class
function BST() {
    // root node
    this.root = undefined;
}

// func to add new nodes
BST.prototype.addNewNode = value => {
    // create Node object
    let node = new Node(value, undefined, undefined);
    // check if BST has a root node
    if (this.root === null) {
        // set root node
        this.root = node;
    } else {
        // traverse the BST to find the correct node insertion point
        // start from the current node and keep moving from level to level in the BST
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
}

// function to traverse BST in ascending order
BST.prototype.inOrder = () => {
    // traverse the BST in order

};

// Test BST
let tree = new BST();
