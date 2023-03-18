const v8 = require('v8');
const heapSize = v8.getHeapStatistics().total_available_size;
const heapSizeInMB = heapSize / 1024 / 1024;
console.log(`The current heap size is ${heapSizeInMB} MB.`);