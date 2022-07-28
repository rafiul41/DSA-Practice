function getMinCost(A, B, C, D, E) {
  let from = 0;
  let to = parseInt(A / B);
  let minCost = Number.MAX_SAFE_INTEGER;
  for (let x = from; x <= to; x++) {
    let toCheck = A - (B * x);
    if (toCheck % D) {
      continue;
    }
    y = toCheck / D;
    let currCost = x * C + y * E;
    minCost = Math.min(minCost, currCost);
  }

  if (minCost === Number.MAX_SAFE_INTEGER) return -1;
  return minCost;
}

console.log(getMinCost(7, 1, 1, 3, 2));
