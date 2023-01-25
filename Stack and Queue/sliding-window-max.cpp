#include <bits/stdc++.h>

using namespace std;

struct cmp {
   bool operator()(const int a, const int b) const {
       return a > b;
   }
};

vector<int> func(const vector<int>& vec, int windowSize) {
  map<int, int, cmp> mp;
  int upto = min((int)vec.size(), windowSize);
  for (int i = 0; i < upto; i++) {
    if (mp.find(vec[i]) == mp.end()) {
      mp[vec[i]] = 1;
    } else {
      mp[vec[i]] = mp[vec[i]] + 1;
    }
  }

  vector<int> ans;
  ans.push_back(mp.begin()->first);

  for (int i = upto; i < vec.size(); i++) {
    int prev = vec[i - windowSize];
    mp[prev]--;
    if (mp[prev] == 0) {
      mp.erase(prev);
    }

    if (mp.find(vec[i]) == mp.end()) {
      mp[vec[i]] = 1;
    } else {
      mp[vec[i]] = mp[vec[i]] + 1;
    }

    ans.push_back(mp.begin()->first);
  }

  return ans;
}

int main() {
  vector<int> vec{1, 3, -1, -3, 5, 3, 6, 7};
  vector<int> ans = func(vec, 7);
  for(int i = 0; i < ans.size(); i++) {
    cout<<ans[i]<<" ";
  }
  cout<<endl;
  return 0;
}