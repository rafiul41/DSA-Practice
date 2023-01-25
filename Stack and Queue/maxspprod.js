function getMaxSpecialProduct(arr) {
  let stack = [], prodVals = Array(arr.length).fill(1);
  for(let i = 0; i < arr.length; i++) {
    while(stack.length !== 0 && arr[stack[stack.length - 1]] <= arr[i]) {
      let toPop = stack[stack.length - 1];
      prodVals[toPop] *= i;
      stack.pop();
    }
    if(stack.length === 0) {
      prodVals[i] = 0;
    } else {
      prodVals[i] *= stack[stack.length - 1];
    }
    stack.push(i);
  }
  
  while(stack.length !== 0) {
    let toPop = stack[stack.length - 1];
    prodVals[toPop] *= 0;
    stack.pop();
  }

  console.log(prodVals);

  let mod = 1e9 + 7, ans = Number.MIN_SAFE_INTEGER;
  for(let i = 0; i < prodVals.length; i++) {
    ans = Math.max(ans, prodVals[i]);
  }
  return ans % mod;;
}

console.log(getMaxSpecialProduct([6, 7, 9, 5, 5, 8]));