/**
 * Finds all the primes from 0 - N
 * @param n - Integer
 * @returns - Array of primes upto N
 */
function sieve(n) {
  const sqrtN = Math.ceil(Math.sqrt(n));
  const sieve = Array(n + 1).fill(1);
  sieve[0] = 0;
  sieve[1] = 0;
  for (let i = 2; i <= sqrtN; i++) {
    if (!sieve[i]) continue;
    for (let j = i * i; j <= n; j += i) {
      sieve[j] = 0;
    }
  }

  let ans = [];
  for (let i = 2; i <= n; i++) {
    if (sieve[i]) ans.push(i);
  }

  return ans;
}

console.log(sieve(15));
