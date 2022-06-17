function isDigit(char) {
  if(char >= '0' && char <= '9') return true;
  return false;
}

function reorder(logs) {
  let digitLogs = [], letterLogs = [];
  for(let log of logs) {
    const firstHyphenInd = log.indexOf('-');
    if(isDigit(log.slice(firstHyphenInd + 1, firstHyphenInd + 2))) {
      digitLogs.push(log);
    } else {
      letterLogs.push({
        identifier: log.slice(0, firstHyphenInd),
        content: log.slice(firstHyphenInd + 1, log.length)
      });
    }
  }

  letterLogs.sort((a, b) => {
    if(a.content === b.content) return a.identifier < b.identifier ? 1 : -1;
    return a.content < b.content ? 1 : -1;
  });

  letterLogs = letterLogs.map(log => log.identifier + '-' + log.content);
  return [...letterLogs, ...digitLogs];
}

console.log(isDigit('4'));
console.log(isDigit('a'));
console.log(reorder(["dig1-8-1-5-1", "let1-art-can", "dig2-3-6", "let2-own-kit-dig", "let3-art-zero"]));