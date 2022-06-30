function assign(mousePositions, holesPositions) {
  mousePositions.sort((a, b) => a - b);
  holesPositions.sort((a, b) => a - b);

  let ans = Number.MIN_SAFE_INTEGER;
  for(let i = 0; i < mousePositions.length; i++) {
    ans = Math.max(ans, Math.abs(mousePositions[i] - holesPositions[i]));
  }

  return ans;
}

console.log(assign([1, 5, 20, 21], [2, 3, 4, 15]));
console.log(assign([-4, 2, 3], [0, -2, 4]));