let a = 'cba';
a = a.split('');
a.sort((a, b) => a - b);
a = a.join('');
console.log(a);