let numbers = '0123456789';
numbers = numbers.split('');
let signs = ['+', '-'];

function trimStrFromFront(str) {
  let curr = 0;
  while(curr < str.length && str[curr] === ' ') {
    curr++;
  }
  return str.slice(curr);
}

function getFirstNumbFromTrimmedStr(str) {
  let curr = 0;
  while(curr < str.length && str[curr] !== ' ') {
    curr++;
  }
  str = str.slice(0, curr);
  curr = 0;
  while(curr < str.length && (signs.includes(str[curr]) || numbers.includes(str[curr]))) {
    curr++;
  }
  return str.slice(0, curr);
}

function isValidNumbStr(str) {
  let start = 0;
  if(signs.includes(str[0])) {
    start++;
  }
  if(start === str.length) return false;
  for(let i = start; i < str.length; i++) {
    if(!(numbers.includes(str[i]))) {
      return false;
    }
  }
  return true;
}

// 2147483647 -2147483648
function strToNumber(str) {
  let isPositive = str[0] !== '-';
  let start = 0;
  if(signs.includes(str[0])) start++;
  let ans = 0, base = 10;
  for(let i = start; i < str.length; i++) {
    ans = base * ans + (str.charCodeAt(i) - 48);
    if(ans > 2147483647 && isPositive) return 2147483647;
    if(ans > 2147483648 && !isPositive) return -2147483648;
  }
  return isPositive ? ans : -ans;
}

function func(str) {
  str = trimStrFromFront(str);
  str = getFirstNumbFromTrimmedStr(str);

  if(!isValidNumbStr(str)) return 0;

  return strToNumber(str);
}