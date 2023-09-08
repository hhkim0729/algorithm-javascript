const readline = require('readline');
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
let N, K, Q;
rl.on('line', (line) => {
  input.push(line.trim());
  [N, K, Q] = input[0].split(' ').map(Number);
  if (input.length === N + Q + 1) {
    rl.close();
  }
});

// 오른 아래 왼 위
const dx = [0, 1, 0, -1];
const dy = [1, 0, -1, 0];

rl.on('close', () => {
  const arr = [];
  const selected = [];
  for (let i = 1; i <= N; ++i) {
    arr.push(input[i].split(''));
  }
  for (let i = N + 1; i <= N + Q; ++i) {
    let [r, c, d] = input[i].split(' ');
    [r, c] = [r, c].map((e) => Number(e) - 1);
    selected.push([r, c, d]);
  }

  for (const [r, c, d] of selected) {
    const visited = Array(N)
      .fill(null)
      .map((_) => Array(N).fill(false));
    arr[r][c] = d;
    for (let i = 0; i < N; ++i) {
      for (let j = 0; j < N; ++j) {
        if (arr[i][j] === '.') continue;
        const connected = [[i, j]];
        const q = [[i, j]];
        visited[i][j] = true;
        while (q.length) {
          const [y, x] = q.shift();
          for (let k = 0; k < 4; ++k) {
            const ny = y + dy[k];
            const nx = x + dx[k];
            if (ny < 0 || ny >= N || nx < 0 || nx >= N) continue;
            if (arr[ny][nx] !== arr[y][x]) continue;
            if (visited[ny][nx]) continue;
            q.push([ny, nx]);
            connected.push([ny, nx]);
            visited[ny][nx] = true;
          }
        }
        if (connected.length < K) continue;
        for (const [y, x] of connected) {
          arr[y][x] = '.';
        }
      }
    }
  }

  for (const line of arr) {
    console.log(line.join(''));
  }
  process.exit();
});
