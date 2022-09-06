// Create 2 functions to sort arrays
// 1st function sort double array into descending order
// 2nd function to sort char array into alphabetical order

function descendingSelectionSortDouble(doubleArray) {
  for (let i = 0; i < doubleArray.length; i++) {
    for (let a = i + 1; a < doubleArray.length; a++) {
      // If to swap array at i position if position a is lower
      if (doubleArray[a] > doubleArray[i]) {
        let temp = doubleArray[i];
        doubleArray[i] = doubleArray[a];
        doubleArray[a] = temp;
        i--; // this will start the next outer loop from the change item to find any smaller items.
      }
    }
  }
  return doubleArray;
}

function selectionSortChar(charArray) {
  for (let i = 0; i < charArray.length; i++) {
    for (let a = i + 1; a < charArray.length; a++) {
      // If to swap array at i position if position a is lower
      if (charArray[a] < charArray[i]) {
        let temp = charArray[i];
        charArray[i] = charArray[a];
        charArray[a] = temp;
        i--; // this will start the next outer loop from the change item to find any smaller items.
      }
    }
  }
  return charArray;
}

// sort using .sort()
function SortChar(charArray) {
  return charArray.sort();
}

let doubleArray = [123, 124, 412, 5235, 34234, 123, 1];
let charArray = ['a', 'e', 'c', 'o', 'm', 'p', 'u', 't', 'r', 't', 'c'];

console.log(`The array ${doubleArray} is sorted as ${descendingSelectionSortDouble(
  doubleArray
)}
The array ${charArray} is sorted as ${selectionSortChar(charArray)}`);
