function expand(r, c, grid, ans) {
  const rowCnt = grid.length, colCnt = grid[0].length;
  // row change
  let currR = r + 1;
  while(currR < rowCnt && grid[currR][c] !== '1') {
    ans[currR][c]++;
    currR++;
  }

  currR = r - 1;
  while(currR >= 0 && grid[currR][c] !== '1') {
    ans[currR][c]++;
    currR--;
  }

  // col change
  let currC = c + 1;
  while(currR < colCnt && grid[r][currC] !== '1') {
    ans[r][currC]++;
    currC++;
  }

  currC = c - 1;
  while(currR >= 0 && grid[r][currC] !== '1') {
    ans[r][currC]++;
    currC--;
  }

  // dia1
  currR = r + 1; currC = c + 1;
  while(currR < rowCnt && currC < colCnt && grid[currR][currC] !== '1') {
    ans[currR][currC]++;
    currR++; currC++;
  }

  currR = r - 1; currC = c - 1;
  while(currR >= 0 && currC >= 0 && grid[currR][currC] !== '1') {
    ans[currR][currC]++;
    currR--; currC--;
  }

  // dia2
  currR = r + 1; currC = c - 1;
  while(currR < rowCnt && currC >= 0 && grid[currR][currC] !== '1') {
    ans[currR][currC]++;
    currR++; currC--;
  }

  currR = r - 1; currC = c + 1;
  while(currR >= 0 && currC < colCnt && grid[currR][currC] !== '1') {
    ans[currR][currC]++;
    currR--; currC++;
  }
}

function func(grid) {
  let ans = [];
  for(let i = 0; i < grid.length; i++) {
    ans[i] = [];
    for(let j = 0; j < grid[0].length; j++) {
      ans[i][j] = 0;
    }
  }

  for(let i = 0; i < grid.length; i++) {
    for(let j = 0; j < grid[0].length; j++) {
      if(grid[i][j] === '1') {
        expand(i, j, grid, ans);
      }
    }
  }

  return ans;
}

console.log(func['010', '100', '001'])