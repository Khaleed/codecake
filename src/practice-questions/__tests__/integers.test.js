const isSumBeforeEqualToSumAfter = require("../integers");

describe("isSumBeforeEqualToSumAfter", () => {
    it("produces true if sum of integers before and after a given int are the same", () => {
        expect(isSumBeforeEqualToSumAfter([1, 2, 3])).toEqual(false);
        expect(isSumBeforeEqualToSumAfter([1, 2, 3, 3])).toEqual(true);
    });
});
