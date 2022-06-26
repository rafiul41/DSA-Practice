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

// 1 --> 1

// 1 2
// 3 4
// -->
// 3 1
// 4 2

// 1 2 3
// 4 5 6
// 7 8 9
// -->
// 7 4 1
// 8 5 2
// 9 6 3

// Algo
// * iteration -- 0 - (row - 1) for half rows
// * how to get positions for switching --
// ex1:
// 0, 0 --> 0, 2
// 0, 2 --> 2, 2
// 2, 2 --> 2, 0
// 2, 0 --> 0, 0
// ex2:
// 0, 1 --> 1, 2
// 1, 2 --> 2, 1
// 2, 1 --> 1, 0
// 1, 0 --> 0, 1

// r, c --> c, len - r


// * how to switch -- 2 tmp var

