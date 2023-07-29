function solution(n) {
  let result = 0;
  let i = 1;
  while (n > 0) {
    if (n % i === 0) ++result;
    n -= i;
    i += 1;
  }
  return result;
}
