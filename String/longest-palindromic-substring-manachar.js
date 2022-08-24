function getLongestPalindromicSubstring(tmpStr) {
  let str = '';
  for(let i = 0; i < tmpStr.length; i++) {
    str += `#${tmpStr[i]}`;
  }
  str += '#';

  let max = 0, maxStart = 0, maxEnd = 0;

  let lenTable = Array(str.length).fill(0);
  let start = 0, end = 0, center = 0;
  while(center < str.length) {
    while(start >= 0 && end < str.length && str[start] === str[end]) {
      start--;end++;
    }
    start = start + 1;
    end = end - 1;

    lenTable[center] = end - start + 1;
    if(lenTable[center] > max) {
      max = lenTable[center];
      maxStart = start;
      maxEnd = end;
    }

    if(end === str.length - 1) break;

    let newCenter = str[end] === '#' ? end + 1 : end;

    for(let i = center + 1; i <= end; i++) {
      let mirrorPosVal = lenTable[2 * center - i];
      lenTable[i] = Math.min(mirrorPosVal, 2 * (end - i) + 1);
      if(i + Math.floor(lenTable[i] / 2) === end) {
        newCenter = i;
        break;
      }
    }

    center = newCenter;
    let diff = Math.floor(lenTable[center] / 2);
    start = center - diff;
    end = center + diff;
  }

  console.log(lenTable);

  let res = '';
  for(let i = maxStart; i <= maxEnd; i++) {
    if(str[i] !== '#') res += str[i];
  }
  return res;
}

console.log(getLongestPalindromicSubstring('abbcccbbbcaaccbababcbcabca'));