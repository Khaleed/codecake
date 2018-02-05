"use strict";

/**
 * merge takes two sorted lists and merges them to produce a new sorted list
 *
 * merge :: (SortedArray, SortedArray) -> SortedArray
 */
const merge = (xs, ys) => {
    // create new list
    const zs = [];
    // create two pointers
    let xsPointer = 0;
    let ysPointer = 0;
    // as long as either pointer is less than the length of the list it's pointing to
    while (xsPointer < xs.length || ysPointer < ys.length) {
        // check pointer is equal to length of list
        if (xsPointer === xs.length) {
            // add y to zs
            zs.push(ys[ysPointer]);
            // move pointer to the right
            ysPointer += 1;
        } else if (ysPointer === ys.length) {
            // add x to zs
            zs.push(xs[xsPointer]);
            // move pointer to the right
            xsPointer += 1;
        } else if (xs[xsPointer] < ys[ysPointer]) {
            zs.push(xs[xsPointer]);
            xsPointer += 1;
        } else {
            zs.push(ys[ysPointer]);
            ysPointer += 1;
        }
    }
    return zs;
};

/**
 * MergeSort splits unsorted list into two sub lists, recursively sorts them, and then merges them.
 *
 * Time complexity of this algorithm is O(n log(n)) with an upper bound of 6n log2(n) + 6n operations.
 * This is a win because of the benefits of the divide & conquer paradigm as each time.
 *
 * Space complexity is O(n).
 *
 * mergeSort :: (UnsortedArray) -> SortedArray
 */
const mergeSort = xs => {
    // base case
    if (xs.length <= 1) {
        return xs;
    } else {
        // find mid-point
        const mid = Math.floor(xs.length / 2);
        // split xs into sub-lists
        const ys = xs.slice(0, mid);
        const zs = xs.slice(mid, xs.length);
        // sort sub-lists
        const sortedYs = mergeSort(ys);
        const sortedZs = mergeSort(zs);
        return merge(sortedYs, sortedZs);
    }
};

module.exports = mergeSort;
