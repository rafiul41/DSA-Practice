#include <bits/stdc++.h>

using namespace std;

vector<int> fx{ 1, -1, 0, 0 };
vector<int> fy{ 0, 0, 1, -1 };

bool isValid(int x, int y, vector<vector<int>>& grid, vector<vector<int>>& nearestDist) {
  return x >= 0 && x < grid.size() && y >= 0 && y < grid[0].size() && grid[x][y] == 0 && nearestDist[x][y] == -1;
}

void multiSourceBfs(vector<pair<int, int>>& sources, vector<vector<int>>& grid, vector<vector<int>>& nearestDist) {
  queue<pair<int, int>> q;
  for (int i = 0; i < sources.size(); i++) {
    q.push(sources[i]);
    nearestDist[sources[i].first][sources[i].second] = 0;
  }
  while (!q.empty()) {
    pair<int, int> u = q.front();
    q.pop();
    for (int i = 0; i < 4; i++) {
      int vx = u.first + fx[i], vy = u.second + fy[i];
      if (isValid(vx, vy, grid, nearestDist)) {
        nearestDist[vx][vy] = nearestDist[u.first][u.second] + 1;
        q.push(make_pair(vx, vy));
      }
    }
  }
}

vector<int> getNearestHotels(vector<vector<int>> grid, vector<vector<int>> queries) {
  vector<pair<int, int>> sources;
  vector<vector<int>> nearestDist;
  for (int i = 0; i < grid.size(); i++) {
    nearestDist.push_back(vector<int> {});
    for (int j = 0; j < grid[i].size(); j++) {
      if (grid[i][j] == 1) {
        sources.push_back(make_pair(i, j));
      }
      nearestDist[i].push_back(-1);
    }
  }

  multiSourceBfs(sources, grid, nearestDist);

  vector<int> ans;
  for (int i = 0; i < queries.size(); i++) {
    ans.push_back(nearestDist[queries[i][0] - 1][queries[i][1] - 1]);
  }
  return ans;
}

int main() {
  vector<vector<int>> grid{
    {0, 0, 1},
    {1, 1, 0},
  };
  vector<vector<int>> queries{
    {1, 3},
    {1, 1},
    {1, 3},
    {2, 2},
    {1, 3}
  };

  vector<int> ans = getNearestHotels(grid, queries);
  for(auto z: ans) {
    cout<<z<<" ";
  }
  cout<<endl;
  return 0;
}