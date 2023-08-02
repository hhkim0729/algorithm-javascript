function solution(brown, yellow) {
  const total = brown + yellow;
  const result = [];
  for (let i = Math.floor(total / 2); i > 2; --i) {
    const share = total / i;
    if ((i - 2) * (share - 2) === yellow) {
      result.push(i, total / i);
      break;
    }
  }
  return result.sort((a, b) => b - a);
}
