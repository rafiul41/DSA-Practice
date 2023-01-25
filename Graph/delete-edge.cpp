#include <bits/stdc++.h>

using namespace std;

void dfs(int s, vector<int>& subtreeWeight, vector<int>& weights, vector<vector<int>>& adj, int parent) {
  subtreeWeight[s] += weights[s];
  for (int i = 0; i < adj[s].size(); i++) {
    int v = adj[s][i];
    if (parent != v) {
      dfs(v, subtreeWeight, weights, adj, s);
      subtreeWeight[s] += subtreeWeight[v];
    }
  }
}

int getMaxProd(vector<int>& weights, vector<vector<int>>& edges) {
  vector<vector<int>> adj(weights.size(), vector<int>{});
  for (int i = 0; i < edges.size(); i++) {
    adj[edges[i][0] - 1].push_back(edges[i][1] - 1);
    adj[edges[i][1] - 1].push_back(edges[i][0] - 1);
  }

  vector<int> subtreeWeight(weights.size(), 0);
  dfs(0, subtreeWeight, weights, adj, -1);

  long long ans = INT_MIN, mod = 1e9 + 7;
  for (int i = 1; i < weights.size(); i++) {
    int subTreeOne = subtreeWeight[0] - subtreeWeight[i];
    int subTreeTwo = subtreeWeight[i];
    long long curr = subTreeOne * subTreeTwo;
    ans = max(ans, curr);
  }

  return ans % mod;
}

int main() {
  vector<int> weights{ 42, 468, 335, 501, 170, 725, 479, 359, 963, 465, 706, 146, 282 };
  vector<vector<int>> edges{
    {10, 6},
  {3, 2},
  {12, 7},
  {9, 5},
  {2, 1},
  {8, 3},
  {7, 1},
  {4, 2},
  {6, 3},
  {11, 4},
  {5, 3},
  {13, 11}
  };

  cout << getMaxProd(weights, edges) << endl;

  return 0;
}