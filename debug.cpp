#include "bits/stdc++.h"

vector<int> solve(vector<int> &A) {
    int p1 = 0, p2 = A.size() - 1;
    while(p1 < p2) {
      if(A[p1] == 0) {
        p1++;
      } else {
        swap(A[p1], A[p2]);
        p2--;
      }
    }
    return A;
}

int main() {
  vector<int> A {1, 0, 0};
  vector<int> res = solve(A);
  for(int i = 0; i < A.size(); i++) {
    cout<<A[i]<<" ";
  }
  cout<<endl;

  return 0;
}