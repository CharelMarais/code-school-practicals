// Create custom array sorting functions
// items in the arrays should stay linked to what is initialized
// 1st function should sort both arrays by student number
// 2nd function should sort both arrays by student mark
// 3rd function should return student info linked to a searched student number

function customSort2ArraysByStudentNumber(studentNumber, studentMarks) {
  for (let i = 0; i < studentNumber.length; i++) {
    for (let a = i + 1; a < studentNumber.length; a++) {
      // If to swap array at i position if position a is lower
      if (studentNumber[a] < studentNumber[i]) {
        let temp = studentNumber[i];
        studentNumber[i] = studentNumber[a];
        studentNumber[a] = temp;

        // Swap to keep Marks linked to Numbers
        let temp2 = studentMarks[i];
        studentMarks[i] = studentMarks[a];
        studentMarks[a] = temp2;

        i--; // this will start the next outer loop from the changed item position to find any smaller items.
      }
    }
  }
  console.log(`\nThese are the student details sorted by student numbers.
  \tStudent Numbers: \tStudent Marks:`);
  for (let x = 0; x < studentNumber.length; x++) {
    console.log(`\t${studentNumber[x]} \t\t\t${studentMarks[x]}`);
  }
}

function customSort2ArraysByStudentMarks(studentNumber, studentMarks) {
  for (let i = 0; i < studentMarks.length; i++) {
    for (let a = i + 1; a < studentMarks.length; a++) {
      // If to swap array at i position if position a is lower
      if (studentMarks[a] < studentMarks[i]) {
        let temp = studentMarks[i];
        studentMarks[i] = studentMarks[a];
        studentMarks[a] = temp;

        // Swap to keep Numbers linked to Marks
        let temp2 = studentNumber[i];
        studentNumber[i] = studentNumber[a];
        studentNumber[a] = temp2;

        i--; // this will start the next outer loop from the changed item position to find any smaller items.
      }
    }
  }
  console.log(`\nThese are the student details sorted by student marks.
      \tStudent Numbers: \tStudent Marks:`);
  for (let x = 0; x < studentNumber.length; x++) {
    console.log(`\t${studentNumber[x]} \t\t\t${studentMarks[x]}`);
  }
}

function displayStudentDetailsBySearchedStudentNumber(
  studentNumber,
  studentMarks,
  searchedNumber
) {
  // numberFound used to check if the number searched is listed as a student number
  let numberFound = false;
  let linkedMark;
  for (let i = 0; i < studentNumber.length; i++) {
    // if to check where the student and search number match
    if (studentNumber[i] === searchedNumber) {
      numberFound = true;
      linkedMark = studentMarks[i];
    }
  }
  console.log(
    `${
      numberFound === true
        ? `\nThe student number: ${searchedNumber} has the following mark assigned: ${linkedMark}\n`
        : `\nThe student number: ${searchedNumber} has not been found in the system.\n`
    }`
  );
}

let studentNumber = [123465, 132465, 2654, 46884, 54213, 32465];
let studentMarks = [80, 25, 10, 100, 59, 69];
let searchedStudentNumber = 13265;

// all functions output display within the functions
customSort2ArraysByStudentNumber(studentNumber, studentMarks);
customSort2ArraysByStudentMarks(studentNumber, studentMarks);
displayStudentDetailsBySearchedStudentNumber(
  studentNumber,
  studentMarks,
  searchedStudentNumber
);
