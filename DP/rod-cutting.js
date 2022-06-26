// 

// Assuming weakpoints are sorted
function ways(weakPoints, start, end) {
  let ans = end - start;
  for(let i = 0; i < weakPoints.length; i++) {
    let left = ways(weakPoints.slice(0, i + 1), start, weakPoints[i]);
    let right = ways(weakPoints.slice(i + 1), weakPoints[i], end);
    ans += (left + right);
  }

  return ans;
}