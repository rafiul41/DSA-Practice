function checkRedundantBracket(expr) {
  let stack = [], operators = '*+/-';
  for(let i = 0; i < expr.length; i++) {
    if(operators.includes(expr[i]) || expr[i] === '(') {
      stack.push(expr[i]);
    } else if(expr[i] === ')') {
      let operatorFound = false;
      while(stack[stack.length - 1] !== '(') {
        if(operators.includes(stack[stack.length - 1])) {
          operatorFound = true;
        }
        stack.pop();
      }
      stack.pop();
      if(!operatorFound) return 1;
    }
  }
  return 0;
}

console.log(checkRedundantBracket('(((a*b))+(c+d))'));