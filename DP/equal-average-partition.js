function getMinimumTakenCntForAvg(ind, arr, sum, avg) {
  if(ind >= arr.length) {
    if(sum / taken === avg) return 0;
    return 1000000000;
  }
  let op1 = 1 + getMinimumTakenCntForAvg(ind + 1, arr, sum + arr[ind], avg)
  let op2 = getMinimumTakenCntForAvg(ind + 1, arr, sum, avg);

  return Math.min(op1, op2);
}

function getPartitions(arr) {
  let avg = arr.reduce((prevRes, curr) => prevRes + curr, 0);
  avg /= arr.length;
  if (avg !== parseInt(avg)) {
    return [];
  }
  arr.sort((a, b) => a - b);
  let memo = {};
  console.log(getMinimumTakenCntForAvg(0, arr, 0, avg));
}

const arr = [1, 7, 15, 29, 11, 9];
console.log(getPartitions(arr));

// s1 / n1 = s2 / n2
// s1 / n1 = (s - s1) / (n - n1)
// s1 * (n - n1) = n1 * (s - s1)
// s1 * n - n1 * s1 = n1 * s - s1 * n1
// s1 * n = n1 * s

// *** s1 = n1 * s / n

// I have total sum
// s1 must be a non-negative integer as given numbers are integers

