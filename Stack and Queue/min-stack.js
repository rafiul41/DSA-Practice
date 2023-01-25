function solve() { 
  this.stack = [];
  this.minStack = [];
}; 
solve.prototype.push = function (e) { 
  this.stack.push(e);
  if(this.minStack[this.minStack.length - 1] < e) {
    this.minStack.push(this.minStack[this.minStack.length - 1]);
  } else {
    this.minStack.push(e);
  }
}; 
solve.prototype.pop = function () { 
  this.minStack.pop();
  this.stack.pop();
}; 
solve.prototype.top = function () {
  if(this.minStack.length === 0) return -1;
  return this.stack[this.stack.length - 1];
}; 
solve.prototype.getMin = function () { 
  if(this.minStack.length === 0) return -1;
  return this.minStack[this.minStack.length - 1];
}; 

let minStack = new solve();
minStack.push(10);
minStack.push(9);
console.log(minStack.getMin());
minStack.pop();
minStack.pop();
minStack.pop();
console.log(minStack.getMin());