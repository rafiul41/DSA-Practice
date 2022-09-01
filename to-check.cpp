#include <bits/stdc++.h>

using namespace std;

string getMergeResult(string str1, string str2) {
    if (str1 == "") return str2;
    if (str2 == "") return str1;
    if (str1.find(str2) != string::npos) return str1;
    if (str2.find(str1) != string::npos) return str2;
    for (int i = 0; i < str1.length(); i++) {
        int len = str1.length() - i;
        if (str2.length() < len) continue;
        if (str1.substr(i, len) == str2.substr(0, len)) {
            return str1.substr(0, i) + str1.substr(i, len) + str2.substr(len, str2.length() - len);
        }
    }
    return str1 + str2;
}

string func(int mask, int lastInd, vector<string>& arr, unordered_map<string, string> &memo) {
    string key = to_string(mask) + "/" + to_string(lastInd);
    if(memo.find(key) != memo.end()) return memo[key];
    if (__builtin_popcount(mask) == arr.size()) return memo[key] = "";
    int minLen = 2000;
    string minStr = "";
    for (int i = 0; i < arr.size(); i++) {
        bool isBitOn = mask & (1 << i);
        if (!isBitOn) {
            string res = getMergeResult(arr[i], func(mask | (1 << i), i, arr, memo));
            if (res.length() < minLen) {
                minStr = res;
                minLen = res.length();
            }
        }
    }
    return memo[key] = minStr;
}

int getShortestCommonSuperString(vector<string>& arr) {
    unordered_map<string, string> mp;
    return func(0, -1, arr, mp).length();
}

int main() {
    vector<string> vec{"cpsklryvmcpjnbpbwllsrehfmxrkecwitrsglrexvtjmxypunbqfgxmuvgfajclfvenhyuhuorjosamibdnjdb", "yhkbsombltouujdrbwcrrcgbflqpottpegrwvgajcrgwdlpgitydvhedtusippyvxsuvbvfenodqasajoyomgsqcpjlhbm", "ahyviuemkssdsldebesnnngpesdntrrvysuipywatpfoelthrowhfexlwdysvspwlkfblfdfultbwpiqhiymmyal", "yeasvxggfitknygyvjxnspubqjppjbrlhugesmmxwjjlkrmgbnwvftyveolprfdcajiuywtvgfjrwwaakwyprxnxpypj", "tlhfteetxbafkrejsfvrenlebjtccgjvrsdowiixlidxdiixpervseavnwypdinwdrlacvanhelkovked", "axgctwysocddagwnjbkjorpceeyokeskcanvyornrustephpqtbhlrkrxlgjpavrcjpbyhosfimlavbtqcdevpw", "bfgshcmlofmpmektoyfquimnnqujgrgkymfjrsuixixmoihdhoveajsnanyihgsiuyrotnwtxwgmhprqhpvhyqwbgv", "pefxagqqcgovenfsvummecklebihjhtylcalksfnytlfjqafoosssfhwhrfsybsldsyonecmantkhtrvkmqdsxdaqksrlnfpi", "evlikoxebfasdkguoyurbncvgpklfuslrhvevujwcjpiwxfnwafxojwwyhkheesxlpdjmmiqxxywwekvhpwvbtsbdd", "hjdgwujijxqbxpcvojgkqyjoadjdgonobrwxmghwgaaepeagnhtggduihgmpvaewrbwhjggphiuymwibecjmhhvqnkhlk", "kfpiobquradoaplkssmdhvkfnapumdiwiahwcbtvbykdoxnkscpbycgmcyhqcrqksxjubfqdedisdwfwyuaawi", "chvsjojvjkhelmwqqcamhyrexpgbopnqwmmjdvfmgpqucpltrlibmagnrooheeaeqmntlugtkyopobliotkcvspojgxo", "xucnixyffssgkixlvicpuglpxaaeaoryjtottnbbitiseggaqlrmrecsgcyhsqicmwxhmaiwvsqdbyfskxffejxkmytfqck", "biopixnhsgkufpnqnuvrevfsuyynelthtkxfinmetyyboorflpyplgljimwmxstretyojnsdmtfeiyjt", "kmdtamcmmokfkelhedqrvwfselddwauhmyboldbxtlghrrovufqtexmijrmgrjpgituuwvutjbbcvpaswqocqdmavyinlyu", "spqromnxpocngdhevvinaupvwbjiagcuwvolidlarqoytvfrtnhtkarhbepdkuxhqmubpjbiarjvponkexgoxbybfoeplc"};
    cout<<getShortestCommonSuperString(vec)<<endl;
    return 0;
}