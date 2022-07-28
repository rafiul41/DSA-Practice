function getSumOfNaturalNumbersUptoN(n) {
  let N = BigInt(n);
  return (N * (N + 1n)) / 2n;
}

function getSum(a, b) {
  let start, end;
  while(true) {
    if(a % 7 === 0) {
      start = a / 7;
      break;
    }
    a++;
  }
  while(true) {
    if(b % 7 === 0) {
      end = b / 7;
      break;
    }
    b--;
  }

  let seriesSum = getSumOfNaturalNumbersUptoN(end) - getSumOfNaturalNumbersUptoN(start - 1);
  return seriesSum * 7n;
}

console.log(getSS);