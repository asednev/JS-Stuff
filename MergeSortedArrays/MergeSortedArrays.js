/**
 * Created by Alexey Sednev
 */
var BinaryHeap = require('../BinaryHeap/BinaryHeap.js');

function MergeSortedArrays(arrayOfSortedArrays){

    if(!(arrayOfSortedArrays instanceof Array)) throw "arrayOfSortedArrays";

    var results = [];
    var index = 0;
    var heap = new BinaryHeap();

    do {

        for(var i = 0; i < arrayOfSortedArrays.length; i++) {

            if(arrayOfSortedArrays[i].length > index) {
                var value = arrayOfSortedArrays[i][index];
                heap.push(value);
            }

        }
        index++;

        if(heap.size() !== 0) {
            results.push(heap.pop());
        }

    } while(heap.size() > 0)

    return results;
}

if(module && module.exports) module.exports = MergeSortedArrays;