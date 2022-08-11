function multiply(a, b, m) {
  if(a.toString().length + b.toString().length > 15) {
    return parseInt((BigInt(a) * BigInt(b)) % BigInt(m));
  }
  return (a * b) % m;
}

console.log(multiply(1e9 + 654213, 1e9 + 465213, 1e9 + 7));

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