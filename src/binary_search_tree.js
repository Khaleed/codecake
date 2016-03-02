"use strict";

// Task: Implement a Binary Search Tree
function printData() {
    return this.data;
}

// Node constructor
function Node(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
    this.printData = printData;
}

// Binary Search Tree Class
function BST() {
    // root node
    this.root = undefined;
    // func to add new nodes
    this.addNewNode = addNewNode;
    // visit each node in ascending order
    this.ascendOrder = ascendOrder;
}

// func to add new nodes
function addNewNode(data) {
    // create Node object
    let node = new Node(data, undefined, undefined);
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
            // check if data is less than node key value
            if (data < currentNode.data) {
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


// Test BST
let tree = new BST();
