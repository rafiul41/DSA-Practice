let ans;

function generateSteppingNumbers(numb, start, end) {
  if(numb > end) return;
  if(numb >= start && numb <= end) ans.push(numb);
  let lastInd = numb % 10;
  if(lastInd > 0) {
    generateSteppingNumbers(numb * 10 + (lastInd - 1), start, end);
  }
  if(lastInd < 9) {
    generateSteppingNumbers(numb * 10 + (lastInd + 1), start, end);
  }
}

function func(start, end) {
  ans = [];
  if(start === 0) ans.push(0);
  for(let i = 1; i <= 9; i++) {
    generateSteppingNumbers(i, start, end);
  }
  ans.sort((a, b) => a - b);
  return ans;
}

console.log(func(0, 86));