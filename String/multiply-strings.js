function omitInitialZeros(str) {
  let curr = 0;
  while(curr < str.length && str[curr] === '0') {
    curr++;
  }
  if(curr === str.length) return '0';
  return str.slice(curr);
}

function addZerosInFront(str, cnt) {
  let ans = '';
  for(let i = 0; i < cnt; i++) {
    ans += '0';
  }
  return ans + str;
}

function addStringNumbers(str1, str2) {
  let diff = Math.abs(str1.length - str2.length);
  if(str1.length > str2.length) {
    str2 = addZerosInFront(str2, diff);
  } else {
    str1 = addZerosInFront(str1, diff);
  }
  
  let carry = 0;
  let ans = '';
  for(let i = str1.length - 1; i >= 0; i--) {
    let toAdd = parseInt(str1[i]) + parseInt(str2[i]) + carry;
    ans = (toAdd % 10).toString() + ans;
    carry = Math.floor(toAdd / 10);
  }

  if(carry) {
    ans = carry.toString() + ans;
  }

  return ans;
}

function multiplyStringWithNumb(str, numb) {
  let ans = '';
  let carry = 0;
  for(let i = str.length - 1; i >= 0; i--) {
    let toPrepend = parseInt(str[i]) * numb + carry;
    ans = (toPrepend % 10).toString() + ans;
    carry = Math.floor(toPrepend / 10);
  }
  if(carry) {
    ans = carry.toString() + ans;
  }
  return ans;
}

function multiply(str1, str2) {
  str1 = omitInitialZeros(str1);
  str2 = omitInitialZeros(str2);
  
  let ans = '0';
  let zerosToAppend = 0;
  for(let i = str2.length - 1; i >= 0; i--) {
    let toAdd = omitInitialZeros(multiplyStringWithNumb(str1, parseInt(str2[i])));
    for(let j = 0; j < zerosToAppend; j++) {
      toAdd += '0';
    }
    zerosToAppend++;
    ans = addStringNumbers(ans, toAdd);
  }
  
  return ans;
}

console.log(multiply('99999', '99999'));