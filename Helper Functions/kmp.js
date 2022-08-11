function getPiTable(str) {
  let piTable = Array(str.length).fill(0);
  if(str.length < 2) return piTable;
  let i = 1, j = 0;
  while(i < str.length) {
    if(str[i] === str[j]) {
      piTable[i] = j + 1;
      i++; j++;
      continue;
    }
    if(j === 0) {
      i++;
    } else {
      j = piTable[j - 1];
    }
  }
  return piTable;
}

function searchSubstring(str, pattern) {
  let piTable = getPiTable(pattern);
  let i = 0, j = 0;
  while(i < str.length) {
    if(str[i] === pattern[j]) {
      i++; j++;
      if(j === pattern.length) {
        return i - pattern.length;
      }
      continue;
    }
    if(j === 0) {
      i++;
    } else {
      j = piTable[j - 1];
    }
  }

  return -1;
}

console.log(searchSubstring('abcaabcab', 'abcab')); // 4