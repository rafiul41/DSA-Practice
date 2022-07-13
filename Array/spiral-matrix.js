function getSpiral(arr, rowCnt, colCnt) {
  let ans = [],
    p = 0;
  for (let i = 0; i < rowCnt; i++) {
    ans = Array(colCnt).fill(0);
  }

  let sr = 0,
    sc = 0,
    er = rowCnt - 1,
    ec = colCnt - 1;
  while (sr < er && sc < ec) {
    for (let i = sc; i <= ec - 1; i++) {
      ans[sr][i] = arr[p++];
    }

    for (let i = sr; i <= er - 1; i++) {
      ans[i][ec] = arr[p++];
    }

    for (let i = ec; i >= sc + 1; i--) {
      ans[er][i] = arr[p++];
    }

    for (let i = er; i >= sr + 1; i--) {
      ans[i][sc] = arr[p++];
    }
    sr++;
    sc++;
    er--;
    ec--;
  }

  if (sr == er) {
    for (let i = sc; i <= ec; i++) {
      ans[sr][i] = arr[p++];
    }
  } else {
    for (let i = sr; i <= er; i++) {
      ans[i][sc] = arr[p++];
    }
  }

  return ans;
}

console.log(getSpiral([1, 2, 4, 8], 2, 2));
