function simplifyDirectoryPath(unixPath) {
  let splits = unixPath.split('/').filter(item => item.length > 0);
  let stack = [];
  for(let i = 0; i < splits.length; i++) {
    if(splits[i] === '.') {
      continue;
    }
    if(splits[i] === '..') {
      if(stack.length !== 0) {
        stack.pop();
      }
      continue;
    }
    stack.push(splits[i]);
  }

  if(stack.length === 0) return '/';

  let ans = '';
  for(let i = 0; i < stack.length; i++) {
    ans += `/${stack[i]}`
  }
  return ans;
}

console.log(simplifyDirectoryPath('/home//foo/'));