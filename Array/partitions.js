// 2 002 02
// 2 0020 2
// 20 02 02
// 20 020 2
// 200 2 02
// 200 20 2 --> 6

// 2 0 0 2 0 2
// 2 2 2 2 2 1 --> number of 2 from left
// 2 + 2 + 2 --> 6 ways

// Each partition sum is totalSum / 3
function partition(arr) {
  let sum = arr.reduce((prevAccumulated, curr) => prevAccumulated + curr, 0);
  if(sum % 3 !== 0) return 0;
  sum /= 3;

  const numberOfSumsToLeft = Array(arr.length).fill(0);
  numberOfSumsToLeft[arr.length - 1] = arr[arr.length - 1] === sum ? 1 : 0;
  let currSum = arr[arr.length - 1];
  for(let i = arr.length - 2; i >= 0; i--) {
    numberOfSumsToLeft[i] = numberOfSumsToLeft[i + 1];
    if(currSum === sum) {
      numberOfSumsToLeft[i]++;
    }
  }

  let ans = 0;
  currSum = 0;
  for(let i = 0; i < arr.length - 2; i++) {
    currSum += arr[i];
    if(currSum === sum) {
      ans += numberOfSumsToLeft[i + 2];
    }
  }

  return ans;
}

// 0 -1 1 0 --> 1 way
// 1 2 3 0 3 --> 2
// 0 3 0 --> 0
// 1 1 1 --> 1
// 2 0 0 2 0 2 
console.log(partition([0, -1, 1, 0]));
console.log(partition([1, 2, 3, 0, 3]));
console.log(partition([0, 3, 0]));
console.log(partition([1, 1, 1]));
console.log(partition([2, 0, 0, 2, 0, 2]));