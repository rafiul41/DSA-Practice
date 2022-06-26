function canMake(arr, toMake, x) {
  for(let numb of arr) {
    if(numb - x !== toMake && numb + x !== toMake && numb !== toMake) return 0;
  }
  return 1;
}

function makeArray(arr, x) {
  let op1 = arr[0];
  let op2 = arr[0] - x;
  let op3 = arr[0] + x;

  if(canMake(arr, op1, x) || canMake(arr, op2, x) || canMake(arr, op3, x)) {
    return 1;
  }
  return 0;
}

console.log(makeArray([2,3,1], 1));
console.log(makeArray([2,3,1], 2));