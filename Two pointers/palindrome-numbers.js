function isPalindrome(numb) {
  numb = numb.toString();
  let lo = 0,
    hi = numb.length - 1;
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
  let p1 = 0, p2 = 0, ans = 0;
  while(p2 < palindromes.length) {
    if(palindromes[p2] - palindromes[p1] <= c) {
      ans = Math.max(p2 - p1 + 1, ans);
      p2++;
      continue;
    }
    while(p1 < p2 && palindromes[p2] - palindromes[p1] > c) {
      p1++;
    }
  }

  return ans;
}

console.log(getPalindromeNumberCnt(1,65623, 563));