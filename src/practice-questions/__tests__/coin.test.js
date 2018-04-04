const numOfWays = require("../coin");

describe("numOfWays", () => {
    it.only("computes number of ways to make an amount of money with coin denominations", () => {
        expect(numOfWays(4, [1, 2, 3])).toBe(4);
    });
});
