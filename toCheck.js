const arr = Array(2).fill(Array(2).fill(0));

arr[0][1] = 1;
arr[1][0] = 2;
arr[1][1] = 3;

console.log(arr[1][1]);