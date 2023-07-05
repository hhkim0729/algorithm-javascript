function solution(n) {
  let result = 1;
  const primes = [2];
  for (let i = 3; i <= n; ++i) {
    for (const prime of primes) {
      if (i % prime === 0) break;
      if (prime > Math.sqrt(i)) {
        ++result;
        primes.push(i);
        break;
      }
    }
  }
  return result;
}
