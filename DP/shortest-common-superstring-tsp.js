function getCost(str1, str2) {
  if(str1.length === 0) return str2.length;
  if(str2.length === 0) return str1.length;
  if(str1.includes(str2)) return str1.length;
  for(let i = 0; i < str1.length; i++) {
    let len = str1.length - i;
    if(str1.slice(i) === str2.slice(0, len)) {
      return i + str2.length;
    }
  }
  return str1.length + str2.length;
}

function buildGraph(arr) {
  let adj = [];
  for(let i = 0; i < arr.length; i++) {
    adj.push(Array(arr.length).fill(0));
  }

  for(let i = 0; i < adj.length; i++) {
    for(let j = i; j < adj[i].length; j++) {
      adj[i][j] = getCost(arr[i], arr[j]);
      adj[j][i] = getCost(arr[j], arr[i]);
    }
  }

  return adj;
}

function func(arr) {
  let adj = buildGraph(arr);

  let rowCnt = 1 << arr.length;

  let dp = [];
  for(let i = 0; i < rowCnt; i++) {
    dp.push(Array(arr.length).fill(0));
  }

  for(let i = 0; i < arr.length; i++) {
    dp[0][i] = 0;
  }

  for(let i = 0; i < arr.length; i++) {
    dp[1][i] = arr[i].length;
  }

  for(let mask = 1; mask < rowCnt; mask++) {
    for(let i = 0; i < arr.length; i++) {
      let valToStore = 2000;
      for(let j = 0; j < arr.length; j++) {

      }
      dp[mask][i] = valToStore;
    }
  }
}

function getShortestCommonSuperString(arr) {
  return func(arr);
}