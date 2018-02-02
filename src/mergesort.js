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

const xs = [1, 3, 5, 7, 9];
const ys = [2, 4, 6];
console.log(`I'm merging two sorted lists: ${merge(xs, ys)}`); //=> [1, 2, 3, 4, 5, 6, 7, 9]

/**
 * MergeSort splits unsorted list into two sub lists, sorts them, and then merges them.
 * Time complexity of this algorithm is O(n log(n)) -> n log10(n) -> where n is 1000, log10(1000) = x -> 10^x = 1000 -> 10.10.10 -> n^3 -> 3
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

const unsortedXs = [1, 8, 2, 4, 3, 7, 9];
console.log(`Applying merge sort to unsorted list: ${mergeSort(unsortedXs)}`); // => [1, 2, 3, 4, 7, 8, 9];
