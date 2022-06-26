// buckets:
// > 0 - 0.5 --> a
// > 0.5 - 1 --> b
// > 1 - 2 --> c

// So, we need min1A, min2A, max1A, max2A, min1B, min2B, min3B, minC

function check(a, b, c) {
  const sum = a + b + c;
  if(sum > 1 && sum < 2) {
    console.log(a, b, c);
    return 1
  };
  return 0;
}

function func(arr) {
  let min1A = Number.MAX_SAFE_INTEGER,
  min2A = Number.MAX_SAFE_INTEGER,
  max1A = Number.MIN_SAFE_INTEGER,
  max2A = Number.MIN_SAFE_INTEGER,
  max3A = Number.MIN_SAFE_INTEGER,
  min1B = Number.MAX_SAFE_INTEGER,
  min2B = Number.MAX_SAFE_INTEGER,
  min3B = Number.MAX_SAFE_INTEGER,
  minC = Number.MAX_SAFE_INTEGER;
  for(numb of arr) {
    numb = parseFloat(numb);
    if(numb > 0 && numb <= 0.5) {
      if(numb < min1A) {
        min2A = min1A;
        min1A = numb;
      } else if(numb < min2A) {
        min2A = numb;
      }

      if(numb > max1A) {
        max3A = max2A;
        max2A = max1A;
        max1A = numb;
      } else if(numb > max2A) {
        max3A = max2A;
        max2A = numb;
      } else if(numb > max3A) {
        max3A = numb;
      }
    } else if(numb > 0.5 && numb <= 1) {
      if(numb < min1B) {
        min3B = min2B;
        min2B = min1B;
        min1B = numb
      } else if(numb < min2B) {
        min3B = min2B;
        min2B = numb;
      } else if(numb < min3B) {
        min3B = numb;
      }
    } else if(numb > 1 && numb < 2) {
      if(numb < minC) {
        minC = numb;
      }
    }
  }

  // 1 < some combination of numbers from 3 buckets < 2
  // possible valid cases:
  // 3a 0b 0c --> max1A + max2A + max3A
  // 2a 1b 0c --> min1A + max1A + min1B
  // 2a 0b 1c --> min1A + min2A + minC 
  // 1a 2b 0c --> min1A + min1B + min2B
  // 1a 1b 1c --> min1A + min1B + minC
  // 0a 3b 0c --> min1B + min2B + min3B
  if(check(max1A, max2A, min1B) || check(min1A, min2A, minC)
    || check(min1A, min1B, min2B) || check(min1A, min1B, minC) || check(min1B, min2B, min3B) 
    || check(max1A, max2A, max3A)) {
      return 1;
    }
    return 0;
}

console.log(func(["0.300400", "0.699024", "1.130923", "1.908004", "1.191785", "1.275082", "2.436019", "2.339270", "2.295899", "1.037831", "2.448136", "2.108191", "1.379916", "2.189966", "1.308584"]));