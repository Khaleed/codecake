function selectionSort(unsorted) {
    var sortedList = [];
    var origLength = unsorted.length;
    for (var i = 0; i < origLength; i += 1) {
        // find smallest
        var smallestVal = unsorted[0];
        var smallestIndex = 0;
        for (var j = 1; j < unsorted.length; j+= 1) {
            // check if current elem is smaller than smallestVal
            if (unsorted[j] < smallestVal) {
                smallestVal = unsorted[j];
                smallestIndex = j;
            }
        }
        // push smallest to sortedList
        sortedList.push(smallestVal);
        // delete smallest from unsorted list
        unsorted.splice(smallestIndex, 1);
    }
    return sortedList;
}

var list1 = [14, 13, 12, 10, 9];

console.log(selectionSort(list1));

var list2 = [5, 95, 60, 55, 29, 75, 27,	18,	56, 5, 73, 29,	79,	36,	34,
             1,	87, 57, 58,	32];

console.log(selectionSort(list2));
