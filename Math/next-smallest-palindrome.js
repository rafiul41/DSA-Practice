function isPalindrome(str) {
  let p1 = 0,
    p2 = str.length - 1;
  while (p1 < p2) {
    if (str[p1] !== str[p2]) return false;
    p1++;
    p2--;
  }
  return true;
}

function isAll9(str) {
  for (const digit of str) {
    if (digit !== '9') return false;
  }
  return true;
}

function add1FromInd(arr, ind) {
  let p = ind;
  let carry = true;
  while(p >= 0) {
    if(!carry) break;
    if(arr[p] === '9') {
      arr[p] = '0';
    } else {
      arr[p] = (parseInt(arr[p]) + 1).toString();
      carry = false;
    }
    p--;
  }
}

function getNextSmallestPalindrome(str) {
  let ans = '';
  if (isAll9(str)) {
    ans += '1';
    for (let i = 0; i < str.length - 1; i++) {
      ans += '0';
    }
    ans += '1';
    return ans;
  }

  if (str.length === 1) {
    return (parseInt(str) + 1).toString();
  }

  let arr = str.split('');
  let p1 = parseInt(arr.length / 2) - 1;
    let p2 =
      arr.length % 2 === 1
        ? parseInt(arr.length / 2) + 1
        : parseInt(arr.length / 2);

  if (isPalindrome(str)) {
    let mid = parseInt(str.length / 2);
    if (str.length % 2 === 1) {
      if (str[mid] === '9') {
        add1FromInd(arr, p1);
      } else {
        arr[mid] = (parseInt(arr[mid]) + 1).toString();
      }
    } else {
      add1FromInd(arr, p1);
    }
  } else {
    if (str[p1] < str[p2]) {
      if (str.length % 2 === 1) {
        let mid = parseInt(str.length / 2);
        if (str[mid] === '9') {
          arr[p1] = (parseInt(arr[p1]) + 1).toString();
          arr[mid] = '0';
        } else {
          arr[mid] = (parseInt(arr[mid]) + 1).toString();
        }
      } else {
        arr[p1] = (parseInt(arr[p1]) + 1).toString();
      }
    }
  }

  while (p1 >= 0) {
    arr[p2] = arr[p1];
    p1--;
    p2++;
  }

  return arr.join('');
}

console.log(getNextSmallestPalindrome('23545'));
console.log(getNextSmallestPalindrome('45523'));
console.log(getNextSmallestPalindrome('45954'));
console.log(getNextSmallestPalindrome('93952'));
console.log(getNextSmallestPalindrome('99995'));
console.log(getNextSmallestPalindrome('9352'));
console.log(getNextSmallestPalindrome('9995'));
console.log(getNextSmallestPalindrome('1001'));
console.log(getNextSmallestPalindrome('45554'));
console.log(getNextSmallestPalindrome('56494165498476514654984354684651654984352165'));
