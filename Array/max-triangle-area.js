// rrrrr
// rrrrg
// rrrrr
// bbbbb

const maxInt = 10000000;

function maxArea(grid) {
  // Required Infos
  const maxRowOfEachColorForEachColumn = [];
  const minRowOfEachColorForEachColumn = [];

  for(let i = 0; i < grid[0].length; j++) {
    maxRowOfEachColorForEachColumn[i] = {
      r: -maxInt,
      g: -maxInt,
      b: -maxInt
    };
    minRowOfEachColorForEachColumn[i] = {
      r: maxInt,
      g: maxInt,
      b: maxInt
    };
  }

  const maxColumnOfEachColor = {
    r: -maxInt,
    g: -maxInt,
    b: -maxInt
  };
  const minColumnOfEachColor = {
    r: maxInt,
    g: maxInt,
    b: maxInt
  };

  for(let r = 0; r < grid.length; r++) {
    for(let c = 0; c < grid[r].length; c++) {
      maxRowOfEachColorForEachColumn[c][grid[r][c]] = Math.max(maxRowOfEachColorForEachColumn[c][grid[r][c]], r);
      minRowOfEachColorForEachColumn[c][grid[r][c]] = Math.min(minRowOfEachColorForEachColumn[c][grid[r][c]], r);

      maxColumnOfEachColor[grid[r][c]] = Math.max(maxColumnOfEachColor[grid[r][c]], c);
      minColumnOfEachColor[grid[r][c]] = Math.min(minColumnOfEachColor[grid[r][c]], c);
    }
  }

  console.log(grid);

  // Combinations
  // middle has two combinations
  // rgb
  // 
}

console.log(maxArea([
  'rrrrr',
  'rrrrg',
  'rrrrr',
  'bbbbb',
]))