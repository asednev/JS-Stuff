/**
 * Created by Alexey Sednev
 */
var MergeSortedArrays = require('./MergeSortedArrays.js');

var result = MergeSortedArrays([
    [1,3,5,7],
    [2,4,6],
    [1,2,3,4,5,9,11],
    [8,9,10],
    [15]
]);

var array1=result;
var array2=[ 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 7, 8, 9, 9, 10, 11, 15 ];

var are_same = (array1.length == array2.length) && array1.every(function(element, index) {
        return element === array2[index];
    });

if(!are_same) throw "Output of MergeSortedArrays() does not match the expected output";

console.log("Test Completed successfully");
