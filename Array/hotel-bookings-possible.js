function getIfPossible(arrivals, departures, roomCnt) {
  const info = [];
  for(let i = 0; i < arrivals.length; i++) {
    info.push({action: 'a', day: arrivals[i]});
    info.push({action: 'd', day: departures[i]});
  }

  info.sort((a, b) => {
    if(a.day === b.day) {
      if(a.action === 'a') return -1;
      return 1;
    }
    return a.day - b.day;
  });

  let guestCnt = 0;
  for(let i = 0; i < info.length; i++) {
    if(info[i].action === 'a') {
      guestCnt++;
      if(guestCnt > roomCnt) return 0;
    } else {
      guestCnt--;
    }
  }

  return 1;
}

console.log(
  getIfPossible(
    [
      40, 18
    ],
    [
      40, 43
    ],
    1
  )
);
