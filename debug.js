function isPowerOf2(numb) {
  let toCheck = 1 << (Math.log2(numb));
  return (numb | toCheck) === toCheck;
}

function getPowerfulDivisors(arr) {
  let max = arr.reduce((preRes, curr) => Math.max(preRes, curr), Number.MIN_SAFE_INTEGER);
  let sqrt = Math.floor(Math.sqrt(max));
  let divisorCnt = Array(max + 1).fill(0);
  for(let i = 1; i <= sqrt; i++) {
    for(let j = i; j <= max; j += i) {
      let sqrtJ = Math.floor(Math.sqrt(j));
      if(j % i === 0 && i <= sqrtJ) {
        divisorCnt[j]++;
        if(j / i !== i) {
          divisorCnt[j]++;
        }
      }
    }
  }
  
  for(let i = 1; i < divisorCnt.length; i++) {
    divisorCnt[i] = divisorCnt[i - 1] + (isPowerOf2(divisorCnt[i]) ? 1 : 0);
  }

  let ans = [];
  for(let i = 0; i < arr.length; i++) {
    ans.push(divisorCnt[arr[i]]);
  }
  return ans;
}

console.log(getPowerfulDivisors([5, 10]));