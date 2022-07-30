#include <bits/stdc++.h>

using namespace std;

int getNumberOfElements(vector<int> &vec, int numb, bool isLessOrEqual) {
  int lo = 0, hi = vec[vec.size() - 1], mid, ans = 0;
  while(lo <= hi) {
    mid = (lo + hi) / 2;
    if(isLessOrEqual) {
      if(vec[mid] <= numb) {
        ans = mid;
        lo = mid + 1;
      } else {
        hi = mid - 1;
      }
    } else {
      if(vec[mid] < numb) {
        ans = mid;
        lo = mid + 1;
      } else {
        hi = mid - 1;
      }
    } 
  }

  return ans + 1;
}

// 0 based
int getNthVal(vector<int> &vec1, vector<int> &vec2, int n) {

}

int getMedian(vector<int> &vec1, vector<int> &vec2) {
  int len = vec1.size() + vec2.size();
  if(len % 2 == 0) {
    
  } else {
    int nthVal = getNthVal(vec1, vec2, );
    if(nthVal == -1) {
      nthVal = getNthVal(vec2, vec1);
    }
    return nthVal;
  }
}

int main() {

  return 0;
}