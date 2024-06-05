let map = new Map();
map.set('a', 2);
map.set('b', 3);

for(let [a, b] of map) {
  console.log(a, b);
}