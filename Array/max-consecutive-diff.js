function maxDiff(arr) {
  if(arr.length <= 1) return 0;
  if(arr.length === 2) return Math.max(arr[0], arr[1]) - Math.min(arr[0], arr[1]);

  let max = Number.MIN_SAFE_INTEGER, min = Number.MAX_SAFE_INTEGER;
  for(let numb of arr) {
    max = Math.max(numb, max);
    min = Math.min(numb, min);
  }

  if(max === min) return 0;

  let buckets = [], bucketCnt = arr.length;
  for(let i = 0; i <= bucketCnt; i++) {
    buckets.push({max: Number.MIN_SAFE_INTEGER, min: Number.MAX_SAFE_INTEGER});
  }

  let numberCntInBucketRange = ((max - min) + 1) / bucketCnt;

  for(let numb of arr) {
    let bucketInd = parseInt((numb - min) / numberCntInBucketRange);
    buckets[bucketInd].max = Math.max(buckets[bucketInd].max, numb);
    buckets[bucketInd].min = Math.min(buckets[bucketInd].min, numb);
  }

  let lastFoundNumber = buckets[0].max, ans = Number.MIN_SAFE_INTEGER;
  for(let i = 1; i <= bucketCnt; i++) {
    if(buckets[i].max !== Number.MIN_SAFE_INTEGER) {
      ans = Math.max(ans, buckets[i].min - lastFoundNumber);
      lastFoundNumber = buckets[i].max;
    }
  }

  return ans;
}

console.log(maxDiff([1, 10, 5]));
console.log(maxDiff([4, 9, 45, 42]));