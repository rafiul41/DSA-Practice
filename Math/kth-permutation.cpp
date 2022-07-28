#include <bits/stdc++.h>

using namespace std;

long long fact[21];

vector<int> findPerm(int n, long k) {
  set<int> s;
  set<int>:: iterator it;
  vector<int> ans;
  for(int i = 0; i < n; i++) {
    s.insert(i + 1);
  }
  long long currK = k;
  int toPush;
  for(int i = 0; i < n - 1; i++) {
    long long remainingPermutations = ((n - i - 1) >= 0 && (n - i - 1) <= 20) ? fact[n - i - 1] : LLONG_MAX;
    if(currK <= remainingPermutations) {
      toPush = *(s.begin());
      ans.push_back(toPush);
      s.erase(toPush);
      continue;
    } else {
      for(it = s.begin(); it != s.end(); it++) {
        if(currK <= remainingPermutations) {
          toPush = *it;
          ans.push_back(toPush);
          s.erase(toPush);
          break;
        }
        currK -= remainingPermutations;
      }
    }
  }
  ans.push_back(*(s.begin()));
  return ans;
}

int main()
{
  fact[0] = 1;
  for(int i = 1; i <= 20; i++) {
    fact[i] = fact[i - 1] * i;
  }
  vector<int> ans = findPerm(4, 12);
  for(int i = 0; i < ans.size(); i++) {
    cout<<ans[i]<<" ";
  }
  return 0;
}
