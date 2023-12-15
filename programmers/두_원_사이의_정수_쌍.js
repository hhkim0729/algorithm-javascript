function solution(r1, r2) {
  let result = 0;
  for (let i = 1; i <= r2; ++i) {
    let maxY = Math.floor(Math.sqrt(r2 ** 2 - i ** 2));
    let minY = i >= r1 ? 0 : Math.ceil(Math.sqrt(r1 ** 2 - i ** 2));
    result += maxY - minY + 1;
  }
  return result * 4;
}
