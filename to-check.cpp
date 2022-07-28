#include <bits/stdc++.h>

using namespace std;

vector<int> func(int A, long B) {
    vector<long long> factorials;
    factorials.push_back(1);
    for(int i = 1; i <= 20; i++) {
        factorials.push_back(factorials[i - 1] * i);
    }
    set<int> s;
    set<int> :: iterator it;
    for(int i = 1; i <= A; i++) {
        s.insert(i);
    }
    
    long long currB = B;
    vector<int> ans;
    int toPush;
    for(int i = 0; i < A - 1; i++) {
        long long prevPermutations = (A - i - 1) <= 20 ? factorials[A - i - 1] : LLONG_MAX;
        for(it = s.begin(); it != s.end(); it++) {
            if(currB <= prevPermutations) {
                toPush = *(it);
                ans.push_back(toPush);
                s.erase(toPush);
                break;
            }
            currB -= prevPermutations;
        }   
    }
    ans.push_back(*(s.begin()));
    
    return ans;
}

int main() {
  double a = 3.4;
  int b = 3;
  cout<< (a > b) <<endl;
  return 0;
}