/*
Take an array of integers and determine if:
for any of the elements in the array, the sum of all the elements before the element
equals the sum of all the elements after it. Return true or false
*/

// [Int] -> Bool

// produce true if the sum of ints before and after are the same for any int or else return false

// const isSumBeforeEqualToSumAfter = (xs) => false;

/* const isSumBeforeEqualToSumAfter = (xs) => {

   ... xs

   [1, 2, 3] -> false

   i  xs[i]  sumBefore sumAfter  outcome
   0    1       0        5        false
   1    2       1        3        false
   2    3       3        0        false -> false

   [1, 2, 3, 3] -> true

   i  xs[i]  sumBefore sumAfter  outcome
   0    1       0        8         false
   1    2       1        6         false
   2    3       3        3         true -> true
   3    3       6        0         false
}

*/

// helper 1
const numsAfterFirst = (xs, elem) => xs.slice(elem, xs.length); // [1, 2, 3] -> [2, 3]

// helper 2
const sumAfterFirst = xs => xs.reduce((acc, x) => acc + x, 0);

const isSumBeforeEqualToSumAfter = xs => {
    let sumBefore;
    let previousSumBefore;
    let sumAfter;
    let previousSumAfter;
    // return early
    if (xs.length === 1) {
        return true;
    }
    // walk through array
    for (let i = 0; i < xs.length; i++) {
        // track sumBefore and sumAfter at the current elem
        if (i === 0) {
            sumBefore = 0;
            previousSumBefore = sumBefore;
            sumAfter = sumAfterFirst(numsAfterFirst(xs, xs[i]));
            previousSumAfter = sumAfter;
        } else {
            // sumBefore is previousSumBefore + previous elem
            sumBefore = previousSumBefore + xs[i - 1];
            previousSumBefore = sumBefore;
            // sumAfter is previousSumAfter - current elem
            sumAfter = previousSumAfter - xs[i];
            previousSumAfter = sumAfter;
        }
        // comparison
        if (sumBefore === sumAfter) {
            return true;
        }
    }
    return false;
};

// export function
module.exports = isSumBeforeEqualToSumAfter;
