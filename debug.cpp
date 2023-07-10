#include <bits/stdc++.h>

using namespace std;

vector<vector<bool>> visited;
vector<vector<int>> dist;

vector<int> dirR = {1, -1, 0, 0};
vector<int> dirC = {0, 0, 1, -1};

bool isValidCell(int row, int col, vector<vector<int>> &mat) {
    return row >= 0 && row < mat.size() && col >= 0 && col < mat[0].size() && !visited[row][col] && mat[row][col] == 1;
}

void bfs(vector<pair<int, int>> &sources, vector<vector<int>> &mat) {
    dist = vector<vector<int>>(mat.size(), vector<int>(mat[0].size(), INT_MAX));
    visited = vector<vector<bool>>(mat.size(), vector<bool>(mat[0].size(), false));

    queue<pair<int, int>> q;
    for(int i = 0; i < sources.size(); i++) {
        q.push(make_pair(sources[i].first, sources[i].second));
        dist[sources[i].first][sources[i].second] = 0;
    }

    while(!q.empty()) {
        pair<int, int> top = q.front();
        q.pop();
        int ur = top.first;
        int uc = top.second;
        visited[ur][uc] = true;
        for(int i = 0; i < 4; i++) {
            int vr = ur + dirR[i];
            int vc = uc + dirC[i];
            if(isValidCell(vr, vc, mat)) {
                dist[vr][vc] = min(dist[vr][vc], dist[ur][uc] + 1);
                q.push(make_pair(vr, vc));
            }
        }
    }
}

vector<vector<int>> updateMatrix(vector<vector<int>>& mat) {
    vector<pair<int, int>> sources;
    for(int i = 0; i < mat.size(); i++) {
        for(int j = 0; j < mat[0].size(); j++) {
            if(mat[i][j] == 0) {
                sources.push_back(make_pair(i, j));
            }
        }
    }
    bfs(sources, mat);
    return dist;
}

int main() {
    vector<vector<int>> mat = {
        {0, 1, 0},
        {0, 1, 0},
        {0, 1, 0},
        {0, 1, 0},
        {0, 1, 0}
    };
    vector<vector<int>> ans = updateMatrix(mat);
    cout<<"end"<<endl;
    return 0;
}