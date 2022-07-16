function getSetSize(intervals) {
  intervals.sort((a, b) => a[1] - b[1]);
  let set = new Set();
  for(let interval of intervals) {
    set.add(interval[interval.length - 1]);
    set.add(interval[interval.length - 2]);
  }
  return set.length;
}

console.log(getSetSize([[1, 2], [2, 3]]))