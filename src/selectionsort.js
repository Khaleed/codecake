/**
 * Finds the smallest unsorted element and adds it to the end of a sorted list.
 *
 * Time Complexity in worst case is 0(n^2) since we have to iterate
 * over each of the n elements in of the list to find the smallest unsorted elements
 * and repeat this process n times as only one element gets sorted on each pass.
 *
 * Time complexity in best case is Ω(n^2) since there is no gurantee the list is sorted
 * until we go through the process n times for each element (until we actually run selection sort).
 *
 * Space Complexity is constant at O(1) because we are pushing smallest element to sorted array
 * which is a constant operation.
 *
 */

// findSmallest :: Array -> Number
const findSmallest = xs => {
    // begin with first elem in list
    let acc = xs[0];
    // store smallest elem
    let smallest;
    for (let i = 0; i < xs.length; i += 1) {
        if (acc < xs[i]) {
            smallest = acc;
        } else {
            smallest = xs[i];
            acc = smallest;
        }
    }
    return smallest;
};

// selectionSort :: UnsortedArray -> SortedArray
const selectionSort = xs => {
    const sorted = [];
    // as long as there are no unsorted values
    while (xs.length !== 0) {
        // find the smallest in unsorted
        const smallest = findSmallest(xs);
        // remove smallest from unsorted
        const smallestIndex = xs.indexOf(smallest);
        xs.splice(smallestIndex, 1);
        // add smallest to sorted
        sorted.push(smallest);
    }
    return sorted;
};

module.exports = selectionSort;
