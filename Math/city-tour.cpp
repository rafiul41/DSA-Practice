#include <bits/stdc++.h>

using namespace std;

long long modExpo(int b, int p, int m) {
  long long res = 1, mult = b;
  while(p) {
    if(p & 1) res = (res * mult) % m;
    mult = (mult * mult) % m;
    p /= 2;
  }

  return res;
}

int getWaysCnt(int cityCnt, vector<int> visitedCells) {
  int mod = 1000000007;
  vector<long long> factorials;
  factorials.push_back(1);
  for(int i = 1; i <= cityCnt; i++) {
    factorials.push_back((factorials[i - 1] * i) % mod);
  }

  int emptyCellCnt = 0;
  // bool represents is 2 ways
  vector<pair<int, bool>> blockCellInfo;
  unordered_map<int, bool> isVisited;

  for(int i = 0; i < visitedCells.size(); i++) {
    isVisited[visitedCells[i]] = true;
  }

  long long mult = 1;
  for(int i = 1; i <= cityCnt; i++) {
    if(isVisited[i]) {
      continue;
    }
    int j = i;
    while(j <= cityCnt && !isVisited[j]) {
      j++;
    }
    int currEmptyCellCnt = j - i;
    emptyCellCnt += currEmptyCellCnt;
    bool isTwoWay = i - 1 >= 0 && j <= cityCnt && isVisited[i - 1] && isVisited[j];
    blockCellInfo.push_back(make_pair(currEmptyCellCnt, isTwoWay));
    long long toMultiply = isTwoWay ? modExpo(2, currEmptyCellCnt - 1, mod) : 1;
    if(toMultiply != 1) mult = (mult * toMultiply) % mod;
    i = j - 1;
  }

  long long ans = (factorials[emptyCellCnt] * mult) % mod;
  for(int i = 0; i < blockCellInfo.size(); i++) {
    ans = ((ans * modExpo(factorials[blockCellInfo[i].first], mod - 2, mod)) % mod) % mod;
  }

  return ans;
}

int main() {
  cout<<getWaysCnt(5, vector<int> {2, 5})<<endl;
  return 0;
}
