function reverse(nums: number[], start: number, end: number): void {
  while (start < end) {
    [nums[start], nums[end]] = [nums[end], nums[start]];
    start++;
    end--;
  }
}

function nextPermutation(nums: number[]): void {
  let foundInd = -1;
  for (let i = nums.length - 1; i >= 1; i--) {
    if (nums[i - 1] < nums[i]) {
      foundInd = i - 1;
      break;
    }
  }

  if (foundInd === -1) {
    reverse(nums, 0, nums.length - 1);
    return;
  }

  for (let i = nums.length - 1; i > foundInd; i--) {
    if (nums[i] > nums[foundInd]) {
      [nums[i], nums[foundInd]] = [nums[foundInd], nums[i]];
      reverse(nums, foundInd + 1, nums.length - 1);
      break;
    }
  }
}

let arr = [2, 2, 0, 4, 3, 1];
nextPermutation(arr);
console.log(arr);
