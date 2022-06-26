function createSpiral(width) {
  const ans = [];
  for(let i = 0; i < width; i++) {
    ans = Array(width).fill(0);
  }

  let rs = 0, cs = 0, re = width - 1, ce = width - 1;

  let toPut = 1;
  while(re > rs) {
    for(let i = cs; i <= ce - 1; i++) {
      ans[rs][i] = toPut++;
    }

    for(let i = rs; i <= re - 1; i++) {
      ans[i][ce] = toPut++;
    }

    for(let i = ce; i >= cs + 1; i--) {
      ans[re][i] = toPut++;
    }

    for(let i = re; i >= rs + 1; i--) {
      ans[i][cs] = toPut++;
    }

    rs++;cs++;re--;ce--;
  }

  if(re === rs) {
    ans[re][ce] = toPut;
  }

  return ans;
}

console.log(func(3));