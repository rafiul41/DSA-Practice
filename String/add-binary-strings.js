function addZerosInFront(str, cnt) {
  let res = '';
  for(let i = 0; i < cnt; i++) {
    res += '0';
  }
  return res + str;
}

function addBinaryStrings(str1, str2) {
  let diff = Math.abs(str1.length - str2.length);
  if(str1.length > str2.length) {
    str2 = addZerosInFront(str2, diff);
  } else {
    str1 = addZerosInFront(str1, diff);
  }
  
  let ans = '', carry = 0;
  for(let i = str1.length - 1; i >= 0; i--) {
    let toAdd = carry + parseInt(str1[i]) + parseInt(str2[i]);
    carry = toAdd >= 2 ? 1 : 0;
    toAdd %= 2;
    ans = toAdd + ans;
  }
  if(carry) {
    ans = '1' + ans;
  }
  return ans;
}

console.log(addBinaryStrings('1001', '01001'));