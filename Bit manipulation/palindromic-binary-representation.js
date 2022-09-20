function generateBinaryNumbers(len) {
  if(len === 0) {
    return [''];
  }
  let smallerRes = generateBinaryNumbers(len - 1);
  let res = [...smallerRes.map(item => '0' + item), ...smallerRes.map(item => '1' + item)];
  return res;
}

function convertBinToInt(str) {
  let ans = 0, power = 0;
  for(let i = str.length - 1; i >= 0; i--) {
    if(str[i] === '1') {
      ans += Math.pow(2, power);
    } 
    power++;
  }
  return ans;
}

function reverseStr(str) {
  let res = '';
  for(let i = str.length - 1; i >= 0; i--) {
    res += str[i];
  }
  return res;
}

function createPalindrome(str, middle) {
  return '1' + str + middle + reverseStr(str) + '1';
}

function func(x) {
  let firstOnes = [1, 3, 5, 7];
  
  if(x <= firstOnes.length) return firstOnes[x - 1];

  let alreadyGenerated = 4;
  let lenToGenerate = 1;
  let ans;
  while(true) {
    let generated = generateBinaryNumbers(lenToGenerate);

    if(generated.length + alreadyGenerated >= x) {
      let reqInd = x - alreadyGenerated - 1;
      ans = convertBinToInt(createPalindrome(generated[reqInd], ''));
      break;
    }
    alreadyGenerated += generated.length;

    if((generated.length * 2) + alreadyGenerated >= x) {
      let reqInd = x - alreadyGenerated - 1;
      ans = convertBinToInt(createPalindrome(generated[Math.floor(reqInd / 2)], reqInd % 2 === 0 ? '0' : '1'));
      break;
    }
    alreadyGenerated += (generated.length * 2);

    lenToGenerate++;
  }
  return ans;
}

console.log(func(1000));