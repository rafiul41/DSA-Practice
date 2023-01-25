#include <bits/stdc++.h>

using namespace std;

vector<int> fx{1, -1, 0, 0};
vector<int> fy{0, 0, 1, -1};

bool isValid(int x, int y, vector<string> &grid) {
  return x >= 0 && x < grid.size() && y >= 0 && y < grid[0].length();
}

bool dfs(int sx, int sy, vector<string> &grid, string &word, int wordInd) {
  if(wordInd == word.length() - 1) {
    return true;
  }
  for(int i = 0; i < 4; i++) {
    int x = fx[i] + sx, y = fy[i] + sy;
    if(isValid(x, y, grid) && grid[x][y] == word[wordInd + 1]) {
      bool res = dfs(x, y, grid, word, wordInd + 1);
      if(res) return true;
    }
  }
  return false;
}

int wordSearch(vector<string> &grid, string word) {
  for(int i = 0; i < grid.size(); i++) {
    for(int j = 0; j < grid[i].length(); j++) {
      if(grid[i][j] == word[0]) {
        bool res = dfs(i, j, grid, word, 0);
        if(res) return 1;
      }
    }
  }
  return 0;
}

int main() {
  vector<string> grid {
    "ABCE",
    "SFCS",
    "ADEE"
  };
  cout<<wordSearch(grid, "ABCCED");
  return 0;
}