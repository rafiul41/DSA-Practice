#include <bits/stdc++.h>

using namespace std;

int getInd(const vector<int> &arr, int toSearch, bool isFirstInd) {
  int lo = 0, hi = arr.size() - 1, mid, ans = -1;
  while(lo <= hi) {
    mid = (lo + hi) / 2;
    if(arr[mid] == toSearch) {
      ans = mid;
      if(isFirstInd) {
        hi = mid - 1;
      } else {
        lo = mid + 1;
      }
    } else if(arr[mid] > toSearch) {
      hi = mid - 1;
    } else {
      lo = mid + 1;
    }
  }
  return ans;
}

int getFoundCnt(const vector<int> &arr, int toSearch) {
  int lastInd = getInd(arr, toSearch, true);
  if(lastInd == -1) return 0;
  return getInd(arr, toSearch, false) - lastInd + 1;
}

int getLessThanElementCnt(const vector<int> &arr, int key) {
  int lo = 0, hi = arr.size() - 1, mid, ans = -1;
  while(lo <= hi) {
    mid = (lo + hi) / 2;
    if(arr[mid] < key) {
      lo = mid + 1;
      ans = mid;
    } else {
      hi = mid - 1;
    }
  }
  return ans + 1;
}

// 0 based indexing
// For a number to be nth element the following conditions must be met
// must have at least n elements on the left --> leftElementsCnt <= n
// leftElementsCnt + foundCnt >= n + 1
int getNthElementAfterMerge(const vector<int> &arr1, const vector<int> &arr2, int n) {
  int lo = INT_MAX, hi = INT_MIN, mid;
  if(arr1.size() > 0) {
    lo = min(lo, arr1[0]);
    hi = max(hi, arr1[arr1.size() - 1]);
  }
  if(arr2.size() > 0) {
    lo = min(lo, arr2[0]);
    hi = max(hi, arr2[arr2.size() - 1]);
  }
  while(lo <= hi) {
    mid = lo + (hi - lo) / 2;
    int leftElementCnt = getLessThanElementCnt(arr1, mid) + getLessThanElementCnt(arr2, mid);
    int foundCnt = getFoundCnt(arr1, mid) + getFoundCnt(arr2, mid);
    if(leftElementCnt <= n && leftElementCnt + foundCnt >= n + 1) {
      return mid;
    } else if(leftElementCnt + foundCnt <= n) {
      lo = mid + 1;
    } else {
      hi = mid - 1;
    }
  }
  return -1;
}

double getMedian(const vector<int> &arr1, const vector<int> &arr2) {
  int m = arr1.size(), n = arr2.size();
  int total = m + n;
  if(total % 2 == 1) {
    return getNthElementAfterMerge(arr1, arr2, total / 2);
  } else {
    int firstElement = getNthElementAfterMerge(arr1, arr2, total / 2 - 1);
    int secondElement = getNthElementAfterMerge(arr1, arr2, total / 2);
    return (firstElement + secondElement) / 2.0;
  }
}

int main() {
  vector<int> arr1{};
  vector<int> arr2{5};
  cout<<getMedian(arr1, arr2)<<endl;
  return 0;
}