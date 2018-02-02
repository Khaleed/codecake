const selectionSort = require("../selectionsort");

describe("selection sort", () => {
    it("sorts unsorted array ", () => {
        expect(selectionSort([5, 2, 1, 3, 6, 4])).toEqual([1, 2, 3, 4, 5, 6]);
    });
});
