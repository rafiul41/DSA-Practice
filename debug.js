let a = 'cba';
a = a.split('');
a.sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0));
a = a.join('');
console.log(a);