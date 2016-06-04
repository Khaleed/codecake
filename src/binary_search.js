"use strict";

// Implement Binary Search Algorithm on a list that is sorted in ascending order
let binarySearch = (key, list, min, max) => {

    // base case is that key is not even in the list
    if (max < min) {
        return -1;
    }
    // find a midpoint

    // check if value at the midpoint is > or < key

    // if it is < key, this means that we can ignore whatever is on the left side of midpoint value & we update min & max

    // if it is > key, this means we can ignore whatever is on the right side of the midpoint value & we update min & max

    // else if the midpoint value === key then we simply return the value at the midpoint
};
