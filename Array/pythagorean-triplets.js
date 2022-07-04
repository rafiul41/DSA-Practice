function isSquare(n) {
  let sqrtN = parseInt(Math.sqrt(n));
  return sqrtN * sqrtN === n;
}

function getTripletCnt(n) {
  let ans = 0;
  for(let a = 1; a <= n; a++) {
    for(let b = a + 1; b <= n; b++) {
      let c2 = a * a + b * b;
      let c = parseInt(Math.sqrt(c2));
      if(isSquare(c2) && c <= n) {
        console.log(a, b, c2);
        ans++;
      }
    }
  }

  return ans;
}

console.log(getTripletCnt(13));