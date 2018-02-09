//  You have an array of integers, and for each index you want to find the product of every integer // except the integer at that index.

/**
 * getProductsOfAllIntsExceptAtIndex :: [Int] -> [Int]
 *
 * produces the product of integers except the integer at that index
 */
const productOfIntsExceptAtIndex = xs => {
    let result = [];
    const highIndex = xs.length - 1;
    let acc;
    for (let i = 0; i <= highIndex; i++) {
        acc = 1;
        for (let j = 0; j < xs.length; j++) {
            if (i !== j) {
                acc *= xs[j];
            }
        }
        result.push(acc);
    }
    return result;
};

module.exports = productOfIntsExceptAtIndex;
