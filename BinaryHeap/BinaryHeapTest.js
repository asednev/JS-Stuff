/**
 * Created by Alexey Sednev
 */
var BinaryHeap = require('./BinaryHeap.js');

console.time("heap1");
var heap1 = new BinaryHeap();
heap1.heapify([50,20,30]);

if(heap1.size() !== 3) throw "Heap size is wrong";
if(heap1.peek() !== 20) throw "Wrong element at the top";

heap1.push(10);

if(heap1.size() !== 4) throw "Heap size is wrong";
if(heap1.peek() !== 10) throw "Wrong element at the top";

if(heap1.pop() !== 10) throw "Wrong element at the top";
if(heap1.size() !== 3) throw "Heap size is wrong";

if(heap1.pop() !== 20) throw "Wrong element at the top";
if(heap1.size() !== 2) throw "Heap size is wrong";

if(heap1.pop() !== 30) throw "Wrong element at the top";
if(heap1.pop() !== 50) throw "Wrong element at the top";

if(heap1.size() !== 0) throw "Heap size is wrong";
if(heap1.pop() !== undefined) throw "Wrong state of the heap";

console.timeEnd("heap1");


console.time("heap2");
var heap2 = new BinaryHeap();
heap2.heapify([ 43, 47, 53, 23, 37, 41, 29, 31 ]);

var last =  heap2.pop();
while(last) { 

	var current = heap2.pop();

	if(current < last) { 

		throw "Wrong state of the heap";
	}

	last = current;

}
console.timeEnd("heap2");

console.log("Test Completed successfully");