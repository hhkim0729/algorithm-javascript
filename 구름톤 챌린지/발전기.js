// Run by Node.js
const readline = require('readline');

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  const input = [];
  for await (const line of rl) {
    input.push(line.trim());
    if (input.length === Number(input[0]) + 1) {
      rl.close();
    }
  }

  const N = Number(input[0]);
  const arr = [];
  for (let i = 1; i <= N; ++i) {
    arr.push(input[i].split(' ').map(Number));
  }
  const visited = Array(N)
    .fill(0)
    .map((e) => Array(N).fill(false));

  // 오른 아래 왼 위
  const dx = [0, 1, 0, -1];
  const dy = [1, 0, -1, 0];

  let result = 0;
  for (let i = 0; i < N; ++i) {
    for (let j = 0; j < N; ++j) {
      if (arr[i][j] !== 1 || visited[i][j]) continue;
      ++result;
      const tmp = [[i, j]];

      while (tmp.length) {
        let [currI, currJ] = tmp.pop();
        visited[currI][currJ] = true;

        for (let k = 0; k < 4; ++k) {
          const ni = currI + dx[k];
          const nj = currJ + dy[k];
          if (ni < 0 || ni >= N || nj < 0 || nj >= N) continue;
          if (arr[ni][nj] !== 1 || visited[ni][nj]) continue;
          tmp.push([ni, nj]);
        }
      }
    }
  }
  console.log(result);
  process.exit();
})();
