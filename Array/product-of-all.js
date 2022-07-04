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

function getProdOfAll(arr) {
  const mod = 1000000007;
  const prodToRight = Array(arr.length).fill(1);
  const prodToLeft = Array(arr.length).fill(1);

  prodToRight[0] = arr[0];
  for (let i = 1; i < arr.length; i++) {
    prodToRight[i] = (prodToRight[i - 1] * arr[i]) % mod;
  }

  prodToLeft[arr.length - 1] = arr[arr.length - 1];
  for (let i = arr.length - 2; i >= 0; i--) {
    prodToLeft[i] = (prodToLeft[i + 1] * arr[i]) % mod;
  }

  for (let i = 0; i < arr.length; i++) {
    const a = (i - 1 >= 0 ? prodToRight[i - 1] : 1);
    const b = (i + 1 <= arr.length ? prodToLeft[i + 1] : 1);
    arr[i] = multiply(a, b, mod);
  }

  return arr;
}

console.log(getProdOfAll([1, 2, 3, 4]));
