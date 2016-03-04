"use strict";

let assert = require('chai').assert;
let tree = require('../src/tree.js');
let Node = tree.Node;
let Tree = tree.Tree;

// describe is like a logical block/organise tests/tell a story
describe('Tree', function() {
    describe('#Node', function () {
        it('singleton tree should only contain one node', function () {
            let aTree = new Tree("Boss");
            assert(aTree.root.data == "Boss");
            assert(aTree.root.parent == null);
            assert(Array.isArray(aTree.root.children));
            assert(aTree.root.children.length == 0);
        });
    });
});
