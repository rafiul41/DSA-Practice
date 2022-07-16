function multiply(a, b, m) {
  const maxPossibleTotalProductLength = a.toString().length + b.toString().length;
  if(maxPossibleTotalProductLength > 15) {
    a = BigInt(a);
    b = BigInt(b);
    m = BigInt(m);
    return parseInt((a * b) % m);
  }
  return (a * b) % m;
}

function getMatProduct(mat1, mat2, mod) {
  let prod = [];
  for(let i = 0; i < mat1.length; i++) {
    prod[i] = Array(mat2[0].length).fill(0);
  }

  for(let i = 0; i < mat1.length; i++) {
    for(let j = 0; j < mat2[0].length; j++) {
      for(let k = 0; k < mat1[0].length; k++) {
        prod[i][j] = multiply(mat1[i][k], mat2[k][j], mod) ;
      }
    }
  }

  return prod;
}

function getMatPow(mat, pow, mod) {
  let res = [[1, 0], [0, 1]], mult = mat;
  while(pow) {
    if(pow & 1) {
      res = getMatProduct(res, mult, mod);
    }
    mult = getMatProduct(mult, mult, mod);
    pow = parseInt(pow / 2);
  }
}

console.log(getMatProduct([[3, 1, 3], [6, 2, 0], [6, 0, 1]], [[7, 4], [1, 2], [5, 3]], 1000000007));
// console.log(getMatPow([[1, 1], [1, 0]], 5, 10000000));