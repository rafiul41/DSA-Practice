let memo, path, set;

function doesExist(ind, toTake, sum, arr) {
  if(memo[ind + '/' + toTake + '/' + sum] !== undefined) return memo[ind + '/' + toTake + '/' + sum];
  if (sum === 0 && toTake === 0) return memo[ind + '/' + toTake + '/' + sum] = true;
  if (ind < 0 || toTake <= 0) return memo[ind + '/' + toTake + '/' + sum] = false;
  let op1 = doesExist(ind - 1, toTake, sum, arr);
  let op2 = doesExist(ind - 1, toTake - 1, sum - arr[ind], arr);
  return memo[ind + '/' + toTake + '/' + sum] =  op1 || op2;
}

function findPath(ind, toTake, sum, arr) {
  if(ind < 0 || toTake <= 0) return;
  if(memo[(ind - 1) + '/' + (toTake - 1) + '/' + (sum - arr[ind])] === true) {
    path.push(arr[ind]);
    set.add(ind);
    return findPath(ind - 1, toTake - 1, sum - arr[ind], arr);
  } else {
    return findPath(ind - 1, toTake, sum, arr);
  }
}

function getEqualAveragePartition(arr) {
  memo = {};
  set = new Set();
  arr.sort((a, b) => b - a);
  path = [];
  let sum = arr.reduce((preRes, curr) => preRes + curr, 0);
  for (let i = 1; i < arr.length; i++) {
    let toCheck = (sum * i) / arr.length;
    if (
      toCheck === Math.floor(toCheck) &&
      doesExist(arr.length - 1, i, toCheck, arr)
    ) {
      findPath(arr.length - 1, i, toCheck, arr);
      break;
    }
  }
  if(path.length === 0) return [];
  let path2 = [];
  for(let i = arr.length - 1; i >= 0; i--) {
    if(!set.has(i)) {
      path2.push(arr[i]);
    }
  }
  path.sort((a, b) => a - b);
  return [path, path2];
}

let arr = [47, 14, 30, 19, 30, 4, 32, 32, 15, 2, 6, 24];

console.log(getEqualAveragePartition(arr));
// console.log(doesExist(0, 3, 17, arr));
