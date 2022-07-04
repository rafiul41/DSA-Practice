function getProduct(numb) {
  let prod = 1;
  while (numb) {
    prod *= numb % 10;
    numb = parseInt(numb / 10);
  }
  return prod;
}
