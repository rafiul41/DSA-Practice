function nearest2PowerMinusOne(numb) {
  let bitCnt = parseInt(Math.log2(numb));
  let res = 1;
  for(let i = 0; i < bitCnt; i++) {
    res = res | (1 << i);
  }
  return res;
}

function getTotalUpto2Power(powerNumb) {
  let bitCnt = parseInt(Math.log2(powerNumb)) + 1;
  return bitCnt * (powerNumb + 1) / 2;
}

function getSetBitCnt(numb) {
  if(numb === 0) return 0;
  if(numb <= 2) return numb;
  let nearest = nearest2PowerMinusOne(numb);
  let toAdd = numb - nearest;
  return (getTotalUpto2Power(nearest) + toAdd + getSetBitCnt(toAdd - 1)) % (1e9 + 7);
}

console.log(getSetBitCnt(100000000));