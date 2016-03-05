"use strict";

let assert = require('chai').assert;
let Tree = require('../src/binary_search_tree.js');
let Node = Tree.Node;
let BST = Tree.BST;

describe('Binary Search Tree', function() {
    describe('addNewNode to BST', function () {
        it('function should add nodes to the BST', function () {
            let tree = new BST();
            // level 0 root value
            tree.addNewNode("23");
            // level 1 right value
            tree.addNewNode("45");
            // level 1 left value
            tree.addNewNode("16");
            // level 2 right value
            tree.addNewNode("37");
            // level 2 left value
            tree.addNewNode("3");
            assert.strictEqual(tree.root.value, "23");
            assert.strictEqual(tree.root.right.value, "45");
            assert.strictEqual(tree.root.left.value, "16");
        });
    });
});
