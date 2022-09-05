//Take list of Voltage measurments
//1 for each hour of 12 hours
// function to calculate average
//return avg
// function to check if current reading is a 10% change from the avg
//return 12 bool array
//  function to check if current reading is more or less by 15% or more than the previous
// return .log output

function avgVoltMeasure(voltMeasurements) {
  let totalVolt = 0;
  for (let i = 0; i < 12; i++) {
    totalVolt += voltMeasurements[i];
  }
  return totalVolt / 12;
}

function avgVoltAltered(voltMeasurements, readingAverage) {
  let variesMoreThan10 = [];
  for (let i = 0; i < 12; i++) {
    // formula to check diffrence between avg and current reading
    let diffrenceToAvg =
      ((voltMeasurements[i] - readingAverage) /
        ((voltMeasurements[i] + readingAverage) / 2)) *
      100;
    //saving bool to array depending on % diffrence
    diffrenceToAvg >= 10 || diffrenceToAvg <= -10
      ? variesMoreThan10.push(true)
      : variesMoreThan10.push(false);
  }
  return variesMoreThan10;
}

function changeBetweenReadingsAvg(voltMeasurements, readingAverage) {
  // checking 15% or avg
  let avg15Percent = (readingAverage * 15) / 100;
  let variesBetweenReadings = [];
  for (let i = 0; i < 12; i++) {
    // 2 tests to check readings diffence before or after current readings abs used to keep it a positive int
    let testBelow = Math.abs(voltMeasurements[i - 1] - voltMeasurements[i]);
    let testAbove = Math.abs(voltMeasurements[i + 1] - voltMeasurements[i]);
    // testing and outputting if diffrence is more than 20 of the avg
    testAbove >= avg15Percent || testBelow >= avg15Percent
      ? console.log(true)
      : console.log(false);
  }
  return variesBetweenReadings;
}

let voltMeasurements = [
  221.7, 220.3, 190.3, 210.1, 216.5, 227.33, 185.3, 220.3, 218.45, 236.6, 200.4,
  217.4,
];
let readingAverage = avgVoltMeasure(voltMeasurements);

console.log(
  'Average: \n',
  readingAverage,
  '\n Voltage more or less than 10% of average: \n',
  avgVoltAltered(voltMeasurements, readingAverage),
  '\n Voltage more or less than 15% of the average between other readings: \n'
  //changeBetweenReadingsAvg(voltMeasurements, readingAverage)
);
changeBetweenReadingsAvg(voltMeasurements, readingAverage);
