function isDivisibleBy60(digits) {
  if(A[0] === 0 && A.length === 1) return 1;
  let zeroCnt = 0, sum = 0, positiveEvenCnt = 0;
  for(let i = 0; i < digits.length; i++) {
    sum += digits[i];
    if(digits[i] === 0) {
      zeroCnt++;
    } else if(digits[i] % 2 === 0) {
      positiveEvenCnt++;
    }
  }
  return sum % 3 === 0 && zeroCnt > 0 && positiveEvenCnt > 0;
}

// a number to be divisible by a composite number
// that number must be divisible by 
// the prime factors raised to their highest power

// so 60 = 4 * 3 * 5

// a number to be divisible 
// by 3 --> the sum of all the digits % 3 === 0
// by 4 --> since there must be a zero at the end thus we need to check for another even number
// by 5 --> must end with 0 / 5
