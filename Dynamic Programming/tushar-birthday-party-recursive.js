// Solution always exists as there will always be a dish with a filling capacity of 1

// 2 4 6
// 2 1 3
// 2 5 1 --> 2 + 4 + 2 -> 8

function knapSack(weights, costs, ind, capacity, memo) {
  if(memo[ind + '/' + capacity] !== undefined) return memo[ind + '/' + capacity];
  if(ind < 0) {
      if(capacity === 0) return memo[ind + '/' + capacity] = 0;
      return memo[ind + '/' + capacity] = Number.MAX_SAFE_INTEGER;
  }
  let op1 = Number.MAX_SAFE_INTEGER;
  if(capacity - weights[ind] >= 0) {
    op1 = costs[ind] + knapSack(weights, costs, ind, capacity - weights[ind], memo);
  }
  let op2 = knapSack(weights, costs, ind - 1, capacity, memo);

  return memo[ind + '/' + capacity] = Math.min(op1, op2);
}

function getMinCost(friendCapacities, fillingCapacities, dishCosts) {
  friendCapacities.sort((a, b) => b - a);
  const memo = {};
  let ans = 0;
  for(let capacity of friendCapacities) {
    ans += knapSack(fillingCapacities, dishCosts, dishCosts.length - 1, capacity, memo);
  }

  return ans;
}

console.log(getMinCost(
  [47, 411, 856, 317, 321, 39, 46, 431, 419, 586, 396, 941, 754, 825, 312, 903, 232, 517, 205],
  [1, 368, 956, 514, 70, 286, 10, 349, 469, 322, 581, 721, 88, 710, 577, 123, 31, 335, 168, 180, 753, 754, 575, 413, 508, 120, 724, 411, 70, 242, 334, 705, 609, 290, 220, 398, 295, 947, 465, 763, 269, 46, 204, 75, 755, 499, 197, 504, 833, 365, 683, 586, 837, 976, 718, 64, 96, 442, 474, 165, 402, 526, 589, 12, 815, 808, 409, 828, 474, 873, 311, 461, 637, 514, 536, 111, 13, 732, 333, 846, 815, 734, 151, 652, 710, 868, 715],
  [806, 30, 907, 689, 431, 433, 278, 442, 967, 804, 569, 795, 278, 161, 824, 458, 516, 338, 993, 345, 70, 725, 677, 634, 260, 411, 784, 911, 840, 372, 627, 365, 401, 534, 54, 550, 686, 51, 711, 653, 573, 280, 167, 570, 160, 991, 28, 675, 48, 21, 739, 117, 464, 416, 469, 723, 546, 972, 635, 386, 344, 980, 750, 463, 233, 522, 13, 637, 291, 723, 9, 864, 722, 176, 434, 881, 885, 461, 275, 651, 200, 732, 487, 663, 149, 955, 106]
));

// console.log(getMinCost(
//   [2, 4, 6],
//   [2, 1, 3],
//   [2, 5, 3]
// ));