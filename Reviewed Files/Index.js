function reverse(numberToReverse) {
  let reversedNumber = '';

  for (let i = numberToReverse.length - 1; i >= 0; i--) {
    reversedNumber += numberToReverse[i];
  }

  return reversedNumber;
}

let numberToReverse = '8854588'; //prompt('Enter a Intigure: ');
if (reverse(numberToReverse) === numberToReverse) {
  console.log(numberToReverse, ' is a Palindrome');
} else {
  console.log(numberToReverse, ' is not a Palindrome');
}
