let words, charCnt;

function getWordsInLineAndNextPointer(start) {
  let curr = start;
  let wordsToSelect = [];
  let charTaken = 0;
  let wordsLengthCnt = 0;
  while (curr < words.length) {
    if (words[curr].length + (curr === start ? 0 : 1) + charTaken <= charCnt) {
      wordsToSelect.push(words[curr]);
      wordsLengthCnt += words[curr].length;
      charTaken += words[curr].length + (curr === start ? 0 : 1);
      curr++;
    } else {
      break;
    }
  }
  return {
    wordsLengthCnt,
    selectedWords: wordsToSelect,
    next: curr
  };
}

function getSpaceConfig(slots, spaces) {
  return {
    min: slots === 0 ? spaces : Math.floor(spaces / slots),
    extraSpaceSlotCnt: slots === 0 ? 0 : spaces % slots
  };
}

function getSpaces(cnt) {
  let res = '';
  for (let i = 0; i < cnt; i++) {
    res += ' ';
  }
  return res;
}

function createLineFromWords(selectedWords, wordsLengthCnt, isLastLine) {
  let spaceConfig;
  if (isLastLine) {
    spaceConfig = {
      min: 1,
      extraSpaceSlotCnt: 0
    };
  } else {
    spaceConfig = getSpaceConfig(
      selectedWords.length - 1,
      charCnt - wordsLengthCnt
    );
  }
  let res = selectedWords[0];
  let curr = 1;
  for (let i = 0; i < spaceConfig.extraSpaceSlotCnt; i++) {
    res += getSpaces(spaceConfig.min + 1);
    res += selectedWords[curr];
    curr++;
  }
  while (curr < selectedWords.length) {
    res += getSpaces(spaceConfig.min);
    res += selectedWords[curr];
    curr++;
  }
  if(charCnt - res.length > 0) {
    res += getSpaces(charCnt - res.length);
  }

  return res;
}

function getJustifiedText(givenWords, cnt) {
  words = givenWords;
  charCnt = cnt;
  let curr = 0;
  let ans = [];
  while (curr < words.length) {
    let info = getWordsInLineAndNextPointer(curr);
    let wordsToInsertInLine = info.selectedWords;
    ans.push(
      createLineFromWords(
        wordsToInsertInLine,
        info.wordsLengthCnt,
        info.next === words.length
      )
    );
    curr = info.next;
  }

  return ans;
}

console.log(
  getJustifiedText(['am', 'fasgoprn', 'lvqsrjylg', 'rzuslwan', 'xlaui'], 14)
);

// console.log(
//   getJustifiedText(["This", "is", "an", "example", "of", "text", "justification."], 14)
// );