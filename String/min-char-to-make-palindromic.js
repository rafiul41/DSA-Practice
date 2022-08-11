let mod = 1000003;
let base = 10;

// 12321
// 1
// 12
// 123 ...
function getCumHashToRight(arr) {
  let hashes = Array(arr.length).fill(0);
  hashes[0] = arr[0];
  for(let i = 1; i < arr.length; i++) {
    hashes[i] = (hashes[i - 1] * base + arr[i]) % mod;
  }

  return hashes;
}

// 12321
//     1
//    21
//   321
//  2321
// 12321

function getCumHashToLeft(arr) {
  let hashes = Array(arr.length).fill(0);
  hashes[arr.length - 1] = arr[arr.length - 1];
  for(let i = arr.length - 2; i >= 0; i--) {
    hashes[i] = (hashes[i + 1] * base + arr[i]) % mod;
  }

  return hashes;
}

function calculatePowers(n) {
  let powers = Array(n).fill(1);
  for(let i = 1; i <= n; i++) {
    powers[i] = (powers[i - 1] * base) % mod;
  }
  return powers;
}

function getHashInfo(powers, toRightHash, toLeftHash, start, end) {
  // to right Hash
  // 12321
  // 1232 - 1000
  let len = end - start + 1;
  let rightHash = (toRightHash[end] - (start - 1 >= 0 ? toRightHash[start] * powers[len] : 0)) % mod;
  if(rightHash < 0) rightHash += mod;
  // to left hash
  // 12321
  // 2321 - 1
  let leftHash = (toLeftHash[start] - (end + 1 <= toLeftHash.length - 1 ? toLeftHash[end] * powers[len] : 0)) % mod;
  if(leftHash < 0) leftHash += mod;
  return {
    leftHash, rightHash
  };
}

function getMinCharCnt(arr) {
  const powers = calculatePowers(arr.length);
  const toRightHash = getCumHashToRight(arr);
  const toLeftHash = getCumHashToLeft(arr);
  
  console.log(toRightHash, toLeftHash);

  const hashInfoForIndices = getHashInfo(powers, toRightHash, toLeftHash, 1, 3);
  console.log(hashInfoForIndices);
}

console.log(getMinCharCnt([1, 2, 3, 2, 4, 5]));