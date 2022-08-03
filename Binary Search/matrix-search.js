function isPresent(arr, numb) {
  let lo = 0, hi = arr.length - 1, mid;
  while(lo <= hi) {
    mid = Math.floor((lo + hi) / 2);
    if(arr[mid] === numb) {
      return 1;
    } else if(arr[mid] > numb) {
      hi = mid - 1;
    } else {
      lo = mid + 1;
    }
  }
  return 0;
}

function isNumbPresent(matrix, numb) {
  let lo = 0, hi = matrix.length - 1, mid, toCheck = matrix.length;
  while(lo <= hi) {
    mid = Math.floor((lo + hi) / 2);
    if(matrix[mid][0] === numb) {
      return 1;
    } else if(matrix[mid][0] < numb) {
      toCheck = mid;
      lo = mid + 1;
    } else {
      hi = mid - 1;
    }
  }

  if(toCheck === matrix.length) return 0;

  return isPresent(matrix[toCheck], numb);
}

console.log(isNumbPresent([
  [3, 3, 11, 12, 14],
  [16, 17, 30, 34, 35],
  [45, 48, 49, 50, 52],
  [56, 59, 63, 63, 65],
  [67, 71, 72, 73, 79],
  [80, 84, 85, 85, 88],
  [88, 91, 92, 93, 94]
], 94));