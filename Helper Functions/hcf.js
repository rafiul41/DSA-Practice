function getHighestCommonFactor(a, b) {
  if(a < b) {
    [a, b] = [b, a];
  }
  while(b) {
    let tmp = b;
    b = a % b;
    a = tmp;
  }
  return a;
}

console.log(getHighestCommonFactor(12, 7));