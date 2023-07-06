function solution(N, stages) {
  const result = Array(N)
    .fill([])
    .map((e, i) => [i + 1, 0]);
  let len = stages.length;
  stages.forEach((e) => {
    if (e <= N) {
      result[e - 1][1] += 1;
    }
  });
  result.map((e) => {
    const tmp = e[1];
    e[1] /= len;
    len -= tmp;
    return e;
  });
  return result.sort((a, b) => b[1] - a[1]).map((e) => e[0]);
}
