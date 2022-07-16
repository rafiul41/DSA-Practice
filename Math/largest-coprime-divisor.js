function getGcd(a, b) {
  if(a < b) {
    [a, b] = [b, a];
  }
  while(b) {
    let tmp = b;
    b = a % b;
    a = tmp;
  }

  return a;
}

function getLargestCoPrimeDivisor(a, b) {
  let divisors = [];
  let sqrt = parseInt(Math.sqrt(a));
  for(let i = 1; i <= sqrt; i++) {
    if(a % i === 0) {
      divisors.push(i);
      if(a / i !== i) {
        divisors.push(a / i);
      }
    }
  }

  divisors.sort((a, b) => b - a);
  for(let i = 0; i < divisors.length; i++) {
    if(getGcd(divisors[i], b) === 1) {
      return divisors[i];
    }
  }
  return 1;
}