function getSubArrayCnt(arr, b) {
  let map = new Map();
  let buffer = [];

  let p1 = 0, p2 = 0;

  let ans = 0;
  while(p2 < arr.length) {
    if(map.size < b) {
      buffer.push(arr[p2]);
      if(buffer[0] === buffer[buffer.length - 1]) ans++;
      let previousVal = map.get(arr[p2]);
      map.set(arr[p2], previousVal ? previousVal + 1 : 1);
      p2++;
      if(map.size === b) ans++;
      continue;
    }
    if(map.get(arr[p2]) && map.size === b) {
      buffer.push(arr[p2]);
      let previousVal = map.get(arr[p2]);
      map.set(arr[p2], previousVal ? previousVal + 1 : 1);
      p2++;
      ans++;
    } else {
      while(p1 < p2) {
        let previousVal = map.get(arr[p1]);
        map.set(arr[p1], previousVal ? previousVal - 1 : 1);
        if(previousVal === 1) {
          map.delete(arr[p1]);
        }
        buffer.shift();
        if(buffer[0] === buffer[buffer.length - 1]) ans++;
        p1++;
      }
    }
  }

  return ans;
}

console.log(getSubArrayCnt([1, 2, 1, 2, 3], 2));