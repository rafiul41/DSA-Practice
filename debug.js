function check(bookPages, studentCnt, maxPage) {
  let neededStudentCnt = 0, taken = 0, ind = 0;
  while(ind < bookPages.length) {
    if(taken + bookPages[ind] <= maxPage) {
      taken += bookPages[ind];
      ind++;
    } else {
      neededStudentCnt++;
      taken = 0;
    }
  }

  if(taken) neededStudentCnt++;

  return neededStudentCnt <= studentCnt;
}

function getMinimumMaxPage(bookPages, studentCnt) {
  if(bookPages.length < studentCnt) return -1;
  let lo = Number.MIN_SAFE_INTEGER, hi = 0, mid, ans = -1;
  for(let pageCnt of bookPages) {
    lo = Math.max(lo, pageCnt);
    hi += pageCnt;
  }

  while(lo <= hi) {
    mid = Math.floor((lo + hi) / 2);
    if(check(bookPages, studentCnt, mid)) {
      ans = mid;
      hi = mid - 1;
    } else {
      lo = mid + 1;
    }
  }

  return ans;
}

console.log(getMinimumMaxPage([12, 34, 67, 90], 2));