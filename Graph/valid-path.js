let visited, grid;

function toRad(degree) {
  return (Math.PI / 180) * degree;
}

function isValidPath(r, c, circleCnt, radius, abscissas, ordinates) {
  grid = [];
  for(let i = 0; i <= r; i++) {
    grid.push(Array(c + 1).fill(0));
  }

  for(let i = 0; i < circleCnt; i++) {
    let x = abscissas[i];
    let y = ordinates[i];

    let divisions = radius * 8;
    let diff = 360 / divisions, degree = 0;
    
    for(let i = 0; i < divisions; i++) {
      let x1 = radius * Math.cos(toRad(degree)) + (r - x;
      let y1 = radius * Math.sin(toRad(degree)) + y;
      console.log('without floor', x1, y1);
      x1 = Math.floor(x1);
      y1 = Math.floor(y1);
      console.log('with floor', x1, y1);
      if(x1 >= 0 && x1 < grid.length && y1 >= 0 && y1 < grid[0].length) {
        grid[x1][y1] = 1;
      }
      degree += diff;
    }
  }

  console.log(grid)
}

isValidPath(4, 4, 1, 1, [3], [3]);