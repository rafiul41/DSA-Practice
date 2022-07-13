// Is str2 is child if str1
function isChild(str1, str2) {
  for(let i = 0; i < str1.length; i++) {
    let found = true;
    for(let j = 0; j < str2.length; j++) {
      if(str1[i] !== str2[j]) {
        found = false;
        break;
      }
    }
    if(found) return true;
  }
  return false;
}

function getSuperStringLength(strings) {
  const isParent = Array(strings.length).fill(false);
  for(let i = 0; i < strings.length - 1; i++) {
    for(let j = i + 1; j < strings.length; j++) {
      if(!isParent[i]) continue;
      if(isChild(strings[i], strings[j])) {
        isParent[i] = 1;
        isParent[j] = 0;
      }
    }
  }
}