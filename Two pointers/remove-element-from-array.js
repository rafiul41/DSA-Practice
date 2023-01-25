function removeElement(arr, x) {
  let toInsertPos = -1;
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] !== x && toInsertPos !== -1) {
      arr[toInsertPos++] = arr[i];
      arr[i] = x;
    } else if(arr[i] === x && toInsertPos === -1) {
      toInsertPos = i;
    }
  }

  while(arr.length > 0 && arr[arr.length - 1] === x) {
    arr.pop();
  }
  console.log(arr);
  return arr.length;
}

console.log(removeElement([3, 3, 0, 2, 1, 2, 1, 0], 0));
console.log(removeElement([4, 1, 1, 2, 1, 3], 1));
console.log(removeElement([1, 1, 2, 1, 3], 1));
console.log(removeElement([1, 1, 1, 1, 3], 1));
console.log(removeElement([4, 2, 3, 2, 8, 3], 1));
console.log(removeElement([1, 1, 1, 1, 1], 1));