#include <bits/stdc++.h>

using namespace std;

long long dp(int pos, vector<int> &arr, unordered_map<int, int> &memo) {
  if(memo[pos]) return memo[pos];
  if(pos >= arr.size() - 1) {
    return memo[pos] = 0;
  }
  long long res = INT_MAX;
  for(int i = 1; i <= arr[pos]; i++) {
    res = min(res, 1 + dp(pos + i, arr, memo));
  }
  return memo[pos] = res;
}

int getMinJump(vector<int> &arr) {
  unordered_map<int, int> memo;
  long long res = dp(0, arr, memo);
  if(res == INT_MAX) {
    return -1;
  }
  return res;
}

int main() {
  vector<int> vec{33, 21, 50, 0, 0, 46, 34, 3, 0, 12, 33, 0, 31, 37, 15, 17, 34, 18, 0, 4, 12, 41, 18, 35, 37, 34, 0, 47, 0, 39, 32, 49, 5, 41, 46, 26, 0, 2, 49, 35, 4, 19, 2, 27, 23, 49, 19, 38, 0, 33, 47, 1, 21, 36, 18, 33, 0, 1, 0, 39, 0, 22, 0, 9, 36, 45, 31, 4, 14, 48, 2, 33, 0, 39, 0, 37, 48, 44, 0, 11, 24, 16, 10, 23, 22, 41, 32, 14, 22, 16, 23, 38, 42, 16, 15, 0, 39, 23, 0, 42, 15, 25, 0, 41, 2, 48, 28};
  cout<<getMinJump(vec)<<endl;
  return 0;
}