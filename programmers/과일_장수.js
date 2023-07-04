function solution(k, m, score) {
  let result = 0;
  score.sort((a, b) => b - a);
  for (let i = 0; i + m <= score.length; i += m) {
    result += Math.min(...score.slice(i, i + m)) * m;
  }
  return result;
}
