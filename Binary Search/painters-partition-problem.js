let mod = 10000003;

function check(painterCnt, blockSizes, maxAllocatedSize) {
  let painterNeeded = 0, ind = 0, taken = 0;
  while(ind < blockSizes.length) {
    if(taken + blockSizes[ind] <= maxAllocatedSize) {
      taken += blockSizes[ind];
      ind++;
    } else {
      taken = 0;
      painterNeeded++;
    }
  }
  if(taken) painterNeeded++;

  return painterNeeded <= painterCnt;
}

function getMinTime(painterCnt, timePerUnit, blockSizes) {
  let lo = Number.MIN_SAFE_INTEGER, hi = 0, mid, ans;
  for(let size of blockSizes) {
    lo = Math.max(lo, size);
    hi += size;
  }

  // Search for max block to allocate
  while(lo <= hi) {
    mid = lo + Math.floor((hi - lo) / 2);
    if(check(painterCnt, blockSizes, mid)) {
      ans = mid;
      hi = mid - 1;
    } else {
      lo = mid + 1;
    }
  }

  return (ans * timePerUnit) % mod;
}

console.log(getMinTime(5, 10, [ 658, 786, 531, 47, 169, 397, 914 ]));