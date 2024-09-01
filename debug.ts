function twoSum(nums: number[], target: number): number[] {
    let map = new Map();
    for(let i = 0; i < nums.length; i++) {
      let toCheck = target - nums[i];
      if(map.has(toCheck)) {
        return [map.get(toCheck), i]
      }
      map.set(nums[i], i);
    }
    return []
};