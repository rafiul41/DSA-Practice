function isAllBitOn(mask, len) {
  for(let i = 0; i < len; i++) {
    let isBitOn = mask & (1 << i);
    if(!isBitOn) return false;
  }
  return true;
}

function isOneBitOn(mask, len) {
  let bitCnt = 0, onBit = -1;
  for(let i = 0; i < len; i++) {
    let isBitOn = mask & (1 << i);
    if(isBitOn) onBit = i;
    bitCnt += (isBitOn ? 1 : 0);
    if(bitCnt > 1) return -1;
  }
  return onBit;
}

function getMergeResult(str1, str2) {
  if(str1 === '') return str2;
  if(str1.includes(str2)) return str1;
  for(let i = 0; i < str1.length - 1; i++) {
    let len = str1.length - i;
    if(str2.length < len) continue;
    if(str1.slice(i) === str2.slice(0, len)) {
      return str1.slice(0, i) + str1.slice(i) + str2.slice(len);
    }
  }
  return str1 + str2;
}

function func(mask, lastStr, arr) {
  if(isAllBitOn(mask, arr.length)) return lastStr;
  let minLen = 2000, minStr = '';
  for(let i = 0; i < arr.length; i++) {
    let isBitOn = mask & (1 << i);
    if(!isBitOn) {
      let mergeResult = getMergeResult(lastStr, arr[i]);
      let res = mergeResult + func(mask | (1 << i), mergeResult, arr);
      if(res.length < minLen) {
        minStr = res;
      }
    }
  }
  return minStr;
}

function getShortestCommonSuperString(arr) {
  return func(0, '', arr);
}

// console.log(getMergeResult('abcd', 'cdef'));
console.log(getShortestCommonSuperString('abcd', 'cdef'));