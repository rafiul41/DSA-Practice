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

function modExpo(b, p, m) {
  let res = 1, mult = b;
  while(p) {
    if(p & 1) res = multiply(res, mult, m);
    mult = multiply(mult, mult, m);
    p = parseInt(p / 2);
  }

  return res;
}

console.log(modExpo(2, 1000000005, 1000000007)); //500000004