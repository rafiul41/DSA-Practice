function getInd(arr, val, isFirst) {
  let lo = 0, hi = arr.length - 1, mid, res = -1;
  while(lo <= hi) {
    mid = (lo + hi) / 2;
    if(arr[mid] === val) {
      res = mid;
      if(isFirst) {
        hi = mid - 1;
      } else {
        lo = mid + 1;
      }
    } else if(arr[mid] > val) {
      hi = mid - 1;
    } else {
      lo = mid + 1;
    }
  }

  return res;
}

function countElementOccurence(arr, val) {
  let firstInd = getInd(arr, val, true);
  if(firstInd === -1) return 0;
  return getInd(arr, val) - firstInd + 1;
}

console.log(countElementOccurence([5, 7, 7, 8, 8, 10], 8));