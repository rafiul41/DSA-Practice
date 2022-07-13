function getMergeCost(arr, start, end, extraCost) {
  if(start >= end) return 0;
  let minCost = Number.MAX_SAFE_INTEGER;
  for(let i = start; i <= end - 1; i++) {
    const mergeCost = arr[i] + arr[i + 1];
    const cost = getMergeCost(arr, start, i - 1, mergeCost) + mergeCost + getMergeCost(arr, i + 1, end, mergeCost) + extraCost;
    minCost = Math.min(minCost, cost);
  }
  return minCost;
}

const array = [1, 3, 7];

console.log(getMergeCost(array, 0, array.length - 1, 0));