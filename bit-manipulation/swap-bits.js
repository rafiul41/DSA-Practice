function swapBits(numb, b, c) {
  if (b === c) return numb;
  b--;
  c--;
  let isBthBitOn = numb & (1 << b);
  let isCthBitOn = numb & (1 << c);
  if (isBthBitOn && isCthBitOn && !isBthBitOn && !isCthBitOn) return numb;
  numb = numb ^ (1 << b);
  numb = numb ^ (1 << c);
  return numb;
}

console.log(swapBits(2, 26, 16));
