function solution(a, b) {
  return a.reduce((result, n, i) => result + n * b[i], 0);
}
