#include <bits/stdc++.h>

using namespace std;

struct RandomListNode {
	int label;
	RandomListNode* next, * random;
	RandomListNode(int x): label(x), next(NULL), random(NULL) {}
};

RandomListNode* func(RandomListNode *head) {
	RandomListNode* curr = head;
	while(curr != NULL) {
		RandomListNode *node = new RandomListNode(curr->label);
		RandomListNode *tmp = curr->next;
		curr->next = node;
		node->next = tmp;
		curr = tmp;
	}
	
	curr = head;
	while(curr != NULL) {
		curr->next->random = curr->random->next;
		curr = curr->next->next;
	}

	RandomListNode *ans = head->next;
	curr = ans;
	while(curr->next != NULL) {
		curr->next = curr->next->next;
		curr = curr->next;
	}

	return ans;
}

int main() {
	RandomListNode* one = new RandomListNode(1);
	RandomListNode* two = new RandomListNode(2);
	RandomListNode* three = new RandomListNode(3);

	one->next = two;
	two->next = three;
	
	one->random = three;
	two->random = one;
	three->random = one;

	// RandomListNode *ans = func(one);

	cout<<"end"<<endl;

vector<int> A{3, 2, 1, 4, 1};

	unordered_set<int> s;
	int ans = 1;
	for(int i = 0; i < A.size(); i++) {
			if(s.find(A[i]) != s.end()) {
					s.clear();
					ans++;
			}
			s.insert(A[i]);
	}

	cout<<ans<<endl;

	return 0;
}