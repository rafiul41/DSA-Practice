function dp(ind1, ind2, isPlayerOneTurn, coins, memo = {}) {
  if (memo[ind1 + '/' + ind2 + '/' + isPlayerOneTurn] !== undefined)
    return memo[ind1 + '/' + ind2 + '/' + isPlayerOneTurn];
  if (ind1 > ind2) {
    return (memo[ind1 + '/' + ind2 + '/' + isPlayerOneTurn] = {
      one: 0,
      two: 0
    });
  }
  let op1, op2;
  if (isPlayerOneTurn) {
    op1 = dp(ind1 + 1, ind2, !isPlayerOneTurn, coins, memo);
    op2 = dp(ind1, ind2 - 1, !isPlayerOneTurn, coins, memo);
    return (memo[ind1 + '/' + ind2 + '/' + isPlayerOneTurn] =
      op1.one + coins[ind1] > op2.one + coins[ind2]
        ? { ...op1, one: op1.one + coins[ind1] }
        : { ...op2, one: op2.one + coins[ind2] });
  } else {
    op1 = dp(ind1 + 1, ind2, !isPlayerOneTurn, coins, memo);
    op2 = dp(ind1, ind2 - 1, !isPlayerOneTurn, coins, memo);
    return (memo[ind1 + '/' + ind2 + '/' + isPlayerOneTurn] =
      op1.two + coins[ind1] > op2.two + coins[ind2]
        ? { ...op1, two: op1.two + coins[ind1] }
        : { ...op2, two: op2.two + coins[ind2] });
  }
}

function getMaxMoney(coins) {
  return dp(0, coins.length - 1, true, coins).one;
}

console.log(getMaxMoney([5, 4, 8, 10]));
