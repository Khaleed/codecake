const getMaxProfit = require("../apple-stock");

describe("getMaxProfit", () => {
    describe("array with less than two prices", () => {
        it("throws an error", () => {
            expect(() => getMaxProfit([7])).toThrow();
        });
    });
    describe("array with two or more stock prices", () => {
        it("produces best profit from one purchase and one sale of an apple stock", () => {
            expect(getMaxProfit([10, 7])).toEqual(-3);
            expect(getMaxProfit([10, 7, 5, 8, 11, 9])).toEqual(6);
            expect(getMaxProfit([7, 10])).toEqual(3);
        });
    });
    describe("array with two more stock prices that stay the same", () => {
        it("produces best profit from one purchase and one sale of an apple stock", () => {
            expect(getMaxProfit([10, 10, 10, 10, 10, 10])).toEqual(0);
        });
    });
    describe("array with two more stock prices that keep going down", () => {
        it("produces best profit from one purchase and one sale of an apple stock", () => {
            expect(getMaxProfit([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0])).toEqual(
                -1
            );
        });
    });
});
