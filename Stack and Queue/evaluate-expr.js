function evaluateExpr(arr) {
  let s = [], operators = '*/+-';

  for(let i = 0; i < arr.length; i++) {
    if(operators.includes(arr[i])) {
      let b = s[s.length - 1];
      s.pop();
      let a = s[s.length - 1];
      s.pop();
      let res;
      if(arr[i] === '*') {
        res = a * b;
      } else if(arr[i] === '/') {
        res = Math.floor(a / b);
      } else if(arr[i] === '+') {
        res = a + b;
      } else {
        res = a - b;
      }
      s.push(res);
    } else {
      s.push(parseInt(arr[i]));
    }
  }

  return s[0];
}