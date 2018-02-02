const mergeSort = require("../mergesort");

describe("mergeSort", () => {
    it("recursively sorts unsorted list", () => {
        expect(mergeSort([1, 8, 2, 4, 3, 7, 9])).toEqual([1, 2, 3, 4, 7, 8, 9]);
        expect(mergeSort([5, 2, 1, 3, 6, 4])).toEqual([1, 2, 3, 4, 5, 6]);
    });
});
