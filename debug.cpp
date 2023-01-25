#include <bits/stdc++.h>

using namespace std;

vector<int> getSortedList(vector<int> A, vector<int> B, vector<int> C) {
  set<int> s, s1, s2, s3;
  for(int i = 0; i < A.size(); i++) {
    s1.insert(A[i]);
    s.insert(A[i]);
  }
  for(int i = 0; i < B.size(); i++) {
    s2.insert(B[i]);
    s.insert(B[i]);
  }
  for(int i = 0; i < C.size(); i++) {
    s3.insert(C[i]);
    s.insert(C[i]);
  }

  set<int>:: iterator it;
  vector<int> ans;
  for(it = s.begin(); it != s.end(); it++) {
    int toCheck = *it;
    if((s1.find(toCheck) != s1.end() && s2.find(toCheck) != s2.end())
      || (s2.find(toCheck) != s2.end() && s3.find(toCheck) != s3.end())
      || (s1.find(toCheck) != s1.end() && s3.find(toCheck) != s3.end())
    ) {
      ans.push_back(toCheck);
    }
  }
  return ans;
}

int main() {
  vector<int> A{1, 2, 3};
  vector<int> B{1, 2, 3};
  vector<int> C{1, 2, 3};

  getSortedList(A, B, C);
  return 0;
}