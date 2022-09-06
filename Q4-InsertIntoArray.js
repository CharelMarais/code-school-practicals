//Create function to insert char into char array
//functions takes array, index, and element

function insert(charArray, index, element) {
  //charArray[index] = element;
  charArray.splice(index, 0, element);
  return charArray;
}

let charArray = ['c', 'o', 'm', 'p', 'u', 't', 'r'];
let index = 8;
let element = 'e';

if (charArray.length <= index) {
  console.log(
    `The index(${index}) is looking for a longer array(${charArray.length})
Please decrease the index and try again`
  );
} else {
  console.log(`The array ${charArray} was altered at position ${index} and with the element ${element}
    The output is: ${insert(charArray, index, element)}`);
}
