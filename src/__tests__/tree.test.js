"use strict";

const tree = require("../tree.js");
const Tree = tree.Tree;

// describe is like a logical block/organise tests/tell a story
describe("Tree", function() {
    describe("#Node", function() {
        it("singleton tree should only contain one node", function() {
            let aTree = new Tree("Boss");
            expect(aTree.root.data).toEqual("Boss");
            expect(aTree.root.parent).toEqual(null);
            expect(Array.isArray(aTree.root.children)).toBeTruthy();
            expect(aTree.root.children.length == 0).toBeTruthy();
        });
    });
});
