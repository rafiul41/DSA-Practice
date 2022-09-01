//
function isMatch(str, regex, ind1 = 0, ind2 = 0) {
  if (ind1 >= str.length && ind2 >= regex.length) return 1;
  if (ind1 >= str.length) {
    if(ind2 + 1 < regex.length && regex[ind2 + 1] === '*') {
      return isMatch(str, regex, ind1, ind2 + 2);
    }
  }
  if(ind2 + 1 < regex.length && regex[ind2 + 1] === '*') {
    let op1 = 0, op2 = 0, op3 = 0;
    // Take none
    op1 = isMatch(str, regex, ind1, ind2 + 2);
    if(regex[ind2] === '.' || regex[ind2] === str[ind1]) {
      // Take one
      op2 = isMatch(str, regex, ind1 + 1, ind2);
      // Take one as last
      op3 = isMatch(str, regex, ind1 + 1, ind2 + 2);
    }
    return op1 || op2 || op3;
  }
  if(regex[ind2] === '.' || regex[ind2] === str[ind1]) return isMatch(str, regex, ind1 + 1, ind2 + 1);
  return 0;
}

// console.log(isMatch('', 'c*'));

const a = 'f rjv  r brynrstbitjztbxlmhexbnimcbjxmbud wtzg';

console.log(a.split(' '));