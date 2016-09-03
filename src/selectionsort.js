const selectionSort = unsorted => {
    let sortedList = [];
    let origLength = unsorted.length;
    for (let i = 0; i < origLength; i += 1) {
        // find smallest
        let smallestVal = unsorted[0];
        let smallestIndex = 0;
        for (let i = 1; i < unsorted.length; i += 1) {
            // check if current elem is smaller than smallestVal
            if (unsorted[i] < smallestVal) {
                smallestVal = unsorted[i];
                smallestIndex = i;
            }
        }
        // push smallest to sortedList
        sortedList.push(smallestVal);
        // delete smallest from unsorted list
        unsorted.splice(smallestIndex, 1);
    }
    return sortedList;
};

let list1 = [14, 13, 12, 10, 9];

console.log(selectionSort(list1));

let list2 = [5, 95, 60, 55, 29, 75, 27,	18,	56, 5, 73, 29,	79,	36,	34,
             1,	87, 57, 58,	32];

console.log(selectionSort(list2));
