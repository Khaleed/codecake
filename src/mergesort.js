// implement a merge sort
let arr = [1, 8, 2, 4, 3, 7, 9];

let mergeList = (left, right) => {
    let result = [];
    let leftC = 0;
    var rightC = 0;
    // compare if the first elem in left > first elem in right
    while (leftC < left.length || rightC < right.length) {
        if (leftC === left.length) {
            result.push(right[rightC]);
            rightC += 1;
        } else if (rightC === right.length) {
            result.push(leftArr[leftC]);
        } else {
            if (left[leftC] < right[rightC]) {
                result.push(left[leftC]);
                leftC += 1;
            } else {
                result.push(right[rightC]);
                rightC += 1;
            }
        }
    }
    return result;
}

export function mergeSort(list) {
    // base case
    if (list.length <= 1) {
        return list;
    }
    // mid point
    let mid = Math.floor(list.length / 2);
    // split the list
    var left = list.slice(0, mid);
    var right = list.slice(mid, list.length);
    var sortedLeft = mergeSort(left);
    var sortedRight = mergeSort(right);
    return mergeList(sortedLeft, sortedRight);
}
