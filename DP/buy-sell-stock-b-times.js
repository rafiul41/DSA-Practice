function maxProfit(prices, maxTransactions, ind, isOwned, memo = {}) {
  let key = maxTransactions + '/' + ind + '/' + isOwned;
  if(memo[key] !== undefined) return memo[key]
  if(ind >= prices.length) return memo[key] = 0;
  // Don't buy or sell this
  let op1 = maxProfit(prices, maxTransactions, ind + 1, isOwned, memo);
  let op2 = 0;
  if(!isOwned) { // Need to buy
    // buy this
    op2 = maxProfit(prices, maxTransactions, ind + 1, !isOwned, memo) - prices[ind];
    return memo[key] = Math.max(op1, op2);
  }
  // sell this
  if(maxTransactions - 1 >= 0) {
    op2 = maxProfit(prices, maxTransactions - 1, ind + 1, !isOwned, memo) + prices[ind];
  }

  return memo[key] = Math.max(op1, op2);
}

console.log(maxProfit([3, 2, 6, 5, 0, 3], 2, 0, true));