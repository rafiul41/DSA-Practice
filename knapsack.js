function knapsackRecursive(values, weights, capacity, ind = values.length - 1, menu = {}) {
    if(ind < 0 || capacity < 0) return 0;
    if(menu[capacity + '/' + ind]) return menu[capacity + '/' + ind];
    if(capacity >= weights[ind]) {
        return menu[capacity + '/' + ind] = Math.max(knapsackRecursive(values, weights, capacity, ind - 1, menu)
        , values[ind] + knapsackRecursive(values, weights, capacity - weights[ind], ind - 1, menu));
    }
    return menu[capacity + '/' + ind] = knapsackRecursive(values, weights, capacity, ind - 1, menu);
}

function knapsackIterative(values, weights, capacity) {
    // const dp = Array(values.length + 1).fill([...Array(capacity + 1).fill(0)]);

    const dp = [];

    for(let i = 0; i <= values.length; i++) {
        dp[i] = [];
        for(let j = 0; j <= capacity; j++) {
            dp[i][j] = 0;
        }
    }

    for(let i = 1; i <= values.length; i++) {
        for(let j = 1; j <= capacity; j++) {
            if(j >= weights[i - 1]) {
                const op1 = dp[i - 1][j];
                const op2 = dp[i - 1][j - weights[i - 1]] + values[i - 1];
                dp[i][j] = Math.max(op1, op2);
                continue;
            }
            dp[i][j] = dp[i - 1][j];
        }
    }

    return dp[values.length][capacity];
}

const values = [ 20, 5, 10, 40, 15, 25 ];
const weights = [ 1, 2, 3, 8, 7, 4 ];
const capacity = 10;

// Answer = 60
const result = knapsackIterative(values, weights, capacity);
// const result = knapsackRecursive(values, weights, capacity);

console.log(result);

