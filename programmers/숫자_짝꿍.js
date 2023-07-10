function solution(X, Y) {
  const cntX = Array(10).fill(0);
  const cntY = Array(10).fill(0);
  [...X].forEach((n) => ++cntX[n]);
  [...Y].forEach((n) => ++cntY[n]);

  let result = '';
  for (let i = 9; i >= 0; --i) {
    if (cntX[i] === 0 || cntY[i] === 0) continue;
    result += String(i).repeat(Math.min(cntX[i], cntY[i]));
  }

  if (!result) return '-1';
  return result[0] === '0' ? '0' : result;
}
