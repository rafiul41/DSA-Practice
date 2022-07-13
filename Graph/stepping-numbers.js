function isSteppingNumber(numb) {
  for(let i = 0; i < numb.length - 1; i++) {
    if(Math.abs(numb[i] - numb[i + 1]) !== 1) return 0;
  }

  return 1;
}

function decrementStrNumb(str) {
  return (parseInt(str) + 1).toString() ;
}

function incrementStrNumb(str) {
  return (parseInt(str) + 1).toString() ;
}

function getNextStrings(str) {
  const nextStrings = []
  for(let i = 1; i < str.length - 1; i++) {
    if(str[i - 1] === str[i + 1]) {
      if(str[i - 1] !== '9') {
        nextStrings.push(str.slice(0, i) + incrementStrNumb(str[i - 1]) + str.slice(i + 1));
      }
      if(str[i - 1] !== '0') {
        nextStrings.push(str.slice(0, i) + decrementStrNumb(str[i - 1]) + str.slice(i + 1));
      }
    }
  }
  if(str[1] !== '9') {
    nextStrings.push(incrementStrNumb(str[1]) + str.slice(1));
  }
  if(str[1] !== '0') {
    nextStrings.push(decrementStrNumb(str[1]) + str.slice(1));
  }

  if(str[str.length - 1] !== '9') {
    nextStrings.push(str.slice(0, str.length - 1) + incrementStrNumb(str[1]));
  }
  if(str[str.length - 1] !== '0') {
    nextStrings.push(str.slice(0, str.length - 1) + decrementStrNumb(str[1]));
  }

  return nextStrings;
}

function bfs(src, start, end) {
  const visited = new Set();
  visited.add(src);
  let q = [];
  q.push(src);
  while(q.length > 0) {
    let u = q[0];
    q.shift();
    const nextStrings = getNextStrings(u);
    for(let str of nextStrings) {
      const numb = parseInt(str);
      if(!visited.has(str) && numb >= start && numb <= end) {
        q.push(str);
        visited.add(str);
      }
    }
  }
  const ans = Array.from(visited)
  ans.sort((a, b) => a - b);
  return ans;
}

function getSteppingNumbers(start, end) {
  const endLen = end.toString().length;
  for(let i = start; i <= end; i++) {
    const numbAsStr = i.toString();
    if(isSteppingNumber(numbAsStr)) {
      const src = Array(endLen - numbAsStr.length).fill('0').join('') + numbAsStr;
      return bfs(src, start, end).map(str => parseInt(str));
    }
  }

  return [];
}

console.log(getNextStrings('010'));