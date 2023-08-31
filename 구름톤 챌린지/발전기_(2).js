const readline = require('readline');
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
let N, K;
rl.on('line', (line) => {
  input.push(line.trim());
  [N, K] = input[0].split(' ').map(Number);
  if (input.length === N + 1) {
    rl.close();
  }
});

// 오른 아래 왼 위
const dx = [0, 1, 0, -1];
const dy = [1, 0, -1, 0];

rl.on('close', () => {
  const arr = [];
  for (let i = 1; i <= N; ++i) {
    arr.push(input[i].split(' ').map(Number));
  }
  const visited = Array(N)
    .fill(0)
    .map((e) => Array(N).fill(false));
  const result = {};

  for (let i = 0; i < N; ++i) {
    for (let j = 0; j < N; ++j) {
      if (visited[i][j]) continue;
      const type = arr[i][j];
      const q = [[i, j]];
      let count = 1;

      while (q.length) {
        const [currI, currJ] = q.pop();
        visited[currI][currJ] = true;
        for (let k = 0; k < 4; ++k) {
          const ni = currI + dx[k];
          const nj = currJ + dy[k];
          if (ni < 0 || ni >= N || nj < 0 || nj >= N) continue;
          if (arr[ni][nj] !== type || visited[ni][nj]) continue;
          visited[ni][nj] = true;
          q.push([ni, nj]);
          ++count;
        }
      }
      if (count >= K) {
        result[type] = (result[type] || 0) + 1;
      }
    }
  }

  const sorted = Object.entries(result).sort(
    (a, b) => b[1] - a[1] || b[0] - a[0]
  );
  console.log(sorted[0][0]);
  process.exit();
});
