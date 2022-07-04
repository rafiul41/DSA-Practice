function getMinCost(weakPoints, start, end, memo = {}) {
  if (memo[start + '/' + end] !== undefined) return memo[start + '/' + end];
  if (weakPoints.length === 0) return memo[start + '/' + end] = 0;
  let minCost = Number.MAX_SAFE_INTEGER;
  weakPoints.forEach(point => {
    const currCost =
      end -
      start +
      getMinCost(
        weakPoints.filter(
          (filteredPoint) => filteredPoint > start && filteredPoint < point
        ),
        start,
        point, memo
      ) +
      getMinCost(
        weakPoints.filter(
          (filteredPoint) => filteredPoint > point && filteredPoint < end
        ),
        point,
        end, memo
      );
    minCost = Math.min(minCost, currCost);
  });
  return memo[start + '/' + end] = minCost;
}

function getMinCostPath(weakPoints, start, end, memo, cost) {
  if(weakPoints.length === 0) return [];
  let pointToPush = Number.MAX_SAFE_INTEGER;
  weakPoints.forEach(point => {
    currCost = end - start + memo[start + '/' + point] + memo[point + '/' + end];
    if(currCost === cost && point < pointToPush) {
      pointToPush = point;
    }
  })

  const nextPath = [...getMinCostPath(weakPoints.filter(filteredPoint => filteredPoint > start && filteredPoint < pointToPush), start, pointToPush, memo, cost - (end  -start)),
  ...getMinCostPath(weakPoints.filter(filteredPoint => filteredPoint > pointToPush && filteredPoint < end), pointToPush, end, memo, cost - (end  -start))];

  return [pointToPush, ...nextPath];
}

// sort the weakPoints !!!
const weakPoints = [1, 2, 5];
const start = 0;
const end = 6;
let memo = {};
const minCost = getMinCost(weakPoints, start, end, memo);
console.log(getMinCostPath(weakPoints, start, end, memo, minCost));
