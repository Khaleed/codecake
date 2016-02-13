import {HashMap} from './hash';
import {mergeSort} from './mergeSort';

HashMap.hashCode('abc'); // return a number

HashMap.setVal('abc', 3);

HashMap.getVal('abc'); // return 3

let arr = [1, 2, 23, 14, 8, 5, 9];

mergeSort(arr); // [1, 2, 5, 8, 9, 14, 23];
