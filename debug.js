function func(A) {
  A = A.trim();
  A = A.split(' ')[0];
  let digits = [];
  for (let i = 0; i < 10; i++) {
    digits.push(i.toString());
  }
  let start = 0;
  let isSignPresent = false;
  let isPos = true;
  if (A[start] === '+' || A[start] === '-') {
    isSignPresent = true;
    if(A[start] === '-') isPos = false;
    start++;
  }
  if(start === A.length) return 0;
  for (let i = start; i < A.length; i++) {
    let z = A.charAt(i);
    if (!digits.includes(z)) return 0;
  }
  let z = parseInt(isSignPresent ? A.slice(1) : A);
  if(!isPos) z *= -1;
  if (z.toString().length >= 10) {
    if (z < -2147483648) return -2147483648;
    if (z > 2147483647) return 2147483647;
  }
  return z;
}

console.log(func('- 5 88C340185Q 71 8079 834617385 2898422X5297Z6900'));
