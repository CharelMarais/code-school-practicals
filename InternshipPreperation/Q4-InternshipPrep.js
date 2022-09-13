// Use a spring of only 2 characters
// Create a formula that counts the number of characters that
// are not adjacent to the same character
// for loop to check array
// check if char ar position i is !== to array i-1 or i+1
// if not count + 1
// return count

function countNonMatchingAdjacentCharacters(twoCharString) {
  let count = 0;
  for (let i = 0; i < twoCharString.length; i++) {
    // if to check the first char only to the next position
    // OR last char only to the previous position
    if (
      (i === 0 && twoCharString[i] !== twoCharString[i + 1]) ||
      (i === twoCharString - 1 && twoCharString[i] !== twoCharString[i - 1])
    ) {
      count++;
    } else {
      // if used to check for Non-Matching adjacent characters
      if (
        twoCharString[i] !== twoCharString[i - 1] &&
        twoCharString[i] !== twoCharString[i + 1]
      ) {
        count++;
      }
    }
  }
  return count;
}

let twoCharString = 'abbabaaaababbbaa';

console.log(
  `The string ${twoCharString} has ${countNonMatchingAdjacentCharacters(
    twoCharString
  )} Non-Matching adjacent characters`
);
