#include <bits/stdc++.h>

using namespace std;

struct ListNode {
  int val;
  ListNode* next;
  ListNode(int x): val(x), next(NULL) {}
};

ListNode* listCycle(ListNode* A) {
  ListNode* p1 = A, * p2 = A;
  bool cycleFound = false;
  while (p1 != NULL && p2 != NULL) {
    p1 = p1->next;
    if(p2->next == NULL) break;
    p2 = p2->next->next;
    if (p1 == p2) {
      cycleFound = true;
      break;
    }
  }

  if (!cycleFound) return NULL;

  p1 = A;
  while (p1 != p2) {re
    p1 = p1->next;
    p2 = p2->next;
  }
  return p1;
}

int main() {
  ListNode* head = new ListNode(1);
  head->next = new ListNode(2);
  ListNode *cycleStart = new ListNode(3);
  head->next->next = cycleStart;
  ListNode *cycleEnd = new ListNode(4);
  head->next->next->next = cycleEnd;
  cycleEnd->next = cycleStart;

  ListNode *res = listCycle(head);
  if(res == NULL) {
    cout<<"NULL"<<endl;
  } else {
    cout<<res->val<<endl;
  }

  return 0;
}