function getMinMoves(seatsInfo) {
  let pos = [];
  for(let i = 0; i < seatsInfo.length; i++) {
    if(seatsInfo[i] === 'x') pos.push(i);
  }
  let curr = Math.floor(pos.length / 2);
  let posToFill = pos[curr] - 1;
  let posFilled = pos[curr - 1];
  let ans = 0, mod = 10000003;
  while(posToFill >= 0 && curr >= 0) {
    if(posToFill === posFilled) {
      posToFill--;
      posFilled--;
      continue;
    }
    ans = (ans + posFilled - posToFill) % mod;
    posToFill--;
    curr--;
    posFilled = pos[curr];
  }
  return ans;
}

console.log(getMinMoves('....x..xx...x..'));