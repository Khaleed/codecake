const getProductsOfAllIntsExceptAtIndex = require("../product-of-integers");

describe("getProductsOfAllIntsExceptAtIndex", () => {
    it("produces the product of integers except the integer at that index", () => {
        expect(getProductsOfAllIntsExceptAtIndex([1, 2, 3])).toEqual([6, 3, 2]);
        expect(getProductsOfAllIntsExceptAtIndex([1, 2, 3, 4])).toEqual([
            24,
            12,
            8,
            6
        ]);
        expect(getProductsOfAllIntsExceptAtIndex([1, 7, 3, 4])).toEqual([
            84,
            12,
            28,
            21
        ]);
    });
});
