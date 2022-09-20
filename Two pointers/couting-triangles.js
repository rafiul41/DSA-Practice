let sides = [], mod = 1e9 + 7;

function getCnt(start, end, toCheck) {
  while(start < end) {
    if(sides[start] + sides[end] > toCheck) {
      return end - start;
    }
    start++;
  }
}

function getTrianglesCnt(arr) {
  sides = arr;
  sides.sort((a, b) => a - b);
  let ans = 0;
  for(let i = sides.length - 1; i >= 2; i--) {
    ans += getCnt(0, i - 1, sides[i]);
    ans %= mod;
  }
  return ans;
}

console.log(getTrianglesCnt[1, 1, 1, 2, 2]);