function getDiagonal(r, c, grid) {
  const diagonal = [];
  while(r < grid.length && c >= 0) {
    diagonal.push(grid[r][c]);
    r++;c--;
  }
  return diagonal;
}

function getAntiDiagonals(grid) {
  if(grid.length === 0) return [];

  let ans = [];

  for(let c = 0; c < grid.length; c++) {
    ans.push(getDiagonal(0, c, grid));
  }

  for(let r = 1; r < grid.length; r++) {
    ans.push(getDiagonal(r, 0, grid));
  }

  return ans;
}

console.log(getAntiDiagonals([
  [1, 2, 3],
  [4, 5, 6],
  [9, 2, 7]
]));