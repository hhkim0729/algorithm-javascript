function solution(land) {
  const len = land.length;
  for (let i = 1; i < len; ++i) {
    for (let j = 0; j < 4; ++j) {
      const curr = land[i][j];
      let tmp = 0;
      for (let k = 0; k < 4; ++k) {
        if (k === j) continue;
        tmp = Math.max(tmp, curr + land[i - 1][k]);
      }
      land[i][j] = tmp;
    }
  }
  return Math.max(...land.at(-1));
}
