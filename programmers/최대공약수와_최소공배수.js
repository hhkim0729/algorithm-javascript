function getGcd(a, b) {
  const r = a % b;
  return r === 0 ? b : getGcd(b, r);
}

function solution(n, m) {
  const gcd = n > m ? getGcd(n, m) : getGcd(m, n);
  return [gcd, (n * m) / gcd];
}
