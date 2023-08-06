function solution(n) {
  let result = 1;
  while (n !== 1) {
    if (n % 2) {
      --n;
      ++result;
    }
    n /= 2;
  }
  return result;
}
