function solution(arr) {
  return arr.reduce((result, n) => lcm(result, n), 1);
}

function gcd(a, b) {
  const big = Math.max(a, b);
  const small = Math.min(a, b);
  const rest = big % small;
  return rest === 0 ? small : gcd(small, rest);
}

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}
