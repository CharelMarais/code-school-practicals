// Create 2 functions to sort arrays
// 1st function sort double array into descending order
// 2nd function to sort char array into alphabetical order

function descendingSelectionSortDouble(doubleArray) {
  for (let i = 0; i < doubleArray.length; i++) {
    let lowest = i;
    // inner loop to check the lowest value after position i
    for (let a = i + 1; a < doubleArray.length; a++) {
      if (doubleArray[i] < doubleArray[a]) {
        lowest = a;
      }
    }
    // if to swap array at i with the lowest array after i
    if (lowest !== i) {
      let temp = doubleArray[i];
      doubleArray[i] = doubleArray[lowest];
      doubleArray[lowest] = temp;
    }
  }
  return doubleArray;
}
// sort using .sort()
function selectionSortChar(charArray) {
  return charArray.sort();
}

let doubleArray = [123, 124, 412, 5235, 34234, 123, 1];
let charArray = ['a', 'e', 't', 'c'];

console.log(`The array ${doubleArray} is sorted as ${descendingSelectionSortDouble(
  doubleArray
)}
The array ${charArray} is sorted as ${selectionSortChar(charArray)}`);
