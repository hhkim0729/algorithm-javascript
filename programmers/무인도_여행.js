function solution(maps) {
  const result = [];
  maps = maps.map((e) => [...e]);
  const [h, w] = [maps.length, maps[0].length];
  const visited = Array(h)
    .fill(0)
    .map((_) => Array(w).fill(false));
  const DIR = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ]; // 오른 아래 왼 위
  for (let i = 0; i < h; ++i) {
    for (let j = 0; j < w; ++j) {
      if (visited[i][j] || maps[i][j] === 'X') continue;
      const q = [[i, j]];
      let cnt = 0;
      while (q.length) {
        const [y, x] = q.pop();
        visited[y][x] = true;
        cnt += Number(maps[y][x]);
        for (let k = 0; k < 4; ++k) {
          const ny = y + DIR[k][0];
          const nx = x + DIR[k][1];
          if (ny < 0 || ny >= h || nx < 0 || nx >= w) continue;
          if (visited[ny][nx] || maps[ny][nx] === 'X') continue;
          q.push([ny, nx]);
          visited[ny][nx] = true;
        }
      }
      result.push(cnt);
    }
  }
  return result.length ? result.sort((a, b) => a - b) : [-1];
}
