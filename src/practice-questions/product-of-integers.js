// You have an array of integers, and for each index you want to find the product
// of every integer except the integer at that index.

/**
 * getProductsOfAllIntsExceptAtIndex :: [Int] -> [Int]
 *
 * produces the product of integers except the integer at that index
 */

// brute force solution
const getProductsOfAllIntsExceptAtIndex = xs => {
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

// the run time for the brute-force solution is O(n^2) can we do better?
// yes, we can use a greedy approach
// we can store each product so far and then multiply by the next integer
const productOfIntsExceptAtIndex = xs => {
    const result = [];
    let product = 1;
    if (xs.length < 2) {
        throw "the size of input is too small";
    }
    // get products of ints before the int at index
    for (let i = 0; i < xs.length; i++) {
        result.push(product);
        product *= xs[i];
    }
    product = 1;
    // get products of ints after the int at index
    for (let j = xs.length - 1; j >= 0; j--) {
        result[j] *= product;
        product *= xs[j];
    }
    return result;
};

module.exports = {
    getProductsOfAllIntsExceptAtIndex: getProductsOfAllIntsExceptAtIndex,
    productOfIntsExceptAtIndex: productOfIntsExceptAtIndex
};
