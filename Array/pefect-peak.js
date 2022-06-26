function findPeak(A) {
  const smallestToLeft = Array(A.length).fill(0);
  smallestToLeft[A.length - 1] = A[A.length - 1];
  for(let i = A.length - 2; i >= 0; i--) {
      smallestToLeft[i] = Math.min(smallestToLeft[i + 1], A[i]);
  }
  
  const greatestToRight = Array(A.length).fill(0);
  greatestToRight[0] = A[0];
  for(let i = 1; i < A.length; i++) {
      greatestToRight[i] = Math.max(greatestToRight[i - 1], A[i]);
  }
  
  for(let i = 1; i < A.length - 1; i++) {
      if(A[i] > greatestToRight[i - 1] && A[i] < smallestToLeft[i + 2]) return 1;
  }
  
  return 0;
}

console.log(findPeak([1, 3, 10]));