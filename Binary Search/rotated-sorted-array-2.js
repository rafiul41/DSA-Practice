function isElementPresent(arr, target) {
  let lo = 0, hi = arr.length - 1;
  while(lo <= hi) {
    let mid = Math.floor((lo + hi) / 2);
    if(arr[mid] === target) return true;
    if(arr[lo] === arr[mid] && arr[mid] === arr[hi]) {
      lo++; hi--;
    } else if(arr[lo] <= arr[mid]) { // sorted
      if(arr[lo] <= target && arr[mid] >= target) {
        hi = mid - 1;
      } else {
        lo = mid + 1;
      }
    } else {
      if(arr[mid] <= target && arr[hi] >= target) {
        lo = mid + 1;
      } else {
        hi = mid - 1;
      }
    }
  }
  return false;
}