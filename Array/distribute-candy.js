function progressionSum(n) {
  return (n * (n + 1)) / 2;
}

function candyCnt(ratings) {
  if(ratings.length === 0) return 0;
  if(ratings.length === 1) return 1;

  let ans = 0;

  for(let i = 0; i < ratings.length; i++) {
    let j = i + 1, cnt = 1;
    if(ratings[j] > ratings[i]) {
      while(j < ratings.length && ratings[j] > ratings[j - 1]) {
        cnt++;
        j++;
      }
      cnt--;
      j--;
    } else {
      while(j < ratings.length && ratings[j] <= ratings[j - 1]) {
        cnt++;
        j++;
      }
    }
    ans += progressionSum(cnt);
    if(i !== j) i = j - 1;
  }

  return ans;
}

console.log(candyCnt([1, 2]));
console.log(candyCnt([1, 5, 2, 1]));
console.log(candyCnt([1, 10, 4, 5, 6]));
console.log(candyCnt([1, 0, -10]));
console.log(candyCnt([1, 2, 2]));