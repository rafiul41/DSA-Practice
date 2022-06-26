function move(A) {
  let n = A.length;
  for (let i = 0; i < n; i++) {
    if (A[i] == 0) {
      A.splice(i, 1);
      A.push(0);
      n--;
    }
  }

  return A;
}

console.log(move([ 0, 0, 9, 4, 0, 10, 3, 8, 6, 2, 6 ]));