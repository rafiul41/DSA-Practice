function find(str, n) {
  if(n === 1) return [1];
  const ans = [];
  ans.push(1);
  let curr = ans[0];
  let min = curr;
  let p1 = 0, p2 = 2;
  for(let i = 0; i < n - 1; i++) {
    if(str[i] === 'I') {
      ans.push(p2);
      p2++;
    } else {
      ans.push(p1);
      min = Math.min(p1, min);
      p1--;
    }
  }

  const toAdd = 1 - min;
  return ans.map((numb) => numb + toAdd);
}

console.log(find('DIDIDID', 8));