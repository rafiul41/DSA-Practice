function isColorful(numb) {
  let digits = numb.toString().split('');
  let set = new Set();
  for(let i = 0; i < digits.length; i++) {
    for(let j = i; j < digits.length; j++) {
      let prod = 1;
      for(let k = i; k <= j; k++) {
        prod *= parseInt(digits[k]);
      }
      if(set.has(prod)) return 0;
      set.add(prod);
    }
  }

  return 1;
}

console.log(isColorful())