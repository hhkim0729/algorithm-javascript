function solution(k, d) {
  let result = 0;
  for (let i = 0; i <= d; i += k) {
    const maxY = Math.trunc(Math.sqrt(d ** 2 - i ** 2));
    result += Math.trunc(maxY / k) + 1;
  }
  return result;
}
