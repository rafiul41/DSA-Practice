#include <bits/stdc++.h>

using namespace std;

void createPiTable(string s, vector<int>& piTable) {
  piTable.clear();
  for (int i = 0; i < s.length(); i++) {
    piTable.push_back(0);
  }
  int i = 1, j = 0;
  while (i < s.length()) {
    if (s[i] == s[j]) {
      piTable[i] = j + 1;
      i++; j++;
      continue;
    }
    if (j == 0) {
      i++;
    } else {
      j = piTable[j - 1];
    }
  }
}

long long progressionSum(int n) {
  return ((long long)n * (n + 1)) / 2;
}

bool isSubstrRecurring(vector<int> &piTable, int toCheck, int startingInd) {
  if(piTable.size() % toCheck != 0) return false;
  int expecting = toCheck;
  for(int i = startingInd; i < piTable.size(); i += toCheck) {
    if(piTable[i] != expecting) return false;
    expecting += toCheck;
  }
  return true;
}

int getSmallestRepeatedSubstringWidth(vector<int> &piTable) {
  for(int i = 0; i < piTable.size(); i++) {
    if(i % 2 == 0) continue;
    if(piTable[i] == (i + 1) / 2 && isSubstrRecurring(piTable, piTable[i], i)) {
      return piTable[i];
    }
  }

  return -1;
}

int modExpo(int b, int p, int m) {
  long long res = 1, mult = b;
  while(p) {
    if(p & 1) res = (res * mult) % m;
    p /= 2;
    mult = (mult * mult) % m;
  }
  return res;
}

vector<int> primeUptoN(int n) {
  vector<bool> sieve(n + 1, true);
  int upto = sqrt(n);
  sieve[0] = false;
  sieve[1] = false;
  for (int i = 2; i <= upto; i++) {
    if (!sieve[i]) continue;
    for (int j = i * i; j <= n; j += i) {
      sieve[j] = false;
    }
  }

  vector<int> primes;
  for (int i = 0; i <= n; i++) {
    if (sieve[i]) primes.push_back(i);
  }
  return primes;
}

int lcmOfAllNumbers(vector<int> numbers, int mod) {
  int maxNumb = numbers[0];
  for (int i = 1; i < numbers.size(); i++) {
    maxNumb = max(maxNumb, numbers[i]);
  }
  int upto = sqrt(maxNumb);
  vector<int> primes = primeUptoN(upto);
  unordered_map<int, int> numbPowerMap;
  for (auto numb : numbers) {
    int sqRoot = sqrt(numb);
    for (int i = 0; i < primes.size() && primes[i] <= sqRoot; i++) {
      if (numb % primes[i] != 0) continue;
      int power = 0;
      while (numb % primes[i] == 0) {
        numb /= primes[i];
        power++;
      }
      if (numbPowerMap.find(primes[i]) == numbPowerMap.end()) {
        numbPowerMap[primes[i]] = power;
      } else {
        numbPowerMap[primes[i]] = max(numbPowerMap[primes[i]], power);
      }
    }
    if (numb > 1) {
      if (numbPowerMap.find(numb) == numbPowerMap.end()) {
        numbPowerMap[numb] = 1;
      }
    }
  }
  long long res = 1;
  for(auto it : numbPowerMap) {
    res *= modExpo(it.first, it.second, mod);
    res %= mod;
  }
  return res;
}

int func(vector<string>& strings) {
  vector<int> numbersForLcm;
  vector<int> piTable;
  for (int i = 0; i < strings.size(); i++) {
    createPiTable(strings[i], piTable);
    int toCheck = getSmallestRepeatedSubstringWidth(piTable);

    int timeCnt = 1;
    while (true) {
      int rotationCnt = progressionSum(timeCnt) % strings[i].length();
      if (rotationCnt == 0 || (toCheck != -1 && rotationCnt % toCheck == 0)) {
        numbersForLcm.push_back(timeCnt);
        break;
      }
      timeCnt++;
    }
  }

  return lcmOfAllNumbers(numbersForLcm, 1e9 + 7);
}

int main() {
  vector<string> vec{ "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", "babaaaabbaba", "baaaaababaabbaaaaabbbbbbbaabbaaaababbabaababaabaaabbbaaaaa", "abaabb", "aababbbbabbaaaabbaaaaaaaababbbabbbbaabbaabaabbaabaababbbababaababaabbababaaabaaaab", "babaaaaababbbbbabbbbabbaaabaaaababbabbaabbbabbaaaabbbabaaaabaaaababb", "bbbbbbaaaaaabbbbbbababaabaabbbbbaaabbabbaabbbbaaaaaababbabaaabbabbabbbabbaabbabbbbaabbbaaaaabbabaaab", "aabaaabaabbbbababbabbabaaaababbababbbabbbbaabbaaaaababbbbbababbbbaaababababab", "aaaababbbaabbbabaabb", "ababaaaabbabbbbaaabbababbbabbbabaaa", "aaabaabbbabaa", "baababbababbbbbabbabaabbabbbbbaaaabaaaababaa", "babaa", "abbabababbbbbbbbbbbaaaaaababbababaaabbbaaaabbbababbabaabbaabbbbaabbbaabbababababaabaaabbaaabbba", "ababbaabbaaabbbabaabababbbabaaabbbaababaaa", "abbaaaababbbbaaabaaaabaaaaabaababbabbaababbbabbbbbbbbbabbaabaaabbaaababbbaa", "bbabababaabbabbabbbabbaababbabaaabbbababab", "abbbaaabaab", "bbaaabbaaabbaabbabababa", "aabaabaaaaaaabaabbbaaababbbbbbababbaabababbaaaaabbabbbabbbaababbaabababbbbbbbbbaabaab", "babbaaabbabbaabaaabbb", "bbabaabba", "baabaaaaabbaaaaaabbbbaaaabababa", "babbaababaaba", "baabaabaabbababbaabbabbbbbabaaaabbbbbabbabbbbbabbbabaabbbbabbbbaaabbbbabababaaaababbaaabbabb", "abbbbaaaabaabbabbaababaabbababbbaaabbabbbbbaaabbabbaabbb", "bababaaaaabababbabbaabababbbaabbaabaabaabbabbbababbaaabababbababbbb", "abaaabbbabbbaabba", "bbbbaaaabbbababaabbbababaaaababbaaaaaabbbabbaababababbba", "bababaabaaaabbaabbababbaabbaabaabbaaaaaaaababbaaaaaabbaaabaabaaababbababbbbaabbabbabaabab", "aabbbabaaabababaabbbbaabbabaaabbbaaabbabbbbabaabbbbaabbbaaaaabbbabbbbb", "aabbbbbbabaabbbabbaababbababaabaaababbbbabbbaababaaaabbaaabaaabaaaabbbabababbab", "abaaaaababbabaabbbaaaaabbaaaabaaaaaaaababbaabbbaabbabbbabbaaaaaab", "bbbaabbabbbbbbaaaabbabbbbbbbaaabaababbaaaabbbaababbaaabbbbbbbbabbabababbaaabaabaaabaaaabbbbbabaabaaa", "bbaaabaaabaaabaabaaabbaabaabbabaabaabbababaaaaabaabbbbaba", "abaababaaabbabaabaabbbaaabbaabababbabaaabbbbabbbbbaaaaa", "abba", "abbbababbaaabbaaabbbabaabbababaaabbbbaaaaababbabbaabbabbbaaabaabbaaaaabaaaabbbaabbbabbbbbbbabb", "bbabbaaabaaaabbaaaabbbaaaababbbaabaaaaab", "abbaabaabbaaaaaaaabbaabbabbababaaaaaaabbabaabaabbbabbaabbaababbaabbaba", "bbbbaababbaaaaaaaaabbbabbbabaabababaababaababa", "baaabaabbbbbbaabbabbbabaaaaababaabaababbbaaaaaaaabbbbbabbabaaaaaaaabababaabaababaaabbaaaaaaaaabaa", "aababbbabbaaaaababbabaababbbbbbbbaaabbaaaaabbaabbbba", "ababababaaaaaabbbabbaaababaabb", "bababbaababaabbbabbaab", "baababababbaaaaabbbbbbbbbaabababb", "bbbbb", "aabaabbbaabababbababaaaaabbbbaababaabbabbbbbbaabbaaabbababbbabbabbbaabbbab", "bbaabbbbaabbaaaaaabbbaabababbbaabaaabbbbbabaababbbaababbbaaabaaabaaaababbbbaabbaababb", "aaababbaaaaabaabababbabaabbbbabbaba" };
  // vector<string> vec{ "aabbaabb"};
  cout << func(vec) << endl;
  return 0;
}