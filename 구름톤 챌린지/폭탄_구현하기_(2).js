const readline = require('readline');
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on('line', (line) => {
  input.push(line.trim());
  if (
    input.length ===
    input[0]
      .split(' ')
      .map(Number)
      .reduce((a, n) => a + n, 0) +
      1
  ) {
    rl.close();
  }
});

rl.on('close', () => {
  const [N, K] = input[0].split(' ').map(Number);
  const map = [];
  const bombs = [];
  for (let i = 1; i <= N; ++i) {
    map.push(input[i].split(' '));
  }
  for (let i = 1; i <= K; ++i) {
    bombs.push(input[i + N].split(' ').map(Number));
  }

  // 중앙, 위, 오른, 아래, 왼
  const dy = [0, -1, 0, 1, 0];
  const dx = [0, 0, 1, 0, -1];
  const arr = Array(N)
    .fill(0)
    .map((e) => Array(N).fill(0));
  for (const [y, x] of bombs) {
    for (let i = 0; i < 5; ++i) {
      const ny = y - 1 + dy[i];
      const nx = x - 1 + dx[i];
      if (ny < 0 || ny >= N || nx < 0 || nx >= N) continue;
      if (map[ny][nx] === '#') continue;
      if (map[ny][nx] === '0') arr[ny][nx] += 1;
      if (map[ny][nx] === '@') arr[ny][nx] += 2;
    }
  }

  console.log(Math.max(...arr.flat()));
  process.exit();
});
