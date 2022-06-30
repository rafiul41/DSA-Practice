function getMaxDist(arr) {
  if(arr.length === 0) return -1;
  if(arr.length === 1) return 0;

  const sortedWithInd = arr.reduce((prevAccumulated, curr, ind) => {
    prevAccumulated.push({numb: curr, ind});
    return prevAccumulated;
  }, []).sort((a, b) => a.numb - b.numb);
  
  const greatestIndFromRight = Array(arr.length).fill(0);
  greatestIndFromRight[arr.length - 1] = sortedWithInd[arr.length - 1].ind;
  for(let i = arr.length - 2; i >= 0; i--) {
    greatestIndFromRight[i] = Math.max(greatestIndFromRight[i + 1], sortedWithInd[i].ind);
  }

  let ans = Number.MIN_SAFE_INTEGER;
  for(let i = 0; i < arr.length; i++) {
    ans = Math.max(ans, greatestIndFromRight[i] - sortedWithInd[i].ind);
  }

  return ans;
}

console.log(getMaxDist([3, 5, 4, 2]));
console.log(getMaxDist([1, 2, 3, 4]));
console.log(getMaxDist([4, 3, 2, 1]));
