"use strict";

/*
 Implement a Binary Search Tree
 */

// first create Node constructor

function printData() {
    return this.data;
}
console.log("hi");
function Node(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
    this.printData = printData;
}

let CEO = new Node("CEO", "VP", "COO");

console.log(CEO);
