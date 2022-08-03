#include <bits/stdc++.h>

using namespace std;

double eps = 1e-8;

struct Point {
  double x, y;
  Point() {}
  Point(double a, double b) {
    x = a; y = b;
  }
};

struct Circle {
  Point center;
  double R;
  Circle(Point a, double z) {
    R = z;
    center = a;
  }
};

struct Line {
  double a, b, c;
  Line(double x, double y, double z) {
    a = x; b = y; c = z;
  }
  Line(Point p1, Point p2) {
    a = p1.y - p2.y;
    b = p2.x - p1.x;
    c = p1.x * p2.y - p2.x * p1.y;
  }
};

Line getPerpendicularFromLineAndPoint(Line l, Point p) {
  double a = l.b;
  double b = l.a;
  b *= -1;
  double c = -(a * p.x + b * p.y);
  return Line(a, b, c);
}

pair<double, double> getQuadraticSolution(double a, double b, double c) {
  double x1 = (-b + sqrt(b * b - 4 * a * c)) / (2 * a);
  double x2 = (-b - sqrt(b * b - 4 * a * c)) / (2 * a);
  return make_pair(x1, x2);
}

double distanceBetweenPoints(Point a, Point b) {
  return sqrt((a.x - b.x) * (a.x - b.x) + (a.y - b.y) * (a.y - b.y));
}

double sqr(double numb) {
  return numb * numb;
}

pair<Point, Point> getCircleLineIntersectionPoints(Circle circle, Line l) {
  double h = circle.center.x, k = circle.center.y, r = circle.R, a = l.a, b = l.b, c = l.c, A, B, C;
  double toAdd = sqr(h) + sqr(k) - sqr(r);
  if(b == 0) {
    A = 1;
    B = -2 * k;
    C = sqr(c) / sqr(a) + (2 * c * h) / a + toAdd;
    pair<double, double> res = getQuadraticSolution(A, B, C);
    double x = -c / a;
    return make_pair(Point(x, res.first), Point(x, res.second));
  }
  A = a == 0 ? 1 : 1 + sqr(a) / sqr(b);
  B = a == 0 ? -2 * h : ((2 * c * a) / sqr(b)) + ((2 * a * k) / b) - 2 * h;
  C = sqr(c) / sqr(b) + (2 * c * k) / b + toAdd;
  pair<double, double> res = getQuadraticSolution(A, B, C);
  double y1 = (-a * res.first - c) / b;
  double y2 = (-a * res.second - c) / b;
  return make_pair(Point(res.first, y1), Point(res.second, y2));
}

Point getMidPoint(Point p1, Point p2) {
  return Point((p1.x + p2.x) / 2, (p1.y + p2.y) / 2);
}

vector<Point> getCandidatePoints(vector<Point>& centers, int b, double radius) {
  vector<Point> res;
  for (int i = 0; i < centers.size() - 1; i++) {
    for (int j = i + 1; j < centers.size(); j++) {
      double dist = distanceBetweenPoints(centers[i], centers[j]);
      double toCheck = radius * 2;
      if (dist == toCheck) {
        res.push_back(getMidPoint(centers[i], centers[j]));
      } else if (dist < toCheck) {
        Line centerToCenter = Line(centers[i], centers[j]);
        Point midPoint = getMidPoint(centers[i], centers[j]);
        Line perpendicular = getPerpendicularFromLineAndPoint(centerToCenter, midPoint);
        pair<Point, Point> intersections = getCircleLineIntersectionPoints(Circle(centers[i], radius), perpendicular);
        res.push_back(intersections.first);
        res.push_back(intersections.second);
      }
    }
  }
  return res;
}

bool check(vector<Point>& centers, int b, double radius) {
  vector<Point> candidatePoints = getCandidatePoints(centers, b, radius);
  for (int i = 0; i < candidatePoints.size(); i++) {
    int overlapping = 0;
    for (int j = 0; j < centers.size(); j++) {
      double dist = distanceBetweenPoints(candidatePoints[i], centers[j]);
      if (dist <= radius + eps) {
        overlapping++;
      }
      if (overlapping >= b) return true;
    }
  }
  return false;
}

int getFirstDay(vector<vector<int>>& centers, int b) {
  int lo = 0, hi = 1e9, mid;
  vector<Point> centerPoints;
  for (int i = 0; i < centers.size(); i++) {
    centerPoints.push_back(Point(centers[i][0], centers[i][1]));
  }

  int ans;
  while (lo <= hi) {
    mid = lo + (hi - lo) / 2;
    if (check(centerPoints, b, mid)) {
      ans = mid;
      hi = mid - 1;
    } else {
      lo = mid + 1;
    }
  }

  return ans;
}
// 530494
int main() {
  vector<vector<int>> a;
  // // a = {
  // //     {8, 5},
  // //     {0, 4},
  // //     {3, 6}};
  // // cout << getFirstDay(a, 3) << endl;

  // // a = {
  // //     {2, 3},
  // //     {9, 4},
  // //     {10, 3}};
  // // cout << getFirstDay(a, 2) << endl;

  a = {
      {791530, 322003},
{860113, 930951},
{153886, 850448},
{831994, 464072}};
  cout << getFirstDay(a, 2) << endl;

  // vector<int> x = {8, 5};
  // vector<int> y = {0, 4};
  // cout<<distanceBetweenCenters(x, y)<<endl;

  // pair<Point, Point> res = getCircleLineIntersectionPoints(Circle(Point(-4, -1), sqrt(101)), Line(1, -1, 4));
  // cout<<res.first.x<<endl;
  // cout<<res.first.y<<endl;
  // cout<<res.second.x<<endl;
  // cout<<res.second.y<<endl;
  return 0;
}