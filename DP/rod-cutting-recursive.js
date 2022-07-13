function getMinCost(weakPoints, start, end, indStart, indEnd, memo) {
  if (memo[start + '/' + end]) return memo[start + '/' + end];
  if (indStart > indEnd) return memo[start + '/' + end] = 0;
  let minCost = Number.MAX_SAFE_INTEGER;
  for (let i = indStart; i <= indEnd; i++) {
    let currCost = end - start + getMinCost(weakPoints, start, weakPoints[i], indStart, i - 1, memo)
    + getMinCost(weakPoints, weakPoints[i], end, i + 1, indEnd, memo);
    minCost = Math.min(minCost, currCost);
  }
  return memo[start + '/' + end] = minCost;
}

function getMinCostPath(weakPoints, start, end, indStart, indEnd, memo) {
  if(indStart > indEnd) return [];
  const path = [];
  let pointInd, minCost = Number.MAX_SAFE_INTEGER;
  for(let i = indStart; i <= indEnd; i++) {
    let currCost = end - start + memo[start + '/' + weakPoints[i]] + memo[weakPoints[i] + '/' + end];
    if(currCost < minCost) {
      minCost = currCost;
      pointInd = i;
    }
  }

  path.push(weakPoints[pointInd]);
  path.push(...getMinCostPath(weakPoints, start, weakPoints[pointInd], indStart, pointInd - 1, memo));
  path.push(...getMinCostPath(weakPoints, weakPoints[pointInd], end, pointInd + 1, indEnd, memo));

  return path;
}

const weakPoints = [1, 2, 5];
weakPoints.sort((a, b) => a - b);
const start = 0;
const end = 6;
let memo = {};
const minCost = getMinCost(
  weakPoints,
  start,
  end,
  0,
  weakPoints.length - 1,
  memo
);
console.log('MINCOST: ', minCost);
const path = getMinCostPath(weakPoints, start, end, 0, weakPoints.length - 1, memo);
console.log('PATH: ', path);
