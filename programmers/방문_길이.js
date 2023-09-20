function solution(dirs) {
  const dir = {
    U: [1, 0],
    D: [-1, 0],
    R: [0, 1],
    L: [0, -1],
  };
  const obj = {};

  let result = 0;
  let [y, x] = [0, 0];
  for (const d of dirs) {
    const ny = y + dir[d][0];
    const nx = x + dir[d][1];
    if (ny < -5 || ny > 5 || nx < -5 || nx > 5) continue;
    const [curr, next] = [[y, x].join(''), [ny, nx].join('')];
    if (!obj[curr]) obj[curr] = new Set();
    if (!obj[next]) obj[next] = new Set();
    if (!obj[curr].has(next)) {
      ++result;
      obj[curr].add(next);
      obj[next].add(curr);
    }
    [y, x] = [ny, nx];
  }
  return result;
}
