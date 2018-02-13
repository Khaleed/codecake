const p = require("../product-of-integers");

describe("getProductsOfAllIntsExceptAtIndex", () => {
    it("produces the product of integers except the integer at that index", () => {
        expect(p.getProductsOfAllIntsExceptAtIndex([1, 2, 3])).toEqual([
            6,
            3,
            2
        ]);
        expect(p.getProductsOfAllIntsExceptAtIndex([1, 2, 3, 4])).toEqual([
            24,
            12,
            8,
            6
        ]);
        expect(p.getProductsOfAllIntsExceptAtIndex([1, 7, 3, 4])).toEqual([
            84,
            12,
            28,
            21
        ]);
    });
});

describe("productOfIntsExceptAtIndex", () => {
    it("produces product of integers using a greedy approach", () => {
        expect(p.productOfIntsExceptAtIndex([1, 2, 3, 4, 5])).toEqual([
            120,
            60,
            40,
            30,
            24
        ]);
    });
});
