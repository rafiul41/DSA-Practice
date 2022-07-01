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
      cumulativeSum[i][j] +=
        cumulativeSum[i - 1][j] +
        cumulativeSum[i][j - 1] -
        cumulativeSum[i - 1][j - 1];
    }
  }

  let maxSum = -10000000;

  for (let i = subMatrixLen - 1; i < matrix.length; i++) {
    for (let j = subMatrixLen - 1; j < matrix[i].length; j++) {
      let subMatrixSum = cumulativeSum[i][j] -
        (i - subMatrixLen >= 0 ? cumulativeSum[i - subMatrixLen][j] : 0) -
        (j - subMatrixLen >= 0 ? cumulativeSum[i][j - subMatrixLen] : 0) +
        ((i - subMatrixLen >= 0 && j - subMatrixLen >= 0) ? cumulativeSum[i - subMatrixLen][j - subMatrixLen] : 0);
      maxSum = Math.max(subMatrixSum, maxSum);
    }
  }

  return maxSum;
}

console.log(getMaxSumOfSubMatrix([
  [-33, 34, 0, 69, 24, -22, 58, 62, -36, 5, 45, -19, -73, 61, -9, 95],
  [42, -73, -64, 91, -96, 2, 53, -8, 82, -79, 16, 18, -5, -53, 26, 71],
  [38, -31, 12, -33, -1, -65, -6, 3, -89, 22, 33, -27, -36, 41, 11, -47],
  [-32, 47, -56, -38, 57, -63, -41, 23, 41, 29, 78, 16, -65, 90, -58, -12],
  [6, -60, 42, -36, -52, -54, -95, -10, 29, 70, 50, -94, 1, 93, 48, -71],
  [-77, -16, 54, 56, -60, 66, 76, 31, 8, 44, -61, -74, 23, 37, 38, 18],
  [-18, 29, 41, -67, 15, -61, -42, 4, 30, 77, 6, -27, 86, -79, 45, 24],
  [-28, -30, -71, 77, 73, -3, 12, 86, -10, 61, -64, 55, 67, -45, 74, -69],
  [-48, 50, 50, 41, 24, 66, -70, 7, 91, -93, 37, -43, -13, 53, 83, 45],
  [9, -91, 58, -79, 88, -78, 46, 6, -70, -87, 68, 0, 91, 62, -45, -90],
  [59, -76, 37, 48, -17, 95, -59, -98, 50, -9, -64, 74, -80, 96, -79, 48],
  [99, -32, -16, -19, 34, -47, 99, -82, 38, 0, 88, 27, -33, 28, -7, -52],
  [-17, -93, -79, 10, -83, -87, 14, 9, -84, 35, -49, -100, -51, 19, 56, 98],
  [3, -76, -92, -56, -91, 89, 2, 95, -15, -7, 43, 23, 87, 14, 3, -52],
  [-100, -42, -82, 80, 96, 98, -19, 89, 98, -91, 57, -28, -78, 38, -8, -62],
  [79, 90, -43, 58, 91, -85, -12, 56, 11, -98, -66, -28, -45, 28, -54, 62],
], 7))