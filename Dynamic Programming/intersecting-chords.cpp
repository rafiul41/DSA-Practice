#include <bits/stdc++.h>

using namespace std;

int mod = 1e9 + 7;

int func(vector<int>& fibNumbers, int toMake) {
  queue<pair<int, int>> q;
  set<int> s;
  s.insert(0);
  q.push(make_pair(0, 0));
  while (!q.empty()) {
    pair<int, int> u = q.front();
    q.pop();
    if(u.first == toMake) {
      return u.second;
    }
    cout<<"U:"<<u.first<<endl;
    for(int i = 0; i < fibNumbers.size(); i++) {
      int v = u.first + fibNumbers[i];
      if(v <= toMake && s.find(v) == s.end()) {
        cout<<"   V:"<<v<<endl;
        q.push(make_pair(v, u.second + 1));
      }
    }
  }

  return -1;
}

int main() {
  vector<int> fibNumbers;
  fibNumbers.push_back(1);
  int cnt = 2, prev = 1, beforePrev = 1;
  while (true) {
    int curr = prev + beforePrev;
    if (curr > 1e9) break;
    fibNumbers.push_back(curr);
    beforePrev = prev;
    prev = curr;
    cnt++;
  }

  cout<<func(fibNumbers, 1023245)<<endl;

  return 0;
}