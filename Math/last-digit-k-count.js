function getLastDigitKCountUptoN(n, digit) {
  let res = parseInt(n / 10);
  n %= 10;
  if (n >= digit) res++;
  return res;
}

function getLastDigitKCount(start, end, lastDigit) {
  return (
    getLastDigitKCountUptoN(end, lastDigit) -
    getLastDigitKCountUptoN(start - 1, lastDigit)
  );
}
