function getAttackCounts(grid) {
  if(grid.length === 0) return [];
  const dirR = [0, 0, 1, -1, 1, -1, -1, 1];
  const dirC = [1, -1, 0, 0, 1, -1, 1, -1];

  const ans = [];
  for(let i = 0; i < grid.length; i++) {
    ans[i] = Array(grid[0].length).fill(0);
  }

  for(let i = 0; i < grid.length; i++) {
    for(let j = 0; j < grid[i].length; j++) {
      if(grid[i][j] === '1') {
        let attackCnt = 0;
        for(let k = 0; k < 8; k++) {
          let r = i + dirR[k], c = j + dirC[k];
          while(r >= 0 && r < grid.length && c >= 0 && c < grid[0].length) {
            if(grid[r][c] === '1') {
              attackCnt++;
              break;
            }
            ans[r][c]++;
            r += dirR[k];
            c += dirC[k];
          }
        }
        ans[i][j] = attackCnt;
      }
    }
  }

  return ans;
}

console.log(getAttackCounts([
  '010',
  '100',
  '001',
]))