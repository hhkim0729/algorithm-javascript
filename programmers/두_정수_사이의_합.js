function solution(a, b) {
  const big = Math.max(a, b);
  const small = Math.min(a, b);
  let result = 0;
  for (let i = small; i <= big; ++i) {
    result += i;
  }
  return result;
}
