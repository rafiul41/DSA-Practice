#include <bits/stdc++.h>

using namespace std;

vector<int> fx{ 1, -1, 0, 0 };
vector<int> fy{ 0, 0, 1, -1 };

bool isValid(int x, int y, vector<vector<char>>& grid, vector<vector<bool>>& visited) {
  return x >= 0 && y >= 0 && x < grid.size() && y < grid[0].size() && grid[x][y] == 'O' && !visited[x][y];
}

void dfs(int sx, int sy, vector<vector<char>>& grid, vector<vector<bool>>& visited) {
  visited[sx][sy] = true;
  for (int i = 0; i < 4; i++) {
    int x = fx[i] + sx, y = fy[i] + sy;
    if (isValid(x, y, grid, visited)) {
      dfs(x, y, grid, visited);
    }
  }
}

void captureRegions(vector<vector<char>>& grid) {
  vector<vector<bool>> visited;
  for (int i = 0; i < grid.size(); i++) {
    visited.push_back(vector<bool> {});
    for (int j = 0; j < grid[i].size(); j++) {
      visited[i].push_back(false);
    }
  }

  for (int i = 0; i < grid.size(); i++) {
    if (visited[i][0] == false && grid[i][0] == 'O') {
      dfs(i, 0, grid, visited);
    }
    int lastCol = grid[0].size() - 1;
    if (visited[i][lastCol] == false && grid[i][lastCol] == 'O') {
      dfs(i, lastCol, grid, visited);
    }
  }

  for (int i = 0; i < grid[0].size(); i++) {
    if (visited[0][i] == false && grid[0][i] == 'O') {
      dfs(0, i, grid, visited);
    }
    int lastRow = grid.size() - 1;
    if (visited[lastRow][i] == false && grid[lastRow][i] == 'O') {
      dfs(lastRow, i, grid, visited);
    }
  }

  for (int i = 0; i < grid.size(); i++) {
    for (int j = 0; j < grid[i].size(); j++) {
      if (visited[i][j] == false && grid[i][j] == 'O') {
        grid[i][j] = 'X';
      }
    }
  }
}

int main() {
  vector<vector<char>> vec {
    {'X', 'O', 'O', 'O', 'O', 'O', 'O', 'X'},
    {'X', 'X', 'O', 'O', 'X', 'O', 'O', 'X'},
    {'O', 'X', 'X', 'O', 'X', 'O', 'X', 'X'},
  };
  captureRegions(vec);
  for (int i = 0; i < vec.size(); i++) {
    for (int j = 0; j < vec[i].size(); j++) {
      cout<<vec[i][j];
      cout<<' ';
    }
    cout<<endl;
  }
  return 0;
}