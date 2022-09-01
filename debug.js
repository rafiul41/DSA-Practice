function getBitReversedNumb(numb) {
  let ans = 0;
  for(let i = 31, j = 0; i >= 0; i--, j++) {
    if(numb & (1 << j)) ans = (ans | (1 << i)) >>> 0;
  }
  return ans;
}

console.log(getBitReversedNumb(3));