function getTabs(tabCnt) {
  let res = '';
  for(let i = 0; i < tabCnt; i++) {
    res += '\t';
  }
  return res;
}

function getStrings(jsonStr) {
  let tabCnt = 0;
  let currLine = '';
  let ans = [];
  let openingBraces = ['{', '['];
  let closingBraces = ['}', ']'];
  for(let i = 0; i < jsonStr.length; i++) {
    let char = jsonStr[i];
    if(char === ' ') continue;
    if(char === ',') {
      currLine += ',';
      ans.push(currLine);
      currLine = '';
    } else if(openingBraces.includes(char)) {
      if(currLine !== '') {
        ans.push(currLine);
        currLine = '';
      }
      currLine += getTabs(tabCnt) + char;
      ans.push(currLine);
      currLine = '';
      tabCnt++;
    } else if(closingBraces.includes(char)) {
      if(currLine !== '') {
        ans.push(currLine);
        currLine = '';
      }
      tabCnt--;
      if(i + 1 < jsonStr.length &&  jsonStr[i + 1] === ',') {
        currLine += getTabs(tabCnt) + `${char},`;
        i++;
      } else {
        currLine += getTabs(tabCnt) + char;
      }
      ans.push(currLine);
      currLine = '';
    } else {
      if(currLine === '') {
        currLine += getTabs(tabCnt);
      }
      currLine += char;
    }
  }

  return ans;
}

let res = getStrings('["foo",{"bar":["baz",{"a":"hello"},{"a":"hello"},["a","hello"],["a","hello"],1.0,2]}]');
for(let z of res) {
  console.log(z);
}