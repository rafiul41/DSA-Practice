function getRepeatedAndMissingNumbers(arr) {
  const n = BigInt(arr.length);
  const actualSquareSum = n * (n + 1n) * (2n * n + 1n) / 6n;
  const actualSum = n * (n + 1n) / 2n;
  let givenSum = BigInt(0), givenSquareSum = BigInt(0);
  arr.forEach(element => {
    element = BigInt(element);
    givenSquareSum += (element * element);
    givenSum += element;
  });

  const x = (givenSum - actualSum + (givenSquareSum - actualSquareSum) / (givenSum - actualSum)) / 2n;
  return [parseInt(x), parseInt(x - givenSum + actualSum)];
}

console.log(getRepeatedAndMissingNumbers([3, 1, 2, 5, 3]));

// 1 + 2x + ... + n = sum
// 1 + 2 + x + y + ... + n + x - y = sum
// (n * (n + 1)) / 2 + x - y = sum
// So, for given example:
// 15 + x - y = 14
// *** x - y = givenSum - actualSum

// 1^2 + 2^2 + ... + n^2 = n * (n + 1) * (2n + 1) / 6
// 1^2 + x^2 + x^2 + ... + n^2 = givenSquareSums
// 1^2 + x^2 + y^2 ... + n^2 + x^2 - y^2 = givenSquareSums
// (x + y)(x - y) = givenSquareSums - actualSquareSums
// *** x + y = (givenSquareSums - actualSquareSums) / (givenSum - actualSum)

// x = (givenSum - actualSum + (givenSquareSums - actualSquareSums) / (givenSum - actualSum)) / 2;
// y = x - givenSum + actualSum