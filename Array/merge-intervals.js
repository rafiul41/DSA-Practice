// empty
// [2, 3] --> [2, 3]

// overlapping

// [4, 10] [12, 16]
// [5, 6] --> [4, 10] [12, 16]

// [1, 3] [6, 9] 
// [2, 5] --> [1, 5] [6, 9]

// [1, 3] [6, 9] 
// [4, 6] --> [1, 3] [4, 9]

// [1, 3] [6, 9]
// [2, 7] --> [1, 9]

// Disjoint

// [4, 5] [6, 9]
// [1, 3] --> [1, 3] [4, 5] [6, 9]

// [4, 5] [6, 9]
// [10, 11] --> [4, 5] [6, 9] [10, 11]

// [1, 3] [6, 9]
// [4, 5] --> [1, 3] [4, 5] [6, 9]

function merge(intervals, newInterval) {
  if(intervals.length === 0) {
    return newInterval;
  }
  if(newInterval[0] > intervals[intervals.length - 1][1]) {
    return [...intervals, newInterval];
  } else if(newInterval[1] < intervals[0][0]) {
    return [newInterval, ...intervals];
  }

  const ans = [];

  const newIntervalStart = newInterval[0];
  const newIntervalEnd = newInterval[1];
  for(let i = 0; i < intervals.length; i++) {
    if(newIntervalEnd < intervals[i][0] || newIntervalStart > intervals[i][1]) {
      ans.push(newInterval);
      if(i !== intervals.length - 1 && newIntervalStart > intervals[i][1] && newIntervalEnd < intervals[i + 1][0]) {
        ans.push(newInterval);
      }
    } else {
      // overlapping
      let start = Math.min(intervals[i][0], newIntervalStart);
      let end = Math.max(intervals[i][1], newIntervalEnd);
      let j = i;
      while(j < intervals.length && end < intervals[j]) {
        end = Math.max(end, intervals[j][1]);
        j++;
      }
      ans.push([start, end]);
      i = j - 1;
    }
  }

  return ans;
}

console.log(merge(
  [[1, 2], [4, 10], [12, 13]],
  [3, ]
));