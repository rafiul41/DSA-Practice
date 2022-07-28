function getNextSimilar(numb) {
  numb = numb.split('');
  let reqInd = -1;
  for(let i = numb.length - 1; i >= 1; i--) {
    if(numb[i - 1] < numb[i]) {
      reqInd = i - 1;
      break;
    }
  }
  if(reqInd === -1) return reqInd;
  let swapInd;
  for(let i = numb.length - 1; i >= reqInd + 1; i--) {
    if(numb[i] > numb[reqInd]) {
      swapInd = i;
      break;
    }
  }

  [numb[reqInd], numb[swapInd]] = [numb[swapInd], numb[reqInd]];

  return numb.join('');
}

console.log(getNextSimilar('218765'));