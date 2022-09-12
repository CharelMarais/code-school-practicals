// Write function to calculate Hamming distance
// take 2 strings into array
// Use for loop to check strings
// Check each i element of the array and compare it
// If string1 i = string2 i add 1 to counter
// return number output hamstring distance

function calculateHammingDistance(firstString, secondString) {
  let count = 0;
  for (let i = 0; i < firstString.length; i++) {
    if (firstString[i] !== secondString[i]) {
      count++;
    }
  }
  return count;
}
let firstString = 'kathrin';
let secondString = 'kerstin';

console.log(
  `${firstString} and ${secondString} have a hamming distance of ${calculateHammingDistance(
    firstString,
    secondString
  )}`
);
