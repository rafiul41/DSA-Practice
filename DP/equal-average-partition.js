// The two parts will also have the same average as the average of the whole array

// This will return One array
function ways(arr, ind, taken = []) {
  if(ind >= arr.length) return taken;

  const op1 = [arr[ind], ...ways(arr, ind + 1, [arr[ind], ...taken])];
  const op2 = ways(arr, ind + 1, taken);

  return op1.length < op2.length ? op1 : op2;
}

const arr = [1, 7, 29, 11];
arr.sort((a, b) => a - b);
console.log(ways(arr));