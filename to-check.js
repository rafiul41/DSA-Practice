function isAnyStringMatchRegex(strArr, moduleName) {
  regexStr = `${moduleName}_[a-zA-Z0-9-]*_[a-zA-Z0-9-]*$`;
  let regex = new RegExp(regexStr);
  for(let i = 0; i < strArr.length; i++) {
      if(regex.test(strArr[i])) return true;
  }
  return false;
}

console.log(isAnyStringMatchRegex(['ajaira', 'tax_sdlkfjsa_askdfljasd'], 'tax'));