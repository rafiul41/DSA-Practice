function removeDuplicate(arr) {
  let p1 = 0, p2 = 0;
  while(p2 < arr.length) {
    let numbToPut = arr[p2], cnt = 0;
    while(numbToPut === arr[p2]) {
      p2++;
      cnt++;
    }

    if(cnt === 1) {
      arr[p1] = numbToPut;
      p1++;
    } else {
      arr[p1] = numbToPut;
      p1++;
      arr[p1] = numbToPut;
      p1++;
    }
  }

  let toPop = p2 - p1;
  while(toPop--) {
    arr.pop();
  }
  // console.log(arr);
  return arr.length;
}

removeDuplicate([1, 1, 1, 2]);
removeDuplicate([1, 2, 3, 3, 3, 4, 5]);
removeDuplicate([1, 1, 1, 2, 3, 4, 5, 5, 5]);