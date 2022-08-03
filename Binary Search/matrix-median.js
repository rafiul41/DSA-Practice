function getNumberOfElementsLess(arr, toCheck) {
  let lo = 0,
    hi = arr.length - 1,
    mid,
    ans = -1;
  while (lo <= hi) {
    mid = Math.floor((lo + hi) / 2);
    if (arr[mid] < toCheck) {
      ans = mid;
      lo = mid + 1;
    } else {
      hi = mid - 1;
    }
  }
  return ans + 1;
}

function getInd(arr, toCheck, isFirst) {
  let lo = 0,
    hi = arr.length - 1,
    mid,
    ans = -1;
  while (lo <= hi) {
    mid = Math.floor((lo + hi) / 2);
    if (arr[mid] === toCheck) {
      ans = mid;
      if (isFirst) {
        hi = mid - 1;
      } else {
        lo = mid + 1;
      }
    } else if (arr[mid] > toCheck) {
      hi = mid - 1;
    } else {
      lo = mid + 1;
    }
  }

  return ans;
}

function getRowInfoForNumb(row, toCheck) {
  let foundCnt;
  let firstInd = getInd(row, toCheck, true);
  if (firstInd === -1) {
    foundCnt = 0;
  } else {
    foundCnt = getInd(row, toCheck, false) - firstInd + 1;
  }
  return {
    lessThanCnt: getNumberOfElementsLess(row, toCheck),
    foundCnt
  };
}

function getMatrixInfoForNumb(matrix, toCheck) {
  let lessElementCnt = 0,
    foundCnt = 0;
  for (let row of matrix) {
    let info = getRowInfoForNumb(row, toCheck);
    lessElementCnt += info.lessThanCnt;
    foundCnt += info.foundCnt;
  }

  return { lessElementCnt, foundCnt };
}

function getMatrixMedian(matrix) {
  let requiredLeftElementsCnt = Math.floor(
    (matrix.length * matrix[0].length) / 2
  );

  let lo = Number.MAX_SAFE_INTEGER,
    hi = Number.MIN_SAFE_INTEGER,
    mid;
  for (let row of matrix) {
    lo = Math.min(lo, row[0]);
    hi = Math.max(hi, row[row.length - 1]);
  }

  while (lo <= hi) {
    mid = Math.floor((lo + hi) / 2);
    let info = getMatrixInfoForNumb(matrix, mid);
    let lessElementCnt = info.lessElementCnt;
    let foundCnt = info.foundCnt;
    if (
      lessElementCnt <= requiredLeftElementsCnt &&
      lessElementCnt + foundCnt >= requiredLeftElementsCnt + 1
    ) {
      return mid;
    }
    if(lessElementCnt + foundCnt <= requiredLeftElementsCnt) {
      lo = mid + 1;
    } else {
      hi = mid - 1;
    }
  }

  return -1;
}

console.log(
  getMatrixMedian([
    [1, 3, 5],
    [2, 6, 9],
    [3, 6, 9]
  ])
);
