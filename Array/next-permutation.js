function sortSorted(arr, start, end) {
  while(start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++; end--;
  }
}

function getGreaterThanElementInd(arr, ele) {
  for(let i = arr.length - 1; i >= 0; i--) {
    if(arr[i] > ele) {
      return i;
    }
  }
  return -1;
}

function next(arr) {
  let start = -1;
  for(let i = arr.length - 1; i >= 1; i--) {
    if(arr[i - 1] < arr[i]) {
      start = i;
      break;
    }
  }

  if(start === -1) {
    sortSorted(arr, 0, arr.length - 1);
    return arr;
  }

  const greaterThanElementInd = getGreaterThanElementInd(arr, arr[start - 1]);
  [arr[greaterThanElementInd], arr[start - 1]] = [arr[start - 1], arr[greaterThanElementInd]];

  sortSorted(arr, start, arr.length - 1);

  return arr;
}

console.log(next([1]));
console.log(next([2, 1]));
console.log(next([1, 2, 3]));
console.log(next([3, 2, 1]));
console.log(next([1, 1, 3]));
console.log(next([1, 2, 5, 4, 3]));
console.log(next([1, 3, 5, 4, 2]));
console.log(next([1, 3, 5, 3, 2]));