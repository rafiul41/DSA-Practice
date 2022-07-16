function getMod(dividend, divisor) {
  let toDivide = '';
  for(let i = 0; i < dividend.length; i++) {
    toDivide += dividend[i];
    if(parseInt(toDivide) >= divisor) {
      toDivide = parseInt(parseInt(toDivide) % divisor).toString();
    }
  }
  return parseInt(toDivide);
}

function getLastDigit(a, b) {
  let repeatNumbers = [0, 1, 5, 6];
  let lastDigit = parseInt(a[a.length -1]);
  if(repeatNumbers.includes(lastDigit)) return lastDigit;
  let mod = getMod(b, 4);
  let pow = [4, 1, 2, 3];
  let upto = pow[mod];
  let prod = 1;
  for(let i = 0; i < upto; i++) {
    prod *= lastDigit
  }

  prod = prod.toString();
  return prod[prod.length - 1];
}

console.log(getLastDigit('3', '1'));
console.log(getLastDigit('3', '2'));
console.log(getLastDigit('3', '3'));
console.log(getLastDigit('3', '4'));
console.log(getLastDigit('3', '5'));
console.log(getLastDigit('3', '6'));
console.log(getLastDigit('3', '7'));
console.log(getLastDigit('3', '8'));
console.log(getLastDigit('3', '9'));