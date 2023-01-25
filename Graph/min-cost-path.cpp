#include <bits/stdc++.h>

using namespace std;

struct Info {
  int cost;
  pair<int, int> pos;
  Info(int a, pair<int, int> b) {
    cost = a;
    pos = b;
  }
};

vector<int> dr{ 1, -1, 0, 0 };
vector<int> dc{ 0, 0, 1, -1 };
vector<char> dir{ 'D', 'U', 'R', 'L' };

bool isValid(int x, int y, vector<string>& grid) {
  return x >= 0 && y >= 0 && x < grid.size() && y < grid[0].size();
}

int bfs(vector<string>& grid, vector<vector<vector<bool>>>& visited) {
  queue<Info> q;
  q.push(Info(0, make_pair(0, 0)));
  for (int i = 0; i < 4; i++) {
    visited[i][0][0] = true;
  }
  int ans = INT_MAX;
  while (!q.empty()) {
    Info info = q.front();
    q.pop();
    pair<int, int> u = info.pos;
    if (u.first == grid.size() - 1 && u.second == grid[0].size() - 1) {
      ans = min(ans, info.cost);
    }
    for (int i = 0; i < 4; i++) {
      int vr = u.first + dr[i];
      int vc = u.second + dc[i];
      if (isValid(vr, vc, grid) && !visited[i][vr][vc]) {
        int cost = info.cost + (grid[u.first][u.second] == dir[i] ? 0 : 1);
        q.push(Info(cost, make_pair(vr, vc)));
        visited[i][vr][vc] = true;
      }
    }
  }
  return ans;
}

int main() {
  vector<string> grid{
    "RRRRD", "DLLLL", "RRRRD", "DLLLL", "RRRRR"
  };
  vector<vector<vector<bool>>> visited(4, vector<vector<bool>>(grid.size(), vector<bool>(grid[0].size(), false)));
  cout << bfs(grid, visited) << endl;
}