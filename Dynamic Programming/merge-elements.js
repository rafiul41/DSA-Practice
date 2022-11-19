function getMinMergeCost(start, end, arr, memo = {}) {
  if(memo[start + '/' + end] !== undefined) return memo[start + '/' + end];
  if(start === end) {
    return memo[start + '/' + end] = {
      numb: arr[start],
      cost: 0
    };
  }
  if(end - start === 1) {
    let cost = arr[start] + arr[end];
    return memo[start + '/' + end] = {
      numb: cost,
      cost 
    }
  }
  let minCost = Number.MAX_SAFE_INTEGER, minCostNumb;
  for(let i = start; i < end; i++) {
    let firstMergeCost = getMinMergeCost(start, i, arr, memo);
    let secondMergeCost = getMinMergeCost(i + 1, end, arr, memo);
    let currCost = firstMergeCost.cost + secondMergeCost.cost + firstMergeCost.numb + secondMergeCost.numb;
    if(currCost < minCost) {
      minCost = currCost;
      minCostNumb = firstMergeCost.numb + secondMergeCost.numb;
    }
  }
  return memo[start + '/' + end] = {
    numb: minCostNumb,
    cost: minCost
  };
}

const arr = [1, 3, 7];

console.log(getMinMergeCost(0, arr.length - 1, arr));