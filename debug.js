function circularSwap(r, c, matrix) {
  let tmp1 = matrix[r][c], tmp2;
  for(let i = 0; i < 4; i++) {
    let nr = c, nc = matrix.length - r - 1;
    tmp2 = matrix[nr][nc];
    matrix[nr][nc] = tmp1;
    tmp1 = tmp2;
    r = nr;
    c = nc;
  }
}

function rotate(matrix) {
  if(matrix.length === 0) return [];
  if(matrix.length === 1) return matrix;

  let rowsToTraverse = parseInt(matrix.length / 2);
  for(let i = 0; i < rowsToTraverse; i++) {
    for(let j = i; j < matrix.length - i - 1; j++) {
      circularSwap(i, j, matrix);
    }
  }
}

let matrix = [
  [ 1,  2,  3,  4],
  [ 5,  6,  7,  8],
  [ 9, 10, 11, 12],
  [13, 14, 15, 16],
];

rotate(matrix);

console.log(matrix);