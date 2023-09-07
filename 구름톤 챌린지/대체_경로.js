const readline = require('readline');
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
let N, M, S, E;
rl.on('line', (line) => {
  input.push(line.split(' ').map(Number));
  [N, M, S, E] = input[0];
  if (input.length === M + 1) {
    rl.close();
  }
});

rl.on('close', () => {
  const obj = {};
  for (let i = 1; i <= M; ++i) {
    const [u, v] = input[i];
    if (!obj[u]) obj[u] = [];
    if (!obj[v]) obj[v] = [];
    obj[u].push(v);
    obj[v].push(u);
  }

  for (let i = 1; i <= N; ++i) {
    if ([S, E].includes(i)) {
      console.log(-1);
      continue;
    }
    const visited = Array(N + 1).fill(Infinity);
    const q = [S];
    visited[S] = 1;
    while (q.length) {
      const curr = q.shift();
      if (!obj[curr]) continue;
      for (const next of obj[curr]) {
        if (next === i) continue;
        if (visited[next] <= visited[curr] + 1) continue;
        visited[next] = visited[curr] + 1;
        if (next === E) break;
        q.push(next);
      }
    }
    console.log(visited[E] === Infinity ? -1 : visited[E]);
  }

  process.exit();
});
