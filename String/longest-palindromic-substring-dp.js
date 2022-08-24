function getLongestPalindromeStartEndAtInd(str, ind) {
  let p1 = ind - 1, p2 = ind + 1;
  while(p1 >= 0 && p2 < str.length && str[p1] === str[p2]) {
    p1--; p2++;
  }
  return {start: p1 + 1, end: p2 - 1};
}

function getLongestPalindromicSubstring(tmpStr) {
  if(tmpStr.length === 0) return tmpStr;
  let str = '';
  for(let char of tmpStr) {
    str += `#${char}`;
  }
  str += '#';

  let longestPalindromeLen = 3;
  let start = 0, end = 2;
  for(let i = 0; i < str.length; i++) {
    let info = getLongestPalindromeStartEndAtInd(str, i);
    let toCheck = info.end - info.start + 1;
    if(toCheck > longestPalindromeLen) {
      longestPalindromeLen = toCheck;
      start = info.start;
      end = info.end;
    }
  }

  str = str.slice(start, end + 1);
  let res = "";
  for(let char of str) {
    if(char !== '#') {
      res += char;
    }
  }
  return res;
}

console.log(getLongestPalindromicSubstring('abb'));