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

int getRank(string str) {
    int mod = 1000003;

    vector<int> factorial;
    factorial.push_back(1);
    for(int i = 1; i <= str.size(); i++) {
        factorial.push_back((factorial[i - 1] * i) % mod);
    }

    map<char, int> mp;
    map<char, int> :: iterator it;
    for(int i = 0; i < str.size(); i++) {
        mp[str[i]] = mp[str[i]] ? mp[str[i]] + 1 : 1;
    }

    long long denominator = 1;
    for(it = mp.begin(); it != mp.end(); it++) {
        denominator = (denominator * factorial[it->second]) % mod;
    }

    int ans = 0;
    for(int i = 0; i < str.size(); i++) {
        long long remainingCharPermutation = factorial[str.size() - i - 1], toAdd = 0;
        for(it = mp.begin(); it != mp.end() && it->first != str[i]; it++) {
            long long currDenominator = (denominator * modExpo(it->second, mod - 2, mod)) % mod;
            toAdd = (toAdd + (remainingCharPermutation * modExpo(currDenominator, mod - 2, mod)) % mod) % mod;
        }
        ans = (ans + toAdd) % mod;
        denominator = (denominator * modExpo(mp[str[i]], mod - 2, mod)) % mod;
        mp[str[i]]--;
        if(mp[str[i]] == 0) {
            mp.erase(str[i]);
        }
    }

    return ans + 1;
}

int main() {
  cout<<getRank("sadasdsasassasas")<<endl;
  return 0;
}