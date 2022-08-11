function getMinInd(arr) {
  let lo = 0, hi = arr.length - 1, mid;
  while(lo <= hi) {
    mid = Math.floor((lo + hi) / 2);
    let next = (mid + 1) % arr.length,
      prev = (mid - 1 + arr.length) % arr.length;
    if(arr[mid] <= arr[prev] && arr[mid] <= arr[next]) {
      return mid;
    } else if(arr[mid] <= arr[hi]) {
      hi = mid - 1;
    } else {
      lo = mid + 1;
    }
  }
  return 0;
}

function searchElement(arr, x, lo , hi) {
  let mid;
  while(lo <= hi) {
    mid = Math.floor((lo + hi) / 2);
    if(arr[mid] === x) {
      return mid;
    } else if(arr[mid] < x) {
      lo = mid + 1;
    } else {
      hi = mid - 1;
    }
  }
  return -1;
}

function getElementInd(arr, x) {
  let minElementInd = getMinInd(arr);
  let firstSearch = searchElement(arr, x, minElementInd, arr.length - 1);
  if(firstSearch === -1) {
    return searchElement(arr, x, 0, minElementInd - 1);
  }
}

console.log(getElementInd([4, 5, 6, 7, 0, 1, 2, 3], 4));