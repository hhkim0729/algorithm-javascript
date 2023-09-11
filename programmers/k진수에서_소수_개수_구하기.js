function solution(n, k) {
  return Array.from(n.toString(k).split('0'))
    .filter((e) => e)
    .map(Number)
    .filter(isPrime).length;
}

function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); ++i) {
    if (n % i === 0) return false;
  }
  return true;
}
