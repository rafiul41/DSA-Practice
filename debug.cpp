#include <bits/stdc++.h>

using namespace std;

int leastInterval(vector<char>& tasks, int n) {
  vector<int> cnt (26, 0);
  for(int i = 0; i < tasks.size(); i++) {
    cnt[tasks[i] - 'A']++;
  }

  priority_queue<int> pq;
  for(int i = 0; i < 26; i++) {
    if(cnt[i] != 0) {
      pq.push(cnt[i]);
    }
  }


  int taken = 0, ans = 0;
  while(true) {
    vector<int> tmp;
    int currTaken = 0;
    for(int i = 0; i < n + 1; i++) {
      if(pq.empty()) {
        break;
      }
      int top = pq.top();
      pq.pop();
      tmp.push_back(top);
      currTaken++;
    }
    taken += currTaken;
    for(int i = 0; i < tmp.size(); i++) {
      if(tmp[i] - 1 > 0) {
        pq.push(tmp[i] - 1);
      }
    }

    if(taken == tasks.size()) {
      ans += currTaken;
      break;
    } else {
      ans += (n + 1);
    }
  }

  return ans;
}

int main() {
  vector<char> s = {'A','A','A','A','A','A','B','C','D','E','F','G'};
  cout<<leastInterval(s, 2);
  return 0;
}