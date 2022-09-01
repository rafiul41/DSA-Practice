let a = 0;
for(let i = 0; i < 32; i++) {
  let z = a | (1 << i);
  console.log(z);
}