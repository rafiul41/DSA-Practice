let map = new Map();
map.set('a', 2);
map.set('b', 3);

let arr: string[] = ['a', 'b', 'c'];

for(let [a, b] of map) {
  console.log(a, b);
}

console.log('Hello world');
