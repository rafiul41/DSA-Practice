function maxXorVal(matrix) {
  let total = 0;
  for(let row of matrix) {
    for(let numb of row) {
      total ^= numb;
    }
  }

  let ans = 0;
  for(let i = 0; i < matrix.length; i++) {
    let tmp = total;
    for(let j = 0; j < matrix[i].length; j++) {
      tmp ^= matrix[i][j];
    }
    for(let j = 0; j < matrix[i].length; j++) {
      tmp ^= (matrix[i][j] - 1);
    }
    ans = Math.max(ans, tmp);
  }

  for(let i = 0; i < matrix[0].length; i++) {
    let tmp = total;
    for(let j = 0; j < matrix.length; j++) {
      tmp ^= matrix[j][i];
    }
    for(let j = 0; j < matrix.length; j++) {
      tmp ^= (matrix[j][i] - 1);
    }
    ans = Math.max(ans, tmp);
  }

  return ans;
}