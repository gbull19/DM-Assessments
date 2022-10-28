const perf = require('execution-time')();

function doublerAppend(nums){
    let new_nums = [];
    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }
}

function doublerInsert(nums){
    let new_nums = [];
    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }
}

function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}

const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);



// How long does it take to double every number in a given 
// array? 

// Try it with first function
perf.start();                     // Starts timer
doublerAppend(mediumArray);
let resultsAppend = perf.stop();  // Stops timer and save time results


// Try it with second function
perf.start();
doublerInsert(mediumArray);
let resultsInsert = perf.stop();


console.log('Results for the mediumArray');
console.log("insert", resultsInsert.preciseWords);
console.log("append", resultsAppend.preciseWords);

/*
Extra Larrge Array
insert = 1.8419298 s
append = 0.0043345 s

Large Array
insert = 14.9968 ms
append = 0.8667 ms

Medium Array
insert = 822.8 μs
append = 399.0 μs

Small Array
insert = 81.6 μs
append = 164.4 μs

Tiny Array
insert 61.7 μs
append 267.7 μs

It appears that insert (unshift) is faster at lower array lengths than append (push) but append fairly quickly catches up to insert as array length increases. Around array lengths of 695 seem to be fairly equal in runtime on run conditions on my computer today. After this array length, append quickly starts surpassing the runtime results of insert

Append scales much better because it runs faster at larger array numbers than insert. Because insert will always need to allocate additional resources copying data and reallocating memory to help with the process of changing all index values for elements upon insertion of a new element, it is logical to expend runtimes of insert (unshift) to increase exponentially as array length increases. 

The curious case for me remains why insert functions better than append at lower array lenths since even at these values it still requires extra resource allocation. I would have expected performance at lower array lengths to be more similar at lower levels but for append to still outperform insert.
*/