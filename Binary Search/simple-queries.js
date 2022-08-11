// 1 5 2 5 isLeft = false
function getNearestGreaterElementIndices(arr, cmp, isLeft) {
  let indices;
  if(isLeft) {
    indices = Array(arr.length).fill(-1);
  } else {

    indices = Array(arr.length).fill(arr.length);
  }
  let stack = [];
  for(let i = 0; i < arr.length; i++) {
    while(stack.length > 0 && cmp(arr[stack[stack.length - 1]], arr[i])) {
      if(!isLeft) {
        let poppedInd = stack[stack.length - 1];
        indices[poppedInd] = i;
      }
      stack.pop();
    }
    if(isLeft && stack.length > 0) {
      indices[i] = stack[stack.length - 1];
    }
    stack.push(i);
  }
  return indices;
}

function createInfos(arr) {
  const left = getNearestGreaterElementIndices(arr, (a, b) => a < b, true);
  const right = getNearestGreaterElementIndices(arr, (a, b) => a < b, false);
  const infos = [];
  for(let i = 0; i < arr.length; i++) {
    const toAdd = (right[i] - i) * (i - left[i]);
    const toPush = {
      x: arr[i],
      cnt: toAdd
    };
    infos.push(toPush);
  }
  return infos;
}

function multiply(a, b, m) {
  if(a.toString().length + b.toString().length >= 15) {
    return parseInt(BigInt(a) * BigInt(b)) % BigInt(m);
  }
  return (a * b) % m;
}

function getDivisorProduct(n) {
  let mod = 1e9 + 7;
  let to = Math.floor(Math.sqrt(n));
  let divisorProducts = Array(n + 1).fill(1);

  for(let i = 1; i <= to; i++) {
    for(let j = i; j <= n; j += i) {
      let sqrtJ = Math.floor(Math.sqrt(j));
      if(i <= sqrtJ) {
        divisorProducts[j] = multiply(divisorProducts[j], i, mod);
        let toCheck = j / i;
        if(toCheck !== i) {
          divisorProducts[j] = multiply(divisorProducts[j], toCheck, mod);
        }
      }
    }
  }

  return divisorProducts;
}

function mergeCntOfSameElement(infos) {
  let newInfos = [];
  for(let i = 0; i < infos.length; i++) {
    let j = i, totalCnt = 0;
    while(j < infos.length && infos[j].x === infos[i].x) {
      totalCnt += infos[j].cnt
      j++;
    }
    infos[i].cnt = totalCnt;
    newInfos.push(infos[i]);
    if(i !== j) i = j - 1;
  }

  return newInfos;
}

function getQueryResults(arr, queries) {
  let maxNumb = arr.reduce(
    (preRes, curr) => Math.max(preRes, curr),
    Number.MIN_SAFE_INTEGER
  );
  let divisorProducts = getDivisorProduct(maxNumb);

  let infos = createInfos(arr);
  infos.map(info => {
    info.x = divisorProducts[info.x];
    return info;
  })
  infos.sort((a, b) => b.x - a.x);
  infos = mergeCntOfSameElement(infos);
  infos[0].cumulativeCnt = infos[0].cnt;
  delete infos[0].cnt;
  
  for(let i = 1; i < infos.length; i++) {
    infos[i].cumulativeCnt = infos[i - 1].cumulativeCnt + infos[i].cnt;
    delete infos[i].cnt;
  }

  let answers = [];
  queries.forEach(query => {
    let lo = 0, hi = infos.length - 1, mid, ans;
    while(lo <= hi) {
      mid = Math.floor((lo + hi) / 2);
      if(infos[mid].cumulativeCnt >= query) {
        ans = infos[mid].x;
        hi = mid - 1;
      } else {
        lo = mid + 1;
      }
    }
    answers.push(ans);
  });

  return answers;
}

console.log(getQueryResults(
  [39, 99, 70, 24, 49, 13, 86, 43, 88, 74, 45, 92, 72, 71, 90, 32, 19, 76, 84, 46, 63, 15, 87, 1, 39, 58, 17, 65, 99, 43, 83, 29, 64, 67, 100, 14, 17, 100, 81, 26, 45, 40, 95, 94, 86, 2, 89, 57, 52, 91, 45],
  [1221, 360, 459, 651, 958, 584, 345, 181, 536, 116, 1310, 403, 669, 1044, 1281, 711, 222, 280, 1255, 257, 811, 409, 698, 74, 838]));

console.log(getQueryResults(
  [1, 5, 2, 5],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));