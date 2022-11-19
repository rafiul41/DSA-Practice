function getMinSmoke(start, end, arr, memo = {}) {
  if(memo[start + '/' + end] !== undefined) return memo[start + '/' + end]
  if(start === end) {
    return memo[start + '/' + end] = {
      smoke: 0,
      color: arr[start]
    };
  }
  if(end === start + 1) {
    return memo[start + '/' + end] = {
      smoke: arr[start] * arr[end],
      color: (arr[start] + arr[end]) % 100
    }
  }
  let minSmoke = Number.MAX_SAFE_INTEGER, minColor;
  for(let i = start; i < end; i++) {
    let left = getMinSmoke(start, i, arr, memo);
    let right = getMinSmoke(i + 1, end, arr, memo);
    let currSmoke = (left.color * right.color) + left.smoke + right.smoke;
    if(currSmoke < minSmoke) {
      minSmoke = currSmoke;
      minColor = (left.color + right.color) % 100
    }
  }
  return memo[start + '/' + end] = {
    smoke: minSmoke,
    color: minColor
  };
}

let arr = [2, 3, 4, 5];

console.log(getMinSmoke(0, arr.length - 1, arr));