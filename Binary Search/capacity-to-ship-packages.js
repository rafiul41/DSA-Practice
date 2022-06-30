// find the max and min possible
function canDeliverWithinGivenDays(shipWeight, dayCnt, weights) {
  let daysNeeded = 0, currWeight = 0;
  for(let weight of weights) {
    if(currWeight + weight <= shipWeight) {
      currWeight += weight;
    } else {
      currWeight = 0;
      daysNeeded++;
    }
  }
  if(currWeight > 0) daysNeeded++;

  return daysNeeded <= dayCnt;
}

function getShipCapacity(weights, dayCnt) {
  let min = weights[0], max = 0;
  for(let weight of weights) {
    min = Math.min(weight, min);
    max += weight;
  }

  let shipWeight, ans = -1;
  while(min < max) {
    shipWeight = parseInt((max + min) / 2);
    if(canDeliverWithinGivenDays(shipWeight, dayCnt, weights)) {
      max = shipWeight - 1;
      ans = shipWeight;
    } else {
      min = shipWeight + 1;
    }
  }

  return ans;
}

console.log(getShipCapacity([16, 2, 11, 4, 18, 17, 17, 8, 8, 6, 7, 9, 17, 20, 10, 5, 2, 11, 3], 10));