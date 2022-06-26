function countInversions(A) {
  if(A.length === 0) return 0;
  const stack = [];
  stack.push({numb: A[0], contribution: 0});
  
  let ans = 0;
  for(let i = 1; i < A.length; i++) {
      let contributions = 0, cnt = 0;
      
      while(stack.length > 0 && stack.slice(-1)[0].numb > A[i]) {
          cnt++;
          contributions += stack.slice(-1).contribution;
          stack.pop();
      }
      
      ans += (contributions + cnt);
  }
  
  return ans;
}

console.log(countInversions([2, 1]));