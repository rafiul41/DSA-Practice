function getStr(char, cnt) {
  let res = '';
  for (let i = 0; i < cnt; i++) {
    res += char;
  }
  return res;
}

function getRoman(numb, pos) {
  let roman = '';
  if (pos === 3) {
    roman += getStr('M', numb);
    return roman;
  }
  let posCharMap = [
    {
      one: 'I',
      two: 'V',
      three: 'X'
    },
    {
      one: 'X',
      two: 'L',
      three: 'C'
    },
    {
      one: 'C',
      two: 'D',
      three: 'M'
    }
  ];
  // For pos = 0
  if (numb >= 0 && numb <= 3) {
    roman += getStr(posCharMap[pos].one, numb);
  } else if (numb <= 8) {
    if (numb <= 5) {
      roman += `${getStr(posCharMap[pos].one, 5 - numb)}${posCharMap[pos].two}`;
    } else {
      roman += `${posCharMap[pos].two}${getStr(posCharMap[pos].one, numb - 5)}`;
    }
  } else {
    roman += `${getStr(posCharMap[pos].one, 10 - numb)}${
      posCharMap[pos].three
    }`;
  }
  return roman;
}

function func(numb) {
  let ans = '';
  let pos = 0;
  while(numb) {
    ans = getRoman(numb % 10, pos) + ans;
    pos++;
    numb = parseInt(numb / 10);
  }
  return ans;
}

console.log(func(3999));