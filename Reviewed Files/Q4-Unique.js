//Read list of numbers
//Output only unique values
//loop through list
//secondary inner loop to check if unique

let numbers = [4, 6, 9, 23, 6, 8, 6, 7, 8];
let uniqueNumbers = [];
let count = 0;

for (let i = 0; i < numbers.length; i++) {
  count = 0;
  for (let a = 0; a < numbers.length; a++) {
    // inner loop to check current num to the list checking from current I downwards
    if (numbers[a] === numbers[i]) {
      //adding counter to check previous iterations
      count++;
    }
  }
  if (count === 1) {
    //if checking if more than 1 iteration
    uniqueNumbers.push(numbers[i]); // saving unique to new list/array
  }
}

console.log(
  `The list ${numbers} have the following unique numbers ${uniqueNumbers}`
);
