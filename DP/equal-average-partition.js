function getOnePartition(ind, sum, toTake, arr, memo) {
  if(memo[ind + '/' + sum + '/' + toTake] !== undefined) return memo[ind + '/' + sum + '/' + toTake];
  if(ind < 0) {
    if(sum === 0 && toTake === 0) return memo[ind + '/' + sum + '/' + toTake] = [];
    return memo[ind + '/' + sum + '/' + toTake] = -1;
  }
  let op1 = -1;
  if(toTake - 1 >= 0 && sum - arr[ind] >= 0) {
    op1 = getOnePartition(ind - 1, sum - arr[ind], toTake - 1, arr, memo);
  }
  if(op1 !== -1) {
    op1 = [arr[ind],...op1];
  }
  let op2 = getOnePartition(ind - 1, sum, toTake, arr, memo);
  if(op1 === -1 && op2 === -1) {
    return memo[ind + '/' + sum + '/' + toTake] = -1;
  } else if(op1 === -1) {
    return memo[ind + '/' + sum + '/' + toTake] = op2;
  } else if(op2 === -1) {
    return memo[ind + '/' + sum + '/' + toTake] = op1;
  } else {
    if(op1.length < op2.length) {
      return memo[ind + '/' + sum + '/' + toTake] = op1;
    } else if(op2.length < op1.length) {
      return memo[ind + '/' + sum + '/' + toTake] = op2;
    } else {
      for(let i = 0; i < op1.length; i++) {
        if(op1[i] === op2[i]) continue;
        if(op1[i] < op2[i]) return op1;
        return memo[ind + '/' + sum + '/' + toTake] = op2;
      }
      return op1;
    }
  }
}

function getPartitions(arr) {
  let sum = arr.reduce((prevRes, curr) => prevRes + curr, 0);
  // console.log('SUM: ', sum);
  arr.sort((a, b) => b - a);
  let memo = {};
  let leftPartition = -1, rightPartition = [];
  for(let i = 1; i < arr.length; i++) {
    let s1 = i * sum;
    // console.log('S1: ', s1, i);
    if(s1 % arr.length === 0) {
      let toMake = s1 / arr.length;
      // console.log('To Make: ', toMake);
      leftPartition = getOnePartition(arr.length - 1,toMake, i, arr, memo);
      if(leftPartition !== -1) {
        break;
      }
    }
  }

  if(leftPartition === -1) return [];

  let cnt = {};
  for(let numb of arr) {
    cnt[numb] = cnt[numb] ? cnt[numb] + 1 : 1;
  }

  for(let numb of leftPartition) {
    cnt[numb]--;
    if(!cnt[numb]) delete cnt[numb];
  }

  Object.keys(cnt).forEach(key => {
    for(let i = 0; i < cnt[key]; i++) {
      rightPartition.push(parseInt(key));
    }
  });

  return [leftPartition, rightPartition];
}

const arr = [ 0, 34, 64, 24, 14, 87, 56, 43, 91, 27, 65, 59, 36, 32, 51, 37, 28, 75, 7, 74, 21, 58, 95, 29, 37, 35, 93, 18, 28, 43, 11, 28, 29, 76, 4, 43, 63, 13, 38, 6, 40, 4, 18, 28];
console.log(getPartitions(arr));


