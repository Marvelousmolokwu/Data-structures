const array = [];
// length of array
let length = 6;
let sizeOfIndex = length - 1;
let last = 0;
// lf length -1 is the last index then a space is empty i
// the last position in array that is filled

function isEmpty() {
  if (length - (last + 1) > 0) {
    return true;
  } else {
    return false;
  }
}
console.log(isEmpty());
function isFull() {
  if (length - last === 1) {
    return true;
  } else {
    return false;
  }
}
console.log(isFull());
function isAdd() {
  let empty = isEmpty();
  let full = isFull();
  if (empty === true && full === false) {
    return (last += 1), length++;
  } else {
    return false;
  }
}
console.log(isAdd());
