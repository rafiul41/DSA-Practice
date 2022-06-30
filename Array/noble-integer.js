function findNoble(arr) {
  arr.sort((a, b) => a - b);
  for(let i = 0; i < arr.length; i++) {
    let j = i + 1;
    while(j < arr.length && arr[i] === arr[j]) {
      j++;
    }
    const lastIndOfCurr = j - 1;
    const greaterThanCurrCnt = arr.length - 1 - lastIndOfCurr;
    if(greaterThanCurrCnt === arr[i]) return 1;
  }

  return -1;
}