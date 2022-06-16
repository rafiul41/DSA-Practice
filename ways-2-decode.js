// 123 --> 1 2 3, 12 3, 1 23 --> 3 ways
// 2613 --> 2 6 1 3, 2 6 13, 26 1 3, 26 13 --> 4 ways
// 0 -> 0 ways **
// 30 --> 0 ways **
// 1030 --> 0 ways **
// 103 --> 10 3 --> 2 ways

// Base Case --> return 1 we can traverse the whole string
// check if we can 

const mod = 1000000007;

function ways2Decode(str, ind = 0) {
  if(ind >= str.length) return 1;
  // I have minimum 2 characters to check
  let op1 = 0, op2 = 0, numb;
  if(ind + 2 <= str.length) {
    numb = parseInt(str.slice(ind, ind + 2));
    if(numb >= 1 && numb <= 26) {
      op1 = ways2Decode(str, ind + 2);
    }
  }
  numb = parseInt(str.slice(0, 1));
  if(numb !== 0) op2 = ways2Decode(str, ind + 1);

  return op1 + op2;
}

console.log(ways2Decode('123'));
console.log(ways2Decode('2613'));
console.log(ways2Decode('0'));
console.log(ways2Decode('30'));
console.log(ways2Decode('1030'));
console.log(ways2Decode('103'));