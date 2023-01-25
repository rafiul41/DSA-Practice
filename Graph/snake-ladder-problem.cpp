#include <bits/stdc++.h>

using namespace std;

int getNextVal(int cell, vector<vector<int>>& ladders, vector<vector<int>>& snakes) {
  for (int i = 0; i < ladders.size(); i++) {
    if (ladders[i][0] == cell + 1) {
      return ladders[i][1] - 1;
    }
  }

  for (int i = 0; i < snakes.size(); i++) {
    if (snakes[i][0] == cell + 1) {
      return snakes[i][1] - 1;
    }
  }

  return cell;
}

int bfs(vector<bool>& visited, vector<vector<int>>& ladders, vector<vector<int>>& snakes) {
  queue<pair<int, int>> q;
  q.push(make_pair(0, 0));
  int ans = -1;
  while (!q.empty()) {
    pair<int, int> u = q.front();
    visited[u.first] = true;
    if (u.first == 99) {
      ans = u.second;
      break;
    }
    q.pop();
    for (int i = 1; i <= 6; i++) {
      int v = getNextVal(u.first + i, ladders, snakes);
      if (!visited[v]) {
        q.push(make_pair(v, u.second + 1));
      }
    }
  }
  return ans;
}

int getRollCnt(vector<vector<int>>& ladders, vector<vector<int>>& snakes) {
  vector<bool> visited(100, false);
  return bfs(visited, ladders, snakes);
}

int main() {
  vector<vector<int>> ladders{
    {3, 54},
    {37, 100}
  };

  vector<vector<int>> snakes{
    {37, 100},
  };

  cout<<getRollCnt(ladders, snakes)<<endl;
  return 0;
}