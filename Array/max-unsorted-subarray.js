function getMaxUnsortedIndices(arr) {
  if(arr.length === 1) return -1;
  let start = -1;
  for(let i = 0; i < arr.length - 1; i++) {
    if(arr[i] > arr[i + 1]) {
      start = i;
      break;
    }
  }
  if(start === -1) return [start];
  let end;
  for(let i = arr.length - 1; i >= 1; i--) {
    if(arr[i] < arr[i - 1]) {
      end = i;
      break;
    }
  }

  let max = arr[start], min = arr[start];
  for(let i = start; i <= end; i++) {
    max = Math.max(max, arr[i]);
    min = Math.min(min, arr[i]);
  }

  const ans = [];
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] > min) {
      ans.push(i);
      break;
    }
  }

  for(let i = arr.length - 1; i >= 0; i--) {
    if(arr[i] < min) {
      ans.push(i);
      break;
    }
  }

  return ans;
}

// console.log(getMaxUnsortedIndices([1, 3, 2, 4, 5]));
// console.log(getMaxUnsortedIndices([1, 2, 3, 4, 5]));
// console.log(getMaxUnsortedIndices([1, 1, 3, 3, 2, 4]));
// console.log(getMaxUnsortedIndices([1, 1, 3, 3, 2, 2, 4]));
// console.log(getMaxUnsortedIndices([1, 2, 3, 4, 5, 2, 3, 4]));
// console.log(getMaxUnsortedIndices([1, 2, 3, 4, 5, 2, 3, 4, 5, 6, 3, 4]));
console.log(getMaxUnsortedIndices([1, 2, 2, 3, 3, 5, 6, 6, 14, 17, 18, 17, 18, 15, 15, 17, 19, 14, 19, 18]));