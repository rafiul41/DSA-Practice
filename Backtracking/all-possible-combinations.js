function sortStr(str) {
  str = str.split('');
  str.sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0));
  str = str.join('');
  return str;
}

let ans;

function recursion(ind, str, arr) {
  if (ind === arr.length) {
    ans.push(str);
    return;
  }
  for(let i = 0; i < arr[ind].length; i++) {
    recursion(ind + 1, str + arr[ind][i], arr)
  }
}

function getSpecialStrings(arr) {
  arr = arr.map(str => sortStr(str));
  ans = [];
  recursion(0, '', arr);
  return ans;
}

console.log(getSpecialStrings([
  'dcba',
  'asdjf',
  'dfwm',
  'ddddddq',
]));
