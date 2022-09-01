function divideStringByNumb(str, numb) {
  let base = 10;
  let curr = 0, carry = 0;
  let ans = '';
  while(curr < str.length) {
    let toDivide = carry, fallen = 0;
    while(curr < str.length && toDivide < numb) {
      toDivide = toDivide * base + parseInt(str[curr]);
      curr++; fallen++;
    }
    for(let i = 0; i < fallen - 1; i++) {
      ans += '0';
    }
    carry = toDivide % numb;
    ans += (Math.floor(toDivide / numb));
  }

  return ans;
}

function isPowerOf2(str) {
  if(str === '1') return 0;
  let setBitCnt = 0;
  while(str !== '0') {
    let lastDigit = parseInt(str[str.length - 1]);
    setBitCnt += (lastDigit % 2 === 1 ? 1 : 0);
    if(setBitCnt > 1) return 0;
    str = divideStringByNumb(str, 2);
  }
  return setBitCnt === 1 ? 1 : 0;
}

function isPowerOf2Ajaira(numb) {
  numb = BigInt(numb);
  let setBitCnt = 0;
  while(numb !== 0n) {
      setBitCnt += (numb % 2n === 1n ? 1 : 0);
      if(setBitCnt > 1) return 0;
      numb /= 2n;
      console.log(numb);
  }
  return setBitCnt === 1 ? 1 : 0;
}

console.log(divideStringByNumb('147573952589676412928', 2));
