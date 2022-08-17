function isValid(strNumb) {
  let numb = parseInt(strNumb);
  if(numb.toString().length !== strNumb.length) return false;
  return numb >= 0 && numb <= 255;
}

function getAddresses(str) {
  let ans = [];
  for(let i = 0; i < str.length - 3; i++) {
    for(let j = i + 1; j < str.length - 2; j++) {
      for(let k = j + 1; k < str.length - 1; k++) {
        let a = str.slice(0, i + 1);
        let b = str.slice(i + 1, j + 1);
        let c = str.slice(j + 1, k + 1);
        let d = str.slice(k + 1, str.length);
        if(isValid(a) && isValid(b) && isValid(c) && isValid(d)) {
          ans.push(`${a}.${b}.${c}.${d}`);
        }
      }
    }
  }

  return ans;
}

console.log(getAddresses('0100100'));