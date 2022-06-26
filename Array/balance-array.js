// cumulative sum for odd index
// cumulative sum for even index 

// for odd sum = left + right
//   left = oddSum upto i
//   right = evenSum from n to i;
// for even sum = left + right
//   left = evenSum upto i
//   right = oddSum from n to i;

function balanceCnt(arr) {
  if(arr.length === 1) {
    return 1;
  }
  const cumOddSum = [], cumEvenSum = [];
  cumEvenSum[0] = arr[0];
  cumOddSum[0] = 0;
  for(let i = 1; i < arr.length; i++) {
    cumOddSum[i] = cumOddSum[i - 1];
    cumEvenSum[i] = cumEvenSum[i - 1];
    if(i % 2 === 0) {
      cumEvenSum[i] += arr[i];
    } else {
      cumOddSum[i] += arr[i];
    }
  }

  let ans = 0;
  for(let i = 0; i < arr.length; i++) {
    let oddSum = (i === 0 ? 0 : cumOddSum[i - 1]) + (cumEvenSum[arr.length - 1] - cumEvenSum[i]);
    let evenSum = (i === 0 ? 0 : cumEvenSum[i - 1]) + (cumOddSum[arr.length - 1] - cumOddSum[i]);
    ans += (oddSum === evenSum);
  }

  return ans;
}

console.log(balanceCnt([2, 1, 6, 4]));
console.log(balanceCnt([5, 5, 2, 5, 8]));