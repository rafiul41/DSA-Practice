function getTitle(numb) {
  const alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const ans = [];
  while(numb) {
    numb--;
    ans.push(alphabets.charAt(numb % 26));
    numb = parseInt(numb / 26);
  }

  ans.reverse();

  return ans.join('');
}

console.log(getTitle(56545));