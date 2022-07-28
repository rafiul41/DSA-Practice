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

function print2DArrFormattedForCPP(arr) {
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

print2DArrFormattedForCPP([
  [762888, 842056],
  [943296, 205226],
  [528530, 840859],
  [490975, 305681],
  [784949, 795242],
  [364631, 24977],
  [335193, 566499],
  [175628, 435361],
  [394134, 454625],
  [130339, 131963],
  [62547, 401942],
  [101919, 622627],
  [667354, 263679],
  [704772, 951888],
  [183983, 927405],
  [192090, 610510],
  [573528, 118235],
  [156736, 580620],
  [507137, 194840],
  [665701, 508127],
  [26162, 42107]
])