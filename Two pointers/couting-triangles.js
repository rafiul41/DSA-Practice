function countTriangles(sideLengths) {
  let ans = 0, mod = 1e9 + 7;
  for(let i = sideLengths.length - 1; i >= 2; i--) {
    let p1 = 0, p2 = i - 1;
    while(p1 < p2) {
      if(sideLengths[p1] + sideLengths[p2] > sideLengths[i]) {
        ans += (p2 - p1);
        ans %= mod;
        p2--;
      } else {
        p1++;
      }
    }
  }

  return ans;
}

console.log(countTriangles([1, 2, 3, 4, 5, 6]));