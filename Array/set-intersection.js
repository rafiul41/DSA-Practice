function getElementsToInsert(last2InsertedElements, interval) {
  let overlappingCnt = 0;
  for(let i = 0; i < last2InsertedElements.length; i++) {
    if(last2InsertedElements[i] >= interval[0] && last2InsertedElements[i] <= interval[1]) {
      overlappingCnt++;
    }
  }
  if(overlappingCnt === 0) {
    return [interval[1], interval[1] - 1];
  } else if(overlappingCnt === 1) {
    return [interval[1]];
  }
  return [];
}

function getSetSize(intervals) {
  intervals.sort((a, b) => a[1] - b[1]);
  let last2InsertedElements = [intervals[0][1] - 1, intervals[0][1]];
  let ans = 2;
  for(let i = 1; i < intervals.length; i++) {
    let elementsToInsert = getElementsToInsert(last2InsertedElements, intervals[i]);
    ans += elementsToInsert.length;
    last2InsertedElements.push(...elementsToInsert).sort((a, b) => a - b);
    last2InsertedElements = last2InsertedElements.slice(-2);
  }
  return ans;
}

// console.log(getSetSize([[1, 2], [2, 3]]));
// console.log(getSetSize([[1, 2], [2, 3], [2, 4], [4, 5]]));
console.log(getSetSize([[1, 3], [1, 4], [2, 5], [3, 5]]));