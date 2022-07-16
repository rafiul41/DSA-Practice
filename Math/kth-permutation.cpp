#include <bits/stdc++.h>

using namespace std;

long long getFactorial(int n) {
  long long prod = 1;
  for(int i = 2; i <= n; i++) {
    prod *= i;
  }

  return prod;
}

vector<int> findPerm(int n, long k) {
  set<int> s;
  for(int i = 1; i <= n; i++) {
    s.insert(i);
  }

  long long denominator = getFactorial(n - 1);
  long long beforeCnt = k - 1;
  vector<int> ans;
  for(int i = n - 1; i >= 1; i++)   {
    int ind = beforeCnt / denominator;
    beforeCnt = beforeCnt - (ind * denominator);
    int toRemove = *(s.begin());
    ans.push_back(toRemove);
    s.erase(toRemove);
    denominator /= i;
  }

  ans.push_back(*(s.begin()));

  return ans;
}

int main()
{
  auto ans = findPerm(4, 12);
  for(int i = 0; i < ans.size(); i++) {
    cout<<ans[i]<<" ";
  }
  cout<<endl;
  return 0;
}


// ind
// 1   - 1 2 3 4
// 2   - 1 2 4 3
// 3   - 1 3 2 4
// 4   - 1 3 4 2
// 5   - 1 4 2 3
// 6   - 1 4 3 2
// 7   - 2 1 3 4
// 8   - 2 1 4 3
// 9   - 2 3 1 4
// 10  - 2 3 4 1
// 11  - 2 4 1 3
// 12  - 2 4 3 1
// 13  - 3 1 2 4

// FOR 12 -->
// total 4 elements [1, 2, 3, 4];
// beforeCnt = 12 - 1

// for 1st position
// we have 3 remaining except the curr position
// so 3! = 6 for arranging the remaining
// 11 / 6 = 1
// beforeCnt = 11 - (6 * 1) = 5
// --> ans += elements[1]
// ans = 2
// remaining --> [1, 3, 4];

// for 2nd position
// we have 2 remaining except the curr position
// so 2! = 2 for arranging the remaining
// 5 / 2 = 2
// beforeCnt = 5 - (4 * 1) = 1;
// --> ans += elements[2];
// ans = 24
// remaining --> [1, 3]

// for 3rd position
// we have 1 remaining except the curr position
// so 1! = 1 for arranging the remaining
// 1 / 1 = 1
// beforeCnt = 1 - (1 * 1) = 0;
// --> ans += elements[1];
// ans = 243
// remaining --> [1]
