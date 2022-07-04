const regex = /^[1-9][0-9]*[0-9]$/g;
console.log(regex.test('234'));
console.log(regex.test('+234'));
console.log(regex.test('e234'));
console.log(regex.test('asdfsf2345'));
