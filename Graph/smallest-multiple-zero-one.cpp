#include <bits/stdc++.h>

using namespace std;

struct TreeNode {
  int val;
  TreeNode* left;
  TreeNode* right;
  TreeNode(int x): val(x), left(NULL), right(NULL) {}
};

struct ListNode {
  int val;
  ListNode* next;
  ListNode(int x): val(x), next(NULL) {}
};

TreeNode* createTree(int start, int end, vector<int> &vec) {
  if(start > end) return NULL;
  if(start == end) {
    TreeNode *z = new TreeNode(vec[start]);
    return z;
  }
  int mid = (end - start) / 2;
  TreeNode *root = new TreeNode(vec[mid]);
  root->left = createTree(start, mid - 1, vec);
  root->right = createTree(mid + 1, end, vec);
  return root;
}

TreeNode* func(ListNode* head) {
  ListNode* curr = head;
  vector<int> vec;
  while (curr != NULL) {
    vec.push_back(curr->val);
    curr = curr->next;
  }

  return createTree(0, (int)vec.size() - 1, vec);
}

int main() {
  ListNode *head = new ListNode(1);
  head->next = new ListNode(2);
  TreeNode* ans =  func(head);
  cout<<"ajaira"<<endl;
  return 0;
}