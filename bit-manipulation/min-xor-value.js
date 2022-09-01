function getMinXorVal(arr) {
  arr.sort((a, b) => a - b);
  let ans = 0;
  for (let i = 1; i < arr.length; i++) {
    let toCheck = arr[i - 1] ^ arr[i];
    console.log(toCheck);
    ans = Math.min(ans, arr[i - 1] ^ arr[i]);
  }
  return ans;
}

console.log(getMinXorVal([0, 2, 5, 7]));
