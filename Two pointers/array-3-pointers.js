function getMinimumMax(A, B, C) {
  let i = 0,
    j = 0,
    k = 0;
  let ans = Number.MAX_SAFE_INTEGER;
  while (i < A.length && j < B.length && k < C.length) {
    let currMax = Math.max(
      Math.abs(A[i] - B[j]),
      Math.abs(B[j] - C[k]),
      Math.abs(C[k] - A[i])
    );
    ans = Math.min(ans, currMax);
    if (A[i] <= B[j] && A[i] <= C[k]) {
      i++;
    } else if (B[j] <= A[i] && B[j] <= C[k]) {
      j++;
    } else {
      k++;
    }
  }

  return ans;
}

console.log(getMinimumMax([1, 4, 10], [2, 15, 20], [10, 12]));
