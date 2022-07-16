function multiply(a, b, m) {
  const maxPossibleTotalProductLength =
    a.toString().length + b.toString().length;
  if (maxPossibleTotalProductLength > 15) {
    a = BigInt(a);
    b = BigInt(b);
    m = BigInt(m);
    return parseInt((a * b) % m);
  }
  return (a * b) % m;
}

function getMatProduct(mat1, mat2, mod) {
  let prod = [];
  for (let i = 0; i < mat1.length; i++) {
    prod[i] = Array(mat2[0].length).fill(0);
  }

  for (let i = 0; i < mat1.length; i++) {
    for (let j = 0; j < mat2[0].length; j++) {
      let sum = 0;
      for (let k = 0; k < mat1[0].length; k++) {
        sum = (sum + multiply(mat1[i][k], mat2[k][j], mod)) % mod;
      }
      prod[i][j] = sum;
    }
  }

  return prod;
}

function getMatPow(mat, pow, mod) {
  let res = [
      [1, 0],
      [0, 1]
    ],
    mult = mat;
  while (pow) {
    if (pow & 1) {
      res = getMatProduct(res, mult, mod);
    }
    mult = getMatProduct(mult, mult, mod);
    pow = parseInt(pow / 2);
  }
  return res;
}

function getNthFibonacci(n) {
  if (n <= 2) {
    return 1;
  }
  n--;
  return getMatPow(
    [
      [1, 1],
      [1, 0]
    ],
    n,
    1000000007
  )[0][0];
}

console.log(getNthFibonacci(321564698));
