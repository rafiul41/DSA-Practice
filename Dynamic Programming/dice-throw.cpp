#include <bits/stdc++.h>

using namespace std;

vector<vector<int>> func(int ind, vector<int> &numbers, unordered_map<int, int> &mp) {
  if(ind == numbers.size()) {
    return {{}};
  }

  vector<vector<int>> ans;
  vector<vector<int>> res = func(ind + 1, numbers, mp);
  for(int i = 0; i < mp[numbers[ind]]; i++) {
    vector<int> toPush = vector<int>(i, numbers[ind]);
    for(int j = 0; j < res.size(); j++) {
      
    }
  }

  return ans;
}

int main() {
  vector<int> numb{1, 2, 2};
  sort(numb.begin(), numb.end());

  vector<int> numbers;
  unordered_map<int, int> mp;
  for(int i = 0; i < numb.size(); i++) {
    int j = i;
    while(j < numb.size() && numb[i] == numb[j]) {
      j++;
    }
    numbers.push_back(numb[i]);
    mp[numb[i]] = j - i;
    i = j;
  }
  vector<vector<int>> ans = func(0, numbers, mp);
  return 0;
}