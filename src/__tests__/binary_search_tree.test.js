"use strict";

let Tree = require("../binary_search_tree.js");
let BST = Tree.BST;

describe("Binary Search Tree", function() {
    describe("addNewNode to BST", function() {
        it("adds nodes to the BST", function() {
            let tree = new BST();
            tree.addNewNode(23);
            tree.addNewNode(45);
            tree.addNewNode(16);
            tree.addNewNode(37);
            tree.addNewNode(3);
            tree.addNewNode(99);
            tree.addNewNode(22);
            expect(tree.root.value).toEqual(23);
            expect(tree.root.right.value).toEqual(45);
            expect(tree.root.left.value).toEqual(16);
            expect(tree.root.right.left.value).toEqual(37);
            expect(tree.root.left.left.value).toEqual(3);
            expect(tree.root.right.right.value).toEqual(99);
            expect(tree.root.left.right.value).toEqual(22);
        });
    });
});
