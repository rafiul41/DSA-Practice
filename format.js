function print2DArrFormatted(arr) {
  let str = arr.length.toString() + ' ' + arr[0].length.toString() + ' ';
  for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j < arr[i].length; j++) {
      str += arr[i][j].toString();
      str += ' ';
    }
  }

  console.log(str);
}

function print2DArrFormattedSorted(arr) {
  arr.sort((a, b) => a[1] - b[1]);
  let str = '';
  for(let i = 0; i < arr.length; i++) {
    str += '[';
    for(let j = 0; j < arr[i].length; j++) {
      if(j !== 0) str += ', ';
      str += arr[i][j].toString();
    }
    str += '],\n';
  }

  console.log(str);
}

function print2DArrFormattedForCPPCode(arr) {
  let str = '';
  for(let i = 0; i < arr.length; i++) {
    str += '{';
    for(let j = 0; j < arr[i].length; j++) {
      if(j !== 0) str += ', ';
      str += arr[i][j].toString();
    }
    str += '},\n';
  }

  console.log(str);
}

function print2DArrFormattedForIntBit(arr) {
  let str = `${arr.length} ${arr[0].length}`;
  for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j < arr[i].length; j++) {
      str += ' ';
      str += arr[i][j].toString();
    }
  }

  console.log(str);
}

print2DArrFormattedForIntBit([
  [1, 3, 5],
[3, 6, 9],
[2, 6, 9]
])

// print2DArrFormattedForCPPCode([
//   [2, 3],
//   [9, 4],
//   [10, 3]
// ])