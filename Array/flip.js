// Kadane's ALgo
function func(str) {
  const arr = [];
  let zeroFound = false;
  for(let i = 0; i < str.length; i++) {
    if(str[i] === '0') {
      arr.push(1);
      zeroFound = true;
    } else {
      arr.push(-1);
    }
  }

  if(!zeroFound) return [];
  
  let currMax = arr[0], globalMax = arr[0], currStart = 0, currEnd = 0, globalStart = 0, globalEnd = 0;
  for(let i = 1; i < arr.length; i++) {
    if(arr[i] > currMax + arr[i]) {
      currMax = arr[i];
      currStart = i;
      currEnd = i;
    } else {
      currMax = currMax + arr[i];
      currEnd = i;
    }

    if(currMax > globalMax) {
      globalMax = currMax;
      globalStart = currStart;
      globalEnd = currEnd;
    }
  }

  return [globalStart + 1, globalEnd + 1];
}

console.log(func('010'));