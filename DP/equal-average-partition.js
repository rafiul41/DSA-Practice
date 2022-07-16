function getOnePartition(ind, arr) {
  if(ind < 0) {
    return [];
  }
}

function getPartitions(arr) {
  let sum = arr.reduce((prevRes, curr) => prevRes + curr, 0);
  arr.sort((a, b) => a - b);
  let memo = {};
  let leftPartition = [], rightPartition = [];
  for(let i = 1; i < arr.length; i++) {
    let s1 = i * sum;
    if(s1 % arr.length === 0) {
      let toMake = s1 / arr.length;
      leftPartition = getOnePartition(arr.length - 1, arr, toMake);
      if(leftPartition.length !== 0) {
        let found = {};
        for(let i = 0; i < leftPartition.length; i++) {
          found[leftPartition[i]] = true;
        }
        for()
        break;
      }
    }
  }
  
  if(leftPartition.length === 0) return [];
  return [leftPartition, rightPartition];
}

const arr = [1, 7, 15, 29, 11, 9];
console.log(getPartitions(arr));


