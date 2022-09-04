//1. Split number to individual int
//2. Sum the intigers
//3. Is less than 20 retuned continue else back to step 1.
//4. Devide by 3
//5. Any mod not devisible

function reduce(number) {
  let singleInt = 0;
  let sumInts = 0; //Total

  while (number > 10) {
    //singleInt += number % 10; //Gets last number
    sumInts += number % 10;
    //sumInts += singleInt; // Adds 10< ints together
    //singleInt = 0; // Reset
    number = Math.floor(number / 10); // Removes used int
  }
  sumInts += number; // Adds last single int

  return sumInts;
}

let number = 172;
let reduced = reduce(number); //Output
while (reduced >= 20) {
  reduced = reduce(reduced);
} // While checking output is less than 20

console.log(
  `The number ${number} is ${
    reduced % 3 !== 0 ? 'not ' : '' // if number mod 3 checking output
  }divisible by 3`
);
