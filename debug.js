function getSteps(target) {
  if(target < 0) target *= -1;
  let curr = 0, stepCnt = 0, stepSize = 1;
  while(curr < target) {
    curr += stepSize;
    stepCnt++;
    stepSize++;
  }
  let diff = curr - target
  if(diff % 2 === 0) {
    return stepCnt;
  }
  while(diff % 2 === 1) {
    curr += stepSize;
    stepSize++;
    stepCnt++;
    diff = curr - target;
  }
  return stepCnt;
}

console.log(getSteps(0));
console.log(getSteps(1));
console.log(getSteps(2));
console.log(getSteps(3));
console.log(getSteps(4));
