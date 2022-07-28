function dp(isEqualUptoLast, ind, k, len, digits) {
  if(ind >= len) {
    return 1;
  }
  let ans = 0;
  if(isEqualUptoLast) {
    for(let i = 0; i < digits.length && digits[i] <= k[ind]; i++) {
      ans += dp(k[ind] === digits[i], ind + 1, k, len, digits);
    }
    return ans;
  }

  for(let i = 0; i < digits.length; i++) {
    ans += dp(false, ind + 1, k, len, digits);
  }

  return ans;
}

function getNumbersCnt(digits, len, k) {
  k = k.toString().split('');
  if(k.length < len) return 0;
  let s = new Set();
  for(let digit of digits) {
    s.add(digit);
  }
  digits = Array.from(s);

  let ans = 0;
  for(let i = 0; i < digits.length && digits[i] <= k[0]; i++) {
    if(digits[i] === 0) continue;
    ans += dp(digits[i] === k[0], 1, k, len, digits);
  }

  return ans;
}

console.log(getNumbersCnt([0, 1, 2, 5], 2, 21));