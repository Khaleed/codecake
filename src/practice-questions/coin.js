/**
 * Your quirky boss collects rare, old coins...
 * They found out you're a programmer and asked you to solve something they've been wondering for a long time.
 * Write a function that, given:
 * an amount of money
 * an array of coin denominations
 * computes the number of ways to make the amount of money with coins of the available denominations.
 *
 * Example: for amount=4 (4¢) and denominations=(1¢, 2¢ and 3¢),
 * your program would output 4—the number of ways to make 4¢ with those denominations:
 *
 * 1¢, 1¢, 1¢, 1¢
 * 1¢, 1¢, 2¢
 * 1¢, 3¢
 * 2¢, 2¢
 */

// numOfWays :: Amount, [Denomination] -> Int
// intrep. Amount as the amount of money and denomination as a list of coins
// const numOfWays = (amount, denominations) => {
//     return 0;
// };

/* const possibleDenominations = (amount, denominations) => {
   // initialise result to 0
   // walk over the denominations
       // walk over the possible number of times we can use denominations without exceeding amount
           // increment result by recursively calling function with the remaining amount and otherDenominations
   // return result
}
*/

class Change {
    constructor() {
        this.memo = {};
    }
    possibleDenominations(remainingAmount, denominations, index = 0) {
        // memo
        let key = [remainingAmount, index].join(", ");
        console.log("key is: ", key);
        // check if we have given inputs in memo
        if (this.memo.hasOwnProperty(key)) {
            return this.memo[key];
        }
        // base case
        if (remainingAmount === 0) {
            return 1;
        }
        // check if we are over the remaining amount
        if (remainingAmount < 0) {
            return 0;
        }
        // check if we still have any denominations left
        if (index === denominations.length) {
            return 0;
        }
        // select a coin from denominations
        let coin = denominations[index];
        // check the number of times we can use the coin to get the remaining amount of money
        let possibilities = 0; // 1
        while (remainingAmount >= 0) {
            possibilities += this.possibleDenominations(
                remainingAmount,
                denominations,
                index + 1
            );
            remainingAmount -= coin;
        }
        // save answers to memo
        this.memo[key] = possibilities;
        return possibilities;
    }
}

const numOfWays = new Change().possibleDenominations;

module.exports = numOfWays;
