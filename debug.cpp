#include "bits/stdc++.h"

int repeatedNumber(vector<int> &A) {
  for(int i = 0; i < A.size(); i++) {
    if(A[i] == i + 1) { // already in the right place
      continue;
    }
    while(i + 1 != A[i]) {
      int rightPlaceInd = A[i] - 1;
      if(rightPlaceInd + 1 == A[rightPlaceInd]) {
        return A[rightPlaceInd];
      }
      swap(A[i], A[rightPlaceInd]);
    }
  }
  return -1;
}



int main() {
  vector<int> vec{3, 4, 1, 4, 2};
  int res = repeatedNumber(vec);
  cout<<"RES:"<<res<<endl;
  return 0;
}