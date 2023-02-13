function sliceArray(array, begindex, endindex) {
  // if no parameter is passed return the array
  if (!begindex && !endindex) {
    return array;
  }

  // if only beginning index is found set index to size
  endindex = array.length;
  let partArray = [];
  // if both begin and end index return the part of the array
  for (let i = begindex; i < endindex; i++) {
    partArray.push(array[i]);
  }

  return partArray;
}

sliceArray([1, 2, 3, 4], 1, 2);
