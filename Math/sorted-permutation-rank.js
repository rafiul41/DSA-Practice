function getRank(str) {
  let k = str.split('');
  k.sort((a, b) => {
    if(a < b) return -1;
    return 1;
  });
  k = k.join('');
  let mod = 1000003;
  let factorial = Array(str.length + 1).fill(1);
  let s = new Set();
  for(let i = 1; i <= str.length; i++) {
    s.add(k[i - 1]);
    factorial[i] = (factorial[i - 1] * i) % mod;
  }

  let ans = 0, it, nextVal;
  for(let i = 0; i < str.length; i++) {
    let toAdd = factorial[str.length - i - 1];
    it = s.values();
    while(true) {
      nextVal = it.next().value;
      if(nextVal === str[i]) {
        s.delete(nextVal);
        break;
      }
      ans = (ans + toAdd) % mod;
    }
  }

  return ans + 1;
}

getRank('cba');