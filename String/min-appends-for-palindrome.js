// String.prototype.reverse = function() {
//   let reversed = '';
//   for(let i = this.length - 1; i >= 0; i--) {
//     reversed += this.charAt(i);
//   }
//   return reversed;
// }

function getPiTableLastVal(str) {
  let piTable = Array(str.length).fill(0);
  let j = 0, i = 1;
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
  return piTable[str.length - 1];
}

function getMinAppendCntForPalindrome(str) {
  let reversed = str.reverse();
  let toCheck = reversed + str;
  let lastVal = getPiTableLastVal(toCheck);
  return str.length - lastVal;
}
console.log(getMinAppendCntForPalindrome('abede'));