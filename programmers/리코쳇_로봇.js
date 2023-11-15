function solution(board) {
  const [r, c] = [board.length, board[0].length];
  const dy = [-1, 0, 1, 0]; // 위 오른 아래 왼
  const dx = [0, 1, 0, -1];

  const q = [];
  for (let i = 0; i < r; ++i) {
    for (let j = 0; j < c; ++j) {
      if (board[i][j] === 'R') {
        q.push([i, j, 0]);
        break;
      }
    }
    if (q.length) break;
  }

  const visited = Array(r)
    .fill(0)
    .map(() => Array(c).fill(false));
  while (q.length) {
    const [y, x, cnt] = q.shift();
    if (board[y][x] === 'G') return cnt;
    visited[y][x] = true;
    for (let i = 0; i < 4; ++i) {
      let ny = y;
      let nx = x;
      while (true) {
        const nny = ny + dy[i];
        const nnx = nx + dx[i];
        if (
          nny < 0 ||
          nny >= r ||
          nnx < 0 ||
          nnx >= c ||
          board[nny][nnx] === 'D'
        )
          break;
        ny = nny;
        nx = nnx;
      }
      if (ny === y && nx === x) continue;
      if (visited[ny][nx]) continue;
      q.push([ny, nx, cnt + 1]);
    }
  }
  return -1;
}
