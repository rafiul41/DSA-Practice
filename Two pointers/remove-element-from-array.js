function removeElement(arr, x) {
  let p1 = 0, p2 = 1;
  while(p2 < arr.length) {
    while(p2 < arr.length && arr[p2] === x) {
      p2++;
    }
    while(p1 < p2 - 1 && arr[p1] !== x) {
      p1++;
    }
    if(p2 >= arr.length) break;
    [arr[p1], arr[p2]] = [arr[p2], arr[p1]];
  }

  let toPop = p2 - p1;
  for(let i = 0; i < toPop; i++) {
    arr.pop();
  }

  return arr.length;
}

console.log(removeElement([3, 3, 0, 2, 1, 2, 1, 0], 0));