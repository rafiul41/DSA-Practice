#include <bits/stdc++.h>

using namespace std;

void merge(vector<int> &A, vector<int> &B) {
  int startInd = A.size();
  int p1 = 0, p2 = 0;
  while(p1 < startInd && p2 < B.size()) {
    if(A[p1] < B[p2]) {
      A.push_back(A[p1]);
      p1++;
    } else {
      A.push_back(B[p2]);
      p2++;
    }
  }
  while(p2 != B.size()) {
    A.push_back(B[p2]);
    p2++;
  }
  while(p1 != startInd) {
    A.push_back(A[p1]);
    p1++;
  }

  p1 = 0, p2 = startInd;
  while(p2 < A.size()) {
    A[p1] = A[p2];
    p1++;p2++;
  }
  int toPop = A.size() - (startInd + B.size());
  for(int i = 0; i < toPop; i++) {
    A.pop_back();
  }
}

int main() {
  vector<int> A{1, 5, 8};
  vector<int> B{6, 9};

  merge(A, B);

  for(auto a: A) {
    cout<<a<<" ";
  }

  return 0;
}