#include <bits/stdc++.h>
using namespace std;

#define pii pair<int, int>

struct Comp {
	constexpr bool operator()(
		pair<int, int> const& a,
		pair<int, int> const& b)
		const noexcept {
		return a.second < b.second;
	}
};

int dij(vector<vector<pii>>& adj, const int start, const int end) {
	priority_queue<pii, vector<pii>, Comp> pq;
	vector<int> dist((int)adj.size(), INT_MAX);
	dist[start] = 0;
	vector<int> minRoadLength((int)adj.size(), INT_MAX);
	vector<int> allPaths((int)adj.size(), INT_MAX);
	pq.push(make_pair(start, dist[start]));
	while (!pq.empty()) {
		pii info = pq.top();
		pq.pop();
		int u = info.first;
		for (int i = 0; i < adj[u].size(); i++) {
			int v = adj[u][i].first;
			int toCheck = dist[u] + adj[u][i].second;
			if (toCheck <= dist[v]) {
				if(dist[v] == toCheck) {
					minRoadLength[v] = min(min(minRoadLength[u], minRoadLength[v]), (int)adj[u][i].second);
				} else {
					minRoadLength[v] = min(minRoadLength[u], (int)adj[u][i].second);
				}
				dist[v] = toCheck;
				pq.push(make_pair(v, dist[v]));
			}
		}
	}
	return minRoadLength[end];
}

int func(const int A, const vector<vector<int> >& edges, const int C, const int D) {
	vector<vector<pii>> adj(A);
	for (int i = 0; i < edges.size(); i++) {
		int u = edges[i][0] - 1;
		int v = edges[i][1] - 1;
		int cost = edges[i][2];
		adj[u].push_back(make_pair(v, cost));
		adj[v].push_back(make_pair(u, cost));
	}

	return dij(adj, C - 1, D - 1);
}

void func(string &str) {
	str[0] = '1';
	cout<<str<<endl;
}

int main() {
	// vector<vector<int>> edges{
	// 	{1, 2, 99},
	// 	{ 2, 3, 89 },
	// 	{ 2, 4, 86 },
	// 	{ 2, 5, 6 },
	// 	{ 5, 6, 94 },
	// 	{ 2, 7, 46 },
	// 	{ 4, 8, 52 },
	// 	{ 5, 9, 11 },
	// 	{ 1, 6, 52 },
	// 	{ 4, 9, 54 },
	// 	{ 3, 6, 88 },
	// 	{ 6, 9, 5 },
	// 	{ 2, 9, 54 },
	// 	{ 1, 9, 1 },
	// 	{ 8, 9, 90 },
	// 	{ 5, 8, 89 },
	// 	{ 7, 8, 70 },
	// 	{ 1, 3, 86 },
	// 	{ 1, 7, 32 },
	// 	{ 2, 8, 54 },
	// 	{ 1, 8, 65 }
	// };
	// cout << func(9, edges, 4, 5);
	// unordered_map<int, int> mp;
	// unordered_map<int, int> :: iterator it;
	// mp[0]++;
	// for(it = mp.begin(); it != mp.end(); it++) {
	// 	cout<<it->first<<" "<<it->second<<endl;
	// }

	priority_queue<int> pq;
	pq.push(3);
	pq.push(1);
	pq.push(6);
	pq.push(3);

	while(!pq.empty()) {
		int front = pq.top();
		cout<<front<<endl;
		pq.pop();
	}

	return 0;
}