#include <bits/stdc++.h>

using namespace std;

long long modExpo(int b, int p, int m) {
  long long res = 1, mult = b;
  while(p) {
    if(p & 1) res = (res * mult) % m;
    p /= 2;
    mult = (mult * mult) % m;
  }
  return res;
}

int main() {
  cout<<modExpo(2, 3, 10000)<<endl;
  cout<<modExpo(3, 4, 10000)<<endl;
  cout<<modExpo(2, 5, 10000)<<endl;
  cout<<modExpo(2, 1000003 - 2, 1000003)<<endl;
  return 0;
}