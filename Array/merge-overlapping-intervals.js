function merge(intervals) {
  intervals.sort((a, b) => {
    if(a[0] === b[0]) {
      return a[1] - b[1];
    }
    return a[0] - b[0];
  })

  const ans = [];
  for(let i = 0; i < intervals.length; i++) {
      let toPush = [intervals[i][0]];
      let j = i, end = intervals[i][1];
      while(j < intervals.length && intervals[j][1] <= end) {
        end = Math.max(end, intervals[j][1]);

        j++;
      }
      toPush.push(end);
      ans.push(toPush);

      if(i !== j) i = j - 1;
  }

  return ans;
}

console.log(merge([[1, 3], [2, 6], [8, 10], [15, 18]]));