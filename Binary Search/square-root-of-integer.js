function getSqrt(A) {
  let lo = 0,
    hi = A,
    mid,
    ans;
  for (let i = 0; i < 1000; i++) {
    mid = (lo + hi) / 2;
    let toCheck = mid * mid;
    if (toCheck === A) {
      return mid;
    } else if (toCheck > A) {
      hi = mid;
    } else {
      lo = mid;
      ans = mid;
    }
  }
  ans = Math.floor(ans);
  return ans;
}

console.log(getSqrt(740819855));