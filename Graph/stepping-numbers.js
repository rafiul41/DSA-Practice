let zeroCharCode = '0'.charCodeAt(0);

function getSteppingNumbersFromNumb(str) {
  if(str.length <=1) return [];
  let ans = [];
  let right, left, toPush;
  for(let i = 0; i < str.length; i++) {
    if(i === 0) {
      toPush = '';
      right = str.charCodeAt(1) - zeroCharCode;
      if(right + 1 <= 9) {
        toPush = (right + 1).toString() + str.slice(1);
        if(toPush !== str) ans.push(toPush);
      } 
      if(right - 1 >= 0) {
        toPush = (right - 1).toString() + str.slice(1);
        if(toPush !== str) ans.push(toPush);
      }
    } else if(i === str.length - 1) {
      toPush = '';
      left = str.charCodeAt(str.length - 2) - zeroCharCode;
      if(left + 1 <= 9) {
        toPush = str.slice(0, str.length - 1) + (left + 1).toString();
        if(toPush !== str) ans.push(toPush);
      } 
      if(left - 1 >= 0) {
        toPush = str.slice(0, str.length - 1) + (left - 1).toString();
        if(toPush !== str) ans.push(toPush);
      }
    } else {
      left = str.charCodeAt(i - 1) - zeroCharCode;
      right = str.charCodeAt(i + 1) - zeroCharCode;
      if(left === right) {
        if(left + 1 <= 9) {
          toPush = str.slice(0, i) + (left + 1) + str.slice(i + 1);
          if(toPush !== str) ans.push(toPush);
        }
        if(left - 1 >= 0) {
          toPush = str.slice(0, i) + (left - 1) + str.slice(i + 1);
          if(toPush !== str) ans.push(toPush);
        }
      }
    }
  }

  return ans;
}

function isStepping(numb) {
  numb = numb.toString();
  for(let i = 1; i < numb.length; i++) {
    if(Math.abs(parseInt(numb[i]) - parseInt(numb[i - 1])) !== 1) return false;
  }
  return true;
}

let visited;

function isValid(str, a, b) {
  return !visited.has(str) && parseInt(str) >= a && parseInt(str) <= b;
}

function dfs(node, a, b) {
  visited.add(node);

  let neighbors = getSteppingNumbersFromNumb(node);
  for(let i = 0; i < neighbors.length; i++) {
    if(isValid(neighbors[i], a, b)) {
      dfs(neighbors[i], a, b);
    }
  }
}

function getSteppingNumbersInRange(a, b) {
  let start;
  for(let i = a; i <= b; i++) {
    if(isStepping(i)) {
      start = i;
      break;
    }
  }

  visited = new Set();
  dfs(start.toString());
  let ans = Array.from(visited).map(item => parseInt(item));
  ans.sort();
  return ans;
}

// console.log(getSteppingNumbersInRange(10, 20));
console.log(isStepping(10));