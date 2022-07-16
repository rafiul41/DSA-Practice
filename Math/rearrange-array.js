function getRearranged(arr) {
  let n = arr.length;
  for(let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] + (arr[i] > i ? arr[arr[i]] * n : (arr[arr[i]] % n) * n);
  }

  for(let i = 0; i < arr.length; i++) {
    arr[i] = parseInt(arr[i] / n);
  }

  return arr;
}

console.log(getRearranged([1, 2, 3, 4, 0]));
console.log(getRearranged([4, 0, 2, 1, 3]));

// 1 0
// --> 0 1

// 1 2 3 4 0
// --> 2 3 4 0 1

// ind: 0 1 2 3 4
// val: 4 0 2 1 3
// -->  3 4 2 0 1

// 4 + (5 * 3) = 19
// 19 % 5 = 4 (prev)
// 19 / 5 = 3 (new)