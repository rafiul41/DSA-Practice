#include <bits/stdc++.h>

using namespace std;

double distanceBetweenCenters(vector<int> &a, vector<int> &b)
{
  double x = a[0] - b[0];
  double y = a[1] - b[1];
  return sqrt(x * x + y * y);
}

bool isIntersecting(vector<int> &a, vector<int> &b, double radius) {
  double dist = distanceBetweenCenters(a, b);
  return dist < 2 * radius;
}

bool isAllIntersecting(vector<vector<int>> &centers, int radius)
{
  for(int i = 0; i < centers.size() - 1; i++) {
    for(int j = 0; j < centers.size(); j++) {
      if(!isIntersecting(centers[i], centers[j], radius)) return false;
    }
  }

  return true;
}

bool check(vector<vector<int>> &centers, int b, int d)
{
  for (int i = 0; i <= centers.size() - b; i++)
  {
    if (isAllIntersecting(centers, i, i + b - 1, d * 2))
      return true;
  }
  return false;
}

int getFirstDay(vector<vector<int>> &centers, int b)
{
  int lo = INT_MAX, hi = INT_MIN, mid;
  for (int i = 0; i < centers.size() - 1; i++)
  {
    for(int j = 0; j < centers.size(); j++) {
      double centerDist = distanceBetweenCenters(centers[i], centers[i + 1]);
      lo = min(lo, (int)floor(centerDist / 2));
      hi = min(hi, (int)ceil(centerDist / 2));
    }
  }

  cout << lo << " " << hi << endl;

  int ans;
  while (lo <= hi)
  {
    mid = lo + (hi - lo) / 2;
    if (check(centers, b, mid))
    {
      ans = mid;
      hi = mid - 1;
    }
    else
    {
      lo = mid + 1;
    }
  }

  return ans;
}

int main()
{
  vector<vector<int>> a;
  // a = {
  //     {8, 5},
  //     {0, 4},
  //     {3, 6}};
  // cout << getFirstDay(a, 3) << endl;

  // a = {
  //     {2, 3},
  //     {9, 4},
  //     {10, 3}};
  // cout << getFirstDay(a, 2) << endl;

  a = {
      {762888, 842056},
      {943296, 205226},
      {528530, 840859},
      {490975, 305681},
      {784949, 795242},
      {364631, 24977},
      {335193, 566499},
      {175628, 435361},
      {394134, 454625},
      {130339, 131963},
      {62547, 401942},
      {101919, 622627},
      {667354, 263679},
      {704772, 951888},
      {183983, 927405},
      {192090, 610510},
      {573528, 118235},
      {156736, 580620},
      {507137, 194840},
      {665701, 508127},
      {26162, 42107}};
  // cout << check(a, 20, 552808) << endl;
  cout << getFirstDay(a, 20) << endl;

  // vector<int> x = {8, 5};
  // vector<int> y = {0, 4};
  // cout<<distanceBetweenCenters(x, y)<<endl;
  return 0;
}