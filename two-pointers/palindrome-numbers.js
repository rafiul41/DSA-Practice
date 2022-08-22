function isPalindrome(numb) {
  numb = numb.toString();
  let lo = 0,
    hi = numb.length;
  while (lo < hi) {
    if (numb[lo] !== numb[hi]) return false;
    lo++;
    hi--;
  }
  return true;
}

function getPalindromeNumberCnt(a, b, c) {
  let palindromes = [];
  for (let i = a; i <= b; i++) {
    if(isPalindrome(i)) palindromes.push(i);
  }
  let p1 = 0, ans = 1, taken = 1;
  for(let p2 = 1; p2 < palindromes.length; p2++) {
    if(palindromes[p2] - palindromes[p1] <= c) {
      taken++;
      ans = Math.max(ans, taken);
      continue;
    }
    while(palindromes[p2] - palindromes[p1] > c) {
      p1++;
      taken--;
    }
  }

  return ans;
}

console.log(getPalindromeNumberCnt(80, 110, 10));