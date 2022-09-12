// Create sorting function
// sort by highest number to lowest
// but sorting them 1st at the start
// 2nd at the end
// 3rd start+1
// 4th end-1 ...

function alternatingSortHighToLowStartAndEndAlternating(unsortedArray) {
  let sortedArray = [];
  // Set new array to same length as initial array
  for (let x = 0; x < unsortedArray.length; x++) {
    sortedArray[x] = 0;
  }
  for (let i = 0; i < unsortedArray.length; i++) {
    // Sort even numbers of i from the start odd numbers from the end
    if (i % 2 === 0) {
      sortedArray[i / 2] = unsortedArray[i];
    } else {
      // .length use to get to end then - by half the odd numbers then - 0.5 to make it natural number
      sortedArray[unsortedArray.length - i / 2 - 0.5] = unsortedArray[i];
    }
  }
  return sortedArray;
}

let unsortedArray = [-8, 7, 7, -1, 14, 5, 0, 2];

// Initial sort list from high to low
unsortedArray.sort(function (a, b) {
  if (a > b) return -1;
  if (a < b) return 1;
  return 0;
});

console.log(
  `The alternating descending sort for ${unsortedArray} is ${alternatingSortHighToLowStartAndEndAlternating(
    unsortedArray
  )}`
);
