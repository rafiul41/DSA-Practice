function func(arr, toTake, sum) {
  
}

function getPartition(arr) {
  let sum = arr.reduce((preRes, curr) => preRes + curr, 0);
  let elementsToTake = 0, sumToCreate = 0;
  for(let i = 1; i < arr.length - 1; i++) {
    let toCheck = (sum * i) / arr.length;
    if(toCheck === parseInt(toCheck)) {
      elementsToTake = i;
      sumToCreate = toCheck;
      break;
    }
  }

  return func(arr, elementsToTake, sumToCreate);
}