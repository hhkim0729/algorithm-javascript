// 오른 아래 왼 위
const dy = [0, 1, 0, -1];
const dx = [1, 0, -1, 0];

function solution(maps) {
  const [n, m] = [maps.length, maps[0].length];
  const visited = Array(n)
    .fill(null)
    .map((_) => Array(m).fill(0));
  const q = [[0, 0]];
  visited[0][0] = 1;
  while (q.length) {
    const [y, x] = q.shift();
    if (y === n - 1 && x === m - 1) return visited[y][x];
    for (let i = 0; i < 4; ++i) {
      const [ny, nx] = [y + dy[i], x + dx[i]];
      if (ny < 0 || ny >= n || nx < 0 || nx >= m) continue;
      if (!maps[ny][nx] || visited[ny][nx]) continue;
      visited[ny][nx] = visited[y][x] + 1;
      q.push([ny, nx]);
    }
  }
  return -1;
}
