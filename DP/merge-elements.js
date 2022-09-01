function getMergeCost(start, end, arr) {
  if(end - start === 1) return arr[start] + arr[end];
  let cost = 0;
  for(let i = start; i <= end; i++) {
    let currCost = getMergeCost(start, i) + getMergeCost(i, end);
    currCost *= 2;
    cost = Math.min(currCost, cost);
  }
  return cost;
}

const arr = [1, 3, 7];

console.log(getMergeCost(0, arr.length - 1, arr));