/**
 * Created by Alexey Sednev
 */

function BinaryHeap() {

    this.storage = [];

    function getParent(index) {

        if (index == 0) return 0;

        return Math.floor((index - 1) / 2);
    }

    function getLeft(index) {

        return 2 * index + 1;
    }

    function getRight(index) {

        return 2 * index + 2;
    }

    this.shift_up = function shift_up(index) {

        var parentIndex = getParent(index);
        if (parentIndex == index) return;

        var currentValue = this.storage[index];
        var parentValue = this.storage[parentIndex];

        if (currentValue <= parentValue) {

            var t = this.storage[parentIndex];

            this.storage[parentIndex] = this.storage[index];
            this.storage[index] = t;

        }

        this.shift_up(parentIndex);

    }

    this.shift_down = function shift_down(index) {

        if (index >= this.storage.length) return;

        var leftIndex = getLeft(index);
        var rightIndex = getRight(index);
        var nextIndex;

        var storage = this.storage;

        if (leftIndex < storage.length &&
            rightIndex < storage.length &&
            storage[rightIndex] < storage[leftIndex] &&
            storage[rightIndex] < storage[index]) {

            nextIndex = rightIndex;

        } else if (leftIndex < storage.length &&
            storage[leftIndex] <= storage[index]) {

            nextIndex = leftIndex;

        } else if (rightIndex < storage.length &&
            storage[rightIndex] <= storage[index]) {

            nextIndex = rightIndex;

        }

        if (nextIndex) {

            var t = storage[nextIndex];
            storage[nextIndex] = storage[index];
            storage[index] = t;

            this.shift_down(nextIndex);
        }
    }

}

BinaryHeap.prototype = {

    heapify: function(arr) {

        for(var i = 0; i < arr.length; i++) {

            this.push(arr[i]);

        }
    },

    push : function(value) {

        this.storage.push(value);
        this.shift_up(this.storage.length - 1);

    },

    pop : function() {

        var value = this.storage.shift();

        if(value != undefined) {

            var rightMost = this.storage.pop();
            if(rightMost != undefined) {
                this.storage.unshift(rightMost);
                this.shift_down(0);
            }

        }

        return value;
    },

    peek : function() {

        if(this.storage.length === 0) return undefined;

        return this.storage[0];

    },

    size : function() {

        return this.storage.length;
    }

}

if(module && module.exports) module.exports = BinaryHeap;