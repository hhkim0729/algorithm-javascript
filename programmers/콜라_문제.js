function solution(a, b, n) {
  let result = 0;
  while (n >= a) {
    const rest = n % a;
    n = Math.floor(n / a) * b;
    result += n;
    n = n + rest;
  }
  return result;
}
