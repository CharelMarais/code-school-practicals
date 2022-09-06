// Create 2 functions to sort arrays
// 1st function sort double array into descending order
// 2nd function to sort char array into alphabetical order

let doubleArray = [123, 124, 412, 5235, 34234, 123, 1];
let charArray = ['a', 'e', 'c', 'o', 'm', 'p', 'u', 't', 'r', 't', 'c'];

doubleArray.sort(function (a, b) {
  if (a > b) return -1;
  if (a < b) return 1;
  return 0;
});

charArray.sort();

console.log(`The double array is sorted as ${doubleArray}
The char array is sorted as ${charArray}`);
