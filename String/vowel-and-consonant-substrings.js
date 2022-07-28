let mod = 1000000007;

function isVowel(char) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  return vowels.includes(char);
}

function getSubstringCnt(str) {
  let vowelCnt = Array(str.length).fill(0);
  let consonantCnt = Array(str.length).fill(0);

  vowelCnt[0] = isVowel(str[0]) ? 1 : 0;
  consonantCnt[0] = !isVowel(str[0]) ? 1 : 0;
  for(let i = 1; i < str.length; i++) {
    vowelCnt[i] = vowelCnt[i - 1] + (isVowel(str[i]) ? 1 : 0);
    consonantCnt[i] = consonantCnt[i - 1] + (!isVowel(str[i]) ? 1 : 0);
  }

  let ans = 0;
  for(let i = 0; i < vowelCnt.length - 1; i++) {
    if(isVowel(str[i])) {
      ans = (ans + consonantCnt[str.length - 1] - consonantCnt[i]) % mod;
      continue;
    }
    ans = (ans + vowelCnt[str.length - 1] - vowelCnt[i]) % mod;
  }

  return ans;
}

console.log(getSubstringCnt('aba'));