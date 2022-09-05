//Takes range of ages 0 - 109
//dispaly total ages withing ranges
// 0-9 10-19 20-29 ...

let age = [12, 9, 100, 58];
let btmRange = [0];
let topRange = [];
let ageTotals = [];
console.log('Total listed ages in age range:');
//for loop to create ranges
for (let i = 0; btmRange[i] <= 100; i++) {
  let count = 0;
  btmRange.push((i + 1) * 10);
  topRange.push(btmRange[i] + 9);

  //inner loop to calculate number for each age group
  for (let a = 0; a < age.length; a++) {
    if (age[a] >= btmRange[i] && age[a] <= topRange[i]) {
      count++;
    }
  }
  ageTotals.push(count);
  console.log(btmRange[i], '-', topRange[i], '  \tTotal: ', ageTotals[i]);
}
