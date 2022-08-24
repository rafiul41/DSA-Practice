let romanVals = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};

function func(str) {
  let curr = 0, ans = 0;
  while(curr < str.length) {
    if(curr + 1 < str.length && romanVals[str[curr]] < romanVals[str[curr + 1]]) {
      ans += (romanVals[str[curr + 1]] - romanVals[str[curr]]);
      curr += 2;
      continue;
    }
    ans += romanVals[str[curr]];
    curr++;
  }
  return ans;
}

console.log(func('XIV'));