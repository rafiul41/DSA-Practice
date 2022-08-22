#include <bits/stdc++.h>

using namespace std;

int getRecurringSubstringLength(string x) {
    if(x.length() == 1) {
        return 1;
    }
    char charToMatch = x[0];
    int possibleSubStringLength = 1;
    for(int i = 1; i < x.length(); i++) {
        if(x[i] == charToMatch) {
            possibleSubStringLength = i;
            break;
        }
    }

    if(x.length() % possibleSubStringLength != 0) {
        return x.length();
    }

    for(int i = 0; i < possibleSubStringLength; i++) {
        for(int j = i + possibleSubStringLength; j < x.length(); j += possibleSubStringLength) {
            if(x[i] != x[j]) {
                return x.length();
            }
        }
    }

    return possibleSubStringLength;
}

vector<int> getReqLengths(vector<string> &A) {
    vector<int> lengths;
    
    for(int i = 0; i < A.size(); i++) {
        lengths.push_back(getRecurringSubstringLength(A[i]));
    }
    
    return lengths;
}

int getSingleValueOfN(int length) {
    int ans;
    long long valueToCheck, i = 1;
    while(1) {
        valueToCheck = i * (i + 1);
        valueToCheck /= 2;
        if(valueToCheck % length == 0) {
            ans = i;
            break;
        }
        i++;
    }
    return ans;
}

vector<int> getValuesOfN(vector<int> &reqLengths) {
    vector<int> timeValues;
    for(int i = 0; i < reqLengths.size(); i++) {
        timeValues.push_back(getSingleValueOfN(reqLengths[i]));
    }
    return timeValues;
}

int lcmOfTimeValues(vector<int> timeValues) {
    int upto = timeValues[0];
    for(int i = 1; i < timeValues.size(); i++) {
        upto = max(upto, timeValues[i]);
    }

    int currFactor = 2, mod = 1000000007;
    long long res = 1;

    while(currFactor <= upto) {
        vector<int> indices;
        for(int i = 0; i < timeValues.size(); i++) {
            if(timeValues[i] % currFactor == 0) {
                indices.push_back(i);
            }
        }

        if(indices.size() > 1) {
            for(int i = 0; i < indices.size(); i++) {
                timeValues[indices[i]] =  timeValues[indices[i]] / currFactor;
            }
            res = (res * currFactor) % mod;
        } else {
            currFactor++;
        }
    }

    for(int i = 0; i < timeValues.size(); i++) {
        res = (res * timeValues[i]) % mod;
    }

    return res;
}

int main() {
    cout<<INT_MAX<<" "<<INT_MIN<<endl;

    return 0;
}