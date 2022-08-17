#include <bits/stdc++.h>

using namespace std;

int mod = 1e9 + 7;

int gcd(int a, int b) {
  if (b > a) swap(a, b);
  while (b) {
    int tmp = b;
    b = a % b;
    a = tmp;
  }
  return a;
}

long long lcm(long long a, long long b) {
  long long prod = a * b;
  return prod / gcd(a, b);
}

int lcmOfAllNumbers(vector<int>& numbers) {
  if (numbers.size() == 0) return 1;
  long long ans = numbers[0];
  for (int i = 1; i < numbers.size(); i++) {
    ans = lcm(ans, numbers[i]);
    ans %= mod;
  }
  return ans;
}

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

void getRotationMap(vector<int> &piTable, unordered_set<int> &set) {
  set.clear();
  set.insert(0);
  for(int i = 0; i < piTable.size(); i++) {
    if(i % 2 == 1 && piTable[i] == (i + 1) / 2 && piTable[piTable.size() - 1]) {
      
      break;
    }
  }
}

long long progressionSum(int n) {
  return ((long long)n * (n + 1)) / 2;
}

int stringoholics(vector<string>& strings) {
  vector<int> numbersForLcm;

  vector<int> piTable;
  unordered_set<int> set;
  for (int i = 0; i < strings.size(); i++) {
    createPiTable(strings[i], piTable);
    getRotationMap(piTable, set);
    int timeCnt = 1;
    while(true) {
      int rotationCnt = progressionSum(timeCnt) % strings[i].length();
      if(set.find(rotationCnt) != set.end()) {
        numbersForLcm.push_back(timeCnt);
        break;
      }
      timeCnt++;
    }
  }

  return lcmOfAllNumbers(numbersForLcm);
}

int main() {
  vector<string> vec{"ababbbbb"};
  cout<<stringoholics(vec)<<endl;
  return 0;
}