function getBullsAndCowsCnt(secret, guess) {
  let freq = [];
  for(let i = 0; i <= 9; i++) {
    freq.push({secret: 0, guess: 0});
  }

  let bullsCnt = 0;
  for(let i = 0; i < secret.length; i++) {
    if(secret[i] === guess[i]) {
      bullsCnt++;
      continue;
    }
    freq[parseInt(secret[i])].secret++;
    freq[parseInt(guess[i])].guess++;
  }

  let cowsCnt = 0;
  for(let i = 0; i < freq.length; i++) {
    cowsCnt += Math.min(freq[i].secret, freq[i].guess);
  }

  return bullsCnt.toString() + 'A' + cowsCnt.toString() + 'B';
}

console.log(getBullsAndCowsCnt('1123', '0111'));