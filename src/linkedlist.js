"use strict";

/**Array is one large contiguous block of memory
   you get random access in constant time O(1)
   for a linked list, data is stored in non-contigous block of memory
   each node has two parts, one to store the data and the other to store a pointer to the next data
   and access and insertion time is O(n)
   we can create and delete nodes as when we want
   you don't have to guess the size of the list beforehand
 **/

// create constructor for LinkedList
function LinkedList() {
    this.head = null;
}

// check if a list is empty
LinkedList.prototype.isEmpty = function () {
    return this.head === null;
};

// check the number of nodes on a list
LinkedList.prototype.size = function() {
    // temp variable to keep account of current node

};
