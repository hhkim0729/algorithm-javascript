const readline = require('readline');
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
let N, M;
rl.on('line', (line) => {
  input.push(line.split(' ').map(Number));
  [N, M] = input[0];
  if (input.length === M + 1) {
    rl.close();
  }
});

rl.on('close', () => {
  const obj = {};
  const matrix = Array(N + 1)
    .fill(0)
    .map((_) => Array(N + 1).fill(false));
  for (let i = 1; i <= M; ++i) {
    const [s, e] = input[i];
    if (!obj[s]) obj[s] = [];
    obj[s].push(e);
    matrix[s][e] = true;
  }

  const visited = Array(N + 1).fill(0);
  let result = 1; // 현재 연합 번호
  for (let i = 1; i <= N; ++i) {
    if (visited[i]) continue; // 이미 연합에 속해 있으면 넘어가기
    const q = [i]; // 탐색 후보 큐
    while (q.length) {
      const curr = q.shift();
      visited[curr] = result;
      if (!obj[curr]) continue; // 연결된 섬이 없으면 넘어가기
      for (const next of obj[curr]) {
        if (!obj[next]) continue; // 연결된 섬이 없으면 넘어가기
        if (!matrix[next][curr] || visited[next]) continue; // 쌍방 연결이 아니거나 이미 연합에 속해 있으면 넘거가기
        q.push(next);
      }
    }
    ++result;
  }

  console.log(result - 1);
  process.exit();
});
