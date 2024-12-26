function canJump(nums: number[]): boolean {
  for (let i = nums.length - 1; i >= 0; i--) {
    if (i === 0) break;
    let j = i - 1,
      isPossible = false;
    while (j >= 0) {
      if (nums[j] + j >= i) {
        isPossible = true;
        break;
      }
      j--;
    }
    if (!isPossible) return false;
    i = j + 1;
  }
  return true;
}

console.log(canJump([2, 3, 1, 1, 4]));
