/**
 * Suppose we could access yesterday's stock prices as an array, where:
 *
 * The indices are the time in minutes past trade opening time, which was 9:30am local time.
 * The values are the price in dollars of Apple stock at that time.
 * So if the stock cost $500 at 10:30am, stockPricesYesterday[60] = 500.
 *
 * Write an efficient function that takes stockPricesYesterday and returns the best profit
 * I could have made from 1 purchase and 1 sale of 1 Apple stock yesterday.
 *
 * Constraints: no shorting and you must not buy and sell in the same time step.
 *
 * I used a greedy approach to track best profit to get to O(n) run time and O(1) in space.
 *
 */

// Price is Number, Profit is Number
// interp. the price of a stock and profit from buying and selling apple stock
// const price = 10;
// const profit = 6;
// stub

/* const getMaxProfit = xs => {
     ... xs

     if list is less than two, throw error
     initialise variable to track lowest price -> default to first price in array
     initialise variable to track best profit -> default to first profit possible
     walk through the list of prices from the time we can sell a stock
         check if current profit (current price - lowest price) is greater than best profit
             set new best profit
         check if current price is less than lowest price
             set current price to new lowest price
     return best profit

 };
*/

// getMaxProfit :: [Price] -> Profit
const getMaxProfit = xs => {
    if (xs.length < 2) {
        throw "There has to be at least two prices to calculate a profit";
    }
    // set-up initial state
    let lowestPrice = xs[0]; // 10
    let bestProfit = xs[1] - xs[0]; // 10 - 10 = 0
    // walk through array from from the time I can sell
    for (let i = 1; i < xs.length; i++) {
        // track best profit
        if (xs[i] - lowestPrice > bestProfit) {
            bestProfit = xs[i] - lowestPrice;
        }
        // track lowest price
        if (xs[i] < lowestPrice) {
            lowestPrice = xs[i];
        }
    }
    return bestProfit;
};

module.exports = getMaxProfit;
