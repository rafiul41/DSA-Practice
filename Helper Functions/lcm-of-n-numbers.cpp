#include<bits/stdc++.h>

using namespace std;

int modExpo(int b, int p, int m) {
  long long res = 1, mult = b;
  while(p) {
    if(p & 1) res = (res * mult) % m;
    p /= 2;
    mult = (mult * mult) % m;
  }
  return res;
}

vector<int> primeUptoN(int n) {
  vector<bool> sieve(n + 1, true);
  int upto = sqrt(n);
  sieve[0] = false;
  sieve[1] = false;
  for (int i = 2; i <= upto; i++) {
    if (!sieve[i]) continue;
    for (int j = i * i; j <= n; j += i) {
      sieve[j] = false;
    }
  }

  vector<int> primes;
  for (int i = 0; i <= n; i++) {
    if (sieve[i]) primes.push_back(i);
  }
  return primes;
}

int lcmOfAllNumbers(vector<int> numbers, int mod) {
  int maxNumb = numbers[0];
  for (int i = 1; i < numbers.size(); i++) {
    maxNumb = max(maxNumb, numbers[i]);
  }
  int upto = sqrt(maxNumb);
  vector<int> primes = primeUptoN(upto);
  unordered_map<int, int> numbPowerMap;
  for (auto numb : numbers) {
    int sqRoot = sqrt(numb);
    for (int i = 0; i < primes.size() && primes[i] <= sqRoot; i++) {
      if (numb % primes[i] != 0) continue;
      int power = 0;
      while (numb % primes[i] == 0) {
        numb /= primes[i];
        power++;
      }
      if (numbPowerMap.find(primes[i]) == numbPowerMap.end()) {
        numbPowerMap[primes[i]] = power;
      } else {
        numbPowerMap[primes[i]] = max(numbPowerMap[primes[i]], power);
      }
    }
    if (numb > 1) {
      if (numbPowerMap.find(numb) == numbPowerMap.end()) {
        numbPowerMap[numb] = 1;
      }
    }
  }
  long long res = 1;
  for(auto it : numbPowerMap) {
    res *= modExpo(it.first, it.second, mod);
    res %= mod;
  }
  return res;
}

int main() {
  vector<int> numbers{ 7, 1, 6, 8 };
  cout << lcmOfAllNumbers(numbers, 1e9 + 7) << endl;
  return 0;
}