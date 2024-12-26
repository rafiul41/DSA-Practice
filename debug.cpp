#include "required_headers.h"

using namespace std;
struct Interval {
  int start;
  int end;
  int ind;
  int overlaps;
  Interval(int a, int b, int c) {
    start = a;
    end = b;
    ind = c;
    overlaps = 0;
  }
};

bool CmpByStart(const Interval a, const Interval b) {
  if (a.start == b.start) return a.end < b.end;
  return a.start < b.start;
}

bool CmpByInd(const Interval a, const Interval b) { return a.ind < b.ind; }

// This will give the hightest ind less than the given end
// start is less than the given point
int binarySearchForEndInd(int point, vector<Interval> intervals) {
  int lo = 0, hi = intervals.size() - 1;
  int ans = lo;
  while (lo <= hi) {
    int mid = floor((lo + hi) / 2);
    if (intervals[mid].start <= point) {
      ans = mid;
      lo = mid + 1;
    } else {
      hi = mid - 1;
    }
  }
  return ans;
}

int binarySearchForStartInd(int point, vector<Interval> intervals) {
  int lo = 0, hi = intervals.size() - 1;
  int ans = lo;
  while (lo <= hi) {
    int mid = floor((lo + hi) / 2);
    if (intervals[mid].end >= point) {
      ans = mid;
      hi = mid - 1;
    } else {
      lo = mid + 1;
    }
  }
  return ans;
}

vector<int> countIntersections(vector<int> startsAt, vector<int> endsAt) {
  // make vector of intervals using ind, start and end
  // sort the intervals with respect to start and then end
  // for each interval figure out the number of overlaps using binary search
  // sort the intervals again using ind
  // store the overlaps in a vector and return
  vector<Interval> intervals;
  for (int i = 0; i < startsAt.size(); i++) {
    intervals.push_back(Interval(startsAt[i], endsAt[i], i));
  }

  sort(intervals.begin(), intervals.end(), CmpByStart);

  for (int i = 0; i < intervals.size(); i++) {
    int end = binarySearchForEndInd(intervals[i].end, intervals);
    int start = binarySearchForStartInd(intervals[i].start, intervals);
    if (end >= start) {
      intervals[i].overlaps = end - start + 1;
    }
  }

  sort(intervals.begin(), intervals.end(), CmpByInd);

  vector<int> ans;
  for (int i = 0; i < intervals.size(); i++) {
    ans.push_back(intervals[i].overlaps);
  }
  return ans;
}

int main() {
  cout << "INSIDE MAIN" << endl;
  vector<int> vec{1, 5, 2, 5, 6, 1};
  sort(vec.begin(), vec.end());
  for(auto x: vec) {
    cout<<x<<" ";
  }
  cout<<endl;
  return 0;
}
