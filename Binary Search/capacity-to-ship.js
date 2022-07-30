function check(arr, days, capacity) {
  let neededDays = 0, curr = 0, taken = 0;
  while(curr < arr.length) {
    if(taken + arr[curr] <= capacity) {
      taken += arr[curr];
      curr++;
    } else {
      taken = 0;
      neededDays++;
    }
  }

  if(taken > 0) neededDays++;

  return neededDays <= days;
}

function getCapacity(arr, days) {
  let lo = Number.MIN_SAFE_INTEGER, hi = 0, mid;
  for(let i = 0; i < arr.length; i++) {
    lo = Math.max(lo, arr[i]);
    hi += arr[i];
  }
  
  let ans = hi;
  while(lo <= hi) {
    mid = (lo + hi) / 2;
    if(check(arr, days, mid)) {
      ans = mid;
      hi = mid - 1;
    } else {
      lo = mid + 1;
    }
  }

  return ans;
}