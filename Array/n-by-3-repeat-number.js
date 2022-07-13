function getNBy3RepeatNumber(arr) {
  if(arr.length === 0) return -1;
  if(arr.length <= 2) return arr[0];

  let candidateCnt = {};
  for (const element of arr) {
    if(candidateCnt[element] !== undefined) {
      candidateCnt[element]++;
      continue;
    }
    if(Object.keys(candidateCnt).length < 2) {
      candidateCnt[element] = 1;
    } else {
      for (const key in candidateCnt) {
        candidateCnt[key]--;
        if(candidateCnt[key] === 0) delete candidateCnt[key];
      }
    }
  }

  if(Object.keys(candidateCnt).length === 0) return -1;

  const candidates = Object.keys(candidateCnt).map(numb => parseInt(numb));
  candidateCnt = {};
  for (const numb of arr) {
    if(candidates.includes(numb)) {
      if(candidateCnt[numb] !== undefined) {
        candidateCnt[numb]++;
      } else {
        candidateCnt[numb] = 1;
      }
    }
  }

  for (const key in candidateCnt) {
    if(candidateCnt[key] > arr.length / 3) return key;
  }

  return -1;
}

console.log(getNBy3RepeatNumber([1, 2, 3, 1, 1]));
console.log(getNBy3RepeatNumber([1, 2]));
console.log(getNBy3RepeatNumber([1]));
console.log(getNBy3RepeatNumber([1, 2, 3]));
console.log(getNBy3RepeatNumber([2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 4, 1, 1, 1, 1, 1, 1, 1]));
console.log(getNBy3RepeatNumber([2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 4, 1, 1, 1, 1, 1, 1, 1]));
console.log(getNBy3RepeatNumber([1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 4, 2, 1, 1, 1, 1, 1, 1]));