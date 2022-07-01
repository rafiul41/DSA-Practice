function getMaxSumOfSubMatrix(matrix, subMatrixLen) {
  let cumulativeSum = [];
  for (let i = 0; i < matrix.length; i++) {
    cumulativeSum[i] = [];
    for (let j = 0; j < matrix[i].length; j++) {
      cumulativeSum[i][j] = matrix[i][j];
    }
  }

  for (let i = 1; i < matrix.length; i++) {
    for (let j = 1; j < matrix[i].length; j++) {
      cumulativeSum[i][j] =
        cumulativeSum[i - 1][j] +
        cumulativeSum[i][j - 1] -
        cumulativeSum[i - 1][j - 1];
    }
  }

  let maxSum = Number.MIN_SAFE_INTEGER;

  for (let i = subMatrixLen - 1; i < matrix.length; i++) {
    for (let j = subMatrixLen - 1; j < matrix[i].length; j++) {
      let subMatrixSum =
        cumulativeSum[i][j] -
        (i - subMatrixLen >= 0 ? cumulativeSum[i - subMatrixLen][j] : 0) -
        (j - subMatrixLen >= 0 ? cumulativeSum[i][j - subMatrixLen] : 0) +
        (i - subMatrixLen >= 0 && j - subMatrixLen >= 0 ? cumulativeSum[i - subMatrixLen][j - subMatrixLen] : 0);
      maxSum = Math.max(subMatrixSum, maxSum);
    }
  }

  return maxSum;
}

console.log(getMaxSumOfSubMatrix([
  [1, 1, 1, 1, 1],
        [2, 2, 2, 2, 2],
        [3, 8, 6, 7, 3],
        [4, 4, 4, 4, 4],
        [5, 5, 5, 5, 5]
]))